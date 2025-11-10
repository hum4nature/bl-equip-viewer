/**
 * Strengths & Weaknesses Handler
 * Calculates and displays strengths and weaknesses based on equipment
 */

export class StrWeakHandler {
  constructor(containerId, equipment) {
    this.container = document.getElementById(containerId);
    this.equipment = equipment;
    
    this.render();
    
    // Note: Equipment changes will be handled by re-rendering when items are updated
    // For now, we'll update manually when needed
  }
  
  render() {
    this.container.innerHTML = `
      <h2 class="str-weak__title">Strengths & Weaknesses</h2>
      <div class="str-weak__content">
        <div class="str-weak__section">
          <h3 class="str-weak__section-title">Strengths</h3>
          <ul class="str-weak__list" id="strengths-list">
            <!-- Will be populated -->
          </ul>
        </div>
        <div class="str-weak__section">
          <h3 class="str-weak__section-title">Weaknesses</h3>
          <ul class="str-weak__list" id="weaknesses-list">
            <!-- Will be populated -->
          </ul>
        </div>
      </div>
    `;
    
    this.update();
  }
  
  update() {
    const items = this.equipment.getAllItems();
    const strengths = this.calculateStrengths(items);
    const weaknesses = this.calculateWeaknesses(items);
    
    const strengthsList = document.getElementById('strengths-list');
    const weaknessesList = document.getElementById('weaknesses-list');
    
    if (strengthsList) {
      strengthsList.innerHTML = strengths.map(s => 
        `<li class="str-weak__item str-weak__item--strength">${s}</li>`
      ).join('');
    }
    
    if (weaknessesList) {
      weaknessesList.innerHTML = weaknesses.map(w => 
        `<li class="str-weak__item str-weak__item--weakness">${w}</li>`
      ).join('');
    }
  }
  
  calculateStrengths(items) {
    const strengths = [];
    
    // Analyze equipment loadout
    const weapons = Object.values(items).filter(item => 
      item && item.type === 'bl4-weapon'
    );
    
    if (weapons.length > 0) {
      strengths.push(`Equipped ${weapons.length} weapon(s)`);
    }
    
    // Add more analysis based on item properties
    // This is a simplified version
    
    return strengths.length > 0 ? strengths : ['No equipment analyzed'];
  }
  
  calculateWeaknesses(items) {
    const weaknesses = [];
    
    // Analyze for missing coverage
    const weapons = Object.values(items).filter(item => 
      item && item.type === 'bl4-weapon'
    );
    
    if (weapons.length === 0) {
      weaknesses.push('No weapons equipped');
    }
    
    return weaknesses.length > 0 ? weaknesses : ['No weaknesses detected'];
  }
}

export default StrWeakHandler;

