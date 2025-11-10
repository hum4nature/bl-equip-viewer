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
      <div class="customize-dialog__content">
        <div class="customize-dialog__header">
          <h2 class="customize-dialog__title">Customize Item</h2>
          <button class="customize-dialog__close" onclick="this.closest('.customize-dialog').style.display='none'">×</button>
        </div>
        <div class="customize-dialog__tabs">
          <button class="customize-dialog__tab ${this.activeTab === 0 ? 'active' : ''}" data-tab="0">Select Item</button>
          <button class="customize-dialog__tab ${this.activeTab === 1 ? 'active' : ''}" data-tab="1">Customize Item</button>
          <button class="customize-dialog__tab ${this.activeTab === 2 ? 'active' : ''}" data-tab="2">Select Augment</button>
        </div>
        <div class="customize-dialog__tab-content" id="customize-dialog-tab-content">
          <!-- Tab content will be populated dynamically -->
        </div>
      </div>
    `;
    
    // Tab switching
    const tabs = this.container.querySelectorAll('.customize-dialog__tab');
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
    const tabs = this.container.querySelectorAll('.customize-dialog__tab');
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
    
    let html = '<div class="customize-dialog__section">';
    html += '<h3 class="customize-dialog__section-title">Create New Item</h3>';
    
    // Purple rarity items
    html += '<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px;">';
    subtypes.forEach(([id, name]) => {
      html += `
        <button class="customize-dialog__button" data-action="create" data-type="${entityType}" data-subtype="${id}" data-rarity="3">
          <img src="${getAssetUrlSync(`generic-item-icons/${id}.webp`)}" style="width: 32px; height: 32px;" alt="${name}" onerror="this.src='https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/generic-item-icons/${id}.webp'">
          <span>${name}</span>
        </button>
      `;
    });
    html += '</div>';
    
    // Orange rarity items
    html += '<div style="display: flex; gap: 12px; flex-wrap: wrap;">';
    subtypes.forEach(([id, name]) => {
      html += `
        <button class="customize-dialog__button" data-action="create" data-type="${entityType}" data-subtype="${id}" data-rarity="4">
          <img src="${getAssetUrlSync(`generic-item-icons/${id}.webp`)}" style="width: 32px; height: 32px;" alt="${name}" onerror="this.src='https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/generic-item-icons/${id}.webp'">
          <span>${name}</span>
        </button>
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
    
    let html = '<div class="customize-dialog__section">';
    
    // Rarity selector
    html += '<div class="customize-dialog__field">';
    html += '<label class="customize-dialog__label">Rarity</label>';
    html += '<select class="customize-dialog__select" id="rarity-select">';
    Object.entries(RARITY_MAP).forEach(([value, info]) => {
      html += `<option value="${value}" ${value == rarity ? 'selected' : ''}>${info.name}</option>`;
    });
    html += '</select>';
    html += '</div>';
    
    // Manufacturer selector (if applicable)
    if (entity.type === 'bl4-weapon' || entity.type === 'bl4-ordnance' || entity.type === 'bl4-shield') {
      html += '<div class="customize-dialog__field">';
      html += '<label class="customize-dialog__label">Manufacturer</label>';
      html += '<select class="customize-dialog__select" id="manufacturer-select">';
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
      html += '<div class="customize-dialog__field">';
      html += '<label class="customize-dialog__label">Element</label>';
      html += '<select class="customize-dialog__select" id="element-select">';
      html += '<option value="">None</option>';
      if (this.gameData.elements) {
        Object.entries(this.gameData.elements).forEach(([id, elem]) => {
          html += `<option value="${id}" ${entity.elementId === id ? 'selected' : ''}>${elem.name}</option>`;
        });
      }
      html += '</select>';
      html += '</div>';
    }
    
    html += '</div>';
    
    // Save button
    html += '<div style="margin-top: 24px;">';
    html += '<button class="customize-dialog__button" id="save-item-btn">Save</button>';
    html += '</div>';
    
    // Attach event listeners
    setTimeout(() => {
      // Create item buttons
      const createButtons = content.querySelectorAll('[data-action="create"]');
      createButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          this.createItem(
            btn.dataset.type,
            btn.dataset.subtype,
            parseInt(btn.dataset.rarity)
          );
        });
      });
      
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

