"""
Asset Path Resolution for Equipment Editor
Resolves image paths (local first, CDN fallback)
"""

import os
from pathlib import Path
from typing import Optional
import json

# Base paths
SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
ASSETS_BASE = BASE_DIR / "resources" / "assets" / "equipment"
INDEX_FILE = ASSETS_BASE / "image_index.json"

# CDN fallback
MAXROLL_CDN_BASE = "https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/"

# Image cache (in-memory)
_image_cache = {}
_image_index = None


def load_image_index():
    """Load image index from JSON file."""
    global _image_index
    
    if _image_index is not None:
        return _image_index
    
    _image_index = {}
    
    if INDEX_FILE.exists():
        try:
            with open(INDEX_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                # Build reverse lookup: filename -> path
                for category, files in data.items():
                    for entry in files:
                        original = entry.get('original', '').lower()
                        path = entry.get('path', '')
                        if original and path:
                            _image_index[original] = {
                                'path': path,
                                'category': category
                            }
        except Exception as e:
            print(f"WARNING: Could not load image index: {e}")
    
    return _image_index


def resolve_image_path(filename: str, category: Optional[str] = None) -> str:
    """
    Resolve image path (local first, CDN fallback).
    Returns local file path if exists, otherwise CDN URL.
    """
    filename_lower = filename.lower()
    
    # Load index
    index = load_image_index()
    
    # Try to find in index
    if filename_lower in index:
        entry = index[filename_lower]
        local_path = BASE_DIR / entry['path']
        if local_path.exists():
            return str(local_path)
    
    # Try direct lookup in category directory
    if category:
        category_dir = ASSETS_BASE / category
        if category_dir.exists():
            for ext in ['.webp', '.png', '.jpg', '.jpeg', '.svg']:
                test_path = category_dir / filename
                if not test_path.suffix:
                    test_path = category_dir / f"{filename}{ext}"
                if test_path.exists():
                    return str(test_path)
    
    # Fallback to CDN
    # Try to construct CDN path based on filename patterns
    if 'manufacturer' in filename_lower or any(m in filename_lower for m in ['atlas', 'cov', 'daedalus', 'hyperion', 'jakobs', 'maliwan', 'order', 'ripper', 'tediore', 'torgue', 'vladof']):
        if 'banner' in filename_lower:
            return f"{MAXROLL_CDN_BASE}icons/manufacturer/{filename}"
        elif 'logo' in filename_lower or 'header' in filename_lower:
            return f"{MAXROLL_CDN_BASE}icons/manufacturer/{filename}"
    
    if 'augment' in filename_lower:
        return f"{MAXROLL_CDN_BASE}item-augment/{filename}"
    
    if any(w in filename_lower for w in ['assault', 'pistol', 'smg', 'shotgun', 'sniper', 'heavy']):
        return f"{MAXROLL_CDN_BASE}generic-item-icons/{filename}"
    
    # Generic fallback
    return f"{MAXROLL_CDN_BASE}{filename}"


def get_weapon_icon(weapon_type: str) -> str:
    """Get weapon type icon path."""
    type_map = {
        'assault': 'assault.webp',
        'pistol': 'pistol.webp',
        'smg': 'smg.webp',
        'shotgun': 'shotgun.webp',
        'sniper': 'sniper.webp',
        'heavy-weapon': 'heavy-weapon.webp'
    }
    filename = type_map.get(weapon_type.lower(), 'assault.webp')
    return resolve_image_path(filename, 'weapons')


def get_manufacturer_icon(manufacturer: str, icon_type: str = 'logo') -> str:
    """Get manufacturer icon path."""
    # icon_type: 'logo', 'banner', 'header-logo'
    filename = f"{manufacturer.lower()}-{icon_type}.webp"
    return resolve_image_path(filename, 'manufacturers')


def get_item_augment_icon(manufacturer: Optional[str] = None, legendary: bool = False) -> str:
    """Get item augment icon path."""
    if legendary:
        filename = 'legendary.webp'
    elif manufacturer:
        filename = f"{manufacturer.lower()}.webp"
    else:
        filename = 'legendary.webp'  # Default
    
    return resolve_image_path(filename, 'item-augments')


def get_slot_icon(slot_type: str) -> str:
    """Get slot type icon path."""
    type_map = {
        'repkit': 'repkit.webp',
        'ordnance': 'grenade-charges.webp',
        'class-mod': 'class-mod.webp',
        'shield': 'energy-shield.webp',
        'enhancement': 'enhancement.webp'
    }
    filename = type_map.get(slot_type.lower(), 'repkit.webp')
    return resolve_image_path(filename, 'slots')

