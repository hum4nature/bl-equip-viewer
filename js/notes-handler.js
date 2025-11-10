/**
 * Notes Handler
 * Rich text editing for notes section
 */

export class NotesHandler {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isEditing = false;
    this.notes = '';
    
    this.loadNotes();
    this.render();
  }
  
  render() {
    this.container.innerHTML = `
      <div class="notes__header">
        <h2 class="notes__title">Notes</h2>
        <button class="notes__edit-button" id="notes-edit-btn">Edit</button>
      </div>
      <div class="notes__content" id="notes-content" contenteditable="false">
        ${this.notes || 'Click Edit to add notes...'}
      </div>
    `;
    
    const editBtn = document.getElementById('notes-edit-btn');
    const content = document.getElementById('notes-content');
    
    editBtn.addEventListener('click', () => {
      this.toggleEdit();
    });
    
    content.addEventListener('blur', () => {
      if (this.isEditing) {
        this.saveNotes();
      }
    });
  }
  
  toggleEdit() {
    this.isEditing = !this.isEditing;
    const content = document.getElementById('notes-content');
    const editBtn = document.getElementById('notes-edit-btn');
    
    if (content) {
      content.contentEditable = this.isEditing ? 'true' : 'false';
      editBtn.textContent = this.isEditing ? 'Save' : 'Edit';
      
      if (this.isEditing) {
        content.focus();
      }
    }
  }
  
  saveNotes() {
    const content = document.getElementById('notes-content');
    if (content) {
      this.notes = content.textContent || content.innerText || '';
      // Save to localStorage
      localStorage.setItem('bl4-equipment-notes', this.notes);
    }
    this.isEditing = false;
    const editBtn = document.getElementById('notes-edit-btn');
    if (editBtn) {
      editBtn.textContent = 'Edit';
    }
  }
  
  loadNotes() {
    const saved = localStorage.getItem('bl4-equipment-notes');
    if (saved) {
      this.notes = saved;
    }
  }
}

export default NotesHandler;

