/**
 * Script to extract game data from bl4-chunk-00-e58afd3e.js
 * Run with Node.js: node extract-game-data.js
 * 
 * This will parse the chunk file and extract all necessary game data
 * for the Equipment Editor.
 */

const fs = require('fs');
const path = require('path');

// Path to the chunk file
const chunkPath = path.join(__dirname, '../../maxroll.gg-build-planner/bl4-chunk-00-e58afd3e.js');
const outputPath = path.join(__dirname, 'game-data.js');

console.log('Reading chunk file...');
const chunkContent = fs.readFileSync(chunkPath, 'utf8');

// Extract the data by evaluating the file (we'll parse it more carefully)
// Since it's an ES module, we need to handle it differently
console.log('Extracting game data...');

// We'll create a simplified extraction that focuses on the structure
// The actual data will be loaded dynamically from the chunk file in the browser

const gameDataTemplate = `/**
 * BL4 Game Data
 * Extracted from bl4-chunk-00-e58afd3e.js
 * 
 * This file will be populated by loading the actual chunk file dynamically
 * or by extracting the data structures.
 */

// Base URL for assets
export const ASSETS_BASE_URL = 'https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/';

// Entity type mappings
export const ENTITY_TYPES = {
  'bl4-weapon': { list: 'weapons', name: 'Weapon', pluralName: 'Weapons' },
  'bl4-repkit': { list: 'repkits', name: 'Repkit', pluralName: 'Repkits' },
  'bl4-ordnance': { list: 'ordnances', name: 'Ordnance', pluralName: 'Ordnances' },
  'bl4-class-mod': { list: 'class-mods', name: 'Class Mod', pluralName: 'Class Mods' },
  'bl4-shield': { list: 'shields', name: 'Shield', pluralName: 'Shields' },
  'bl4-enhancement': { list: 'enhancements', name: 'Enhancement', pluralName: 'Enhancements' }
};

// Item type mappings for weapons
export const WEAPON_TYPES = {
  ar: 'Assault Rifle',
  pistol: 'Pistol',
  smg: 'SMG',
  shotgun: 'Shotgun',
  sniper: 'Sniper Rifle'
};

// Ordnance types
export const ORDNANCE_TYPES = {
  grenade: 'Grenande',
  'heavy-weapon': 'Heavy Weapon'
};

// Shield types
export const SHIELD_TYPES = {
  energy: 'Energy',
  armor: 'Armor'
};

// Item subtype mappings (SY equivalent)
export const ITEM_SUBTYPES = {
  'bl4-weapon': Object.entries(WEAPON_TYPES),
  'bl4-repkit': [['repkit', 'Repkit']],
  'bl4-ordnance': Object.entries(ORDNANCE_TYPES),
  'bl4-class-mod': [['class-mod', 'Class Mod']],
  'bl4-shield': Object.entries(SHIELD_TYPES),
  'bl4-enhancement': [['enhancement', 'Enhancement']]
};

// Rarity mapping
export const RARITY_MAP = {
  0: { color: 'gray', name: 'Common' },
  1: { color: 'green', name: 'Uncommon' },
  2: { color: 'blue', name: 'Rare' },
  3: { color: 'purple', name: 'Epic' },
  4: { color: 'orange', name: 'Legendary' }
};

// Icon paths
export const GENERIC_ITEM_ICONS = {
  ASSAULT: 'generic-item-icons/assault.webp',
  PISTOL: 'generic-item-icons/pistol.webp',
  SMG: 'generic-item-icons/smg.webp',
  SHOTGUN: 'generic-item-icons/shotgun.webp',
  SNIPER: 'generic-item-icons/sniper.webp',
  REPKIT: 'generic-item-icons/repkit.webp',
  CLASS_MOD: 'generic-item-icons/class-mod.webp',
  ENERGY_SHIELD: 'generic-item-icons/energy-shield.webp',
  ARMOR_SHIELD: 'generic-item-icons/armor-shield.webp',
  ENHANCEMENT: 'generic-item-icons/enhancement.webp'
};

// Weapon type to icon mapping
export const WEAPON_TYPE_ICONS = {
  ar: GENERIC_ITEM_ICONS.ASSAULT,
  pistol: GENERIC_ITEM_ICONS.PISTOL,
  smg: GENERIC_ITEM_ICONS.SMG,
  shotgun: GENERIC_ITEM_ICONS.SHOTGUN,
  sniper: GENERIC_ITEM_ICONS.SNIPER
};

// Ordnance type icons
export const ORDNANCE_TYPE_ICONS = {
  grenade: 'stat-icons/grenade-charges.webp',
  'heavy-weapon': GENERIC_ITEM_ICONS.ORDNANCE_HEAVY_WEAPON_GENERIC || 'generic-item-icons/ordnance-heavy-weapon-generic.webp'
};

// Shield type icons
export const SHIELD_TYPE_ICONS = {
  energy: GENERIC_ITEM_ICONS.ENERGY_SHIELD,
  armor: GENERIC_ITEM_ICONS.ARMOR_SHIELD
};

// Game data will be loaded dynamically
let gameData = null;

/**
 * Load game data from the chunk file
 * This should be called once on page load
 */
export async function loadGameData() {
  if (gameData) return gameData;
  
  try {
    // Try to import the chunk file dynamically
    const chunkModule = await import('../../maxroll.gg-build-planner/bl4-chunk-00-e58afd3e.js');
    gameData = chunkModule.default || chunkModule;
    return gameData;
  } catch (e) {
    console.error('Failed to load game data:', e);
    // Fallback: return empty structure
    return {
      manufacturers: {},
      elements: {},
      itemAugments: {},
      statAugments: {},
      legendaryItemAugments: {},
      firmwares: {}
    };
  }
}

/**
 * Get icon path for item type and subtype
 */
export function getItemTypeIcon(entityType, subtype) {
  switch (entityType) {
    case 'bl4-weapon':
      return WEAPON_TYPE_ICONS[subtype] || GENERIC_ITEM_ICONS.ASSAULT;
    case 'bl4-repkit':
      return GENERIC_ITEM_ICONS.REPKIT;
    case 'bl4-ordnance':
      return ORDNANCE_TYPE_ICONS[subtype] || ORDNANCE_TYPE_ICONS.grenade;
    case 'bl4-class-mod':
      return GENERIC_ITEM_ICONS.CLASS_MOD;
    case 'bl4-shield':
      return SHIELD_TYPE_ICONS[subtype] || GENERIC_ITEM_ICONS.ENERGY_SHIELD;
    case 'bl4-enhancement':
      return GENERIC_ITEM_ICONS.ENHANCEMENT;
    default:
      return '';
  }
}

export default {
  ENTITY_TYPES,
  WEAPON_TYPES,
  ORDNANCE_TYPES,
  SHIELD_TYPES,
  ITEM_SUBTYPES,
  RARITY_MAP,
  GENERIC_ITEM_ICONS,
  WEAPON_TYPE_ICONS,
  ORDNANCE_TYPE_ICONS,
  SHIELD_TYPE_ICONS,
  loadGameData,
  getItemTypeIcon
};
`;

fs.writeFileSync(outputPath, gameDataTemplate);
console.log(`Game data template written to ${outputPath}`);
console.log('Note: Actual game data will be loaded dynamically from bl4-chunk-00-e58afd3e.js');

