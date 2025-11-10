/**
 * Utility Functions
 * Entity resolution and helper functions
 */

import { getItemTypeIcon, getAssetUrlSync, RARITY_MAP } from './game-data.js';

/**
 * Resolve entity from item data (equivalent to Og function)
 * Converts item data structure to display entity
 */
export function resolveEntity(item, gameData) {
  if (!item || !item.type) return null;
  
  const { type, customAttr = {}, id } = item;
  const rarity = customAttr.rarity ?? 0;
  const rarityInfo = RARITY_MAP[rarity] || RARITY_MAP[0];
  
  // Get entity type info
  let entityType = type;
  if (type === 'bl4-weapon') entityType = 'bl4-weapon';
  else if (type === 'bl4-repkit') entityType = 'bl4-repkit';
  else if (type === 'bl4-ordnance') entityType = 'bl4-ordnance';
  else if (type === 'bl4-class-mod') entityType = 'bl4-class-mod';
  else if (type === 'bl4-shield') entityType = 'bl4-shield';
  else if (type === 'bl4-enhancement') entityType = 'bl4-enhancement';
  
  const entity = {
    type: entityType,
    rarity: rarityInfo.color,
    rarityValue: rarity,
    id: id || '',
    customAttr: customAttr
  };
  
  // Add type-specific data
  if (entityType === 'bl4-weapon' || entityType === 'bl4-ordnance' || entityType === 'bl4-shield') {
    entity.subtype = customAttr.type || '';
  }
  
  // Add manufacturer info
  if (customAttr.manufacturerId && gameData.manufacturers) {
    const manufacturer = gameData.manufacturers[customAttr.manufacturerId];
    if (manufacturer) {
      entity.manufacturer = manufacturer.name;
      entity.manufacturerId = customAttr.manufacturerId;
    }
  }
  
  // Add element info
  if (customAttr.elementId && gameData.elements) {
    const element = gameData.elements[customAttr.elementId];
    if (element) {
      entity.element = element.name;
      entity.elementId = customAttr.elementId;
    }
  }
  
  // Add legendary base info
  if (customAttr.legendaryId && gameData.weapons) {
    // Look up legendary weapon data
    entity.legendaryId = customAttr.legendaryId;
  }
  
  // Add augments
  if (customAttr.augmentIds) {
    entity.augments = customAttr.augmentIds;
  }
  
  // Add stat augments
  if (customAttr.statAugmentIds) {
    entity.statAugments = customAttr.statAugmentIds;
  }
  
  // Add firmware
  if (customAttr.firmwareId && gameData.firmwares) {
    const firmware = gameData.firmwares[customAttr.firmwareId];
    if (firmware) {
      entity.firmware = firmware.name;
      entity.firmwareId = customAttr.firmwareId;
    }
  }
  
  return entity;
}

/**
 * Get icon path for an item
 */
export function getItemIcon(entity, gameData) {
  if (!entity) return '';
  
  const { type, subtype } = entity;
  
  // Get base icon path
  const iconPath = getItemTypeIcon(type, subtype);
  return getAssetUrlSync(iconPath);
}

/**
 * Get rarity color class
 */
export function getRarityColor(rarity) {
  const rarityInfo = RARITY_MAP[rarity] || RARITY_MAP[0];
  return rarityInfo.color;
}

/**
 * Format stats for display
 */
export function formatStats(stats) {
  if (!stats) return [];
  
  return Object.entries(stats).map(([key, value]) => ({
    name: formatStatName(key),
    value: formatStatValue(value)
  }));
}

/**
 * Format stat name
 */
function formatStatName(key) {
  const statNames = {
    damage: 'Damage',
    accuracy: 'Accuracy',
    reloadSpeed: 'Reload Speed',
    fireRate: 'Fire Rate',
    magazineSize: 'Magazine Size',
    criticalDamage: 'Critical Damage',
    splashRadius: 'Splash Radius',
    ammoPerShot: 'Ammo Per Shot',
    capacity: 'Capacity',
    shieldRegenRate: 'Shield Regen Rate',
    shieldRegenDelay: 'Shield Regen Delay',
    cooldown: 'Cooldown',
    duration: 'Duration',
    heal: 'Heal',
    healOverTime: 'Heal Over Time'
  };
  
  return statNames[key] || key;
}

/**
 * Format stat value
 */
function formatStatValue(value) {
  if (typeof value === 'number') {
    if (value % 1 === 0) {
      return value.toString();
    }
    return value.toFixed(2);
  }
  return String(value);
}

/**
 * Calculate DPS from stats
 */
export function calculateDPS(stats) {
  if (!stats) return 0;
  
  const damage = stats.damage || 0;
  const fireRate = stats.fireRate || 1;
  
  return damage * fireRate;
}

/**
 * Clone deep (simple implementation)
 */
export function cloneDeep(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => cloneDeep(item));
  if (typeof obj === 'object') {
    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = cloneDeep(obj[key]);
      }
    }
    return cloned;
  }
}

/**
 * Get slot ID from entity type
 */
export function getSlotIdFromType(type) {
  const slotMap = {
    'bl4-weapon': 'weapon',
    'bl4-repkit': 'repkit',
    'bl4-ordnance': 'ordnance',
    'bl4-class-mod': 'class-mod',
    'bl4-shield': 'shield',
    'bl4-enhancement': 'enhancement'
  };
  
  return slotMap[type] || type;
}

/**
 * Get entity type from slot ID
 */
export function getTypeFromSlotId(slotId) {
  const typeMap = {
    'weapon1': 'bl4-weapon',
    'weapon2': 'bl4-weapon',
    'weapon3': 'bl4-weapon',
    'weapon4': 'bl4-weapon',
    'repkit': 'bl4-repkit',
    'ordnance': 'bl4-ordnance',
    'class-mod': 'bl4-class-mod',
    'shield': 'bl4-shield',
    'enhancement': 'bl4-enhancement'
  };
  
  // Extract base slot type
  if (slotId.startsWith('weapon')) return 'bl4-weapon';
  return typeMap[slotId] || slotId;
}

export default {
  resolveEntity,
  getItemIcon,
  getRarityColor,
  formatStats,
  calculateDPS,
  cloneDeep,
  getSlotIdFromType,
  getTypeFromSlotId
};

