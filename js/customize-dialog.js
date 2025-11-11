/**
 * Customize Dialog Handler
 * Manages the customize item dialog with tabs and all functionality
 * Now uses centralized state manager for reactive updates
 */

import { resolveEntity, getItemIcon, getRarityColor, getTypeFromSlotId } from './utils.js';
import { 
  ITEM_SUBTYPES, 
  RARITY_MAP, 
  getAssetUrlSync,
  getSubtypeIconPath,
  getAugmentsForItemType,
  getLegendaryItemsForType,
  parseAugmentDescription
} from './game-data.js';
import { stateManager } from './state-manager.js';

export class CustomizeDialog {
  constructor(containerId, gameData) {
    this.container = document.getElementById(containerId);
    this.gameData = gameData;
    
    // Store gameData in state
    stateManager.setState({ gameData });
    
    // Subscribe to state changes and re-render when dialog state changes
    this.unsubscribe = stateManager.subscribe((state) => {
      // Re-render if dialog-related state changed
      if (state.dialogOpen !== undefined || 
          state.currentSlotId !== undefined || 
          state.currentItem !== undefined || 
          state.activeTab !== undefined) {
        console.log('[CustomizeDialog] State changed, re-rendering');
        this.render();
      }
    });
    
    // Set up event delegation on stable container
    this.setupEventDelegation();
    
    this.render();
  }
  
  setupEventDelegation() {
    // Attach all event handlers to stable container
    this.container.addEventListener('click', (e) => {
      const state = stateManager.getState();
      
      // Tab switching
      const tabBtn = e.target.closest('._Editor__tabHeader_xylv7_12 button[data-tab]');
      if (tabBtn) {
        e.preventDefault();
        e.stopPropagation();
        const tabIndex = parseInt(tabBtn.dataset.tab);
        console.log('[CustomizeDialog] Tab clicked:', tabIndex);
        stateManager.setState({ activeTab: tabIndex });
        return;
      }
      
      // Close button
      if (e.target.closest('.customize-dialog__close')) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[CustomizeDialog] Close button clicked');
        this.close();
        return;
      }
      
      // Create item buttons
      const createBtn = e.target.closest('button[data-action="create"]');
      if (createBtn) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[CustomizeDialog] Create item button clicked:', createBtn.dataset);
        this.createItem(
          createBtn.dataset.type,
          createBtn.dataset.subtype,
          parseInt(createBtn.dataset.rarity)
        );
        return;
      }
      
      // Save button
      if (e.target.closest('#save-item-btn')) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[CustomizeDialog] Save button clicked');
        this.saveItem();
        return;
      }
      
