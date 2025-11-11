#!/usr/bin/env python3
"""
Download BL4 fonts (Coda and Pridi) from Google Fonts
"""

import requests
import os
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
FONTS_DIR = BASE_DIR / "resources" / "fonts"

# Google Fonts API URLs
FONTS = {
    "Coda": "https://fonts.google.com/download?family=Coda",
    "Pridi": "https://fonts.google.com/download?family=Pridi:wght@400;500;600"
}

# Direct download URLs (using GitHub mirror or direct links)
FONT_URLS = {
    "Coda-Regular.ttf": "https://github.com/google/fonts/raw/main/ofl/coda/Coda-Regular.ttf",
    "Pridi-Regular.ttf": "https://github.com/google/fonts/raw/main/ofl/pridi/Pridi-Regular.ttf",
    "Pridi-Medium.ttf": "https://github.com/google/fonts/raw/main/ofl/pridi/Pridi-Medium.ttf",
    "Pridi-SemiBold.ttf": "https://github.com/google/fonts/raw/main/ofl/pridi/Pridi-SemiBold.ttf",
}


def download_font(url: str, filename: str) -> bool:
    """Download a font file."""
    try:
        print(f"  Downloading {filename}...")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        filepath = FONTS_DIR / filename
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"    OK: {filename} ({len(response.content)} bytes)")
        return True
    except Exception as e:
        print(f"    ERROR: Failed to download {filename}: {e}")
        return False


def main():
    print("Equipment Editor - Font Download")
    print("=" * 50)
    
    # Ensure fonts directory exists
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    
    print("\nDownloading fonts from Google Fonts...")
    success_count = 0
    
    for filename, url in FONT_URLS.items():
        if download_font(url, filename):
            success_count += 1
    
    print(f"\nDownloaded {success_count}/{len(FONT_URLS)} fonts")
    
    if success_count == len(FONT_URLS):
        print("\nFont download complete!")
    else:
        print("\nWARNING: Some fonts failed to download. You may need to download them manually.")
        print("Visit: https://fonts.google.com/specimen/Coda")
        print("Visit: https://fonts.google.com/specimen/Pridi")


if __name__ == "__main__":
    main()

