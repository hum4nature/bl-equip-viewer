/**
 * Firmware Handler
 * Handles firmware selection and display
 */

export class FirmwareHandler {
  constructor(gameData) {
    this.gameData = gameData;
  }
  
  getFirmwares() {
    if (!this.gameData.firmwares) return [];
    return Object.entries(this.gameData.firmwares).map(([id, firmware]) => ({
      id,
      ...firmware
    }));
  }
  
  getFirmwareById(id) {
    if (!this.gameData.firmwares) return null;
    return this.gameData.firmwares[id] || null;
  }
  
  renderFirmwareSelect(selectedId, onSelect) {
    const firmwares = this.getFirmwares();
    
    let html = '<select class="customize-dialog__select" id="firmware-select">';
    html += '<option value="">None</option>';
    
    firmwares.forEach(firmware => {
      html += `<option value="${firmware.id}" ${selectedId === firmware.id ? 'selected' : ''}>${firmware.name}</option>`;
    });
    
    html += '</select>';
    
    // Attach event listener
    setTimeout(() => {
      const select = document.getElementById('firmware-select');
      if (select && onSelect) {
        select.addEventListener('change', (e) => {
          onSelect(e.target.value);
        });
      }
    }, 0);
    
    return html;
  }
}

export default FirmwareHandler;

