(function () {
  const grid = document.getElementById("tile-grid");

  if (!Array.isArray(PLAYLISTS) || PLAYLISTS.length === 0) {
    grid.innerHTML = '<p class="empty-state">No playlists configured yet. Add one in js/config.js.</p>';
    return;
  }

  PLAYLISTS.forEach((playlist) => {
  const tile = document.createElement("a");
  tile.className = "cassette-tile";
  tile.href = `playlist.html?id=${encodeURIComponent(playlist.id)}`;
  tile.style.setProperty("--label", playlist.theme.accent);

  tile.innerHTML = `
    <div class="cassette-body">
      <span class="cassette-screw tl"></span>
      <span class="cassette-screw tr"></span>
      <span class="cassette-screw bl"></span>
      <span class="cassette-screw br"></span>
      <div class="cassette-label">
        <span class="mood-name">${escapeHtml(playlist.title)}</span>
        <span class="mood-tagline">${escapeHtml(playlist.tagline)}</span>
      </div>
      <div class="cassette-window">
        <div class="cassette-reel"></div>
        <div class="cassette-reel"></div>
      </div>
    </div>
    <span class="cassette-count">${playlist.songs.length} songs</span>
  `;

  grid.appendChild(tile);
});

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  return renderTile();
  
})();
