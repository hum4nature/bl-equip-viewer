#!/usr/bin/env python3
"""
Extract game data from maxroll.gg JavaScript files
Parses bl4-chunk-00-e58afd3e.js to extract weapons, augments, manufacturers, elements
"""

import re
import json
from pathlib import Path
from typing import Dict, List, Any

SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
JS_DIR = BASE_DIR / "web editors" / "maxroll.gg-build-planner"
OUTPUT_FILE = SCRIPT_DIR / "data" / "game_data.json"

# Ensure data directory exists
OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)


def extract_manufacturers(content: str) -> Dict[str, Any]:
    """Extract manufacturer data."""
    manufacturers = {}
    
    # Look for manufacturer definitions
    pattern = r'(\w+):\s*\{\s*name:\s*"([^"]+)",\s*isBaseItemManufacturer:\s*(\w+),'
    matches = re.finditer(pattern, content)
    
    for match in matches:
        key = match.group(1)
        name = match.group(2)
        is_base = match.group(3) == '!0' or match.group(3) == 'true'
        
        # Extract icon paths
        banner_pattern = rf'{key}:\s*{{[^}}]*bannerIcon:\s*"([^"]+)"'
        logo_pattern = rf'{key}:\s*{{[^}}]*logoIcon:\s*"([^"]+)"'
        header_pattern = rf'{key}:\s*{{[^}}]*headerLogoIcon:\s*"([^"]+)"'
        
        banner_match = re.search(banner_pattern, content)
        logo_match = re.search(logo_pattern, content)
        header_match = re.search(header_pattern, content)
        
        manufacturers[key] = {
            'id': key,
            'name': name,
            'isBaseItemManufacturer': is_base,
            'bannerIcon': banner_match.group(1) if banner_match else None,
            'logoIcon': logo_match.group(1) if logo_match else None,
            'headerLogoIcon': header_match.group(1) if header_match else None
        }
    
    return manufacturers


def extract_elements(content: str) -> Dict[str, Any]:
    """Extract element data."""
    elements = {}
    
    # Look for element definitions
    pattern = r'(\w+):\s*\{\s*name:\s*"([^"]+)",\s*hasStatusEffect:\s*(\w+),'
    matches = re.finditer(pattern, content)
    
    for match in matches:
        key = match.group(1)
        name = match.group(2)
        has_status = match.group(3) == '!0' or match.group(3) == 'true'
        
        # Extract more properties
        icon_pattern = rf'{key}:\s*{{[^}}]*icon:\s*"([^"]+)"'
        color_pattern = rf'{key}:\s*{{[^}}]*color:\s*"([^"]+)"'
        
        icon_match = re.search(icon_pattern, content)
        color_match = re.search(color_pattern, content)
        
        elements[key] = {
            'id': key,
            'name': name,
            'hasStatusEffect': has_status,
            'icon': icon_match.group(1) if icon_match else None,
            'color': color_match.group(1) if color_match else None
        }
    
    return elements


def extract_characters(content: str) -> Dict[str, Any]:
    """Extract character data."""
    characters = {}
    
    # Look for character definitions
    pattern = r'(\w+):\s*\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)"'
    matches = re.finditer(pattern, content)
    
    for match in matches:
        key = match.group(1)
        char_id = match.group(2)
        name = match.group(3)
        
        characters[key] = {
            'id': char_id,
            'name': name
        }
    
    return characters


def extract_rarity_data(content: str) -> Dict[str, Any]:
    """Extract rarity color data."""
    rarities = {}
    
    # Look for rarity definitions (0-4: gray, green, blue, purple, orange)
    pattern = r'(\d+):\s*\{\s*color:\s*"([^"]+)",\s*topBorder:\s*"([^"]+)",\s*bottomBorder:\s*"([^"]+)"'
    matches = re.finditer(pattern, content)
    
    for match in matches:
        level = int(match.group(1))
        color = match.group(2)
        top_border = match.group(3)
        bottom_border = match.group(4)
        
        # Extract more properties
        rarity_pattern = rf'{level}:\s*{{[^}}]*rarity:\s*"([^"]+)"'
        rarity_match = re.search(rarity_pattern, content)
        
        rarities[str(level)] = {
            'level': level,
            'color': color,
            'topBorder': top_border,
            'bottomBorder': bottom_border,
            'rarity': rarity_match.group(1) if rarity_match else None
        }
    
    return rarities


def extract_weapon_types(content: str) -> List[str]:
    """Extract weapon type list."""
    weapon_types = []
    
    # Look for weapon type patterns
    patterns = [
        r'"assault[^"]*"',
        r'"pistol[^"]*"',
        r'"smg[^"]*"',
        r'"shotgun[^"]*"',
        r'"sniper[^"]*"',
        r'"heavy.?weapon[^"]*"'
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        for match in matches:
            weapon_type = match.strip('"')
            if weapon_type not in weapon_types:
                weapon_types.append(weapon_type)
    
    return sorted(weapon_types)


def main():
    print("Equipment Editor - Game Data Extraction")
    print("=" * 50)
    
    js_file = JS_DIR / "bl4-chunk-00-e58afd3e.js"
    
    if not js_file.exists():
        print(f"ERROR: JavaScript file not found: {js_file}")
        return
    
    print(f"\nReading {js_file.name}...")
    try:
        with open(js_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except Exception as e:
        print(f"ERROR: Could not read file: {e}")
        return
    
    print("Extracting game data...")
    
    # Extract data
    game_data = {
        'manufacturers': extract_manufacturers(content),
        'elements': extract_elements(content),
        'characters': extract_characters(content),
        'rarities': extract_rarity_data(content),
        'weaponTypes': extract_weapon_types(content),
        'version': '1.0.0'
    }
    
    # Save to JSON
    print(f"\nSaving to {OUTPUT_FILE}...")
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(game_data, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print("\nSummary:")
    print(f"  Manufacturers: {len(game_data['manufacturers'])}")
    print(f"  Elements: {len(game_data['elements'])}")
    print(f"  Characters: {len(game_data['characters'])}")
    print(f"  Rarities: {len(game_data['rarities'])}")
    print(f"  Weapon Types: {len(game_data['weaponTypes'])}")
    
    print(f"\nGame data saved to: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()

