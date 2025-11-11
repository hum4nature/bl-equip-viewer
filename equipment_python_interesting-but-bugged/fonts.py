"""
Font Loading Utilities for Equipment Editor
Loads Coda and Pridi fonts from resources/fonts/
"""

from pathlib import Path
from PyQt6.QtGui import QFontDatabase, QFont
from PyQt6.QtCore import QFile

# Font family names
FONT_BL4 = "Coda"
FONT_BL4_NUMBER = "Pridi"

# Paths
SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
FONTS_DIR = BASE_DIR / "resources" / "fonts"


def load_fonts() -> dict:
    """
    Load all BL4 fonts and return font IDs.
    Returns dict with font family names as keys.
    """
    font_ids = {}
    
    if not FONTS_DIR.exists():
        print(f"WARNING: Fonts directory not found: {FONTS_DIR}")
        return font_ids
    
    # Load Coda (main text font)
    coda_path = FONTS_DIR / "Coda-Regular.ttf"
    if coda_path.exists():
        font_id = QFontDatabase.addApplicationFont(str(coda_path))
        if font_id != -1:
            families = QFontDatabase.applicationFontFamilies(font_id)
            if families:
                font_ids[FONT_BL4] = families[0]
                print(f"Loaded font: {FONT_BL4}")
    else:
        print(f"WARNING: Coda font not found at {coda_path}")
    
    # Load Pridi (number font) - weights 400, 500, 600
    pridi_files = [
        ("Pridi-Regular.ttf", 400),
        ("Pridi-Medium.ttf", 500),
        ("Pridi-SemiBold.ttf", 600)
    ]
    
    for filename, weight in pridi_files:
        pridi_path = FONTS_DIR / filename
        if pridi_path.exists():
            font_id = QFontDatabase.addApplicationFont(str(pridi_path))
            if font_id != -1:
                families = QFontDatabase.applicationFontFamilies(font_id)
                if families:
                    if FONT_BL4_NUMBER not in font_ids:
                        font_ids[FONT_BL4_NUMBER] = families[0]
                    print(f"Loaded font: {FONT_BL4_NUMBER} (weight {weight})")
        else:
            print(f"WARNING: Pridi font not found at {pridi_path}")
    
    return font_ids


def get_bl4_font(size: int = 14, weight: int = 400) -> QFont:
    """Get Coda font (main BL4 text font)."""
    font = QFont(FONT_BL4, size, weight)
    font.setStyleHint(QFont.StyleHint.SansSerif)
    return font


def get_bl4_number_font(size: int = 14, weight: int = 400) -> QFont:
    """Get Pridi font (BL4 number font)."""
    font = QFont(FONT_BL4_NUMBER, size, weight)
    font.setStyleHint(QFont.StyleHint.SansSerif)
    return font

