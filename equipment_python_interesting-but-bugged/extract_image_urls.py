#!/usr/bin/env python3
"""
Extract Image URLs from maxroll.gg JavaScript files
Finds all .webp image URLs and generates missing_urls.txt
"""

import os
import re
import json
from pathlib import Path
from typing import Set, List

# Paths
SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
JS_DIR = BASE_DIR / "web editors" / "maxroll.gg-build-planner"
TARGET_BASE = BASE_DIR / "resources" / "assets" / "equipment"
INDEX_FILE = TARGET_BASE / "image_index.json"

# Base URL for maxroll assets
MAXROLL_BASE_URL = "https://assets-ng.maxroll.gg/bl4-tools/assets/db/assets/"

# Patterns to find image URLs
URL_PATTERNS = [
    r'https?://[^\s"\'<>]+\.webp',
    r'url\(["\']?([^"\')]+\.webp)["\']?\)',
    r'src=["\']([^"\']+\.webp)["\']',
    r'srcset=["\']([^"\']+\.webp[^"\']*)["\']',
    r'["\']([^"\']*\.webp)["\']',
    r'icons/manufacturer/[^"\']+\.webp',
    r'item-augment/[^"\']+\.webp',
    r'generic-item-icons/[^"\']+\.webp',
    r'icons/element/[^"\']+\.webp',
    r'icons/characters/[^"\']+\.webp',
]


def load_existing_images() -> Set[str]:
    """Load list of already organized images from index."""
    existing = set()
    
    if INDEX_FILE.exists():
        try:
            with open(INDEX_FILE, 'r', encoding='utf-8') as f:
                index = json.load(f)
                for category_files in index.values():
                    for entry in category_files:
                        filename = entry.get('original', '')
                        existing.add(filename.lower())
        except Exception as e:
            print(f"WARNING: Could not load image index: {e}")
    
    return existing


def extract_urls_from_file(file_path: Path) -> Set[str]:
    """Extract all .webp URLs from a JavaScript file."""
    urls = set()
    
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Find all .webp URLs
        for pattern in URL_PATTERNS:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                if isinstance(match, tuple):
                    match = match[0] if match[0] else match[1] if len(match) > 1 else ""
                
                if not match or not match.endswith('.webp'):
                    continue
                
                # Handle relative paths
                if match.startswith('http'):
                    urls.add(match)
                elif match.startswith('/'):
                    urls.add(f"https://assets-ng.maxroll.gg{match}")
                elif 'icons/' in match or 'item-augment/' in match or 'generic-item-icons/' in match:
                    urls.add(MAXROLL_BASE_URL + match.lstrip('/'))
                else:
                    # Try with base URL
                    urls.add(MAXROLL_BASE_URL + match.lstrip('/'))
        
        # Also look for asset path patterns
        asset_patterns = [
            r'["\']icons/manufacturer/([^"\']+\.webp)["\']',
            r'["\']item-augment/([^"\']+\.webp)["\']',
            r'["\']generic-item-icons/([^"\']+\.webp)["\']',
            r'["\']icons/element/([^"\']+\.webp)["\']',
            r'["\']icons/characters/([^"\']+\.webp)["\']',
        ]
        
        for pattern in asset_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                if match.endswith('.webp'):
                    urls.add(MAXROLL_BASE_URL + match)
    
    except Exception as e:
        print(f"WARNING: Error reading {file_path.name}: {e}")
    
    return urls


def extract_all_urls() -> Set[str]:
    """Extract URLs from all JS files."""
    all_urls = set()
    
    if not JS_DIR.exists():
        print(f"WARNING: JavaScript directory not found: {JS_DIR}")
        return all_urls
    
    js_files = list(JS_DIR.glob("*.js"))
    print(f"Found {len(js_files)} JavaScript files")
    
    for js_file in js_files:
        print(f"  Scanning {js_file.name}...")
        urls = extract_urls_from_file(js_file)
        all_urls.update(urls)
        print(f"    Found {len(urls)} URLs")
    
    return all_urls


def check_missing_urls(urls: Set[str], existing_images: Set[str]) -> List[str]:
    """Check which URLs correspond to missing images."""
    missing = []
    
    for url in sorted(urls):
        # Extract filename from URL
        filename = url.split('/')[-1].split('?')[0]
        filename_lower = filename.lower()
        
        # Check if we have this image
        if filename_lower not in existing_images:
            missing.append(url)
    
    return missing


def save_missing_urls(missing: List[str]):
    """Save missing URLs to text file."""
    output_file = TARGET_BASE / "missing_urls.txt"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# Missing Image URLs from maxroll.gg\n")
        f.write("# Generated automatically - use download script to fetch these\n\n")
        for url in missing:
            f.write(f"{url}\n")
    
    print(f"\nMissing URLs saved to: {output_file}")


def main():
    print("Equipment Editor - Image URL Extraction")
    print("=" * 50)
    
    # Load existing images
    print("\nLoading existing image index...")
    existing_images = load_existing_images()
    print(f"  Found {len(existing_images)} existing images")
    
    # Extract URLs from JS files
    print("\nExtracting URLs from JavaScript files...")
    all_urls = extract_all_urls()
    print(f"\n  Total unique URLs found: {len(all_urls)}")
    
    # Check for missing
    print("\nChecking for missing images...")
    missing = check_missing_urls(all_urls, existing_images)
    print(f"  Missing: {len(missing)} URLs")
    
    # Save missing URLs
    if missing:
        save_missing_urls(missing)
    
    # Also save all URLs for reference
    all_urls_file = TARGET_BASE / "all_image_urls.txt"
    with open(all_urls_file, 'w', encoding='utf-8') as f:
        f.write("# All Image URLs found in maxroll.gg JavaScript files\n\n")
        for url in sorted(all_urls):
            f.write(f"{url}\n")
    print(f"All URLs saved to: {all_urls_file}")
    
    print("\nURL extraction complete!")


if __name__ == "__main__":
    main()

