/**
 * PLAYLISTS is the single config file the whole site reads from.
 *
 * To add a new mood tile: add a new object to this array.
 * To add/remove songs from a mood: edit that playlist's `songs` array.
 *
 * theme.pattern accepts: "dots" | "stripes" | "waves" | "grain"
 * (patterns are drawn in CSS — see base.css .pattern-* classes)
 *
 * Each song's `youtubeId` is the 11-character id from a YouTube URL,
 * e.g. https://www.youtube.com/watch?v=XXXXXXXXXXX -> "XXXXXXXXXXX"
 * Replace the placeholder ids below with real ones before going live.
 */
const PLAYLISTS = [
  {
    id: "highway-raat",
    title: "Highway Raat",
    tagline: "Dhaba stops, empty roads, headlights till sunrise",
    theme: {
      from: "#0d1321",
      to: "#1c2541",
      accent: "#f4a259",
      pattern: "dots"
    },
    songs: [
      { title: "Tum Mile", artist: "KK", youtubeId: "6rvUyBiBtik" },
      { title: "Har Ek Pal", artist: "KK", youtubeId: "REPLACE_ID_02" },
      { title: "Zinda", artist: "Siddharth Mahadevan", youtubeId: "REPLACE_ID_03" },
      { title: "Kun Faya Kun", artist: "A.R. Rahman", youtubeId: "REPLACE_ID_04" }
    ]
  },
  {
    id: "saloon-classics",
    title: "Saloon Classics",
    tagline: "The tape that never stops behind the barber's chair",
    theme: {
      from: "#3a1c12",
      to: "#6b2f1a",
      accent: "#e7b455",
      pattern: "stripes"
    },
    songs: [
      { title: "Yeh Dosti", artist: "Kishore Kumar & Manna Dey", youtubeId: "REPLACE_ID_05" },
      { title: "Mere Sapno Ki Rani", artist: "Kishore Kumar", youtubeId: "REPLACE_ID_06" },
      { title: "Roop Tera Mastana", artist: "Kishore Kumar", youtubeId: "REPLACE_ID_07" },
      { title: "Chura Liya Hai Tumne", artist: "Asha Bhosle & Mohammed Rafi", youtubeId: "REPLACE_ID_08" }
    ]
  },
  {
    id: "dard-90s",
    title: "90s Dard",
    tagline: "Rain on the window, one song on repeat",
    theme: {
      from: "#1a1025",
      to: "#3a1f4d",
      accent: "#c98bd6",
      pattern: "waves"
    },
    songs: [
      { title: "Tujhe Dekha To", artist: "Kumar Sanu & Lata Mangeshkar", youtubeId: "REPLACE_ID_09" },
      { title: "Pehla Nasha", artist: "Udit Narayan & Sadhana Sargam", youtubeId: "REPLACE_ID_10" },
      { title: "Chura Ke Dil Mera", artist: "Kumar Sanu & Alka Yagnik", youtubeId: "REPLACE_ID_11" },
      { title: "Aap Ke Aa Jane Se", artist: "Kumar Sanu & Sadhana Sargam", youtubeId: "REPLACE_ID_12" }
    ]
  },
  {
    id: "shaadi-sunday",
    title: "Shaadi & Sunday",
    tagline: "Marigolds, mehendi, lazy Sunday brunches",
    theme: {
      from: "#3d1220",
      to: "#7a1f3d",
      accent: "#ffd166",
      pattern: "grain"
    },
    songs: [
      { title: "Mehndi Laga Ke Rakhna", artist: "Udit Narayan & Lata Mangeshkar", youtubeId: "REPLACE_ID_13" },
      { title: "Bole Chudiyan", artist: "Amit Kumar & Alka Yagnik", youtubeId: "REPLACE_ID_14" },
      { title: "Chunari Chunari", artist: "Sonu Nigam & Alka Yagnik", youtubeId: "REPLACE_ID_15" },
      { title: "Dulhe Ka Sehra", artist: "Sonu Nigam", youtubeId: "REPLACE_ID_16" }
    ]
  }
];