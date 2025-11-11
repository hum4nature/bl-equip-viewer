"""
Equipment Editor - Standalone Application
Main entry point for the Equipment Editor
"""

import sys
from pathlib import Path
from PyQt6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QPushButton
from PyQt6.QtCore import Qt
try:
    from .equipment_widget import EquipmentWidget
    from . import fonts, styles
except ImportError:
    from equipment_widget import EquipmentWidget
    import fonts, styles


class EquipmentEditorWindow(QMainWindow):
    """Main window for Equipment Editor."""
    
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Borderlands 4 - Equipment Editor")
        self.setMinimumSize(600, 800)
        
        # Load fonts
        font_ids = fonts.load_fonts()
        if font_ids:
            print(f"Loaded fonts: {font_ids}")
        
        # Create central widget
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        
        layout = QVBoxLayout(central_widget)
        layout.setContentsMargins(0, 0, 0, 0)
        
        # Create equipment widget
        self.equipment_widget = EquipmentWidget()
        self.equipment_widget.set_editable(True)
        self.equipment_widget.slot_clicked.connect(self._on_slot_clicked)
        layout.addWidget(self.equipment_widget)
        
        # Edit mode toggle button
        self.edit_button = QPushButton("Edit Mode: ON")
        self.edit_button.setCheckable(True)
        self.edit_button.setChecked(True)
        self.edit_button.toggled.connect(self._on_edit_mode_toggled)
        layout.addWidget(self.edit_button)
        
        # Apply dark theme
        self._apply_dark_theme()
    
    def _apply_dark_theme(self):
        """Apply dark theme styling."""
        self.setStyleSheet(f"""
            QMainWindow {{
                background-color: {styles.BASE_BG};
            }}
            QPushButton {{
                background-color: {styles.DARK_BG};
                color: {styles.GREY_2};
                border: 1px solid {styles.GREY_3};
                padding: 8px 16px;
                font-size: 14px;
            }}
            QPushButton:hover {{
                background-color: {styles.GREY_3};
            }}
            QPushButton:checked {{
                background-color: {styles.RARITY_COLORS['green']['border']};
            }}
        """)
    
    def _on_edit_mode_toggled(self, checked: bool):
        """Handle edit mode toggle."""
        self.equipment_widget.set_editable(checked)
        self.edit_button.setText(f"Edit Mode: {'ON' if checked else 'OFF'}")
    
    def _on_slot_clicked(self, slot_id: str, current_item: dict):
        """Handle slot click - open customize/select dialog."""
        print(f"Slot clicked: {slot_id}, current item: {current_item}")
        # TODO: Open customize/select dialog
        # For now, just set a test item
        test_item = {
            'weaponType': 'assault',
            'rarity': 'purple',
            'manufacturer': 'jakobs'
        }
        self.equipment_widget.set_item(slot_id, test_item)


def main():
    """Main entry point."""
    app = QApplication(sys.argv)
    
    # Set application properties
    app.setApplicationName("BL4 Equipment Editor")
    app.setOrganizationName("Borderlands 4 Tools")
    
    # Create and show window
    window = EquipmentEditorWindow()
    window.show()
    
    sys.exit(app.exec())


if __name__ == "__main__":
    main()

