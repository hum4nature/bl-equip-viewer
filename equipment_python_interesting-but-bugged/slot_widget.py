"""
Slot Widget for Equipment Editor
Individual equipment slot with rarity styling, clip-paths, and icon display
Matches maxroll.gg design exactly
"""

from PyQt6.QtWidgets import QWidget, QLabel
from PyQt6.QtCore import Qt, pyqtSignal, QSize, QPointF
from PyQt6.QtGui import QPixmap, QPainter, QColor, QBrush, QPen, QPolygonF, QLinearGradient, QRadialGradient, QPainterPath
try:
    from . import assets, styles
except ImportError:
    import assets, styles


class SlotWidget(QWidget):
    """Individual equipment slot widget with proper styling."""
    
    clicked = pyqtSignal()
    
    def __init__(self, slot_type: str = 'weapon', rarity: str = 'gray', weapon_number: int = None, parent=None):
        super().__init__(parent)
        self.slot_type = slot_type
        self.rarity = rarity
        self.weapon_number = weapon_number  # 1-4 for weapon slots
        self.item_data = None
        self.editable = False
        
        self.setObjectName("SlotWidget")
        
        # Set minimum size based on slot type
        if slot_type == 'weapon':
            self.setMinimumSize(200, 140)
        elif slot_type in ['repkit', 'ordnance']:
            # Aspect ratio 159/82
            self.setMinimumSize(159, 82)
        elif slot_type in ['class-mod', 'shield', 'enhancement']:
            # Aspect ratio 12/10
            self.setMinimumSize(120, 100)
        else:
            self.setMinimumSize(80, 80)
        
        # Icon label (centered)
        self.icon_label = QLabel(self)
        self.icon_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.icon_label.setScaledContents(False)
        
        # Empty slot "+" label
        self.empty_label = QLabel("+", self)
        self.empty_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.empty_label.setStyleSheet("""
            font-size: 500%;
            line-height: 50%;
            color: rgb(150, 148, 171);
            font-family: 'Source Sans 3', sans-serif;
        """)
        self.empty_label.hide()
        
        # Weapon number badge (for weapon slots)
        self.number_label = None
        if weapon_number:
            self.number_label = QLabel(str(weapon_number), self)
            self.number_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
            self.number_label.setStyleSheet("""
                font-size: 22px;
                line-height: 16px;
                color: rgb(136, 138, 156);
                background: rgb(20, 24, 28);
                padding: 4px;
                min-width: 40px;
                min-height: 40px;
            """)
            self.number_label.hide()
        
        self.update_display()
    
    def set_editable(self, editable: bool):
        """Set whether slot is editable (clickable)."""
        self.editable = editable
        if editable:
            self.setCursor(Qt.CursorShape.PointingHandCursor)
        else:
            self.setCursor(Qt.CursorShape.ArrowCursor)
    
    def set_rarity(self, rarity: str):
        """Set rarity and update styling."""
        self.rarity = rarity
        self.update()
    
    def set_item(self, item_data: dict):
        """Set item data and display icon."""
        self.item_data = item_data
        self.update_display()
    
    def update_display(self):
        """Update icon/empty display."""
        if self.item_data:
            # Show icon
            icon_path = None
            
            if self.slot_type == 'weapon':
                weapon_type = self.item_data.get('weaponType', 'assault')
                icon_path = assets.get_weapon_icon(weapon_type)
            elif self.slot_type in ['repkit', 'ordnance', 'class-mod', 'shield', 'enhancement']:
                icon_path = assets.get_slot_icon(self.slot_type)
            
            if icon_path:
                pixmap = QPixmap(icon_path)
                if not pixmap.isNull():
                    # Scale to fit
                    max_size = min(self.width() - 20, self.height() - 20, 80)
                    scaled = pixmap.scaled(
                        max_size, max_size,
                        Qt.AspectRatioMode.KeepAspectRatio,
                        Qt.TransformationMode.SmoothTransformation
                    )
                    self.icon_label.setPixmap(scaled)
                    self.icon_label.show()
                    self.empty_label.hide()
                else:
                    self.icon_label.hide()
                    self.empty_label.show()
            else:
                self.icon_label.hide()
                self.empty_label.show()
        else:
            # Empty slot - show "+"
            self.icon_label.hide()
            self.empty_label.show()
        
        # Show/hide weapon number badge
        if self.number_label:
            self.number_label.show()
    
    def resizeEvent(self, event):
        """Handle resize - update icon size and positions."""
        super().resizeEvent(event)
        
        # Position icon/empty label in center
        center_x = self.width() // 2
        center_y = self.height() // 2
        
        icon_size = min(self.width() - 20, self.height() - 20, 80)
        self.icon_label.setGeometry(
            center_x - icon_size // 2,
            center_y - icon_size // 2,
            icon_size,
            icon_size
        )
        
        # Position empty label
        self.empty_label.setGeometry(0, 0, self.width(), self.height())
        
        # Position weapon number badge
        if self.number_label:
            badge_size = 40
            if self.weapon_number == 1:
                # Left side
                self.number_label.setGeometry(0, center_y - badge_size // 2, badge_size, badge_size)
            elif self.weapon_number == 2:
                # Top center
                self.number_label.setGeometry(center_x - badge_size // 2, 0, badge_size, badge_size)
            elif self.weapon_number == 3:
                # Right side
                self.number_label.setGeometry(self.width() - badge_size, center_y - badge_size // 2, badge_size, badge_size)
            elif self.weapon_number == 4:
                # Bottom center
                self.number_label.setGeometry(center_x - badge_size // 2, self.height() - badge_size, badge_size, badge_size)
        
        # Refresh icon if item exists
        if self.item_data:
            self.update_display()
    
    def paintEvent(self, event):
        """Custom paint event for rarity borders, gradients, and clip-paths."""
        super().paintEvent(event)
        
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        
        rect = self.rect()
        colors = styles.RARITY_COLORS.get(self.rarity, styles.RARITY_COLORS['gray'])
        
        if self.slot_type == 'weapon':
            self._paint_weapon_slot(painter, rect, colors)
        elif self.slot_type in ['repkit', 'ordnance']:
            self._paint_support_slot(painter, rect, colors)
        elif self.slot_type in ['class-mod', 'shield', 'enhancement']:
            self._paint_auxiliary_slot(painter, rect, colors)
    
    def _paint_weapon_slot(self, painter: QPainter, rect, colors):
        """Paint weapon slot with clip-path shape."""
        # Draw border with clip-path
        border_polygon = self._get_weapon_clip_path(rect, 0)
        border_path = QPainterPath()
        border_path.addPolygon(border_polygon)
        painter.setPen(QPen(QColor(colors['border']), 1))
        painter.setBrush(Qt.BrushStyle.NoBrush)
        painter.drawPath(border_path)
        
        # Draw background with gradient
        bg_polygon = self._get_weapon_clip_path(rect, 1)
        bg_path = QPainterPath()
        bg_path.addPolygon(bg_polygon)
        
        # Radial gradient based on weapon position
        if self.weapon_number == 1:
            center = QPointF(rect.width(), rect.height() * 0.495)
        elif self.weapon_number == 2:
            center = QPointF(rect.width() * 0.495, rect.height())
        elif self.weapon_number == 3:
            center = QPointF(0, rect.height() * 0.495)
        elif self.weapon_number == 4:
            center = QPointF(rect.width() * 0.495, 0)
        else:
            center = QPointF(rect.width() // 2, rect.height() // 2)
        
        # Parse rgba colors
        def parse_rgba(rgba_str):
            import re
            match = re.match(r'rgba?\((\d+),(\d+),(\d+),?([\d.]+)?\)', rgba_str)
            if match:
                r, g, b = int(match.group(1)), int(match.group(2)), int(match.group(3))
                a = float(match.group(4)) if match.group(4) else 1.0
                return QColor(r, g, b, int(a * 255))
            return QColor(136, 138, 156, 128)  # Default gray
        
        gradient = QRadialGradient(center, rect.width() * 1.15)
        gradient.setColorAt(0.0, parse_rgba(colors['gradient_end']))
        gradient.setColorAt(0.4, parse_rgba(colors['gradient_mid']))
        gradient.setColorAt(1.0, parse_rgba(colors['gradient_start']))
        
        painter.setBrush(QBrush(gradient))
        painter.setPen(Qt.PenStyle.NoPen)
        painter.drawPath(bg_path)
    
    def _paint_support_slot(self, painter: QPainter, rect, colors):
        """Paint support slot (repkit/ordnance) with clip-path."""
        # Draw border
        border_polygon = self._get_support_clip_path(rect, 0)
        border_path = QPainterPath()
        border_path.addPolygon(border_polygon)
        painter.setPen(QPen(QColor(colors['border']), 1))
        painter.setBrush(Qt.BrushStyle.NoBrush)
        painter.drawPath(border_path)
        
        # Draw background with gradient
        bg_polygon = self._get_support_clip_path(rect, 3)
        bg_path = QPainterPath()
        bg_path.addPolygon(bg_polygon)
        
        # Parse rgba colors
        def parse_rgba(rgba_str):
            import re
            match = re.match(r'rgba?\((\d+),(\d+),(\d+),?([\d.]+)?\)', rgba_str)
            if match:
                r, g, b = int(match.group(1)), int(match.group(2)), int(match.group(3))
                a = float(match.group(4)) if match.group(4) else 1.0
                return QColor(r, g, b, int(a * 255))
            return QColor(136, 138, 156, 128)  # Default gray
        
        gradient = QLinearGradient(0, 0, rect.width(), rect.height())
        gradient.setColorAt(0.0, parse_rgba(colors['gradient_start']))
        gradient.setColorAt(0.6, parse_rgba(colors['gradient_mid']))
        gradient.setColorAt(1.0, parse_rgba(colors['gradient_end']))
        
        painter.setBrush(QBrush(gradient))
        painter.setPen(Qt.PenStyle.NoPen)
        painter.drawPath(bg_path)
    
    def _paint_auxiliary_slot(self, painter: QPainter, rect, colors):
        """Paint auxiliary slot (class-mod/shield/enhancement) - simple rectangle."""
        # Draw border
        inner_rect = rect.adjusted(0, 0, -1, -1)
        painter.setPen(QPen(QColor(colors['border']), 1))
        painter.setBrush(Qt.BrushStyle.NoBrush)
        painter.drawRect(inner_rect)
        
        # Draw background with gradient
        bg_rect = rect.adjusted(2, 2, -2, -2)
        
        # Parse rgba colors
        def parse_rgba(rgba_str):
            import re
            match = re.match(r'rgba?\((\d+),(\d+),(\d+),?([\d.]+)?\)', rgba_str)
            if match:
                r, g, b = int(match.group(1)), int(match.group(2)), int(match.group(3))
                a = float(match.group(4)) if match.group(4) else 1.0
                return QColor(r, g, b, int(a * 255))
            return QColor(136, 138, 156, 128)  # Default gray
        
        gradient = QLinearGradient(0, 0, rect.width(), rect.height())
        gradient.setColorAt(0.0, parse_rgba(colors['gradient_start']))
        gradient.setColorAt(0.6, parse_rgba(colors['gradient_mid']))
        gradient.setColorAt(1.0, parse_rgba(colors['gradient_end']))
        
        painter.setBrush(QBrush(gradient))
        painter.setPen(Qt.PenStyle.NoPen)
        painter.drawRect(bg_rect)
    
    def _get_weapon_clip_path(self, rect, offset: int):
        """Get clip-path polygon for weapon slot based on number."""
        w, h = rect.width(), rect.height()
        
        # CSS variables from style.css
        weap_id_cut_offset = w * 0.32
        weap_id_cut_small = w * 0.18
        weap_id_cut_center_offset = h * 0.12
        weap_id_cut_side_width = w * 0.24
        weap_id_cut_large = (w * 0.5) - weap_id_cut_offset
        weap_id_cut_large_neg = w - weap_id_cut_large
        weap_id_cut_small_neg = w - weap_id_cut_small
        
        if self.weapon_number == 1:
            # Left side, middle
            points = [
                QPointF(weap_id_cut_large + offset, offset),
                QPointF(weap_id_cut_large + weap_id_cut_side_width + offset, offset),
                QPointF(w - offset, (h * 0.5) - weap_id_cut_center_offset + offset),
                QPointF(w - offset, (h * 0.5) + weap_id_cut_center_offset - offset),
                QPointF(weap_id_cut_large + weap_id_cut_side_width + offset, h - offset),
                QPointF(weap_id_cut_large + offset, h - offset),
                QPointF(offset, weap_id_cut_small_neg - offset),
                QPointF(offset, weap_id_cut_small + offset)
            ]
        elif self.weapon_number == 2:
            # Top center
            points = [
                QPointF(weap_id_cut_small + offset, offset),
                QPointF(weap_id_cut_small_neg - offset, offset),
                QPointF(w - offset, weap_id_cut_large + offset),
                QPointF(w - offset, weap_id_cut_large + weap_id_cut_side_width + offset),
                QPointF((w * 0.5) + weap_id_cut_center_offset - offset, h - offset),
                QPointF((w * 0.5) - weap_id_cut_center_offset + offset, h - offset),
                QPointF(offset, weap_id_cut_large + weap_id_cut_side_width + offset),
                QPointF(offset, weap_id_cut_large + offset)
            ]
        elif self.weapon_number == 3:
            # Right side, middle
            points = [
                QPointF(weap_id_cut_large_neg - weap_id_cut_side_width - offset, offset),
                QPointF(weap_id_cut_large_neg - offset, offset),
                QPointF(w - offset, weap_id_cut_small + offset),
                QPointF(w - offset, weap_id_cut_small_neg - offset),
                QPointF(weap_id_cut_large_neg - offset, h - offset),
                QPointF(weap_id_cut_large_neg - weap_id_cut_side_width - offset, h - offset),
                QPointF(offset, (h * 0.5) + weap_id_cut_center_offset - offset),
                QPointF(offset, (h * 0.5) - weap_id_cut_center_offset + offset)
            ]
        elif self.weapon_number == 4:
            # Bottom center
            points = [
                QPointF((w * 0.5) - weap_id_cut_center_offset + offset, offset),
                QPointF((w * 0.5) + weap_id_cut_center_offset - offset, offset),
                QPointF(w - offset, weap_id_cut_large_neg - weap_id_cut_side_width - offset),
                QPointF(w - offset, weap_id_cut_large_neg - offset),
                QPointF(weap_id_cut_small_neg - offset, h - offset),
                QPointF(weap_id_cut_small + offset, h - offset),
                QPointF(offset, weap_id_cut_large_neg - offset),
                QPointF(offset, weap_id_cut_large_neg - weap_id_cut_side_width - offset)
            ]
        else:
            # Fallback: simple rectangle
            points = [
                QPointF(offset, offset),
                QPointF(w - offset, offset),
                QPointF(w - offset, h - offset),
                QPointF(offset, h - offset)
            ]
        
        return QPolygonF(points)
    
    def _get_support_clip_path(self, rect, offset: int):
        """Get clip-path polygon for support slot (repkit/ordnance)."""
        w, h = rect.width(), rect.height()
        cut_width = w * 0.10
        cut_width_neg = w - cut_width
        cut_height = (cut_width * 159) / 82
        cut_height_neg = h - cut_height
        
        if self.slot_type == 'repkit':
            # Repkit clip-path
            points = [
                QPointF(offset, offset),
                QPointF(cut_width_neg - offset, offset),
                QPointF(w - offset, cut_height + offset),
                QPointF(w - offset, cut_height_neg - offset),
                QPointF(cut_width_neg - offset, h - offset),
                QPointF(cut_width + offset, h - offset),
                QPointF(offset, cut_height_neg - offset)
            ]
        else:
            # Ordnance clip-path (flipped)
            points = [
                QPointF(cut_width + offset, offset),
                QPointF(w - offset, offset),
                QPointF(w - offset, cut_height_neg - offset),
                QPointF(cut_width_neg - offset, h - offset),
                QPointF(cut_width + offset, h - offset),
                QPointF(offset, cut_height_neg - offset),
                QPointF(offset, cut_height + offset)
            ]
        
        return QPolygonF(points)
    
    def mousePressEvent(self, event):
        """Handle mouse click."""
        if self.editable and event.button() == Qt.MouseButton.LeftButton:
            self.clicked.emit()
        super().mousePressEvent(event)
