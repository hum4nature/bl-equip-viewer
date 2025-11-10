/**
 * Equipment Component
 * Main equipment slots display and interaction
 */

import { resolveEntity, getItemIcon, getRarityColor } from './utils.js';
import { getAssetUrl } from './game-data.js';

export class Equipment {
  constructor(containerId, gameData) {
    this.container = document.getElementById(containerId);
    this.gameData = gameData;
    this.equipment = {
      weapon1: null,
      weapon2: null,
      weapon3: null,
      weapon4: null,
      repkit: null,
      ordnance: null,
      'class-mod': null,
      shield: null,
      enhancement: null
    };
    this.editable = false;
    this.slotClickCallbacks = [];
    
    this.render();
  }
  
  render() {
    this.container.innerHTML = '';
    this.container.className = 'equipment' + (this.editable ? ' equipment--editable' : '');
    
    // Weapons section
    const weaponsSection = this.createWeaponsSection();
    this.container.appendChild(weaponsSection);
    
    // Support section
    const supportSection = this.createSupportSection();
    this.container.appendChild(supportSection);
    
    // Auxiliaries section
    const auxiliariesSection = this.createAuxiliariesSection();
    this.container.appendChild(auxiliariesSection);
  }
  
  createWeaponsSection() {
    const weaponsContainer = document.createElement('div');
    weaponsContainer.className = 'equipment__weapons';
    
    // Create 4 weapon slots in cross pattern
    for (let i = 1; i <= 4; i++) {
      const weaponSlot = this.createWeaponSlot(i);
      weaponsContainer.appendChild(weaponSlot);
    }
    
    return weaponsContainer;
  }
  
  createWeaponSlot(number) {
    const weaponDiv = document.createElement('div');
    weaponDiv.className = `equipment__weapon equipment__weapon--n${number}`;
    
    const slotId = `weapon${number}`;
    const item = this.equipment[slotId];
    const rarity = item?.customAttr?.rarity ?? 0;
    const rarityColor = getRarityColor(rarity);
    
    weaponDiv.className += ` equipment__rarity--${rarityColor}`;
    
    // Weapon slot container
    const slotContainer = document.createElement('div');
    slotContainer.className = 'equipment__weaponSlot';
    
    // Border
    const border = document.createElement('div');
    border.className = 'equipment__weaponSlotBorder';
    slotContainer.appendChild(border);
    
    // Background
    const bg = document.createElement('div');
    bg.className = 'equipment__weaponSlotBkg';
    slotContainer.appendChild(bg);
    
    // Content
    const content = document.createElement('div');
    content.className = 'equipment__weaponContent';
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'equipment__weaponIconWrapper';
    
    if (item) {
      const entity = resolveEntity(item, this.gameData);
      const iconUrl = getItemIcon(entity, this.gameData);
      
      if (iconUrl) {
        const img = document.createElement('img');
        img.src = iconUrl;
        img.className = 'equipment__weaponIcon';
        img.alt = entity?.subtype || 'Weapon';
        iconWrapper.appendChild(img);
      }
    } else {
      const addSign = document.createElement('div');
      addSign.className = 'equipment__weaponAdd';
      addSign.textContent = '+';
      iconWrapper.appendChild(addSign);
    }
    
    content.appendChild(iconWrapper);
    slotContainer.appendChild(content);
    
    // Weapon number badge
    const numberBadge = document.createElement('div');
    numberBadge.className = 'equipment__weaponNumber';
    const numberDiv = document.createElement('div');
    numberDiv.textContent = number;
    numberBadge.appendChild(numberDiv);
    
    weaponDiv.appendChild(slotContainer);
    weaponDiv.appendChild(numberBadge);
    
    // Click handler
    if (this.editable) {
      weaponDiv.addEventListener('click', () => {
        this.triggerSlotClick(slotId, item);
      });
    }
    
    return weaponDiv;
  }
  
  createSupportSection() {
    const supportContainer = document.createElement('div');
    supportContainer.className = 'equipment__support';
    
    const usableContainer = document.createElement('div');
    usableContainer.className = 'equipment__supportUsable';
    
    // Repkit slot
    const repkitSlot = this.createSupportSlot('repkit', 'bl4-repkit');
    usableContainer.appendChild(repkitSlot);
    
    // Ordnance slot
    const ordnanceSlot = this.createSupportSlot('ordnance', 'bl4-ordnance');
    usableContainer.appendChild(ordnanceSlot);
    
    supportContainer.appendChild(usableContainer);
    return supportContainer;
  }
  
