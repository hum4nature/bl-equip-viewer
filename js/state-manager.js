/**
 * State Manager
 * Centralized reactive state management for the application
 * Provides React-like state management without React
 */

export class StateManager {
  constructor(initialState = {}) {
    this.state = initialState;
    this.subscribers = [];
    this.logging = true; // Enable logging for debugging
  }
  
  /**
   * Update state and notify all subscribers
   */
  setState(updates) {
    const oldState = { ...this.state };
    this.state = { ...this.state, ...updates };
    
    if (this.logging) {
      console.log('[StateManager] State changed:', {
        updates,
        oldState,
        newState: this.state
      });
    }
    
    this.notifySubscribers();
  }
  
  /**
   * Subscribe to state changes
   * @param {Function} callback - Function to call when state changes
   * @returns {Function} Unsubscribe function
   */
  subscribe(callback) {
    this.subscribers.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index > -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }
  
  /**
   * Notify all subscribers of state change
   */
  notifySubscribers() {
    if (this.logging) {
      console.log('[StateManager] Notifying subscribers, count:', this.subscribers.length);
    }
    
    this.subscribers.forEach((callback, index) => {
      try {
        callback(this.state);
      } catch (error) {
        console.error(`[StateManager] Error in subscriber ${index}:`, error);
      }
    });
  }
  
  /**
   * Get current state
   */
  getState() {
    return { ...this.state };
  }
  
  /**
   * Enable or disable logging
   */
  setLogging(enabled) {
    this.logging = enabled;
  }
}

// Create and export a singleton instance
export const stateManager = new StateManager({
  currentSlotId: null,
  currentItem: null,
  equipment: {
    weapon1: null,
    weapon2: null,
    weapon3: null,
    weapon4: null,
    repkit: null,
    ordnance: null,
    'class-mod': null,
    shield: null,
    enhancement: null
  },
  dialogOpen: false,
  activeTab: 0, // 0: Select Item, 1: Customize Item, 2: Select Augment
  gameData: null,
  editable: false,
  onSaveCallback: null
});

