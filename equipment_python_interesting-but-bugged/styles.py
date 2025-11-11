"""
Equipment Editor Styles (QSS)
Converted from maxroll.gg CSS to PyQt6 QSS format
"""

# Rarity colors (from CSS)
RARITY_COLORS = {
    'gray': {
        'border': '#9694ab',
        'gradient_start': 'rgba(136,138,156,0)',
        'gradient_mid': 'rgba(136,138,156,.2)',
        'gradient_end': 'rgba(136,138,156,.5)',
        'bg': '#050b0d'
    },
    'green': {
        'border': '#5ec753',
        'gradient_start': 'rgba(94,199,83,0)',
        'gradient_mid': 'rgba(94,199,83,.2)',
        'gradient_end': 'rgba(94,199,83,.5)',
        'bg': '#050b0d'
    },
    'blue': {
        'border': '#00a3d0',
        'gradient_start': 'rgba(39,101,179,0)',
        'gradient_mid': 'rgba(39,101,179,.2)',
        'gradient_end': 'rgba(39,101,179,.5)',
        'bg': '#050b0d'
    },
    'purple': {
        'border': '#8e1db6',
        'gradient_start': 'rgba(142,29,182,0)',
        'gradient_mid': 'rgba(142,29,182,.2)',
        'gradient_end': 'rgba(142,29,182,.5)',
        'bg': '#050b0d'
    },
    'orange': {
        'border': '#c1780f',
        'gradient_start': 'rgba(193,120,15,0)',
        'gradient_mid': 'rgba(193,120,15,.2)',
        'gradient_end': 'rgba(193,120,15,.5)',
        'bg': '#050b0d'
    }
}

# Base colors
BASE_BG = '#050b0d'
DARK_BG = '#0b181e'
GREY_2 = 'rgb(136, 138, 156)'
GREY_3 = 'rgb(150, 148, 171)'


def get_equipment_stylesheet() -> str:
    """Get main Equipment widget stylesheet."""
    return f"""
        QWidget#EquipmentWidget {{
            background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                stop:0.2552 {BASE_BG},
                stop:0.5751 {DARK_BG},
                stop:0.7525 {DARK_BG},
                stop:1.0 {BASE_BG});
            padding: 16px 24px 24px;
        }}
        
        QWidget#WeaponsContainer {{
            background: transparent;
        }}
        
        QWidget#SupportContainer {{
            background: transparent;
        }}
        
        QWidget#AuxiliariesContainer {{
            background: transparent;
        }}
        
        QLabel {{
            color: {GREY_2};
            font-size: 14px;
        }}
    """


def get_slot_stylesheet(rarity: str = 'gray', slot_type: str = 'weapon') -> str:
    """Get slot widget stylesheet based on rarity."""
    colors = RARITY_COLORS.get(rarity, RARITY_COLORS['gray'])
    
    if slot_type in ['class-mod', 'shield', 'enhancement']:
        # Rectangular slots with border
        return f"""
            QWidget#SlotWidget {{
                border: 1px solid {colors['border']};
                background-color: {colors['bg']};
            }}
        """
    else:
        # Weapon/support slots with gradient background
        return f"""
            QWidget#SlotWidget {{
                border: 1px solid {colors['border']};
                background-color: {colors['bg']};
            }}
        """


def get_rarity_border_color(rarity: str) -> str:
    """Get border color for rarity."""
    return RARITY_COLORS.get(rarity, RARITY_COLORS['gray'])['border']


def get_rarity_gradient(rarity: str) -> tuple:
    """Get gradient colors for rarity."""
    colors = RARITY_COLORS.get(rarity, RARITY_COLORS['gray'])
    return (
        colors['gradient_start'],
        colors['gradient_mid'],
        colors['gradient_end']
    )

