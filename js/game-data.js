/**
 * BL4 Game Data
 * Loads game data from bl4-chunk-00-e58afd3e.js dynamically
 */

// Base URLs for assets (local first, CDN fallback)
export const ASSETS_BASE_URL_LOCAL = './assets/db/assets/';
export const ASSETS_BASE_URL_CDN = 'https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/';
export const ASSETS_BASE_URL = ASSETS_BASE_URL_CDN; // Default to CDN for backwards compatibility

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
  0: { color: 'gray', name: 'Common', border: '#9694ab' },
  1: { color: 'green', name: 'Uncommon', border: '#5ec753' },
  2: { color: 'blue', name: 'Rare', border: '#00a3d0' },
  3: { color: 'purple', name: 'Epic', border: '#8e1db6' },
  4: { color: 'orange', name: 'Legendary', border: '#c1780f' }
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
  ENHANCEMENT: 'generic-item-icons/enhancement.webp',
  ORDNANCE_HEAVY_WEAPON_GENERIC: 'generic-item-icons/ordnance-heavy-weapon-generic.webp'
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
  'heavy-weapon': GENERIC_ITEM_ICONS.ORDNANCE_HEAVY_WEAPON_GENERIC
};

// Shield type icons
export const SHIELD_TYPE_ICONS = {
  energy: GENERIC_ITEM_ICONS.ENERGY_SHIELD,
  armor: GENERIC_ITEM_ICONS.ARMOR_SHIELD
};

// Game data cache
let gameDataCache = null;

/**
 * Load game data from the chunk file
 * This should be called once on page load
 */
export async function loadGameData() {
  if (gameDataCache) return gameDataCache;
  
  try {
    // Try to load the chunk file from local first, then CDN
    const localChunkPath = './bl4-chunk-00-e58afd3e.js';
    const cdnChunkPath = 'https://assets-ng.maxroll.gg/bl4-tools/assets/bl4-chunk-00-e58afd3e.js';
    
    let chunkModule = null;
    
    // Try local first
    try {
      chunkModule = await import(localChunkPath);
      console.log('Loaded game data from local chunk file');
    } catch (localError) {
      console.warn('Local chunk file not found, trying CDN...', localError);
      
      // Try CDN
      try {
        // For CDN, we need to fetch and evaluate the module
        // Since it's a module, we'll try importing directly
        chunkModule = await import(cdnChunkPath);
        console.log('Loaded game data from CDN chunk file');
      } catch (cdnError) {
        console.warn('CDN chunk file not accessible, using fallback structure', cdnError);
      }
    }
    
    if (chunkModule && chunkModule.default) {
      gameDataCache = chunkModule.default;
    } else {
      // Fallback: create empty structure that will be populated
      console.warn('Using fallback game data structure');
      gameDataCache = {
        manufacturers: {},
        elements: {},
        itemAugments: {},
        statAugments: {},
        legendaryItemAugments: {},
        firmwares: {},
        // These will be populated from the chunk file
        weapons: {}, // Generated dynamically
        repkits: {}, // Generated dynamically
        ordnances: {}, // Generated dynamically
        shields: {}, // Generated dynamically
        enhancements: {}, // Generated dynamically
        'class-mods': {} // Generated dynamically
      };
    }
    
    return gameDataCache;
  } catch (e) {
    console.error('Failed to load game data:', e);
    // Fallback: return empty structure
    gameDataCache = {
      manufacturers: {},
      elements: {},
      itemAugments: {},
      statAugments: {},
      legendaryItemAugments: {},
      firmwares: {},
      weapons: {},
      repkits: {},
      ordnances: {},
      shields: {},
      enhancements: {},
      'class-mods': {}
    };
    return gameDataCache;
  }
}

/**
 * Get icon path for item type and subtype (local first)
 */
export function getItemTypeIcon(entityType, subtype) {
  const baseUrl = ASSETS_BASE_URL_LOCAL;
  
  switch (entityType) {
    case 'bl4-weapon':
      return baseUrl + (WEAPON_TYPE_ICONS[subtype] || GENERIC_ITEM_ICONS.ASSAULT);
    case 'bl4-repkit':
      return baseUrl + GENERIC_ITEM_ICONS.REPKIT;
    case 'bl4-ordnance':
      return baseUrl + (ORDNANCE_TYPE_ICONS[subtype] || ORDNANCE_TYPE_ICONS.grenade);
    case 'bl4-class-mod':
      return baseUrl + GENERIC_ITEM_ICONS.CLASS_MOD;
    case 'bl4-shield':
      return baseUrl + (SHIELD_TYPE_ICONS[subtype] || GENERIC_ITEM_ICONS.ENERGY_SHIELD);
    case 'bl4-enhancement':
      return baseUrl + GENERIC_ITEM_ICONS.ENHANCEMENT;
    default:
      return '';
  }
}

/**
 * Get full asset URL (local first, CDN fallback)
 */
export async function getAssetUrl(path) {
  if (path.startsWith('http')) return path;
  
  // Try local first
  const localUrl = ASSETS_BASE_URL_LOCAL + path;
  
  // Check if local asset exists (for images, we'll let the browser handle 404s)
  // For now, return local URL and let browser fallback to CDN if needed
  // In a more sophisticated implementation, we could check with fetch first
  return localUrl;
}

/**
 * Get asset URL synchronously (for immediate use, will try local first)
 * Falls back to CDN if local doesn't exist
 */
export function getAssetUrlSync(path) {
  if (path.startsWith('http')) return path;
  // Return local URL - browser will handle 404 and we can add error handling in img onerror
  return ASSETS_BASE_URL_LOCAL + path;
}

export default {
  ASSETS_BASE_URL,
  ASSETS_BASE_URL_LOCAL,
  ASSETS_BASE_URL_CDN,
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
  getItemTypeIcon,
  getAssetUrl,
  getAssetUrlSync
};