  createSupportSlot(slotId, type) {
    const slotDiv = document.createElement('div');
    slotDiv.className = `equipment__${slotId}`;
    
    const item = this.equipment[slotId];
    const rarity = item?.customAttr?.rarity ?? 0;
    const rarityColor = getRarityColor(rarity);
    
    slotDiv.className += ` equipment__rarity--${rarityColor}`;
    
    // Border
    const border = document.createElement('div');
    border.className = 'equipment__slotBorder';
    slotDiv.appendChild(border);
    
    // Background
    const bg = document.createElement('div');
    bg.className = 'equipment__slotBkg';
    if (slotId === 'repkit') {
      bg.className += ' equipment__slotBkg--flip';
    }
    slotDiv.appendChild(bg);
    
    // Content
    const content = document.createElement('div');
    content.className = 'equipment__slotContent';
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'equipment__slotIconWrapper';
    
    if (item) {
      const entity = resolveEntity(item, this.gameData);
      const iconUrl = getItemIcon(entity, this.gameData);
      
      if (iconUrl) {
        const img = document.createElement('img');
        img.src = iconUrl;
        img.className = 'equipment__slotIcon';
        img.alt = type;
        iconWrapper.appendChild(img);
      }
    } else {
      const addSign = document.createElement('div');
      addSign.className = 'equipment__slotAdd';
      addSign.textContent = '+';
      iconWrapper.appendChild(addSign);
    }
    
    content.appendChild(iconWrapper);
    slotDiv.appendChild(content);
    
    // Click handler
    if (this.editable) {
      slotDiv.addEventListener('click', () => {
        this.triggerSlotClick(slotId, item);
      });
    }
    
    return slotDiv;
  }
  
  createAuxiliariesSection() {
    const auxContainer = document.createElement('div');
    auxContainer.className = 'equipment__auxiliaries';
    
    // Class Mod slot
    const classModSlot = this.createAuxiliarySlot('class-mod', 'bl4-class-mod');
    auxContainer.appendChild(classModSlot);
    
    // Shield slot
    const shieldSlot = this.createAuxiliarySlot('shield', 'bl4-shield');
    auxContainer.appendChild(shieldSlot);
    
    // Enhancement slot
    const enhancementSlot = this.createAuxiliarySlot('enhancement', 'bl4-enhancement');
    auxContainer.appendChild(enhancementSlot);
    
    return auxContainer;
  }
  
  createAuxiliarySlot(slotId, type) {
    const slotDiv = document.createElement('div');
    slotDiv.className = `equipment__${slotId}`;
    
    const item = this.equipment[slotId];
    const rarity = item?.customAttr?.rarity ?? 0;
    const rarityColor = getRarityColor(rarity);
    
    slotDiv.className += ` equipment__rarity--${rarityColor}`;
    
    // Border (for auxiliaries, border is on the element itself)
    
    // Background
    const bg = document.createElement('div');
    bg.className = 'equipment__slotBkg';
    slotDiv.appendChild(bg);
    
    // Content
    const content = document.createElement('div');
    content.className = 'equipment__slotContent';
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'equipment__slotIconWrapper';
    
    if (item) {
      const entity = resolveEntity(item, this.gameData);
      const iconUrl = getItemIcon(entity, this.gameData);
      
      if (iconUrl) {
        const img = document.createElement('img');
        img.src = iconUrl;
        img.className = 'equipment__slotIcon';
        img.alt = type;
        iconWrapper.appendChild(img);
      }
    } else {
      const addSign = document.createElement('div');
      addSign.className = 'equipment__slotAdd';
      addSign.textContent = '+';
      iconWrapper.appendChild(addSign);
    }
    
    content.appendChild(iconWrapper);
    slotDiv.appendChild(content);
    
    // Click handler
    if (this.editable) {
      slotDiv.addEventListener('click', () => {
        this.triggerSlotClick(slotId, item);
      });
    }
    
    return slotDiv;
  }
  
  setEditable(editable) {
    this.editable = editable;
    this.render();
  }
  
  isEditable() {
    return this.editable;
  }
  
  setItem(slotId, item) {
    this.equipment[slotId] = item;
    this.render();
  }
  
  getItem(slotId) {
    return this.equipment[slotId];
  }
  
  getAllItems() {
    return { ...this.equipment };
  }
  
  onSlotClick(callback) {
    this.slotClickCallbacks.push(callback);
  }
  
  triggerSlotClick(slotId, item) {
    this.slotClickCallbacks.forEach(cb => cb(slotId, item || {}));
  }
}