      // Augment items
      const augmentItem = e.target.closest('.augment-item[data-augment-id]');
      if (augmentItem) {
        e.preventDefault();
        e.stopPropagation();
        const augmentId = augmentItem.dataset.augmentId;
        console.log('[CustomizeDialog] Augment clicked:', augmentId);
        this.toggleAugment(augmentId);
        return;
      }
    });
    
    // Handle input changes (rarity, manufacturer, element)
    this.container.addEventListener('change', (e) => {
      const state = stateManager.getState();
      const currentItem = state.currentItem;
      
      if (!currentItem) return;
      
      // Rarity select
      if (e.target.id === 'rarity-select') {
        const rarity = parseInt(e.target.value);
        console.log('[CustomizeDialog] Rarity changed:', rarity);
        stateManager.setState({
          currentItem: {
            ...currentItem,
            customAttr: {
              ...currentItem.customAttr,
              rarity: rarity
            }
          }
        });
        return;
      }
      
      // Manufacturer select
      if (e.target.id === 'manufacturer-select') {
        const manufacturerId = e.target.value || null;
        console.log('[CustomizeDialog] Manufacturer changed:', manufacturerId);
        const customAttr = { ...currentItem.customAttr };
        if (manufacturerId) {
          customAttr.manufacturerId = manufacturerId;
        } else {
          delete customAttr.manufacturerId;
        }
        stateManager.setState({
          currentItem: {
            ...currentItem,
            customAttr
          }
        });
        return;
      }
      
      // Element select
      if (e.target.id === 'element-select') {
        const elementId = e.target.value || null;
        console.log('[CustomizeDialog] Element changed:', elementId);
        const customAttr = { ...currentItem.customAttr };
        if (elementId) {
          customAttr.elementId = elementId;
        } else {
          delete customAttr.elementId;
        }
        stateManager.setState({
          currentItem: {
            ...currentItem,
            customAttr
          }
        });
        return;
      }
    });
    
    // Handle augment search
    this.container.addEventListener('input', (e) => {
      if (e.target.id === 'augment-search') {
        const searchTerm = e.target.value.toLowerCase();
        console.log('[CustomizeDialog] Augment search:', searchTerm);
        this.filterAugments(searchTerm);
        return;
      }
    });
  }
  
  render() {
    const state = stateManager.getState();
    const activeTab = state.activeTab || 0;
    const dialogOpen = state.dialogOpen || false;
    
    console.log('[CustomizeDialog] Rendering with state:', { activeTab, dialogOpen, currentSlotId: state.currentSlotId });
    
    // Set display based on dialogOpen state
    this.container.style.display = dialogOpen ? 'flex' : 'none';
    
    this.container.innerHTML = `
      <div class="_Editor_xylv7_1">
        <div class="_Editor__inner_xylv7_2">
          <button class="customize-dialog__close">×</button>
          <div class="_Editor__tabHeader_xylv7_12">
            <button class="${activeTab === 0 ? 'active' : ''}" data-tab="0">Select Item</button>
            <button class="${activeTab === 1 ? 'active' : ''}" data-tab="1">Customize Item</button>
            <button class="${activeTab === 2 ? 'active' : ''}" data-tab="2">Select Augment</button>
          </div>
          <div class="_Editor__tabContent_xylv7_16">
            <div class="_Editor__tabContentInner_xylv7_21" id="customize-dialog-tab-content">
              <!-- Tab content will be populated dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Close on backdrop click
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container) {
        this.close();
      }
    });
    
    // Render tab content
    this.renderTabContent();
  }
  
  updateTabs() {
    const state = stateManager.getState();
    const activeTab = state.activeTab || 0;
    
    const tabs = this.container.querySelectorAll('._Editor__tabHeader_xylv7_12 button');
    tabs.forEach((tab, index) => {
      if (index === activeTab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  
  renderTabContent() {
    const state = stateManager.getState();
    const activeTab = state.activeTab || 0;
    
    console.log('[CustomizeDialog] renderTabContent, activeTab:', activeTab);
    
    const content = this.container.querySelector('#customize-dialog-tab-content');
    if (!content) {
      console.warn('[CustomizeDialog] Tab content container not found');
      return;
    }
    
    if (activeTab === 0) {
      content.innerHTML = this.renderSelectItemTab();
    } else if (activeTab === 1) {
      content.innerHTML = this.renderCustomizeItemTab();
    } else if (activeTab === 2) {
      content.innerHTML = this.renderSelectAugmentTab();
    }
    
    // Update tab active states
    this.updateTabs();
  }
  
  renderSelectItemTab() {
    const state = stateManager.getState();
    const currentSlotId = state.currentSlotId;
    const currentItem = state.currentItem;
    
    console.log('[CustomizeDialog] renderSelectItemTab, currentSlotId:', currentSlotId, 'currentItem:', currentItem);
    
    // Handle case where slotId is not set yet
    if (!currentSlotId) {
      return '<p>Please select a slot first.</p>';
    }
    
    const entityType = getTypeFromSlotId(currentSlotId);
    const subtypes = ITEM_SUBTYPES[entityType] || [];
    
    console.log('[CustomizeDialog] Entity type:', entityType, 'Subtypes:', subtypes);
    
    let html = '<div class="_Editor__baseSelector_xylv7_74">';
    html += '<span class="_Editor__subTitle_xylv7_103">Create New Item</span>';
    
    // Purple row (Epic/Rarity 3)
    html += '<div class="_Editor__baseSelectorInner_xylv7_80">';
    subtypes.forEach(([id, name]) => {
      const isActive = currentItem?.customAttr?.type === id && currentItem?.customAttr?.rarity === 3;
      html += `
        <button class="_Card_okol8_1 _Editor__base_xylv7_74 ${isActive ? '_Editor__base--active_xylv7_74' : ''}" 
                data-action="create" data-type="${entityType}" data-subtype="${id}" data-rarity="3" 
                style="cursor: pointer; border: none; background: transparent; padding: 0;">
          <div class="_TintedImage2_1wodz_11 _Editor__baseIcon_xylv7_115 _Editor__baseIcon--purple_xylv7_115" style="--tint-color: rgb(185, 76, 220);">
            <img class="_TintedImage2__img_1wodz_17" src="${getAssetUrlSync(getSubtypeIconPath(id))}" alt="${name}" onerror="this.src='https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/${getSubtypeIconPath(id)}'">
          </div>
          <span class="_Editor__baseText_xylv7_103">${name}</span>
        </button>
      `;
    });
    html += '</div>';
    
    // Yellow/Orange row (Legendary/Rarity 4)
    html += '<div class="_Editor__baseSelectorInner_xylv7_80">';
    subtypes.forEach(([id, name]) => {
      const isActive = currentItem?.customAttr?.type === id && currentItem?.customAttr?.rarity === 4;
      html += `
        <button class="_Card_okol8_1 _Editor__base_xylv7_74 ${isActive ? '_Editor__base--active_xylv7_74' : ''}" 
                data-action="create" data-type="${entityType}" data-subtype="${id}" data-rarity="4" 
                style="cursor: pointer; border: none; background: transparent; padding: 0;">
          <div class="_TintedImage2_1wodz_11 _Editor__baseIcon_xylv7_115 _Editor__baseIcon--yellow_xylv7_115" style="--tint-color: rgb(240, 154, 24);">
            <img class="_TintedImage2__img_1wodz_17" src="${getAssetUrlSync(getSubtypeIconPath(id))}" alt="${name}" onerror="this.src='https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/${getSubtypeIconPath(id)}'">
          </div>
          <span class="_Editor__baseText_xylv7_103">${name}</span>
        </button>
      `;
    });
    html += '</div>';
    
    html += '</div>';
    
    // Event delegation handled by setupEventDelegation - no need to attach here
    
    return html;
  }
  
  renderCustomizeItemTab() {
    const state = stateManager.getState();
    const currentItem = state.currentItem;
    const gameData = state.gameData || this.gameData;
    
    console.log('[CustomizeDialog] renderCustomizeItemTab, currentItem:', currentItem);
    
    if (!currentItem) {
      return '<p>No item selected. Please select an item first.</p>';
    }
    
    const entity = resolveEntity(currentItem, gameData);
    const rarity = currentItem.customAttr?.rarity ?? 0;
    
    let html = '<div class="_Header_126qe_1">';
    html += '<div class="_Header__content_126qe_19">';
    html += '<div class="_Header__left_126qe_28">';
    
    // Title
    html += `<div class="_Header__title_126qe_9">${entity.subtype || 'Item'}</div>`;
    
    // Rarity selector
    html += '<select class="_Header__raritySelect_126qe_15" id="rarity-select">';
    Object.entries(RARITY_MAP).forEach(([value, info]) => {
      html += `<option value="${value}" ${value == rarity ? 'selected' : ''}>${info.name}</option>`;
    });
    html += '</select>';
    
    html += '</div>'; // _Header__left
    html += '</div>'; // _Header__content
    html += '</div>'; // _Header
    
    // Item editor section
    html += '<div class="_Editor__itemEditor_xylv7_129">';
    html += '<div class="_Editor__itemEditorInner_xylv7_134">';
    
    // Manufacturer selector (if applicable)
    if (entity.type === 'bl4-weapon' || entity.type === 'bl4-ordnance' || entity.type === 'bl4-shield') {
      html += '<div style="margin-bottom: 12px;">';
      html += '<label style="color: rgb(var(--maxroll-color-white-1)); font-family: var(--maxroll-font-sans); font-size: 14px; display: block; margin-bottom: 4px;">Manufacturer</label>';
      html += '<select id="manufacturer-select" style="width: 100%; padding: 8px; background: rgb(var(--maxroll-color-dark-4)); border: 1px solid rgb(var(--maxroll-color-dark-5)); color: rgb(var(--maxroll-color-white-2)); border-radius: 4px;">';
      html += '<option value="">None</option>';
      if (gameData.manufacturers) {
        Object.entries(gameData.manufacturers).forEach(([id, mfr]) => {
          html += `<option value="${id}" ${entity.manufacturerId === id ? 'selected' : ''}>${mfr.name}</option>`;
        });
      }
      html += '</select>';
      html += '</div>';
    }
    
    // Element selector (if applicable)
    if (entity.type === 'bl4-weapon' || entity.type === 'bl4-ordnance') {
      html += '<div style="margin-bottom: 12px;">';
      html += '<label style="color: rgb(var(--maxroll-color-white-1)); font-family: var(--maxroll-font-sans); font-size: 14px; display: block; margin-bottom: 4px;">Element</label>';
      html += '<select id="element-select" style="width: 100%; padding: 8px; background: rgb(var(--maxroll-color-dark-4)); border: 1px solid rgb(var(--maxroll-color-dark-5)); color: rgb(var(--maxroll-color-white-2)); border-radius: 4px;">';
      html += '<option value="">None</option>';
      if (gameData.elements) {
        Object.entries(gameData.elements).forEach(([id, elem]) => {
          html += `<option value="${id}" ${entity.elementId === id ? 'selected' : ''}>${elem.name}</option>`;
        });
      }
      html += '</select>';
      html += '</div>';
    }
    
    html += '</div>'; // _Editor__itemEditorInner
    html += '</div>'; // _Editor__itemEditor
    
    // Save button
    html += '<div style="margin-top: 24px;">';
    html += '<button id="save-item-btn" style="padding: 8px 16px; background: rgb(var(--maxroll-color-blue)); color: rgb(var(--maxroll-color-white-1)); border: none; border-radius: 4px; cursor: pointer; font-family: var(--maxroll-font-sans); font-size: 14px; font-weight: 600;">Save</button>';
    html += '</div>';
    
    // Event delegation handled by setupEventDelegation - no need to attach here
    
    return html;
  }
  
  renderSelectAugmentTab() {
    const state = stateManager.getState();
    const currentItem = state.currentItem;
    const currentSlotId = state.currentSlotId;
    const gameData = state.gameData || this.gameData;
    
    console.log('[CustomizeDialog] renderSelectAugmentTab, currentItem:', currentItem, 'currentSlotId:', currentSlotId);
    
    if (!currentItem || !currentSlotId) {
      return '<p>Please select an item first.</p>';
    }
    
    const entityType = getTypeFromSlotId(currentSlotId);
    const augments = getAugmentsForItemType(gameData, entityType, currentItem);
    const currentAugmentIds = currentItem.customAttr?.augmentIds || [];
    
    console.log('[CustomizeDialog] Entity type:', entityType, 'Augments found:', augments.length);
    
    let html = '<div style="padding: 16px;">';
    
    // Search bar
    html += '<input type="text" id="augment-search" placeholder="Search..." style="width: 100%; padding: 8px; margin-bottom: 16px; background: rgb(var(--maxroll-color-dark-4)); border: 1px solid rgb(var(--maxroll-color-dark-5)); color: rgb(var(--maxroll-color-white-2)); border-radius: 4px; font-family: var(--maxroll-font-sans);">';
    
    // Augment list
    html += '<div id="augment-list" style="max-height: 400px; overflow-y: auto;">';
    
    if (augments.length === 0) {
      html += '<p style="color: rgb(var(--maxroll-color-grey-2)); text-align: center; padding: 32px;">No augments available for this item type.</p>';
    } else {
      augments.forEach((augment, index) => {
        const isSelected = currentAugmentIds.includes(augment.id);
        const description = parseAugmentDescription(augment.description || '');
        const iconUrl = getAssetUrlSync(augment.icon || 'icons/item-augments/augment-default.webp');
        
        html += `
          <div class="augment-item" data-augment-id="${augment.id}" 
               style="padding: 12px; margin-bottom: 8px; background: ${isSelected ? 'rgba(53, 146, 255, 0.2)' : 'rgb(var(--maxroll-color-dark-4))'}; 
                      border: 1px solid ${isSelected ? 'rgb(var(--maxroll-color-blue-2))' : 'rgb(var(--maxroll-color-dark-5))'}; 
                      border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 12px;"
               onmouseover="this.style.background='rgba(53, 146, 255, 0.1)'" 
               onmouseout="this.style.background='${isSelected ? 'rgba(53, 146, 255, 0.2)' : 'rgb(var(--maxroll-color-dark-4))'}'">
            <img src="${iconUrl}" alt="" style="width: 32px; height: 32px; flex-shrink: 0;" 
                 onerror="this.src='https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/icons/item-augments/augment-default.webp'">
            <div style="flex: 1;">
              <div style="color: rgb(var(--maxroll-color-white-1)); font-weight: 500; margin-bottom: 4px;">${augment.id}</div>
              <div style="color: rgb(var(--maxroll-color-grey-2)); font-size: 12px;">${description}</div>
            </div>
            ${isSelected ? '<span style="color: rgb(var(--maxroll-color-blue-2));">✓</span>' : ''}
          </div>
        `;
      });
    }
    
    html += '</div>'; // augment-list
    html += '</div>'; // padding container
    
    // Event delegation handled by setupEventDelegation - no need to attach here
    
    return html;
  }
  
  filterAugments(searchTerm) {
    const items = document.querySelectorAll('.augment-item');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
  }
  
  toggleAugment(augmentId) {
    const state = stateManager.getState();
    const currentItem = state.currentItem;
    
    if (!currentItem) return;
    
    const customAttr = { ...currentItem.customAttr };
    if (!customAttr.augmentIds) {
      customAttr.augmentIds = [];
    }
    
    const augmentIds = [...customAttr.augmentIds];
    const index = augmentIds.indexOf(augmentId);
    if (index > -1) {
      augmentIds.splice(index, 1);
    } else {
      augmentIds.push(augmentId);
    }
    
    customAttr.augmentIds = augmentIds;
    
    console.log('[CustomizeDialog] Toggling augment:', augmentId, 'New list:', augmentIds);
    
    stateManager.setState({
      currentItem: {
        ...currentItem,
        customAttr
      }
    });
    
    // Re-render will happen automatically via subscription
  }
  
  createItem(entityType, subtype, rarity) {
    console.log('[CustomizeDialog] createItem called:', entityType, subtype, rarity);
    
    const item = {
      type: entityType,
      id: '',
      customAttr: {
        rarity: rarity
      }
    };
    
    if (entityType === 'bl4-weapon' || entityType === 'bl4-ordnance' || entityType === 'bl4-shield') {
      item.customAttr.type = subtype;
    }
    
    stateManager.setState({
      currentItem: item,
      activeTab: 1 // Switch to customize tab
    });
    
    // Re-render will happen automatically via subscription
  }
  
  saveItem() {
    const state = stateManager.getState();
    const currentItem = state.currentItem;
    const onSaveCallback = state.onSaveCallback;
    
    console.log('[CustomizeDialog] saveItem called, currentItem:', currentItem);
    
    if (onSaveCallback && currentItem) {
      onSaveCallback(currentItem);
    }
    this.close();
  }
  
  open(slotId, currentItem, onSave) {
    console.log('[CustomizeDialog] open called:', slotId, currentItem);
    
    // Deep clone the item if it exists
    let item = null;
    if (currentItem && Object.keys(currentItem).length > 0) {
      item = JSON.parse(JSON.stringify(currentItem));
    }
    
    stateManager.setState({
      currentSlotId: slotId,
      currentItem: item,
      activeTab: item ? 1 : 0, // Go to customize tab if item exists, else select item tab
      dialogOpen: true,
      onSaveCallback: onSave
    });
    
    // Re-render will happen automatically via subscription
    console.log('[CustomizeDialog] Dialog opened, state:', stateManager.getState());
  }
  
  close() {
    console.log('[CustomizeDialog] close called');
    
    stateManager.setState({
      dialogOpen: false,
      currentSlotId: null,
      currentItem: null,
      onSaveCallback: null
    });
    
    // Re-render will happen automatically via subscription
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

// Export for use in main app
export default CustomizeDialog;

