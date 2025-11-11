/**
 * Equipment Component
 * Main equipment slots display and interaction
 * Now uses centralized state manager for reactive updates
 */

import { resolveEntity, getItemIcon, getRarityColor } from './utils.js';
import { getAssetUrl } from './game-data.js';
import { stateManager } from './state-manager.js';

export class Equipment {
  constructor(containerId, gameData) {
    this.container = document.getElementById(containerId);
    this.gameData = gameData;
    this.slotClickCallbacks = [];
    
    // Store gameData in state
    stateManager.setState({ gameData });
    
    // Subscribe to state changes and re-render when equipment changes
    this.unsubscribe = stateManager.subscribe((state) => {
      // Re-render if equipment or editable state changed
      if (state.equipment !== undefined || state.editable !== undefined) {
        console.log('[Equipment] State changed, re-rendering');
        this.render();
      }
    });
    
    // Set up event delegation on stable container
    this.setupEventDelegation();
    
    this.render();
  }
  
  setupEventDelegation() {
    // Attach click handler to stable container for all slot clicks
    this.container.addEventListener('click', (e) => {
      // Find the closest slot element
      const slotElement = e.target.closest('[data-slot-id]');
      if (slotElement) {
        const slotId = slotElement.dataset.slotId;
        const state = stateManager.getState();
        const item = state.equipment[slotId] || null;
        
        console.log('[Equipment] Slot clicked via delegation:', slotId, item);
        this.triggerSlotClick(slotId, item);
      }
    });
  }
  
  render() {
    const state = stateManager.getState();
    const equipment = state.equipment || {};
    const editable = state.editable || false;
    
    console.log('[Equipment] Rendering with state:', { equipment, editable });
    
    this.container.innerHTML = '';
    this.container.className = 'equipment' + (editable ? ' equipment--editable' : '');
    
    // Weapons section
    const weaponsSection = this.createWeaponsSection(equipment);
    this.container.appendChild(weaponsSection);
    
    // Support section
    const supportSection = this.createSupportSection(equipment);
    this.container.appendChild(supportSection);
    
    // Auxiliaries section
    const auxiliariesSection = this.createAuxiliariesSection(equipment);
    this.container.appendChild(auxiliariesSection);
  }
  
  createWeaponsSection(equipment) {
    const weaponsContainer = document.createElement('div');
    weaponsContainer.className = 'equipment__weapons';
    
    // Create 4 weapon slots in cross pattern
    for (let i = 1; i <= 4; i++) {
      const weaponSlot = this.createWeaponSlot(i, equipment);
      weaponsContainer.appendChild(weaponSlot);
    }
    
    return weaponsContainer;
  }
  
  createWeaponSlot(number, equipment) {
    const weaponDiv = document.createElement('div');
    weaponDiv.className = `equipment__weapon equipment__weapon--n${number}`;
    
    const slotId = `weapon${number}`;
    const item = equipment[slotId] || null;
    
    // Add data attribute for event delegation
    weaponDiv.setAttribute('data-slot-id', slotId);
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
        // Fallback to CDN if local image fails
        img.onerror = function() {
          if (!this.src.includes('assets-ng.maxroll.gg')) {
            this.src = 'https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/' + iconUrl.replace('./assets/db/assets/', '');
          }
        };
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
    
    // Event delegation handled by setupEventDelegation - no need to attach here
    
    return weaponDiv;
  }
  
  createSupportSection(equipment) {
    const supportContainer = document.createElement('div');
    supportContainer.className = 'equipment__support';
    
    const usableContainer = document.createElement('div');
    usableContainer.className = 'equipment__supportUsable';
    
    // Repkit slot
    const repkitSlot = this.createSupportSlot('repkit', 'bl4-repkit', equipment);
    usableContainer.appendChild(repkitSlot);
    
    // Ordnance slot
    const ordnanceSlot = this.createSupportSlot('ordnance', 'bl4-ordnance', equipment);
    usableContainer.appendChild(ordnanceSlot);
    
    supportContainer.appendChild(usableContainer);
    return supportContainer;
  }
  
  createSupportSlot(slotId, type, equipment) {
    const slotDiv = document.createElement('div');
    slotDiv.className = `equipment__${slotId}`;
    
    const item = equipment[slotId] || null;
    
    // Add data attribute for event delegation
    slotDiv.setAttribute('data-slot-id', slotId);
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
        // Fallback to CDN if local image fails
        img.onerror = function() {
          if (!this.src.includes('assets-ng.maxroll.gg')) {
            this.src = 'https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/' + iconUrl.replace('./assets/db/assets/', '');
          }
        };
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
    
    // Event delegation handled by setupEventDelegation - no need to attach here
    
    return slotDiv;
  }
  
  createAuxiliariesSection(equipment) {
    const auxContainer = document.createElement('div');
    auxContainer.className = 'equipment__auxiliaries';
    
    // Class Mod slot
    const classModSlot = this.createAuxiliarySlot('class-mod', 'bl4-class-mod', equipment);
    auxContainer.appendChild(classModSlot);
    
    // Shield slot
    const shieldSlot = this.createAuxiliarySlot('shield', 'bl4-shield', equipment);
    auxContainer.appendChild(shieldSlot);
    
    // Enhancement slot
    const enhancementSlot = this.createAuxiliarySlot('enhancement', 'bl4-enhancement', equipment);
    auxContainer.appendChild(enhancementSlot);
    
    return auxContainer;
  }
  
  createAuxiliarySlot(slotId, type, equipment) {
    const slotDiv = document.createElement('div');
    slotDiv.className = `equipment__${slotId}`;
    
    const item = equipment[slotId] || null;
    
    // Add data attribute for event delegation
    slotDiv.setAttribute('data-slot-id', slotId);
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
        // Fallback to CDN if local image fails
        img.onerror = function() {
          if (!this.src.includes('assets-ng.maxroll.gg')) {
            this.src = 'https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/' + iconUrl.replace('./assets/db/assets/', '');
          }
        };
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
    
    // Event delegation handled by setupEventDelegation - no need to attach here
    
    return slotDiv;
  }
  
  setEditable(editable) {
    console.log('[Equipment] setEditable called:', editable);
    stateManager.setState({ editable });
    // Re-render will happen automatically via subscription
  }
  
  isEditable() {
    return stateManager.getState().editable || false;
  }
  
  setItem(slotId, item) {
    console.log('[Equipment] setItem called:', slotId, item);
    const state = stateManager.getState();
    stateManager.setState({
      equipment: {
        ...state.equipment,
        [slotId]: item
      }
    });
    // Re-render will happen automatically via subscription
  }
  
  getItem(slotId) {
    const state = stateManager.getState();
    return state.equipment[slotId] || null;
  }
  
  getAllItems() {
    const state = stateManager.getState();
    return { ...state.equipment };
  }
  
  onSlotClick(callback) {
    this.slotClickCallbacks.push(callback);
  }
  
  triggerSlotClick(slotId, item) {
    const state = stateManager.getState();
    const editable = state.editable || false;
    
    console.log('[Equipment] triggerSlotClick:', slotId, item, 'Editable:', editable);
    
    if (!editable) {
      console.log('[Equipment] Slot click ignored - not editable');
      return;
    }
    
    console.log('[Equipment] Triggering slot click callbacks, count:', this.slotClickCallbacks.length);
    this.slotClickCallbacks.forEach(cb => {
      try {
        cb(slotId, item || null);
      } catch (error) {
        console.error('[Equipment] Error in slot click callback:', error);
      }
    });
  }
  
  /**
   * Cleanup - unsubscribe from state changes
   */
  destroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}

