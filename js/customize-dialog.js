/**
 * Customize Dialog Handler
 * Manages the customize item dialog with tabs and all functionality
 */

import { resolveEntity, getItemIcon, getRarityColor, getTypeFromSlotId } from './utils.js';
import { ITEM_SUBTYPES, RARITY_MAP, getAssetUrlSync } from './game-data.js';

export class CustomizeDialog {
  constructor(containerId, gameData) {
    this.container = document.getElementById(containerId);
    this.gameData = gameData;
    this.currentSlotId = null;
    this.currentItem = null;
    this.onSaveCallback = null;
    this.activeTab = 0; // 0: Select Item, 1: Customize Item, 2: Select Augment
    
    this.render();
  }
  
  render() {
    this.container.innerHTML = `
      <div class="_Editor_xylv7_1">
        <div class="_Editor__inner_xylv7_2">
          <button class="customize-dialog__close" onclick="this.closest('.customize-dialog').style.display='none'">×</button>
          <div class="_Editor__tabHeader_xylv7_12">
            <button class="${this.activeTab === 0 ? 'active' : ''}" data-tab="0">Select Item</button>
            <button class="${this.activeTab === 1 ? 'active' : ''}" data-tab="1">Customize Item</button>
            <button class="${this.activeTab === 2 ? 'active' : ''}" data-tab="2">Select Augment</button>
          </div>
          <div class="_Editor__tabContent_xylv7_16">
            <div class="_Editor__tabContentInner_xylv7_21" id="customize-dialog-tab-content">
              <!-- Tab content will be populated dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Tab switching
    const tabs = this.container.querySelectorAll('._Editor__tabHeader_xylv7_12 button');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeTab = parseInt(tab.dataset.tab);
        this.updateTabs();
        this.renderTabContent();
      });
    });
    
    // Close on backdrop click
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container) {
        this.close();
      }
    });
    
    // Only render tab content if slotId is set (not during initialization)
    if (this.currentSlotId) {
      this.renderTabContent();
    } else {
      // Set a placeholder during initialization
      const content = this.container.querySelector('#customize-dialog-tab-content');
      if (content) {
        content.innerHTML = '<p>Please select a slot first.</p>';
      }
    }
  }
  
  updateTabs() {
    const tabs = this.container.querySelectorAll('._Editor__tabHeader_xylv7_12 button');
    tabs.forEach((tab, index) => {
      if (index === this.activeTab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  
  renderTabContent() {
    const content = this.container.querySelector('#customize-dialog-tab-content');
    
    if (this.activeTab === 0) {
      content.innerHTML = this.renderSelectItemTab();
    } else if (this.activeTab === 1) {
      content.innerHTML = this.renderCustomizeItemTab();
    } else if (this.activeTab === 2) {
      content.innerHTML = this.renderSelectAugmentTab();
    }
  }
  
  renderSelectItemTab() {
    // Handle case where slotId is not set yet (during initialization)
    if (!this.currentSlotId) {
      return '<p>Please select a slot first.</p>';
    }
    const entityType = getTypeFromSlotId(this.currentSlotId);
    const subtypes = ITEM_SUBTYPES[entityType] || [];
    
    let html = '<div class="_Editor__baseSelector_xylv7_74">';
    html += '<div class="_Editor__baseSelectorInner_xylv7_80">';
    
    // Create item buttons using Card component
    subtypes.forEach(([id, name]) => {
      html += `
        <div class="_Card_okol8_1 _Editor__base_xylv7_74" data-action="create" data-type="${entityType}" data-subtype="${id}" data-rarity="3" style="cursor: pointer;">
          <div class="_TintedImage2_1wodz_11 _Editor__baseIcon_xylv7_115">
            <img class="_TintedImage2__img_1wodz_17" src="${getAssetUrlSync(`generic-item-icons/${id}.webp`)}" alt="${name}" onerror="this.src='https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/generic-item-icons/${id}.webp'">
          </div>
          <div class="_Editor__baseText_xylv7_103">${name}</div>
        </div>
      `;
    });
    
    html += '</div>';
    html += '</div>';
    
    return html;
  }
  
  renderCustomizeItemTab() {
    if (!this.currentItem) {
      return '<p>No item selected. Please select an item first.</p>';
    }
    
    const entity = resolveEntity(this.currentItem, this.gameData);
    const rarity = this.currentItem.customAttr?.rarity ?? 0;
    
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
      if (this.gameData.manufacturers) {
        Object.entries(this.gameData.manufacturers).forEach(([id, mfr]) => {
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
      if (this.gameData.elements) {
        Object.entries(this.gameData.elements).forEach(([id, elem]) => {
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
    
    // Attach event listeners
    setTimeout(() => {
      // Create item buttons - use event delegation on the container
      const content = this.container.querySelector('#customize-dialog-tab-content');
      if (content) {
        content.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-action="create"]');
          if (btn) {
            this.createItem(
              btn.dataset.type,
              btn.dataset.subtype,
              parseInt(btn.dataset.rarity)
            );
          }
        });
      }
      
      // Save button
      const saveBtn = document.getElementById('save-item-btn');
      if (saveBtn) {
        saveBtn.addEventListener('click', () => this.saveItem());
      }
      
      const raritySelect = document.getElementById('rarity-select');
      if (raritySelect) {
        raritySelect.addEventListener('change', (e) => {
          this.currentItem.customAttr.rarity = parseInt(e.target.value);
        });
      }
      
      const manufacturerSelect = document.getElementById('manufacturer-select');
      if (manufacturerSelect) {
        manufacturerSelect.addEventListener('change', (e) => {
          if (e.target.value) {
            this.currentItem.customAttr.manufacturerId = e.target.value;
          } else {
            delete this.currentItem.customAttr.manufacturerId;
          }
        });
      }
      
      const elementSelect = document.getElementById('element-select');
      if (elementSelect) {
        elementSelect.addEventListener('change', (e) => {
          if (e.target.value) {
            this.currentItem.customAttr.elementId = e.target.value;
          } else {
            delete this.currentItem.customAttr.elementId;
          }
        });
      }
    }, 0);
    
    return html;
  }
  
  renderSelectAugmentTab() {
    return '<p>Augment selection will be implemented here.</p>';
  }
  
  createItem(entityType, subtype, rarity) {
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
    
    this.currentItem = item;
    this.activeTab = 1; // Switch to customize tab
    this.updateTabs();
    this.renderTabContent();
  }
  
  saveItem() {
    if (this.onSaveCallback && this.currentItem) {
      this.onSaveCallback(this.currentItem);
    }
    this.close();
  }
  
  open(slotId, currentItem, onSave) {
    console.log('CustomizeDialog.open called:', slotId, currentItem);
    this.currentSlotId = slotId;
    // Deep clone the item if it exists, otherwise create a basic structure
    if (currentItem && Object.keys(currentItem).length > 0) {
      this.currentItem = JSON.parse(JSON.stringify(currentItem));
      this.activeTab = 1; // Go to customize tab
    } else {
      this.currentItem = null;
      this.activeTab = 0; // Go to select item tab
    }
    this.onSaveCallback = onSave;
    
    // Show the dialog
    this.container.style.display = 'flex';
    this.updateTabs();
    this.renderTabContent();
    console.log('CustomizeDialog opened, display:', this.container.style.display);
  }
  
  close() {
    this.container.style.display = 'none';
    this.currentSlotId = null;
    this.currentItem = null;
    this.onSaveCallback = null;
  }
}

// Export for use in main app
export default CustomizeDialog;

