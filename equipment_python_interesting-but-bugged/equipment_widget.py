"""
Equipment Widget for Equipment Editor
Main equipment display with weapon, support, and auxiliary slots
Matches maxroll.gg design exactly
"""

from PyQt6.QtWidgets import QWidget, QVBoxLayout, QHBoxLayout
from PyQt6.QtCore import Qt, pyqtSignal
try:
    from .slot_widget import SlotWidget
    from . import styles
except ImportError:
    from slot_widget import SlotWidget
    import styles


class EquipmentWidget(QWidget):
    """Main Equipment widget displaying all equipment slots."""
    
    slot_clicked = pyqtSignal(str, dict)  # slot_id, current_item
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setObjectName("EquipmentWidget")
        self.editable = False
        
        # Equipment data
        self.equipment = {
            'weapon1': None,
            'weapon2': None,
            'weapon3': None,
            'weapon4': None,
            'repkit': None,
            'ordnance': None,
            'class-mod': None,
            'shield': None,
            'enhancement': None
        }
        
        # Create layout
        layout = QVBoxLayout(self)
        layout.setSpacing(32)
        layout.setContentsMargins(16, 16, 24, 24)
        
        # Weapons section (aspect ratio 1:1.1)
        weapons_widget = self._create_weapons_section()
        layout.addWidget(weapons_widget)
        
        # Support section (repkit, ordnance)
        support_widget = self._create_support_section()
        layout.addWidget(support_widget)
        
        # Auxiliaries section (class-mod, shield, enhancement)
        auxiliaries_widget = self._create_auxiliaries_section()
        layout.addWidget(auxiliaries_widget)
        
        # Apply styles
        self.setStyleSheet(styles.get_equipment_stylesheet())
    
    def _create_weapons_section(self) -> QWidget:
        """Create weapons section with 4 weapon slots in cross pattern."""
        container = QWidget()
        container.setObjectName("WeaponsContainer")
        
        # Set aspect ratio 1:1.1 (width:height)
        # Use a fixed width, height will be calculated
        container_width = 400
        container_height = int(container_width * 1.1)
        container.setFixedSize(container_width, container_height)
        
        # Create weapon slots with numbers
        self.weapon_slots = {}
        for i in range(1, 5):
            slot_id = f'weapon{i}'
            slot = SlotWidget('weapon', 'gray', i, container)  # weapon_number is 3rd positional arg
            slot.set_editable(self.editable)
            slot.clicked.connect(lambda checked=False, sid=slot_id: self._on_slot_clicked(sid))
            self.weapon_slots[slot_id] = slot
        
        # Position weapon slots according to CSS:
        # Weapon 1: left side, middle (top: 50%, left: 0, translate: 0 -50%)
        # Width: 53%, Height: 56%
        w1_width = int(container_width * 0.53)
        w1_height = int(container_height * 0.56)
        self.weapon_slots['weapon1'].setGeometry(
            0,
            (container_height - w1_height) // 2,
            w1_width,
            w1_height
        )
        
        # Weapon 2: top center (top: 0, left: 50%, translate: -50% 0)
        # Width: 56%, Height: 53%
        w2_width = int(container_width * 0.56)
        w2_height = int(container_height * 0.53)
        self.weapon_slots['weapon2'].setGeometry(
            (container_width - w2_width) // 2,
            0,
            w2_width,
            w2_height
        )
        
        # Weapon 3: right side, middle (top: 50%, right: 0, translate: 0 -50%)
        # Width: 53%, Height: 56%
        w3_width = int(container_width * 0.53)
        w3_height = int(container_height * 0.56)
        self.weapon_slots['weapon3'].setGeometry(
            container_width - w3_width,
            (container_height - w3_height) // 2,
            w3_width,
            w3_height
        )
        
        # Weapon 4: bottom center (bottom: 0, left: 50%, translate: -50% 0)
        # Width: 56%, Height: 53%
        w4_width = int(container_width * 0.56)
        w4_height = int(container_height * 0.53)
        self.weapon_slots['weapon4'].setGeometry(
            (container_width - w4_width) // 2,
            container_height - w4_height,
            w4_width,
            w4_height
        )
        
        return container
    
    def _create_support_section(self) -> QWidget:
        """Create support section with repkit and ordnance slots."""
        container = QWidget()
        container.setObjectName("SupportContainer")
        
        layout = QVBoxLayout(container)
        layout.setSpacing(24)
        layout.setContentsMargins(0, 0, 0, 0)
        
        # Support usable row
        usable_row = QWidget()
        usable_layout = QHBoxLayout(usable_row)
        usable_layout.setSpacing(12)
        usable_layout.setContentsMargins(0, 0, 0, 0)
        
        # Repkit slot (aspect ratio 159/82)
        self.repkit_slot = SlotWidget('repkit', 'gray', None, usable_row)
        self.repkit_slot.set_editable(self.editable)
        self.repkit_slot.clicked.connect(lambda: self._on_slot_clicked('repkit'))
        self.repkit_slot.setMinimumSize(159, 82)
        usable_layout.addWidget(self.repkit_slot, 1)
        
        # Ordnance slot (aspect ratio 159/82)
        self.ordnance_slot = SlotWidget('ordnance', 'gray', None, usable_row)
        self.ordnance_slot.set_editable(self.editable)
        self.ordnance_slot.clicked.connect(lambda: self._on_slot_clicked('ordnance'))
        self.ordnance_slot.setMinimumSize(159, 82)
        usable_layout.addWidget(self.ordnance_slot, 1)
        
        layout.addWidget(usable_row)
        
        return container
    
    def _create_auxiliaries_section(self) -> QWidget:
        """Create auxiliaries section with class-mod, shield, enhancement slots."""
        container = QWidget()
        container.setObjectName("AuxiliariesContainer")
        
        layout = QHBoxLayout(container)
        layout.setSpacing(12)
        layout.setContentsMargins(0, 0, 0, 0)
        
        # Class-mod slot (aspect ratio 12/10)
        self.classmod_slot = SlotWidget('class-mod', 'gray', None, container)
        self.classmod_slot.set_editable(self.editable)
        self.classmod_slot.clicked.connect(lambda: self._on_slot_clicked('class-mod'))
        self.classmod_slot.setMinimumSize(120, 100)
        layout.addWidget(self.classmod_slot, 1)
        
        # Shield slot (aspect ratio 12/10)
        self.shield_slot = SlotWidget('shield', 'gray', None, container)
        self.shield_slot.set_editable(self.editable)
        self.shield_slot.clicked.connect(lambda: self._on_slot_clicked('shield'))
        self.shield_slot.setMinimumSize(120, 100)
        layout.addWidget(self.shield_slot, 1)
        
        # Enhancement slot (aspect ratio 12/10)
        self.enhancement_slot = SlotWidget('enhancement', 'gray', None, container)
        self.enhancement_slot.set_editable(self.editable)
        self.enhancement_slot.clicked.connect(lambda: self._on_slot_clicked('enhancement'))
        self.enhancement_slot.setMinimumSize(120, 100)
        layout.addWidget(self.enhancement_slot, 1)
        
        return container
    
    def set_editable(self, editable: bool):
        """Set whether equipment is editable."""
        self.editable = editable
        
        # Update all slots
        for slot in self.weapon_slots.values():
            slot.set_editable(editable)
        
        self.repkit_slot.set_editable(editable)
        self.ordnance_slot.set_editable(editable)
        self.classmod_slot.set_editable(editable)
        self.shield_slot.set_editable(editable)
        self.enhancement_slot.set_editable(editable)
    
    def set_item(self, slot_id: str, item_data: dict):
        """Set item in a slot."""
        self.equipment[slot_id] = item_data
        
        # Update slot widget
        slot = self._get_slot_widget(slot_id)
        if slot:
            rarity = item_data.get('rarity', 'gray') if item_data else 'gray'
            slot.set_rarity(rarity)
            slot.set_item(item_data)
    
    def _get_slot_widget(self, slot_id: str) -> SlotWidget:
        """Get slot widget by ID."""
        if slot_id in self.weapon_slots:
            return self.weapon_slots[slot_id]
        elif slot_id == 'repkit':
            return self.repkit_slot
        elif slot_id == 'ordnance':
            return self.ordnance_slot
        elif slot_id == 'class-mod':
            return self.classmod_slot
        elif slot_id == 'shield':
            return self.shield_slot
        elif slot_id == 'enhancement':
            return self.enhancement_slot
        return None
    
    def _on_slot_clicked(self, slot_id: str):
        """Handle slot click."""
        if self.editable:
            current_item = self.equipment.get(slot_id) or {}
            self.slot_clicked.emit(slot_id, current_item)
