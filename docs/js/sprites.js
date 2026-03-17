// =============================================================================
// FOOD MAP INGREDIENT SPRITES
// 16x16 pixel art sprites in the style of classic 16-bit RPG item icons
// Each character in the pixel rows maps to a color in SPRITE_PALETTE
// =============================================================================

window.SPRITE_PALETTE = {
  '.': null,           // transparent
  'k': '#1a1a2e',      // dark outline
  'r': '#c0392b',      // red
  'R': '#e74c3c',      // bright red
  'P': '#ff8a80',      // pink/light red
  'o': '#e67e22',      // orange
  'O': '#f39c12',      // amber/gold
  'y': '#f1c40f',      // yellow
  'Y': '#fff59d',      // light yellow
  'g': '#27ae60',      // green
  'G': '#2ecc71',      // bright green
  'L': '#a5d6a7',      // light green
  'b': '#5d4037',      // brown
  'B': '#795548',      // medium brown
  'n': '#d2b48c',      // tan
  'N': '#f5deb3',      // wheat/beige
  'w': '#ffffff',      // white
  'W': '#ecf0f1',      // off-white
  'd': '#555555',      // dark gray
  'e': '#999999',      // gray
  'E': '#bdc3c7',      // light gray
  'a': '#2980b9',      // blue
  'A': '#87ceeb',      // light blue
  'p': '#8e44ad',      // purple
  'c': '#c0392b',      // crimson
  'S': '#ff69b4',      // hot pink
  'T': '#cd853f',      // peru/light brown
};

