(function () {
  const params = new URLSearchParams(window.location.search);
  const playlistId = params.get("id");
  const playlist = PLAYLISTS.find((p) => p.id === playlistId);

  const moodNameEl = document.getElementById("mood-name");
  const moodTaglineEl = document.getElementById("mood-tagline");
  const tracklistEl = document.getElementById("tracklist");
  const playerBar = document.getElementById("player-bar");
  const nowPlayingTitle = document.getElementById("now-playing-title");
  const playBtn = document.getElementById("play-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = -1;
  let ytPlayer = null;
  let isPlaying = false;

  if (!playlist) {
    moodNameEl.textContent = "Playlist not found";
    moodTaglineEl.textContent = "";
    tracklistEl.outerHTML = '<p class="empty-state">That mood doesn\'t exist. Head back and pick another one.</p>';
    return;
  }

  applyTheme(playlist);
  renderHero(playlist);
  renderTracklist(playlist);

  playBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", () => playIndex(currentIndex - 1));
  nextBtn.addEventListener("click", () => playIndex(currentIndex + 1));

  // Called automatically by the YouTube IFrame API script once it loads.
  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player("yt-audio-frame", {
      height: "1",
      width: "1",
      playerVars: { playsinline: 1 },
      events: {
        onReady: () => {
          playBtn.disabled = false;
        },
        onStateChange: onPlayerStateChange
      }
    });
  };

  function applyTheme(pl) {
    const body = document.getElementById("playlist-body");
    body.style.background = `linear-gradient(180deg, ${pl.theme.from}, ${pl.theme.to} 60%, var(--color-bg) 100%)`;
    body.classList.add(`pattern-${pl.theme.pattern}`);
    document.documentElement.style.setProperty("--color-gold", pl.theme.accent);
  }

  function renderHero(pl) {
    document.title = `${pl.title} — Deluxe Saloon`;
    moodNameEl.textContent = pl.title;
    moodTaglineEl.textContent = pl.tagline;
  }

  function renderTracklist(pl) {
    tracklistEl.innerHTML = "";
    pl.songs.forEach((song, index) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "track";
      btn.dataset.index = String(index);
      btn.innerHTML = `
        <span class="track-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="track-meta">
          <span class="track-title">${escapeHtml(song.title)}</span>
          <span class="track-artist">${escapeHtml(song.artist || "")}</span>
        </span>
        <span class="track-icon" aria-hidden="true">&#9654;</span>
      `;
      btn.addEventListener("click", () => playIndex(index));
      li.appendChild(btn);
      tracklistEl.appendChild(li);
    });
  }

  function playIndex(index) {
    const songs = playlist.songs;
    if (index < 0 || index >= songs.length || !ytPlayer) return;

    currentIndex = index;
    const song = songs[index];

    ytPlayer.loadVideoById(song.youtubeId);
    updateNowPlaying(song);
    highlightTrack(index);
    playerBar.hidden = false;
  }

  function togglePlay() {
    if (!ytPlayer) return;

    if (currentIndex === -1) {
      playIndex(0);
      return;
    }

    if (isPlaying) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      isPlaying = true;
      playBtn.innerHTML = "&#10073;&#10073;";
      playBtn.setAttribute("aria-label", "Pause");
    } else if (event.data === YT.PlayerState.PAUSED) {
      isPlaying = false;
      playBtn.innerHTML = "&#9654;";
      playBtn.setAttribute("aria-label", "Play");
    } else if (event.data === YT.PlayerState.ENDED) {
      playIndex(currentIndex + 1 < playlist.songs.length ? currentIndex + 1 : 0);
    }
  }

  function updateNowPlaying(song) {
    nowPlayingTitle.textContent = `${song.title} — ${song.artist || ""}`;
  }

  function highlightTrack(index) {
    document.querySelectorAll(".track").forEach((el) => {
      el.classList.toggle("is-playing", Number(el.dataset.index) === index);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();