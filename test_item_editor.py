#!/usr/bin/env python3
"""
Test script for Item Editor Dialog
Run this to test the new PyQt6 item editor
"""

import sys
from PyQt6.QtWidgets import QApplication
from app.ui.item_editor_dialog import ItemEditorDialog

def main():
    app = QApplication(sys.argv)
    
    # Create and show dialog
    dialog = ItemEditorDialog()
    dialog.show()
    
    sys.exit(app.exec())

if __name__ == "__main__":
    main()