window.SPRITE_DATA = {

  // =========================================================================
  // PEPPERS / HEAT
  // =========================================================================

  chili: {
    name: "Chili Pepper",
    category: "produce",
    pixels: [
      '......kkk.......',
      '.....kggk.......',
      '.....kgk........',
      '......k.........',
      '.....kRk........',
      '....kRRk........',
      '...kRRRk........',
      '...kRRrk........',
      '..kRRrk.........',
      '..kRrrk.........',
      '..kRrrk.........',
      '.kRrrk..........',
      '.krrk...........',
      '.krrk...........',
      '..kk............',
      '................',
    ]
  },

  dried_chili: {
    name: "Dried Chili",
    category: "spice",
    pixels: [
      '......kkk.......',
      '.....kbbk.......',
      '.....kbk........',
      '......k.........',
      '.....krk........',
      '....krrk........',
      '...krbkk........',
      '...krbk.........',
      '..krbkk.........',
      '..krbk..........',
      '..kbrk..........',
      '.kbrkk..........',
      '.kbrk...........',
      '.kbk............',
      '..k.............',
      '................',
    ]
  },

  peppercorn: {
    name: "Peppercorn",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kk.........',
      '....kddk..kk....',
      '....kddkkddkk...',
      '....kkkkddddk...',
      '...kddkkkkddk...',
      '..kdddkkddkkk...',
      '..kdddk.kddk....',
      '...kkk..kkkk....',
      '...kddkk........',
      '..kddddk........',
      '...kkkk.........',
      '................',
      '................',
    ]
  },

  sichuan_pepper: {
    name: "Sichuan Pepper",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kk.........',
      '....krbk.kk.....',
      '...krrBkkrbk....',
      '...krBbkkrBk....',
      '....kkk.kkkk....',
      '...kk..krbk.....',
      '..krbkkrBbk.....',
      '..krBbkkkkk.....',
      '..kkkkk.........',
      '...krbk.........',
      '...kBbk.........',
      '....kk..........',
      '................',
    ]
  },

  // =========================================================================
  // ALLIUMS
  // =========================================================================

  garlic: {
    name: "Garlic",
    category: "aromatic",
    pixels: [
      '................',
      '......kk........',
      '.....kWk........',
      '.....kWk........',
      '....kkWkk.......',
      '...kWwWwWk......',
      '..kWwWkWwWk.....',
      '..kwWk.kWwk.....',
      '.kwWWk.kWWwk....',
      '.kwWk...kWwk....',
      '.kwWk...kWwk....',
      '.kwWWk.kWWwk....',
      '..kWWWWWWWk.....',
      '...kWWWWWk......',
      '....kkkkk.......',
      '................',
    ]
  },

  ginger: {
    name: "Ginger",
    category: "aromatic",
    pixels: [
      '................',
      '................',
      '................',
      '....kkkkk.......',
      '...knTTnk.......',
      '..kTnTTnTkk.....',
      '..kTnnTnTnk.....',
      '..kkknTnTTk.....',
      '....kTnTnkk.....',
      '...kTnTnTk......',
      '..knTnTnk.......',
      '..kTnTTnk.......',
      '..knnTnTk.......',
      '...kkkkkk.......',
      '................',
      '................',
    ]
  },

  onion: {
    name: "Onion",
    category: "aromatic",
    pixels: [
      '................',
      '......kk........',
      '.....knk........',
      '.....knk........',
      '....kOnkk.......',
      '...kOOOnOk......',
      '..kOOnOOnOk.....',
      '.kOOnOOOOnOk....',
      '.kOnOOOnOOnk....',
      '.kOnOOnOOnOk....',
      '.kOOnOOOOnOk....',
      '.kOOnOOnOnOk....',
      '..kOnOOnOOk.....',
      '...kOOOnOk......',
      '....kkkkk.......',
      '................',
    ]
  },

  shallot: {
    name: "Shallot",
    category: "aromatic",
    pixels: [
      '................',
      '.......kk.......',
      '......knk.......',
      '......knk.......',
      '.....kpnk.......',
      '....kpprpk......',
      '....kprppk......',
      '...kprpprk......',
      '...kpprrpk......',
      '...kprpprk......',
      '...kpprpk.......',
      '...kprppk.......',
      '....kprk........',
      '....kkpk........',
      '.....kk.........',
      '................',
    ]
  },

  scallion: {
    name: "Scallion",
    category: "aromatic",
    pixels: [
      '...kk...........',
      '..kGGk..........',
      '..kGgk..........',
      '..kgGk..........',
      '..kGgk..........',
      '..kgGk..........',
      '..kGgk..........',
      '..kgGk..........',
      '..kGgk..........',
      '..kGgk..........',
      '..kLgk..........',
      '..kWLk..........',
      '..kWwk..........',
      '..kwWk..........',
      '..kWwk..........',
      '...kk...........',
    ]
  },

  // =========================================================================
  // AROMATICS / LEAVES
  // =========================================================================

  lemongrass: {
    name: "Lemongrass",
    category: "aromatic",
    pixels: [
      '..kk............',
      '..kLk...........',
      '..kLk...........',
      '..kYLk..........',
      '..kLYk..........',
      '..kYLk..........',
      '..kLYk..........',
      '...kYk..........',
      '...kYk..........',
      '...kNk..........',
      '...kNk..........',
      '...kNk..........',
      '...kNk..........',
      '...kNk..........',
      '...kWk..........',
      '....k...........',
    ]
  },

  galangal: {
    name: "Galangal",
    category: "aromatic",
    pixels: [
      '................',
      '................',
      '................',
      '....kkkk........',
      '...kPnPnk.......',
      '..kPnPnPnkk.....',
      '..knPnPnPnk.....',
      '..kkkPnPnPk.....',
      '....knPnPkk.....',
      '...kPnPnPk......',
      '..knPnPnk.......',
      '..kPnPnPk.......',
      '..knPnPnk.......',
      '...kkkkkk.......',
      '................',
      '................',
    ]
  },

  kaffir_lime: {
    name: "Kaffir Lime Leaf",
    category: "aromatic",
    pixels: [
      '................',
      '................',
      '.....kgkk.......',
      '....kgGgGk......',
      '...kgGgGgGk.....',
      '...kGgGgGgk.....',
      '....kgGgGk......',
      '.....kkgk.......',
      '....kgkk........',
      '...kGgGgk.......',
      '..kgGgGgGk......',
      '..kGgGgGgk......',
      '...kgGgGk.......',
      '....kgGk........',
      '.....kk.........',
      '................',
    ]
  },

  pandan: {
    name: "Pandan Leaf",
    category: "aromatic",
    pixels: [
      '..kk............',
      '.kGGk...........',
      '.kGgk...........',
      '.kgGk...........',
      '.kGgGk..........',
      '.kgGgk..........',
      '..kGgk..........',
      '..kgGk..........',
      '..kGgGk.........',
      '..kgGgk.........',
      '...kGgk.........',
      '...kgGk.........',
      '...kGgGk........',
      '....kgGk........',
      '....kGk.........',
      '.....k..........',
    ]
  },

  curry_leaf: {
    name: "Curry Leaf",
    category: "aromatic",
    pixels: [
      '................',
      '....kgk.........',
      '...kgGk.........',
      '..kgGgk.k.......',
      '..kkgk.kgk......',
      '...kgk.kGgk.....',
      '..kGgkkgGk......',
      '..kgGkkkk.......',
      '...kkgk.........',
      '...kgGgk........',
      '..kgGk.kgk......',
      '..kGgk.kGgk.....',
      '..kkk...kkk.....',
      '...kgk..........',
      '...kgk..........',
      '....k...........',
    ]
  },

  bay_leaf: {
    name: "Bay Leaf",
    category: "herb",
    pixels: [
      '................',
      '......k.........',
      '.....kgk........',
      '....kggk........',
      '...kgggk........',
      '..kggggk........',
      '.kggTggk........',
      '.kgTgggk........',
      '.kggTggk........',
      '.kgggTgk........',
      '.kggTgk.........',
      '..kgTgk.........',
      '..kggk..........',
      '...kgk..........',
      '....k...........',
      '................',
    ]
  },

  // =========================================================================
  // HERBS
  // =========================================================================

  basil: {
    name: "Basil",
    category: "herb",
    pixels: [
      '................',
      '......kk........',
      '.....kGGk.......',
      '....kGGGGk......',
      '...kGgGGgGk.....',
      '..kGgGkkGgGk....',
      '..kGGk..kGGk....',
      '...kk.kk.kk.....',
      '....kGGGGk......',
      '...kGgGGgGk.....',
      '..kGgGGGgGk.....',
      '..kGGGkGGGk.....',
      '...kkk.kkkk.....',
      '.....kgk........',
      '.....kgk........',
      '......k.........',
    ]
  },

  cilantro: {
    name: "Cilantro",
    category: "herb",
    pixels: [
      '................',
      '..kLk...kLk.....',
      '.kLLLk.kLLLk....',
      '.kLLLkkLLLk.....',
      '..kkLLLLkk......',
      '....kLLk........',
      '..kLkkLLk.......',
      '.kLLLkkLLLk.....',
      '.kLLLk.kLLLk....',
      '..kkk...kkk.....',
      '....kLk.........',
      '.....kk.........',
      '.....kgk........',
      '.....kgk........',
      '......k.........',
      '................',
    ]
  },

  mint: {
    name: "Mint",
    category: "herb",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...kGGGGGk......',
      '..kGGgGGgGk.....',
      '..kGgGGGgGk.....',
      '.kGGgGgGgGGk....',
      '.kGgGGGGGgGk....',
      '.kGGgGGGgGGk....',
      '..kGgGgGgGk.....',
      '..kGGgGGgGk.....',
      '...kGGGGGk......',
      '....kkkkk.......',
      '.....kgk........',
      '.....kgk........',
      '................',
    ]
  },

  dill: {
    name: "Dill",
    category: "herb",
    pixels: [
      '................',
      '..L.L.L.L.L.....',
      '..kLkLkLkLk.....',
      '...kLkLkLk......',
      '....kLkLk.......',
      '.....kLk........',
      '..L.LkLkL.L.....',
      '..kLkLkLkLk.....',
      '...kLkLkLk......',
      '....kLkLk.......',
      '.....kLk........',
      '.....kgk........',
      '.....kgk........',
      '.....kgk........',
      '.....kgk........',
      '......k.........',
    ]
  },

  oregano: {
    name: "Oregano",
    category: "herb",
    pixels: [
      '................',
      '................',
      '....kgk.kgk.....',
      '...kggkkggk.....',
      '...kgkkgkgk.....',
      '..kgk.kgkgk.....',
      '..kgkkgk.kgk....',
      '.kgkkgk..kgk....',
      '.kgkgk..kgk.....',
      '.kgkkgk.kgk.....',
      '..kgk.kgk.......',
      '...kk..kk.......',
      '....kBk.........',
      '....kBk.........',
      '.....k..........',
      '................',
    ]
  },

  thyme: {
    name: "Thyme",
    category: "herb",
    pixels: [
      '................',
      '................',
      '...gk...........',
      '..kgkg..........',
      '...kgkg.........',
      '..gkgk..........',
      '...kgkg.........',
      '..gkgk..........',
      '...kgkg.........',
      '..gkgkg.........',
      '...kgk..........',
      '...kgk..........',
      '....kk..........',
      '....kBk.........',
      '.....k..........',
      '................',
    ]
  },

  parsley: {
    name: "Parsley",
    category: "herb",
    pixels: [
      '................',
      '................',
      '....kGGk........',
      '...kGGGGk.......',
      '..kGGgGGGk......',
      '..kGgGGgGk......',
      '..kGGgGGk.......',
      '...kGGGk........',
      '...kGGGGk.......',
      '..kGGgGGk.......',
      '..kGgGGgk.......',
      '...kGGGk........',
      '....kkk.........',
      '.....kgk........',
      '.....kgk........',
      '......k.........',
    ]
  },

  rosemary: {
    name: "Rosemary",
    category: "herb",
    pixels: [
      '................',
      '..gg............',
      '..kgkg..........',
      '.gkgkgg.........',
      '..kgkgkg........',
      '.gkgkgkg........',
      '..kgkgkg........',
      '.gkgkgkg........',
      '..kgkgkg........',
      '.gkgkgk.........',
      '..kgkgk.........',
      '...kgk..........',
      '...kgk..........',
      '...kBk..........',
      '....k...........',
      '................',
    ]
  },

  // =========================================================================
  // CITRUS
  // =========================================================================

  lime: {
    name: "Lime",
    category: "produce",
    pixels: [
      '................',
      '................',
      '......kk........',
      '.....kggk.......',
      '....kkkkk.......',
      '...kgGGGGk......',
      '..kgGGGGGGk.....',
      '..kGGGLGGGk.....',
      '..kGGLGLGGk.....',
      '..kGGGLGGGk.....',
      '..kgGGGGGGk.....',
      '...kgGGGGk......',
      '....kgGgk.......',
      '.....kkkk.......',
      '................',
      '................',
    ]
  },

  lemon: {
    name: "Lemon",
    category: "produce",
    pixels: [
      '................',
      '................',
      '.......kk.......',
      '......kggk......',
      '.....kkkkk......',
      '...kkyyyyyk.....',
      '..kyyYyyYyyk....',
      '..kyYyyyYyyk....',
      '..kyyYYYyyyyk...',
      '..kyYyyyYyyyk...',
      '..kyyYyyYyyk....',
      '...kyyyyyyk.....',
      '....kyyyyk......',
      '.....kkkk.......',
      '................',
      '................',
    ]
  },

  dried_lime: {
    name: "Dried Lime",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kkkk.......',
      '....kbbbbk......',
      '...kbdbbdbk.....',
      '...kbdbddbk.....',
      '...kbbdbbdk.....',
      '...kbdbbdbk.....',
      '...kbdbddbk.....',
      '....kbbbbk......',
      '.....kkkk.......',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  yuzu: {
    name: "Yuzu",
    category: "produce",
    pixels: [
      '................',
      '................',
      '.......kk.......',
      '......kgk.......',
      '.....kkkkk......',
      '...kkyOyyOk.....',
      '..kyOyyyOyyk....',
      '..kOyyYyyyOk....',
      '..kyyyYYyyyk....',
      '..kOyyYyyyOk....',
      '..kyOyyyOyyk....',
      '...kyOyyOyk.....',
      '....kyyyyk......',
      '.....kkkk.......',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // PRODUCE
  // =========================================================================

  tomato: {
    name: "Tomato",
    category: "produce",
    pixels: [
      '................',
      '......kgk.......',
      '.....kggk.......',
      '....kkkkk.......',
      '...kRRrRRk......',
      '..kRRRRRRRk.....',
      '..kRrRRRrRk.....',
      '.kRRRRRRRRRk....',
      '.kRrRRRRrRRk....',
      '.kRRRRRRRRRk....',
      '..kRrRRRrRk.....',
      '..kRRRRRRRk.....',
      '...kRRrRRk......',
      '....kkkkk.......',
      '................',
      '................',
    ]
  },

  coconut: {
    name: "Coconut",
    category: "produce",
    pixels: [
      '................',
      '................',
      '................',
      '....kkkkkkk.....',
      '...kBBbBBBBk....',
      '..kBbBBbBBbBk...',
      '..kBBbBBBBbBk...',
      '..kbBBkkkBBBk...',
      '..kBBkwwwkBBk...',
      '..kBBkwWwwkBk...',
      '..kBBkwwWwwkk...',
      '...kBkwwwwwk....',
      '....kkwwwwk.....',
      '.....kkkkk......',
      '................',
      '................',
    ]
  },

  tamarind: {
    name: "Tamarind",
    category: "produce",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '...kkkkkkkk.....',
      '..kBBnBBnBBk....',
      '.kBnBBnBBnBBk...',
      '.kBBnBBBnBBnk...',
      '.kBnBBnBBnBk....',
      '..kBBnBBnBBk....',
      '...kkkkkkkk.....',
      '................',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  pomegranate: {
    name: "Pomegranate",
    category: "produce",
    pixels: [
      '................',
      '.....kkk........',
      '....kOyOk.......',
      '....kkkkk.......',
      '...krRRRrk......',
      '..kRrRRRrRk.....',
      '..kRRrRrRRk.....',
      '.kRRRRRRRRRk....',
      '.kRrRRRRrRRk....',
      '.kRRRrRrRRRk....',
      '..kRRRRRRRk.....',
      '..kRrRRrRRk.....',
      '...kRRRRRk......',
      '....kkkkk.......',
      '................',
      '................',
    ]
  },

  mushroom: {
    name: "Mushroom",
    category: "produce",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...kBBbBBk......',
      '..kBnBBBnBk.....',
      '.kBBnBBBnBBk....',
      '.kBBBnBnBBBk....',
      '.kBBBBBBBBBk....',
      '..kkkkkkkkk.....',
      '.....kWWk.......',
      '.....kWwk.......',
      '.....kwWk.......',
      '.....kWwk.......',
      '....kwWWwk......',
      '....kkkkkk......',
      '................',
    ]
  },

  preserved_lemon: {
    name: "Preserved Lemon",
    category: "condiment",
    pixels: [
      '................',
      '.....kkkk.......',
      '....keeek.......',
      '...kkkkkkk......',
      '...kAAAAAk......',
      '...kAyyyAk......',
      '...kAyYyAk......',
      '...kAyyyAk......',
      '...kAyYyAk......',
      '...kAyyyAk......',
      '...kAyYyAk......',
      '...kAyyyAk......',
      '...kAAAAAk......',
      '...kkkkkkk......',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // WHOLE SPICES
  // =========================================================================

  cumin: {
    name: "Cumin",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '....kb..kb......',
      '...kBbk.kBk.....',
      '...kbBk..kbk....',
      '....kk.kBbk.....',
      '..kBbk..kkk.....',
      '..kbBk.kBbk.....',
      '...kk..kbBk.....',
      '......kBbk......',
      '.......kk.......',
      '................',
      '................',
      '................',
    ]
  },

  coriander_seed: {
    name: "Coriander Seed",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '......kk........',
      '.....knTk.kk....',
      '....kTnTkknnk...',
      '....knTnknTnk...',
      '.kk..kkkkkTnk...',
      'knnk...kknkk....',
      'knTnk.kTnk.....',
      '.kTnkknnTk......',
      '..kkk.kkkk......',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  star_anise: {
    name: "Star Anise",
    category: "spice",
    pixels: [
      '................',
      '................',
      '.......kk.......',
      '......kBbk......',
      '......kBbk......',
      '..kk..kBbk..kk..',
      '.kBbkkbBbkkBbk..',
      '..kBbBbkbBbBk...',
      '...kkbBdBbkk....',
      '..kBbBbkbBbBk...',
      '.kBbkkbBbkkBbk..',
      '..kk..kBbk..kk..',
      '......kBbk......',
      '......kBbk......',
      '.......kk.......',
      '................',
    ]
  },

  cinnamon: {
    name: "Cinnamon",
    category: "spice",
    pixels: [
      '................',
      '................',
      '..kkkkkkkkkk....',
      '.kBBbBBbBBbBk...',
      '.kbBBbBBbBBbk...',
      '.kBBbBBbBBbBk...',
      '.kbBBbBBbBkk....',
      '.kkkkkkkkBbBk...',
      '........kbBBk...',
      '........kBbBk...',
      '........kbBk....',
      '........kBkk....',
      '........kkk.....',
      '................',
      '................',
      '................',
    ]
  },

  clove: {
    name: "Clove",
    category: "spice",
    pixels: [
      '................',
      '................',
      '.......k........',
      '......kbk.......',
      '......kbk.......',
      '......kbk.......',
      '......kbk.......',
      '.....kbbk.......',
      '....kbBbk.......',
      '...kbBBBbk......',
      '...kBbBbBk......',
      '...kbBBBbk......',
      '....kbBbk.......',
      '.....kkk........',
      '................',
      '................',
    ]
  },

  cardamom: {
    name: "Cardamom",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kkkk.......',
      '....kgGgGk......',
      '...kgGgGgGk.....',
      '...kGgGgGgk.....',
      '...kgGgGgGk.....',
      '...kGgGgGgk.....',
      '...kgGgGgGk.....',
      '...kGgGgGgk.....',
      '....kgGgGk......',
      '.....kkkk.......',
      '................',
      '................',
      '................',
    ]
  },

  turmeric: {
    name: "Turmeric",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '...kkkkk........',
      '..koOoOok.......',
      '.kOoOoOoOkk.....',
      '.koOoOoOoOk.....',
      '.kkkoOoOoOk.....',
      '...kOoOoOkk.....',
      '..koOoOoOk......',
      '.kOoOoOok.......',
      '.koOoOoOk.......',
      '..kkkkkkk.......',
      '................',
      '................',
      '................',
    ]
  },

  saffron: {
    name: "Saffron",
    category: "spice",
    pixels: [
      '................',
      '................',
      '.....R.r.R......',
      '....kRkrkRk.....',
      '....krkRkrk.....',
      '.....kRkrk......',
      '.....krkRk......',
      '....kRkrkk......',
      '....krkRk.......',
      '.....krkk.......',
      '....kokok.......',
      '....kokk........',
      '.....kk.........',
      '................',
      '................',
      '................',
    ]
  },

  sumac: {
    name: "Sumac",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '....kkkkkk......',
      '...krrrrrRk.....',
      '..krrRrRrrRk....',
      '..krRrrrrRrrk...',
      '..krrRrRrrrk....',
      '...krrrrRrk.....',
      '....kkkkkk......',
      '................',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  mustard_seed: {
    name: "Mustard Seed",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '.....kk.kk......',
      '....kyyk.yyk....',
      '....kyykkyykkk..',
      '..kk.kkkyykOOk.',
      '.kyykkyykkkkOk..',
      '.kyykyykkyyk.k..',
      '..kkk.kkkyykkk..',
      '..kyykkOOkkOOk..',
      '..kyyk.kk..kkk..',
      '...kk...........',
      '................',
      '................',
    ]
  },

  fenugreek: {
    name: "Fenugreek",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '.....kk.kk......',
      '....kOnkkOnk....',
      '...kOnOk.kOnk...',
      '....kkk.kOnk....',
      '..kOnk...kkk....',
      '..kOnOk.kOnk....',
      '...kkkk.kOnOk...',
      '........kkk.....',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  caraway: {
    name: "Caraway",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '....kBk.kBk.....',
      '...kBbk..kBk....',
      '....kk..kbBk....',
      '..kBbk...kk.....',
      '..kbBk..kBbk....',
      '...kk...kbBk....',
      '........kkk.....',
      '...kBbk.........',
      '...kbBk.........',
      '....kk..........',
      '................',
      '................',
    ]
  },

  juniper: {
    name: "Juniper Berry",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kk.........',
      '....kppk.kk.....',
      '...kpppkkppk....',
      '...kppdk.kppk...',
      '....kkk..kpdk...',
      '..kk......kkk...',
      '.kppk..kk.......',
      '.kpppkkppk......',
      '.kppdkkppk......',
      '..kk..kkk.......',
      '................',
      '................',
      '................',
    ]
  },

  allspice: {
    name: "Allspice",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kk.........',
      '....kbbk..kk....',
      '...kbbBkkbbk....',
      '...kbBbkkbBbk...',
      '....kkkk.kbbk...',
      '..kk......kkk...',
      '.kbbk..kk.......',
      '.kbBbkkbbk......',
      '.kbbBkkbBk......',
      '..kk..kkk.......',
      '................',
      '................',
      '................',
    ]
  },

  nutmeg: {
    name: "Nutmeg",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '.....kkkk.......',
      '....kBbnBk......',
      '...kBnBBnBk.....',
      '...kbnBnBnk.....',
      '..kBnBBBnBk.....',
      '..kBBnBnBBk.....',
      '..knBBBnBnk.....',
      '..kBnBnBBBk.....',
      '...kBBnBBk......',
      '....kBnBk.......',
      '.....kkkk.......',
      '................',
      '................',
    ]
  },

  paprika: {
    name: "Paprika",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '................',
      '....kkkkkk......',
      '...kRrrRrrk.....',
      '..kRrRRrRRRk....',
      '..krRRrRRrrRk...',
      '..kRrRRRrRRrk...',
      '...kRrrRrrRk....',
      '....kkkkkk......',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // SAUCES / CONDIMENTS
  // =========================================================================

  soy_sauce: {
    name: "Soy Sauce",
    category: "sauce",
    pixels: [
      '................',
      '.....kkk........',
      '....kdkdk.......',
      '....kkkkk.......',
      '....kdddk.......',
      '...kdddddk......',
      '...kdddddk......',
      '...kdddddk......',
      '...kNNNNNk......',
      '...kNkkkNk......',
      '...kNNNNNk......',
      '...kdddddk......',
      '...kdddddk......',
      '...kdddddk......',
      '....kkkkk.......',
      '................',
    ]
  },

  fish_sauce: {
    name: "Fish Sauce",
    category: "sauce",
    pixels: [
      '................',
      '.....kkk........',
      '....kOkOk.......',
      '....kkkkk.......',
      '....kOOOk.......',
      '...kOOOOOk......',
      '...kOOOOOk......',
      '...kOOOOOk......',
      '...kNNNNNk......',
      '...kNkkkNk......',
      '...kNNNNNk......',
      '...kOOOOOk......',
      '...kOOOOOk......',
      '...kOOOOOk......',
      '....kkkkk.......',
      '................',
    ]
  },

  oyster_sauce: {
    name: "Oyster Sauce",
    category: "sauce",
    pixels: [
      '................',
      '.....kkk........',
      '....kbkbk.......',
      '....kkkkk.......',
      '....kbbbk.......',
      '...kbbbbbk......',
      '...kbbbbbk......',
      '...kbbbbbk......',
      '...kRRRRRk......',
      '...kRkkkRk......',
      '...kRRRRRk......',
      '...kbbbbbk......',
      '...kbbbbbk......',
      '...kbbbbbk......',
      '....kkkkk.......',
      '................',
    ]
  },

  olive_oil: {
    name: "Olive Oil",
    category: "fat",
    pixels: [
      '................',
      '.....kkk........',
      '....kgkgk.......',
      '....kkkkk.......',
      '....kOOOk.......',
      '...kOYOYOk......',
      '...kYOYOYk......',
      '...kOYOYOk......',
      '...kgggggk......',
      '...kgkkkgk......',
      '...kgggggk......',
      '...kOYOYOk......',
      '...kYOYOYk......',
      '...kOYOYOk......',
      '....kkkkk.......',
      '................',
    ]
  },

  sesame_oil: {
    name: "Sesame Oil",
    category: "fat",
    pixels: [
      '................',
      '.....kkk........',
      '....kOkOk.......',
      '....kkkkk.......',
      '....kbbbk.......',
      '...kbObbOk......',
      '...kObbObbk.....',
      '...kbbObbOk.....',
      '...kOOOOOk......',
      '...kOkkkOk......',
      '...kOOOOOk......',
      '...kbObbOk......',
      '...kObbOOk......',
      '...kbbObbk......',
      '....kkkkk.......',
      '................',
    ]
  },

  vinegar: {
    name: "Vinegar",
    category: "sauce",
    pixels: [
      '................',
      '.....kkk........',
      '....kWkWk.......',
      '....kkkkk.......',
      '....kWWWk.......',
      '...kWWWWWk......',
      '...kWEWEWk......',
      '...kEWEWEk......',
      '...kWWWWWk......',
      '...kWkkkWk......',
      '...kWWWWWk......',
      '...kEWEWEk......',
      '...kWEWEWk......',
      '...kWWWWWk......',
      '....kkkkk.......',
      '................',
    ]
  },

  fermented_paste: {
    name: "Fermented Paste",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...kBBBBBk......',
      '...kBBBBBk......',
      '..kkkkkkkkk.....',
      '..kBbBbBbBk.....',
      '..kbBbBbBbk.....',
      '..kBbBbBbBk.....',
      '..kbBbBbBbk.....',
      '..kBbBbBbBk.....',
      '..kbBbBbBbk.....',
      '..kBbBbBbBk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  miso: {
    name: "Miso",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...knnnnnk......',
      '...knnnnnk......',
      '..kkkkkkkkk.....',
      '..knTnTnTnk.....',
      '..kTnTnTnTk.....',
      '..knTnTnTnk.....',
      '..kTnTnTnTk.....',
      '..knTnTnTnk.....',
      '..kTnTnTnTk.....',
      '..knTnTnTnk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  gochujang: {
    name: "Gochujang",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...kRRRRRk......',
      '...kRRRRRk......',
      '..kkkkkkkkk.....',
      '..krRrRrRrk.....',
      '..kRrRrRrRk.....',
      '..krRrRrRrk.....',
      '..kRyyyYrRk.....',
      '..krYyyyRrk.....',
      '..kRrRrRrRk.....',
      '..krRrRrRrk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  doubanjiang: {
    name: "Doubanjiang",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...krrrrRk......',
      '...krrrrrk......',
      '..kkkkkkkkk.....',
      '..krbrbrbRk.....',
      '..kbrbrbrBk.....',
      '..krbrbrbRk.....',
      '..kbrbrbrBk.....',
      '..krbrbrbRk.....',
      '..kbrbrbrBk.....',
      '..krbrbrbRk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  tahini: {
    name: "Tahini",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...knnnnnk......',
      '...kNNNNNk......',
      '..kkkkkkkkk.....',
      '..kNnNnNnNk.....',
      '..knNnNnNnk.....',
      '..kNnNnNnNk.....',
      '..knNnNnNnk.....',
      '..kNnNnNnNk.....',
      '..knNnNnNnk.....',
      '..kNnNnNnNk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  harissa: {
    name: "Harissa",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '......kkk.......',
      '.....kRRRk......',
      '....kkkkkkk.....',
      '....kRrRrRk.....',
      '....krRrRrk.....',
      '....kRrRrRk.....',
      '....krRrRrk.....',
      '....kRrRrRk.....',
      '....krRrRrk.....',
      '....kRrRrRk.....',
      '....kkkkkkk.....',
      '................',
      '................',
      '................',
    ]
  },

  kecap_manis: {
    name: "Kecap Manis",
    category: "sauce",
    pixels: [
      '................',
      '.....kkk........',
      '....kbkbk.......',
      '....kkkkk.......',
      '....kbbbk.......',
      '...kbbdbbk......',
      '...kbdbbdk......',
      '...kbbdbbk......',
      '...kyyyyyk......',
      '...kykkkyk......',
      '...kyyyyyk......',
      '...kbdbbdk......',
      '...kbbdbbk......',
      '...kbdbbdk......',
      '....kkkkk.......',
      '................',
    ]
  },

  belacan: {
    name: "Belacan",
    category: "sauce",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '..kkkkkkkkk.....',
      '..kBbBbBbBk.....',
      '..kbBbBbBbk.....',
      '..kBbBnBbBk.....',
      '..kbBnbnBbk.....',
      '..kBbBbBbBk.....',
      '..kbBbBbBbk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // FATS
  // =========================================================================

  ghee: {
    name: "Ghee",
    category: "fat",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...kOOOOOk......',
      '...kOYOYOk......',
      '..kkkkkkkkk.....',
      '..kOYOYOYOk.....',
      '..kYOYOYOYk.....',
      '..kOYOYOYOk.....',
      '..kYOYOYOYk.....',
      '..kOYOYOYOk.....',
      '..kYOYOYOYk.....',
      '..kOYOYOYOk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  butter: {
    name: "Butter",
    category: "fat",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '..kkkkkkkkkkk...',
      '..kyyyyyyyyyk...',
      '..kyYyYyYyYyk...',
      '..kyYyYyYyYyk...',
      '..kyyyyyyyyyk...',
      '..kyYyYyYyYyk...',
      '..kyyyyyyyyyk...',
      '..kkkkkkkkkkk...',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  cream: {
    name: "Cream",
    category: "dairy",
    pixels: [
      '................',
      '......ww........',
      '.....wWw........',
      '....wWw.ww......',
      '...ww....ww.....',
      '..kkkkkkkkkkk...',
      '..kWwWwWwWwWk...',
      '..kwWwWwWwWwk...',
      '..kWwWwWwWwWk...',
      '..kwWwWwWwWwk...',
      '..kWwWwWwWwWk...',
      '..kwWwWwWwWwk...',
      '..kkkkkkkkkkk...',
      '................',
      '................',
      '................',
    ]
  },

  palm_oil: {
    name: "Palm Oil",
    category: "fat",
    pixels: [
      '................',
      '................',
      '....kkkkk.......',
      '...koooook......',
      '...koRoRok......',
      '..kkkkkkkkk.....',
      '..koRoRoRok.....',
      '..kRoRoRoRk.....',
      '..koRoRoRok.....',
      '..kRoRoRoRk.....',
      '..koRoRoRok.....',
      '..kRoRoRoRk.....',
      '..koRoRoRok.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // DAIRY
  // =========================================================================

  yogurt: {
    name: "Yogurt",
    category: "dairy",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '..kkkkkkkkkkk...',
      '..kwWwWwWwWwk...',
      '...kWwWwWwWk....',
      '...kwWwWwWwk....',
      '...kWwWwWwWk....',
      '...kwWwWwWwk....',
      '....kWwWwWk.....',
      '....kwWwWwk.....',
      '.....kkkkk......',
      '................',
      '................',
      '................',
    ]
  },

  feta: {
    name: "Feta Cheese",
    category: "dairy",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '...kkkkkkkk.....',
      '...kWwWwWwk.....',
      '...kwWkWwkk.....',
      '...kWwkwWwk.....',
      '...kwWwWwWk.....',
      '...kWwkWwkk.....',
      '...kwWkwWwk.....',
      '...kWwWwWwk.....',
      '...kkkkkkkk.....',
      '................',
      '................',
      '................',
    ]
  },

  parmesan: {
    name: "Parmesan",
    category: "dairy",
    pixels: [
      '................',
      '................',
      '................',
      '......k.........',
      '.....kyk........',
      '....kyyOk.......',
      '...kyOyyOk......',
      '..kyyOyOyOk.....',
      '..kyOyyOyyOk....',
      '.kyOyOyyOyyk....',
      '.kyyOyyOyOyk....',
      '.kyOyOyOyyOk....',
      '.kkkkkkkkkkkk...',
      '................',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // SEEDS / NUTS
  // =========================================================================

  sesame: {
    name: "Sesame Seeds",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '....Nn..Nn......',
      '......Nn........',
      '..Nn......Nn....',
      '......Nn........',
      '....Nn....Nn....',
      '..........Nn....',
      '....Nn..........',
      '......Nn..Nn....',
      '..Nn............',
      '................',
      '................',
      '................',
    ]
  },

  walnut: {
    name: "Walnut",
    category: "other",
    pixels: [
      '................',
      '................',
      '................',
      '.....kkkk.......',
      '....kBbnBk......',
      '...kBnBkBnk.....',
      '..kBnBBkBnBk....',
      '..kbnBnkbnBk....',
      '..kBnBBkBnBk....',
      '..kbnBnkbnBk....',
      '...kBnBkBnk.....',
      '....kBbnBk......',
      '.....kkkk.......',
      '................',
      '................',
      '................',
    ]
  },

  peanut: {
    name: "Peanut",
    category: "other",
    pixels: [
      '................',
      '................',
      '................',
      '....kkkkk.......',
      '...knTnTnk......',
      '...kTnTnTk......',
      '...knTnTnk......',
      '....knTnk.......',
      '....kTnTk.......',
      '....knTnk.......',
      '...knTnTnk......',
      '...kTnTnTk......',
      '...knTnTnk......',
      '....kkkkk.......',
      '................',
      '................',
    ]
  },

  // =========================================================================
  // OTHER
  // =========================================================================

  chocolate: {
    name: "Chocolate",
    category: "other",
    pixels: [
      '................',
      '................',
      '................',
      '..kkkkkkkkkkk...',
      '..kBbBkBbBkBk...',
      '..kbBbkbBbkbk...',
      '..kBbBkBbBkBk...',
      '..kkkkkkkkkkk...',
      '..kbBbkbBbkbk...',
      '..kBbBkBbBkBk...',
      '..kbBbkbBbkbk...',
      '..kkkkkkkkkkk...',
      '..kBbBkBbBkBk...',
      '..kbBbkbBbkbk...',
      '..kkkkkkkkkkk...',
      '................',
    ]
  },

  achiote: {
    name: "Achiote",
    category: "spice",
    pixels: [
      '................',
      '................',
      '................',
      '......kk........',
      '.....koRk.kk....',
      '....kRoRkkRok...',
      '....koRokkoRk...',
      '.kk..kkkkkRok...',
      'kRok...kkoRkk...',
      'koRok.koRk......',
      '.koRkkoRok......',
      '..kkk.kkkk......',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  rosewater: {
    name: "Rosewater",
    category: "other",
    pixels: [
      '................',
      '.....kkk........',
      '....kSkSk.......',
      '....kkkkk.......',
      '....kSSSk.......',
      '...kSPSPSk......',
      '...kPSPSPk......',
      '...kSPSPSk......',
      '...kSSSSSkk.....',
      '...kSkkkSk.k....',
      '...kSSSSSkSk....',
      '...kPSPSkkSPk...',
      '...kSPSPSkSk....',
      '...kPSPSk.k.....',
      '....kkkkk.......',
      '................',
    ]
  },

  barberry: {
    name: "Barberry",
    category: "other",
    pixels: [
      '................',
      '................',
      '................',
      '....kk..kk......',
      '...kRRkkRRk.....',
      '...kRrkRRrk.....',
      '....kk..kk......',
      '..kk..kk........',
      '.kRRkkRRk.......',
      '.kRrkRRrk.......',
      '..kk.kkk..kk....',
      '........kRRk....',
      '.......kRRrk....',
      '........kkk.....',
      '................',
      '................',
    ]
  },

  honey: {
    name: "Honey",
    category: "other",
    pixels: [
      '................',
      '......kk........',
      '.....kBBk.......',
      '.....kBBk.......',
      '....kkkkk.......',
      '...kOYOYOk......',
      '..kkkkkkkkk.....',
      '..kOYOYOYOk.....',
      '..kYOYOYOYk.....',
      '..kOYOYOYOk.....',
      '..kYOYOYOYk.....',
      '..kOYOYOYOk.....',
      '..kYOYOYOYk.....',
      '..kkkkkkkkk.....',
      '................',
      '................',
    ]
  },

  dashi: {
    name: "Dashi",
    category: "other",
    pixels: [
      '................',
      '....w..w..w.....',
      '...w..w..w......',
      '....w..w........',
      '................',
      '..kkkkkkkkkkk...',
      '..kAAaAAaAAk....',
      '...kAaAAaAAk....',
      '...kaAAaAAak....',
      '...kAAaAAaAk....',
      '....kaAAaAk.....',
      '....kAaAAak.....',
      '.....kkkkk......',
      '................',
      '................',
      '................',
    ]
  },

  sake: {
    name: "Sake",
    category: "other",
    pixels: [
      '................',
      '................',
      '.....kkk........',
      '....kWWWk.......',
      '....kWWWk.......',
      '....kkkkk.......',
      '...kWWWWWk......',
      '...kWwWwWk......',
      '...kwWwWwk......',
      '...kWwWwWk......',
      '...kaaaaak......',
      '...kakkkak......',
      '...kaaaaak......',
      '...kWwWwWk......',
      '...kkkkkkk......',
      '................',
    ]
  },

  wine: {
    name: "Wine",
    category: "other",
    pixels: [
      '................',
      '.....kkk........',
      '....kdddk.......',
      '....kkkkk.......',
      '....krrrk.......',
      '...krrrrRk......',
      '...kRrrrrk......',
      '...krrRrRk......',
      '...krrrrrk......',
      '....krrrk.......',
      '.....kek........',
      '.....kek........',
      '.....kek........',
      '....keeek.......',
      '...kkkkkkk......',
      '................',
    ]
  },

  // =========================================================================
  // ADDITIONAL INGREDIENTS
  // =========================================================================

  horseradish: {
    name: "Horseradish",
    category: "produce",
    pixels: [
      '................',
      '.......kk.......',
      '......kLgk......',
      '.....kLgk.......',
      '....kgk.........',
      '....kNNk........',
      '...kNwNNk.......',
      '...kNNwNk.......',
      '..kNwNNNNk......',
      '..kNNNwNNk......',
      '..kNNNNNk.......',
      '...kNNNNk.......',
      '...kNNNk........',
      '....kNk.........',
      '.....kk.........',
      '................',
    ]
  },

  sauerkraut: {
    name: "Sauerkraut",
    category: "produce",
    pixels: [
      '................',
      '....kkkkkk......',
      '...kBBBBBBk.....',
      '...kbBBBBbk.....',
      '..kkkkkkkkk.....',
      '..kYyYyYyYk.....',
      '..kyYYyYYyk.....',
      '..kYyyYyyYk.....',
      '..kyYYyYYyk.....',
      '..kYyYyYyYk.....',
      '..kyYyyYyyk.....',
      '..kYyYYyYYk.....',
      '..kyYyYyYyk.....',
      '..kkkkkkkkk.....',
      '...kkkkkkkk.....',
      '................',
    ]
  },

  dill_weed: {
    name: "Dill Weed",
    category: "herbs",
    pixels: [
      '................',
      '.....kGk.kGk....',
      '....kGkk.kkGk...',
      '...kGk.k.k.kGk..',
      '..kGk..kkk..k...',
      '...k...kgk......',
      '.......kgk......',
      '.......kgk......',
      '.......kgk......',
      '.......kgk......',
      '.......kgk......',
      '.......kgk......',
      '.......kgk......',
      '.......kgk......',
      '......kkkkk.....',
      '................',
    ]
  },

  rye: {
    name: "Rye",
    category: "grains",
    pixels: [
      '................',
      '......kk........',
      '.....knTk.......',
      '....knTnk.......',
      '...kTnk.........',
      '...knTk.........',
      '..kTnTk.........',
      '..knTk..........',
      '..kTnk..........',
      '...knk..........',
      '...kTk..........',
      '...knk..........',
      '....kk..........',
      '....kk..........',
      '....kk..........',
      '................',
    ]
  },

  buckwheat: {
    name: "Buckwheat",
    category: "grains",
    pixels: [
      '................',
      '................',
      '....kkkkkk......',
      '...kBbnBnBk.....',
      '..kbnBnbBnbk....',
      '..kBnbBnBnBk....',
      '..knBnbBnbnk....',
      '..kbBnBnBnBk....',
      '..kBnbnbBnbk....',
      '..knBnBnbnBk....',
      '..kbBnbBnBnk....',
      '...kBnBnbBk.....',
      '....kkkkkk......',
      '................',
      '................',
      '................',
    ]
  },

  smoked_paprika: {
    name: "Smoked Paprika",
    category: "spices",
    pixels: [
      '................',
      '.....kkkk.......',
      '....kddddkk.....',
      '....kkkkkkk.....',
      '...kkrrorkk.....',
      '...krororrk.....',
      '...krrorork.....',
      '...korrorrk.....',
      '...krrorork.....',
      '...korrorrk.....',
      '...kkrrorkk.....',
      '....krrork......',
      '....korkrk......',
      '....kkrrkk......',
      '.....kkkk.......',
      '................',
    ]
  },

  malt_vinegar: {
    name: "Malt Vinegar",
    category: "condiments",
    pixels: [
      '................',
      '.....kkk........',
      '....kbbbk.......',
      '....kkkkk.......',
      '....kBBBk.......',
      '...kBbBbBk......',
      '...kbBBBbk......',
      '...kBbBbBk......',
      '...kbBBBbk......',
      '...kBbBbBk......',
      '...kbBBBbk......',
      '...kBbBbBk......',
      '....kBBBk.......',
      '....kkkkk.......',
      '...kkkkkkk......',
      '................',
    ]
  },

  clotted_cream: {
    name: "Clotted Cream",
    category: "dairy",
    pixels: [
      '................',
      '................',
      '...kkkkkkkkk....',
      '..kNNNNNNNNNk...',
      '..kYNNYNNYNNk...',
      '..kNNNNNNNNNk...',
      '.kkkkkkkkkkkkk..',
      '.kWwWwWwWwWwWk..',
      '.kwWwWwWwWwWwk..',
      '.kWwYwWwWwYwWk..',
      '.kwWwWwWwWwWwk..',
      '.kWwWwWwWwWwWk..',
      '.kwWwWwWwWwWwk..',
      '.kkkkkkkkkkkkk..',
      '................',
      '................',
    ]
  },

  curry_powder: {
    name: "Curry Powder",
    category: "spices",
    pixels: [
      '................',
      '.....kkkk.......',
      '....kddddkk.....',
      '....kkkkkkk.....',
      '...kkOyOykk.....',
      '...kyOyOOyk.....',
      '...kOyOyOOk.....',
      '...kyOOyOyk.....',
      '...kOyOyOOk.....',
      '...kyOOyOyk.....',
      '...kkOyOykk.....',
      '....kOyOyk......',
      '....kyOOyk......',
      '....kkOykk......',
      '.....kkkk.......',
      '................',
    ]
  },

  sour_cream: {
    name: "Sour Cream",
    category: "dairy",
    pixels: [
      '................',
      '................',
      '...kkkkkkkk.....',
      '..kaaaaaaaak....',
      '..kakkkkkkak....',
      '..kkkkkkkkkkk...',
      '..kwWwWwWwWwk...',
      '..kWwWwWwWwWk...',
      '..kwWwWwWwWwk...',
      '..kWwYwWwYwWk...',
      '..kwWwWwWwWwk...',
      '..kWwWwWwWwWk...',
      '..kwWwWwWwWwk...',
      '..kkkkkkkkkkk...',
      '................',
      '................',
    ]
  },

  poppy_seed: {
    name: "Poppy Seed",
    category: "spices",
    pixels: [
      '................',
      '................',
      '....kkkkkkk.....',
      '...kdkdkdkdk....',
      '..kkdkkdkkdkk...',
      '..kdkkdkkdkkk...',
      '..kkdkkdkkdkk...',
      '..kdkkdkkdkkk...',
      '..kkdkkdkkdkk...',
      '..kdkkdkkdkkk...',
      '..kkdkkdkkdkk...',
      '...kdkdkdkdk....',
      '....kkkkkkk.....',
      '................',
      '................',
      '................',
    ]
  },

  cured_meat: {
    name: "Cured Meat",
    category: "protein",
    pixels: [
      '................',
      '................',
      '..kkkkkkkkkkk...',
      '..krRrPrRrPrk...',
      '..kRrPrRrPrRk...',
      '..krRrwrRrwrk...',
      '..kRrPrRrPrRk...',
      '..krRrPrRrPrk...',
      '..kRrwrRrwrRk...',
      '..krRrPrRrPrk...',
      '..kRrPrRrPrRk...',
      '..kkkkkkkkkkk...',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  salt_cod: {
    name: "Salt Cod",
    category: "protein",
    pixels: [
      '................',
      '................',
      '...kkkkkkk......',
      '..kNNNNNNNkk....',
      '..kWNwNWNNkkk...',
      '.kNNNNNNNNNkkk..',
      '.kWNwNWNwNNNkk..',
      '.kNNNNNNNNNkk...',
      '.kNwNWNwNNkk....',
      '..kNNNNNNkk.....',
      '...kkkkkkk......',
      '..kwWwWwk.......',
      '..kWwWwWk.......',
      '..kkkkkkk.......',
      '................',
      '................',
    ]
  },

  piri_piri: {
    name: "Piri Piri",
    category: "spices",
    pixels: [
      '................',
      '......kk........',
      '.....kggk.......',
      '.....kgk........',
      '....kkrk........',
      '...kRrRrk.......',
      '...krRrRk.......',
      '..kRrRrRRk......',
      '..krRrRrRk......',
      '..kRrRrRrk......',
      '...krRrRk.......',
      '...kRrRrk.......',
      '....kRrk........',
      '.....krk........',
      '......kk........',
      '................',
    ]
  },

  plantain: {
    name: "Plantain",
    category: "produce",
    pixels: [
      '................',
      '................',
      '..........kkk...',
      '.........kOyk...',
      '........kOyOk...',
      '.......kyOyOk...',
      '......kOyOyk....',
      '.....kyOyOk.....',
      '....kOyOyk......',
      '...kyOyOk.......',
      '..kOyOyk........',
      '..kyOyk.........',
      '..kOyk..........',
      '...kkk..........',
      '................',
      '................',
    ]
  },

  cassava: {
    name: "Cassava",
    category: "produce",
    pixels: [
      '................',
      '......kk........',
      '.....kbBk.......',
      '....kBbnk.......',
      '...kbBnNk.......',
      '...kBnNwk.......',
      '...knNwNk.......',
      '...kNwNwk.......',
      '...kwNwNk.......',
      '...kNwNwk.......',
      '...kwNwNk.......',
      '...kNwNk........',
      '....kwNk........',
      '....kNk.........',
      '.....kk.........',
      '................',
    ]
  },

  black_beans: {
    name: "Black Beans",
    category: "legumes",
    pixels: [
      '................',
      '................',
      '....kkkkkkk.....',
      '...kkdkkdkkk....',
      '..kkdkkdkkdkk...',
      '..kdkkdkkdkkdk..',
      '..kkdkkdkkdkkk..',
      '..kdkkdkkdkkdk..',
      '..kkdkkdkkdkkk..',
      '..kdkkdkkdkkdk..',
      '..kkdkkdkkdkk...',
      '...kkdkkdkkk....',
      '....kkkkkkk.....',
      '................',
      '................',
      '................',
    ]
  },

  taro: {
    name: "Taro",
    category: "produce",
    pixels: [
      '................',
      '......kgk.......',
      '.....kgLgk......',
      '.....kgkgk......',
      '....kkkkkkk.....',
      '...kpBpBpBpk....',
      '..kBpBpBpBpBk...',
      '..kpBpwBpBpBk...',
      '..kBpBpBpwpBk...',
      '..kpBpBpBpBpk...',
      '..kBpwBpBpBBk...',
      '...kpBpBpBpk....',
      '....kBpBpBk.....',
      '.....kkkkk......',
      '................',
      '................',
    ]
  },

  breadfruit: {
    name: "Breadfruit",
    category: "produce",
    pixels: [
      '................',
      '......kkk.......',
      '.....kgLgk......',
      '....kgLgLgk.....',
      '...kkkkkkkkk....',
      '..kGLGLGLGLGk...',
      '..kLGLgLGLGLk...',
      '.kGLGLGLgLGLGk..',
      '.kLGLgLGLGLGLk..',
      '.kGLGLGLGLgGLk..',
      '..kLGLGLGLGLk...',
      '..kGLgLGLGLGk...',
      '...kLGLGLGLk....',
      '....kkkkkkk.....',
      '................',
      '................',
    ]
  },

  wattleseed: {
    name: "Wattleseed",
    category: "spices",
    pixels: [
      '................',
      '................',
      '....kkkkkkk.....',
      '...kbBbBbBbk....',
      '..kBbBbBbBbBk...',
      '..kbBbBbBbBbk...',
      '..kBbBkBkBbBk...',
      '..kbBkbBbkBbk...',
      '..kBbBkBkBbBk...',
      '..kbBbBbBbBbk...',
      '..kBbBbBbBbBk...',
      '...kbBbBbBbk....',
      '....kkkkkkk.....',
      '................',
      '................',
      '................',
    ]
  },

  lemon_myrtle: {
    name: "Lemon Myrtle",
    category: "herbs",
    pixels: [
      '................',
      '......kk........',
      '.....kGgk.......',
      '....kGLGgk......',
      '...kGLyLGgk.....',
      '..kGLyYyLGgk....',
      '..kGLyYyLGgk....',
      '...kGLyLGgk.....',
      '....kGLGgk......',
      '.....kGgk.......',
      '......kgk.......',
      '......kgk.......',
      '......kgk.......',
      '......kgk.......',
      '.......kk.......',
      '................',
    ]
  },

  finger_lime: {
    name: "Finger Lime",
    category: "produce",
    pixels: [
      '................',
      '................',
      '...........kk...',
      '..........kGgk..',
      '.........kGLGgk.',
      '........kGLGLgk.',
      '.......kGLGLGgk.',
      '......kGLGLGgk..',
      '.....kGLGLGgk...',
      '....kGLGLGgk....',
      '...kGLGLGgk.....',
      '...kGLGLgk......',
      '....kGLgk.......',
      '.....kkk........',
      '................',
      '................',
    ]
  },

  sumac_berry: {
    name: "Sumac Berry",
    category: "spices",
    pixels: [
      '................',
      '.......kk.......',
      '......kggk......',
      '......kgkk......',
      '.....kkkkk......',
      '....krRrRrk.....',
      '...kRrRrRrRk....',
      '...krRrRrRrk....',
      '..kRrRrRrRrRk...',
      '..krRrRrRrRrk...',
      '..kRrRrRrRrRk...',
      '...krRrRrRrk....',
      '....kRrRrRk.....',
      '.....kkkkk......',
      '................',
      '................',
    ]
  },

  rose_water: {
    name: "Rose Water",
    category: "other",
    pixels: [
      '................',
      '.....kkk........',
      '....kSSSk.......',
      '....kkkkk.......',
      '....kWAWk.......',
      '...kWAWAWk......',
      '...kAWAWAk......',
      '...kWAPAWk......',
      '...kAPSPAk......',
      '...kWAPAWk......',
      '...kAWAWAk......',
      '...kWAWAWk......',
      '....kWAWk.......',
      '....kkkkk.......',
      '...kkkkkkk......',
      '................',
    ]
  },

  saffron_thread: {
    name: "Saffron Thread",
    category: "spices",
    pixels: [
      '................',
      '..k..........k..',
      '..kr........rk..',
      '..kR......Rrk...',
      '...krk..kRk.....',
      '...kork.kork....',
      '....kOk.kOk.....',
      '....kyk.kyk.....',
      '....kyk.kyk.....',
      '....kyk.kyk.....',
      '....kyk.kyk.....',
      '....kyk.kyk.....',
      '.....kk.kk......',
      '................',
      '................',
      '................',
    ]
  },

  za_atar: {
    name: "Za'atar",
    category: "spices",
    pixels: [
      '................',
      '...kkkkkkkkk....',
      '..kggGgGgGggk...',
      '..kGgGgGgGgGk...',
      '..kkkkkkkkkkk...',
      '..kgBnGgBnGgk...',
      '..kBnGgBnGgBk...',
      '..knGgBnGgBnk...',
      '..kGgBnGgBnGk...',
      '..kgBnGgBnGgk...',
      '..kBnGgBnGgBk...',
      '..knGgBnGgBnk...',
      '..kGgBnGgBnGk...',
      '..kkkkkkkkkkk...',
      '................',
      '................',
    ]
  },

  caper: {
    name: "Caper",
    category: "produce",
    pixels: [
      '................',
      '................',
      '................',
      '.....kkkk.......',
      '....kggGgk......',
      '...kgGgGgGk.....',
      '...kGgGLgGk.....',
      '...kgGLGLgk.....',
      '...kGgGLgGk.....',
      '...kgGgGgGk.....',
      '....kgGgGk......',
      '.....kkkk.......',
      '................',
      '................',
      '................',
      '................',
    ]
  },

  vanilla: {
    name: "Vanilla",
    category: "spices",
    pixels: [
      '................',
      '................',
      '..kk........kk..',
      '..kBk......kBk..',
      '..kbBk....kBbk..',
      '...kBbk..kbBk...',
      '...kbBk..kBbk...',
      '....kBk..kBk....',
      '....kbk..kbk....',
      '....kBk..kBk....',
      '....kbk..kbk....',
      '....kBk..kBk....',
      '.....kk..kk.....',
      '................',
      '................',
      '................',
    ]
  },

};
