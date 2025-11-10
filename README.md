# BL Equipment Editor - 1:1 HTML/JavaScript Copy

A standalone HTML/JavaScript application that replicates the BL Four Equipment Editor.

## File Structure

```
bl4-equipment-editor/
├── index.html                 # Main HTML file
├── css/
│   ├── equipment.css         # Equipment section styles
│   ├── customize-dialog.css  # Customize dialog styles
│   ├── str-weak.css          # Strengths/Weaknesses styles
│   └── notes.css             # Notes section styles
├── js/
│   ├── game-data.js          # Game data loader and constants
│   ├── equipment.js          # Equipment component (main slots, interactions)
│   ├── customize-dialog.js   # Customize Item dialog handler
│   ├── select-dialog.js      # Item selection dialog (placeholder)
│   ├── augment-selector.js  # Augment selection handler
│   ├── str-weak-handler.js  # Strengths/Weaknesses calculator
│   ├── notes-handler.js      # Notes editor
│   ├── firmware-handler.js   # Firmware selection
│   └── utils.js             # Utility functions (entity resolution, etc.)
└── assets/
    ├── icons/
    │   ├── weapons/          # Weapon type icons
    │   ├── manufacturers/   # Manufacturer logos/banners
    │   └── elements/         # Element icons
    └── images/              # Other images
```

## Features Implemented

### ✅ Equipment Display
- 4 weapon slots in cross pattern with proper clip-path shapes
- Support slots (repkit, ordnance) with clip-path shapes
- Auxiliary slots (class-mod, shield, enhancement) with rectangular borders
- Rarity-based styling (gray, green, blue, purple, orange)
- Empty slot indicators (+)
- Weapon number badges (1-4)

### ✅ Customize Dialog
- Tab navigation (Select Item, Customize Item, Select Augment)
- Item creation flow
- Rarity selection
- Manufacturer selection
- Element selection
- Basic augment selection structure

### ✅ Strengths & Weaknesses
- Dynamic calculation based on equipment
- Two-column display (strengths/weaknesses)

### ✅ Notes Section
- Rich text editing
- Save/load from localStorage
- Edit mode toggle

### ✅ Utilities
- Entity resolution (equivalent to Og function)
- Icon path resolution
- Rarity color mapping
- Stat formatting

## Usage

1. Open `index.html` in a modern web browser
3. If the chunk file is not accessible, the app will use an empty data structure

## Game Data Loading

The app attempts to dynamically import the game data chunk file. If this fails, you may need to:

1. Ensure the chunk file path is correct relative to `index.html`
2. Or modify `game-data.js` to load data from a different source
3. Or embed the game data directly in `game-data.js`

To use local images:
1. Download images from the CDN
2. Place them in the `assets/` directory structure
3. Update `game-data.js` to use local paths

## Browser Compatibility

- Modern browsers with ES6 module support
- Chrome, Firefox, Edge (latest versions)
- Safari (latest versions)

## Notes

- The augment selection tab is a placeholder and needs full implementation
- Item library selection is not yet implemented
- Legendary base selection needs to be connected to actual game data
- Some advanced features from may not be fully implemented yet

## Development

To extend functionality:

1. **Add new item types**: Update `ITEM_SUBTYPES` in `game-data.js`
2. **Add new rarity colors**: Update `RARITY_MAP` in `game-data.js`
3. **Customize styling**: Modify CSS files in `css/` directory
4. **Add new handlers**: Create new JS files following the existing pattern

## License

This is a recreation/port for educational purposes.



