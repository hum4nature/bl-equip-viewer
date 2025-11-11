#!/usr/bin/env python3
"""
Image Organization Script for Equipment Editor
Organizes downloaded images from Downloads folders into structured directories
"""

import os
import shutil
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

# Source directories
DOWNLOAD_DIRS = [
    r"C:\Users\NotUp\Downloads\Borderlands 4 Transparent",
    r"C:\Users\NotUp\Downloads\Borderlands 4 - Borderlands 4",
    r"C:\Users\NotUp\Downloads\Borderlands 4 Planner - Borderlands 4"
]

# Target base directory (relative to script location)
SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
TARGET_BASE = BASE_DIR / "resources" / "assets" / "equipment"

# Subdirectories
SUBDIRS = {
    "weapons": TARGET_BASE / "weapons",
    "manufacturers": TARGET_BASE / "manufacturers",
    "item-augments": TARGET_BASE / "item-augments",
    "slots": TARGET_BASE / "slots",
    "rarity": TARGET_BASE / "rarity",
    "ui": TARGET_BASE / "ui"
}

# Patterns for categorization
WEAPON_PATTERNS = [
    r"assault", r"pistol", r"smg", r"shotgun", r"sniper", r"heavy.?weapon",
    r"weapon", r"grenade", r"repkit"
]

MANUFACTURER_PATTERNS = [
    r"atlas", r"cov", r"daedalus", r"hyperion", r"jakobs", r"maliwan",
    r"order", r"ripper", r"tediore", r"torgue", r"vladof"
]

AUGMENT_PATTERNS = [
    r"augment", r"aug-", r"repkit-aug"
]

SLOT_PATTERNS = [
    r"class.?mod", r"shield", r"enhancement", r"repkit", r"ordnance"
]

RARITY_PATTERNS = [
    r"common", r"uncommon", r"rare", r"epic", r"legendary", r"gray", r"green",
    r"blue", r"purple", r"orange"
]

UI_PATTERNS = [
    r"icon", r"logo", r"banner", r"border", r"background", r"chevron", r"arrow",
    r"plus", r"minus", r"check", r"clear", r"delete", r"edit"
]


def categorize_file(filename: str) -> str:
    """Categorize a file based on its filename."""
    filename_lower = filename.lower()
    
    # Check patterns in order of specificity
    for pattern in AUGMENT_PATTERNS:
        if re.search(pattern, filename_lower):
            return "item-augments"
    
    for pattern in SLOT_PATTERNS:
        if re.search(pattern, filename_lower):
            return "slots"
    
    for pattern in MANUFACTURER_PATTERNS:
        if re.search(pattern, filename_lower):
            return "manufacturers"
    
    for pattern in WEAPON_PATTERNS:
        if re.search(pattern, filename_lower):
            return "weapons"
    
    for pattern in RARITY_PATTERNS:
        if re.search(pattern, filename_lower):
            return "rarity"
    
    for pattern in UI_PATTERNS:
        if re.search(pattern, filename_lower):
            return "ui"
    
    # Default to ui if uncertain
    return "ui"


def organize_images() -> Dict[str, List[Tuple[str, str]]]:
    """Organize images from Downloads folders to target directories."""
    image_index = {category: [] for category in SUBDIRS.keys()}
    
    # Ensure target directories exist
    for subdir in SUBDIRS.values():
        subdir.mkdir(parents=True, exist_ok=True)
    
    # Process each download directory
    for download_dir in DOWNLOAD_DIRS:
        if not os.path.exists(download_dir):
            print(f"WARNING: Directory not found: {download_dir}")
            continue
        
        print(f"Scanning: {download_dir}")
        
        for root, dirs, files in os.walk(download_dir):
            for file in files:
                # Only process image files
                if not file.lower().endswith(('.webp', '.png', '.jpg', '.jpeg', '.svg', '.avif')):
                    continue
                
                source_path = os.path.join(root, file)
                category = categorize_file(file)
                target_dir = SUBDIRS[category]
                
                # Handle duplicate filenames
                target_path = target_dir / file
                counter = 1
                while target_path.exists():
                    name_parts = file.rsplit('.', 1)
                    if len(name_parts) == 2:
                        new_name = f"{name_parts[0]}_{counter}.{name_parts[1]}"
                    else:
                        new_name = f"{file}_{counter}"
                    target_path = target_dir / new_name
                    counter += 1
                
                try:
                    shutil.copy2(source_path, target_path)
                    relative_path = str(target_path.relative_to(BASE_DIR))
                    image_index[category].append((file, relative_path))
                    print(f"  OK: {file} -> {category}/")
                except Exception as e:
                    print(f"  ERROR: Failed to copy {file}: {e}")
    
    return image_index


def save_image_index(image_index: Dict[str, List[Tuple[str, str]]]):
    """Save image index to JSON file."""
    index_path = TARGET_BASE / "image_index.json"
    
    # Convert to serializable format
    serializable_index = {
        category: [{"original": orig, "path": path} for orig, path in files]
        for category, files in image_index.items()
    }
    
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(serializable_index, f, indent=2, ensure_ascii=False)
    
    print(f"\nImage index saved to: {index_path}")


def main():
    print("Equipment Editor - Image Organization")
    print("=" * 50)
    
    image_index = organize_images()
    
    # Print summary
    print("\nSummary:")
    total = 0
    for category, files in image_index.items():
        count = len(files)
        total += count
        print(f"  {category}: {count} files")
    print(f"\n  Total: {total} files organized")
    
    # Save index
    save_image_index(image_index)
    
    print("\nImage organization complete!")


if __name__ == "__main__":
    main()

