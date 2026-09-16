# -*- coding: utf-8 -*-
"""
STOCKSIM VN - game mô phỏng chứng khoán offline bằng Pygame.
Source duy nhất: main.py

Thiết kế trọng tâm:
- UI tối kiểu TradingView, chart nến/line, watchlist, lệnh, danh mục, tin tức.
- Công cụ vẽ: Trend line, Horizontal line, Rectangle, Fibonacci Retracement.
- Market engine có regime, market factor, sector factor, fair-value pull,
  momentum, volatility clustering, news impact và order-flow pressure.
- Nhiệm vụ làm quen mở dần theo tiến độ; sau khi hoàn tất người chơi tự do.
- Có ~2 năm lịch sử 1D mô phỏng sẵn; 60 phiên gần nhất có dữ liệu 1 phút để aggregate intraday.
- Timeframe 5M/15M/1H/1D, zoom/pan ngang + zoom riêng trục X/Y bằng wheel, phím và kéo trực tiếp trên trục giá/thời gian.
- Công cụ vẽ hỗ trợ Undo/Redo (Ctrl+Z/Ctrl+Y) và nút riêng trên toolbar.
- Hỗ trợ LONG/SHORT mô phỏng, Market/Limit/Stop, Stop Loss/Take Profit và menu chuột phải trực tiếp trên chart.
- Có thể kéo trực tiếp các đường lệnh chờ (Buy/Sell Limit/Stop) và SL/TP trên chart để sửa mức giá; giá khớp lịch sử không bị sửa.
- Bảng LỆNH hiển thị P/L NET theo từng dòng và NET P/L toàn tài khoản nếu đóng vị thế ngay.
- Đòn bẩy ký quỹ 100%-500% bước 50%, margin call mô phỏng và menu Chơi lại với 3 mức vốn.
- Save/load cục bộ, one-file friendly với PyInstaller.

LƯU Ý: Đây là dữ liệu mô phỏng phục vụ học tập/game, không phải dữ liệu giá thật
và không phải khuyến nghị đầu tư.
"""
from __future__ import annotations

import argparse
import gzip
import math
import os
import pickle
import random
import sys
import time
import traceback
from collections import defaultdict, deque
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple

import numpy as np
import pandas as pd
import pygame

# =========================
# CẤU HÌNH CHUNG
# =========================
APP_NAME = "StockSimVN"
SAVE_VERSION = 6
FPS = 60
START_CASH = 100_000_000.0
LEVERAGE_MIN_PCT = 100
LEVERAGE_MAX_PCT = 500
LEVERAGE_STEP_PCT = 50
PRICE_SCALE_MIN = 1.0
PRICE_SCALE_MAX = 30.0   # cho phép mở rộng trục giá rất xa để đặt SL/TP
PRICE_SCALE_STEP = 1.35
MAINTENANCE_MARGIN_RATIO = 0.20  # thanh lý khi equity vị thế <= 20% ký quỹ ban đầu
DIFFICULTIES = {
    "EASY": {"label": "DỄ", "cash": 200_000_000.0, "desc": "Vốn rộng, dễ thử nhiều mã và chiến lược."},
    "MEDIUM": {"label": "TRUNG BÌNH", "cash": 100_000_000.0, "desc": "Cân bằng giữa cơ hội và quản trị vốn."},
    "HARD": {"label": "KHÓ", "cash": 50_000_000.0, "desc": "Vốn nhỏ hơn, cần chọn lệnh và đòn bẩy cẩn thận."},
}
FEE_RATE = 0.0015              # tham số mô phỏng, không phải biểu phí pháp lý
SELL_TAX_RATE = 0.001          # tham số mô phỏng
LOT_SIZE = 100
SESSION_MINUTES = 240          # 1 ngày game = 240 phút mô phỏng
BASE_SIM_MPS = 8.0             # game-minute mỗi giây thật ở x1
PREGEN_DAYS = 504                 # khoảng 2 năm giao dịch (~252 phiên/năm)
INTRADAY_HISTORY_DAYS = 60       # giữ 60 phiên gần nhất ở dữ liệu 1 phút
MAX_MINUTE_BARS = 20_000         # > 60*240; lịch sử cũ giữ ở daily_bars
AUTOSAVE_SECONDS = 30

# UI
TOP_H = 42
LEFT_W = 52
RIGHT_W = 340
BOTTOM_H = 150
MIN_W, MIN_H = 1180, 720

BG = (17, 21, 31)
PANEL = (25, 30, 43)
PANEL_2 = (31, 37, 52)
GRID = (43, 49, 63)
BORDER = (53, 60, 76)
TEXT = (214, 219, 229)
MUTED = (139, 148, 166)
GREEN = (0, 196, 154)
RED = (246, 79, 89)
BLUE = (64, 115, 255)
YELLOW = (245, 194, 66)
ORANGE = (241, 145, 59)
PURPLE = (164, 102, 255)
CYAN = (45, 204, 211)
WHITE = (240, 243, 249)
BLACK = (8, 10, 15)

TIMEFRAME_FACTOR = {"1M": 1, "5M": 5, "15M": 15, "1H": 60, "1D": SESSION_MINUTES}

REGIMES = {
    "BULL_STRONG": dict(drift=0.000045, vol=0.85, momentum=1.25, meanrev=0.55, sentiment=0.75),
    "BULL":        dict(drift=0.000024, vol=0.75, momentum=1.10, meanrev=0.70, sentiment=0.45),
    "SIDEWAY":     dict(drift=0.000000, vol=0.65, momentum=0.65, meanrev=1.30, sentiment=0.00),
    "VOLATILE":    dict(drift=0.000000, vol=1.35, momentum=0.85, meanrev=0.95, sentiment=-0.05),
    "BEAR":        dict(drift=-0.000026, vol=1.00, momentum=1.15, meanrev=0.60, sentiment=-0.45),
    "BEAR_STRONG": dict(drift=-0.000055, vol=1.35, momentum=1.35, meanrev=0.45, sentiment=-0.75),
    "PANIC":       dict(drift=-0.000095, vol=2.20, momentum=1.55, meanrev=0.30, sentiment=-1.00),
    "RECOVERY":    dict(drift=0.000060, vol=1.20, momentum=1.20, meanrev=0.75, sentiment=0.35),
}

REGIME_TRANSITIONS = {
    "BULL_STRONG": ["BULL", "SIDEWAY", "VOLATILE"],
    "BULL": ["BULL_STRONG", "SIDEWAY", "VOLATILE"],
    "SIDEWAY": ["BULL", "BEAR", "VOLATILE"],
    "VOLATILE": ["BULL", "BEAR", "PANIC", "SIDEWAY"],
    "BEAR": ["SIDEWAY", "BEAR_STRONG", "VOLATILE", "RECOVERY"],
    "BEAR_STRONG": ["PANIC", "BEAR", "RECOVERY"],
    "PANIC": ["BEAR_STRONG", "RECOVERY"],
    "RECOVERY": ["BULL", "SIDEWAY", "VOLATILE"],
}

# 30 mã mô phỏng: 10 HOSE + 10 HNX + 10 UPCOM.
# Tên mã là mã có thật để người chơi quen mặt bằng thị trường; toàn bộ GIÁ và TIN trong game là mô phỏng.
EXCHANGE_SYMBOLS = {
    "HOSE": ["VCB", "FPT", "HPG", "VNM", "MWG", "GAS", "VHM", "SSI", "GMD", "DHG"],
    "HNX":  ["NVB", "ONE", "VCS", "CAP", "TNG", "PVS", "CEO", "SHS", "HUT", "VNR"],
    "UPCOM":["ABB", "FOX", "MSR", "QNS", "VGT", "HND", "VEF", "SBS", "ACV", "DVN"],
}
SYMBOL_EXCHANGE = {sym: ex for ex, syms in EXCHANGE_SYMBOLS.items() for sym in syms}
PRICE_LIMITS = {"HOSE": 0.07, "HNX": 0.10, "UPCOM": 0.15}  # tham số mô phỏng theo biên độ phổ biến

STOCK_CONFIGS = [
    # symbol, sector, initial, fair, beta, base_vol_daily, base_volume, liquidity, growth, momentum, meanrev
    # HOSE - 10 nhóm ngành/nhóm kinh doanh lớn
    ("VCB", "BANK", 91_000, 94_000, 0.85, 0.020, 4_200_000, 1.00, 0.00012, 0.85, 1.00),
    ("FPT", "TECH", 121_000, 126_000, 1.05, 0.024, 5_500_000, 0.95, 0.00018, 1.20, 0.75),
    ("HPG", "MATERIALS", 28_000, 29_000, 1.25, 0.032, 22_000_000, 1.00, 0.00008, 1.25, 0.80),
    ("VNM", "CONSUMER", 67_000, 70_000, 0.75, 0.018, 2_300_000, 0.90, 0.00010, 0.75, 1.15),
    ("MWG", "RETAIL", 62_000, 65_000, 1.15, 0.030, 8_000_000, 0.95, 0.00014, 1.15, 0.80),
    ("GAS", "ENERGY", 79_000, 82_000, 0.90, 0.025, 2_800_000, 0.82, 0.00008, 0.90, 1.00),
    ("VHM", "REAL_ESTATE", 48_000, 51_000, 1.30, 0.034, 9_500_000, 0.90, 0.00006, 1.20, 0.75),
    ("SSI", "SECURITIES", 34_000, 35_000, 1.45, 0.038, 18_000_000, 1.00, 0.00008, 1.35, 0.70),
    ("GMD", "LOGISTICS", 65_000, 68_000, 1.05, 0.025, 2_400_000, 0.85, 0.00010, 0.95, 0.90),
    ("DHG", "HEALTHCARE", 112_000, 116_000, 0.65, 0.018, 450_000, 0.72, 0.00010, 0.70, 1.15),
    # HNX
    ("NVB", "BANK", 12_000, 12_500, 1.10, 0.031, 2_000_000, 0.72, 0.00007, 1.05, 0.85),
    ("ONE", "TECH", 9_500, 10_000, 1.05, 0.036, 350_000, 0.55, 0.00010, 1.10, 0.85),
    ("VCS", "MATERIALS", 62_000, 66_000, 0.90, 0.026, 600_000, 0.70, 0.00008, 0.90, 1.00),
    ("CAP", "CONSUMER", 48_000, 50_000, 0.85, 0.027, 450_000, 0.62, 0.00009, 0.85, 1.00),
    ("TNG", "RETAIL", 24_000, 25_000, 1.10, 0.032, 2_200_000, 0.78, 0.00010, 1.15, 0.80),
    ("PVS", "ENERGY", 37_000, 39_000, 1.15, 0.031, 5_500_000, 0.90, 0.00008, 1.15, 0.82),
    ("CEO", "REAL_ESTATE", 18_000, 18_500, 1.45, 0.046, 7_500_000, 0.87, 0.00004, 1.40, 0.65),
    ("SHS", "SECURITIES", 17_000, 18_000, 1.50, 0.043, 12_000_000, 0.95, 0.00007, 1.40, 0.65),
    ("HUT", "LOGISTICS", 17_500, 18_500, 1.25, 0.039, 4_500_000, 0.80, 0.00006, 1.20, 0.75),
    ("VNR", "HEALTHCARE", 26_000, 27_000, 0.70, 0.022, 180_000, 0.55, 0.00007, 0.70, 1.10),
    # UPCOM
    ("ABB", "BANK", 10_500, 11_000, 1.10, 0.030, 2_500_000, 0.78, 0.00008, 1.00, 0.90),
    ("FOX", "TECH", 77_000, 81_000, 0.90, 0.026, 550_000, 0.68, 0.00013, 1.00, 0.90),
    ("MSR", "MATERIALS", 18_000, 19_000, 1.25, 0.040, 1_800_000, 0.65, 0.00007, 1.25, 0.72),
    ("QNS", "CONSUMER", 48_000, 51_000, 0.75, 0.022, 900_000, 0.72, 0.00010, 0.78, 1.08),
    ("VGT", "RETAIL", 15_000, 15_500, 1.05, 0.034, 800_000, 0.62, 0.00007, 1.00, 0.85),
    ("HND", "ENERGY", 14_000, 14_800, 0.78, 0.024, 650_000, 0.66, 0.00007, 0.80, 1.05),
    ("VEF", "REAL_ESTATE", 190_000, 200_000, 1.20, 0.036, 120_000, 0.45, 0.00005, 1.10, 0.78),
    ("SBS", "SECURITIES", 7_500, 8_000, 1.55, 0.052, 3_500_000, 0.70, 0.00005, 1.45, 0.62),
    ("ACV", "LOGISTICS", 115_000, 120_000, 0.90, 0.025, 1_100_000, 0.78, 0.00010, 0.90, 0.95),
    ("DVN", "HEALTHCARE", 26_000, 27_500, 0.72, 0.026, 280_000, 0.58, 0.00009, 0.75, 1.08),
]

SECTOR_SENS = {
    "BANK": 1.00, "TECH": 0.90, "MATERIALS": 1.20, "CONSUMER": 0.78,
    "RETAIL": 1.08, "ENERGY": 1.18, "REAL_ESTATE": 1.32, "SECURITIES": 1.45,
    "LOGISTICS": 1.00, "HEALTHCARE": 0.72,
}


def app_dir() -> str:
    root = os.getenv("APPDATA") or os.path.expanduser("~")
    path = os.path.join(root, APP_NAME)
    os.makedirs(path, exist_ok=True)
    return path

SAVE_PATH = os.path.join(app_dir(), "savegame.dat")
ERROR_LOG = os.path.join(app_dir(), "error.log")


def fmt_money(v: float) -> str:
    sign = "-" if v < 0 else ""
    v = abs(v)
    if v >= 1_000_000_000:
        return f"{sign}{v/1_000_000_000:.2f}B"
    if v >= 1_000_000:
        return f"{sign}{v/1_000_000:.2f}M"
    if v >= 1_000:
        return f"{sign}{v/1_000:.1f}K"
    return f"{sign}{v:,.0f}"


def fmt_price(v: float) -> str:
    if v >= 1000:
        return f"{v:,.0f}"
    return f"{v:.2f}"


def normalize_order_price(v: float) -> float:
    """Làm tròn giá đặt về bước 10đ để menu chuột phải dễ dùng và chart gọn."""
    return max(10.0, round(float(v) / 10.0) * 10.0)


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


def next_weekday(dt: datetime) -> datetime:
    d = dt + timedelta(days=1)
    while d.weekday() >= 5:
        d += timedelta(days=1)
    return d


def trading_days_before(dt: datetime, count: int) -> datetime:
    """Lùi count phiên (bỏ T7/CN). Không mô phỏng ngày nghỉ lễ để game offline đơn giản."""
    d = dt
    while d.weekday() >= 5:
        d -= timedelta(days=1)
    for _ in range(max(0, count)):
        d -= timedelta(days=1)
        while d.weekday() >= 5:
            d -= timedelta(days=1)
    return d


def draw_dashed_line(surface, color, start, end, dash=7, gap=5, width=1):
    """Vẽ đường đứt nét ngang/dọc/chéo bằng primitive Pygame."""
    x1, y1 = start; x2, y2 = end
    dx, dy = x2-x1, y2-y1
    dist = math.hypot(dx, dy)
    if dist <= 0:
        return
    ux, uy = dx/dist, dy/dist
    pos = 0.0
    while pos < dist:
        e = min(dist, pos + dash)
        a = (int(x1 + ux*pos), int(y1 + uy*pos))
        b = (int(x1 + ux*e), int(y1 + uy*e))
        pygame.draw.line(surface, color, a, b, width)
        pos += dash + gap


@dataclass
class Candle:
    ts: datetime
    open: float
    high: float
    low: float
    close: float
    volume: float


@dataclass
class NewsItem:
    ts: datetime
    title: str
    scope: str
    target: str
    impact: float
    decay_minutes: int
    magnitude: str


@dataclass
class Position:
    # side luôn là LONG hoặc SHORT; qty luôn dương.
    side: str = "LONG"
    qty: int = 0
    avg_cost: float = 0.0
    margin_locked: float = 0.0   # ký quỹ đang khóa cho cả LONG/SHORT
    open_fees: float = 0.0       # phí/thuế mở vị thế chưa phân bổ
    stop_loss: float = 0.0       # 0 = chưa đặt; khi chạm sẽ đóng toàn bộ vị thế
    take_profit: float = 0.0     # 0 = chưa đặt; OCO với stop_loss khi một phía khớp


@dataclass
class Order:
    oid: int
    ts: datetime
    symbol: str
    side: str                    # BUY / SELL / CLOSE
    order_type: str              # MARKET / LIMIT / STOP / STOP_LOSS / TAKE_PROFIT
    qty: int
    limit_price: float = 0.0     # dùng như giá đặt: Limit hoặc Stop
    filled_qty: int = 0
    avg_fill: float = 0.0
    status: str = "OPEN"
    intent: str = "OPEN"         # OPEN / CLOSE
    position_side: str = ""      # LONG / SHORT
    leverage_x: float = 1.0       # snapshot đòn bẩy tại lúc đặt lệnh; 2.0 = 200%


@dataclass
class Drawing:
    kind: str
    symbol: str
    timeframe: str
    t1: datetime
    p1: float
    t2: Optional[datetime] = None
    p2: Optional[float] = None
    text: str = ""


@dataclass
class StockState:
    symbol: str
    sector: str
    initial_price: float
    fair_value: float
    beta: float
    base_vol_daily: float
    base_volume_daily: float
    liquidity: float
    growth_rate: float
    momentum_sens: float
    meanrev_strength: float
    price: float = 0.0
    momentum: float = 0.0
    variance: float = 0.0
    day_ref: float = 0.0
    day_open: float = 0.0
    day_volume: float = 0.0
    # Các trạng thái chậm giúp mỗi doanh nghiệp có chu kỳ cung/cầu riêng thay vì đi giống nhau.
    business_cycle: float = 0.0          # kỳ vọng nền tảng doanh nghiệp, âm = suy yếu, dương = cải thiện
    institutional_flow: float = 0.0      # tích lũy/phân phối của dòng tiền lớn
    swing_momentum: float = 0.0          # động lượng nhiều phiên
    fundamental_drift_daily: float = 0.0 # tốc độ thay đổi fair value theo ngày

    def __post_init__(self):
        self.price = self.initial_price
        self.day_ref = self.initial_price
        self.day_open = self.initial_price
        minute_vol = self.base_vol_daily / math.sqrt(SESSION_MINUTES)
        self.variance = minute_vol * minute_vol


class Market:
    """Market engine: regime + shared factors + fair value + momentum + volatility + news."""
    def __init__(self, seed: Optional[int] = None, pregen_days: int = PREGEN_DAYS):
        self.seed = int(seed if seed is not None else random.SystemRandom().randint(1, 2_000_000_000))
        self.rng = np.random.default_rng(self.seed)
        self.py_rng = random.Random(self.seed ^ 0xA5A5A5)
        self.stocks: Dict[str, StockState] = {}
        for cfg in STOCK_CONFIGS:
            s = StockState(*cfg)
            self.stocks[s.symbol] = s
        self.bars: Dict[str, deque] = {s: deque(maxlen=MAX_MINUTE_BARS) for s in self.stocks}
        self.daily_bars: Dict[str, deque] = {s: deque(maxlen=4000) for s in self.stocks}
        self.news: deque = deque(maxlen=300)
        self.active_news: List[NewsItem] = []
        base_day = datetime.now().replace(hour=9, minute=0, second=0, microsecond=0)
        self.now = trading_days_before(base_day, pregen_days)
        self.session_minute = 0
        self.trading_day_index = 0
        self.regime = "SIDEWAY"
        self.regime_days_left = 18
        self.market_sentiment = 0.0
        self.sector_state = defaultdict(float)
        self.market_return_last = 0.0
        self._init_slow_factors()
        self._agg_cache: Dict[Tuple[str, str, int], List[Candle]] = {}
        self._day_accum: Dict[str, dict] = {}
        self.vnindex_history: deque = deque(maxlen=4000)
        self.vnindex = 1250.0
        self.vnindex_ref = self.vnindex
        self._start_new_day(initial=True)
        if pregen_days:
            self.generate_history(pregen_days)

    @property
    def symbols(self):
        return list(self.stocks.keys())

    def _init_slow_factors(self):
        """
        Khởi tạo các trạng thái cung/cầu chậm để 30 mã không đi gần như cùng một đường.
        Đây KHÔNG phải drift ngẫu nhiên trực tiếp lên giá: các trạng thái này đại diện cho
        chu kỳ lợi nhuận, luân chuyển dòng tiền ngành và tích lũy/phân phối tổ chức.
        """
        sectors = sorted({st.sector for st in self.stocks.values()})
        # Trải đều trạng thái khởi đầu rồi xáo theo seed: luôn có ngành/mã đang ở các pha khác nhau.
        sec_levels = np.linspace(-0.9, 0.9, max(1, len(sectors)))
        self.rng.shuffle(sec_levels)
        for sec, level in zip(sectors, sec_levels):
            self.sector_state[sec] = float(level + self.rng.normal(0, 0.10))

        stock_levels = np.linspace(-1.15, 1.15, max(1, len(self.stocks)))
        flow_levels = np.linspace(-1.0, 1.0, max(1, len(self.stocks)))
        self.rng.shuffle(stock_levels); self.rng.shuffle(flow_levels)
        for i, st in enumerate(self.stocks.values()):
            st.business_cycle = float(clamp(stock_levels[i] + self.rng.normal(0, 0.12), -1.6, 1.6))
            st.institutional_flow = float(clamp(flow_levels[i] + self.rng.normal(0, 0.12), -1.6, 1.6))
            st.swing_momentum = 0.0
            st.fundamental_drift_daily = st.growth_rate + st.business_cycle * st.base_vol_daily * 0.010

    def _advance_slow_factors(self):
        """Tiến hóa các biến chậm mỗi phiên, tạo sector rotation và company cycle có tính nhớ."""
        # Luân chuyển dòng tiền ngành: AR(1), có cú xoay vòng nhưng không đổi hướng từng ngày.
        for sec in list(self.sector_state.keys()):
            shock = float(self.rng.normal(0, 0.10))
            if self.rng.random() < 0.025:
                shock += float(self.rng.normal(0, 0.45))
            self.sector_state[sec] = float(clamp(0.955 * self.sector_state[sec] + shock, -1.7, 1.7))

        for st in self.stocks.values():
            # Chu kỳ nền tảng thay đổi chậm; đôi khi có tái định giá kiểu kết quả KD/triển vọng mới.
            bshock = float(self.rng.normal(0, 0.050))
            if self.rng.random() < 0.018:
                bshock += float(self.rng.normal(0, 0.38))
            st.business_cycle = float(clamp(0.988 * st.business_cycle + bshock, -1.8, 1.8))

            fair_gap = math.log(max(st.fair_value, 1.0) / max(st.price, 1.0))
            # Dòng tiền tổ chức có tính bền, chịu ảnh hưởng định giá + động lượng + ngành.
            flow_target = (
                0.42 * math.tanh(fair_gap * 4.0)
                + 0.26 * math.tanh(st.swing_momentum * 45.0)
                + 0.24 * math.tanh(self.sector_state[st.sector])
            )
            fshock = float(self.rng.normal(0, 0.055))
            if self.rng.random() < 0.020:
                fshock += float(self.rng.normal(0, 0.30))
            st.institutional_flow = float(clamp(0.965 * st.institutional_flow + 0.035 * flow_target + fshock, -1.8, 1.8))
            st.fundamental_drift_daily = float(
                st.growth_rate + st.business_cycle * st.base_vol_daily * 0.010
            )

    def _start_new_day(self, initial=False):
        if not initial:
            self.trading_day_index += 1
            self.regime_days_left -= 1
            if self.regime_days_left <= 0:
                choices = REGIME_TRANSITIONS[self.regime]
                self.regime = self.py_rng.choice(choices)
                if self.regime == "PANIC":
                    self.regime_days_left = self.py_rng.randint(2, 8)
                elif self.regime in ("BULL_STRONG", "BEAR_STRONG"):
                    self.regime_days_left = self.py_rng.randint(7, 28)
                else:
                    self.regime_days_left = self.py_rng.randint(8, 45)
            self._advance_slow_factors()
        self.vnindex_ref = self.vnindex
        self._day_accum.clear()
        for st in self.stocks.values():
            st.day_ref = st.price
            st.day_open = st.price
            st.day_volume = 0.0
            self._day_accum[st.symbol] = {
                "ts": self.now.replace(hour=9, minute=0),
                "open": st.price,
                "high": st.price,
                "low": st.price,
                "close": st.price,
                "volume": 0.0,
            }

    def generate_history(self, days: int):
        """
        Tạo ~2 năm lịch sử nhưng không giữ hàng triệu nến 1 phút trong RAM.
        - Phần lịch sử xa: mô phỏng theo ngày bằng cùng market/sector/fair-value/regime.
        - 60 phiên gần nhất: chạy engine 1 phút thật để các timeframe intraday có dữ liệu.
        """
        days = max(0, int(days))
        daily_only = max(0, days - INTRADAY_HISTORY_DAYS)
        for _ in range(daily_only):
            self._step_history_day()
        target = self.trading_day_index + min(days, INTRADAY_HISTORY_DAYS)
        while self.trading_day_index < target:
            self.step_minute(allow_news=True)

    def _step_history_day(self):
        """Mô phỏng một phiên lịch sử nén; OHLC ngày vẫn có logic market/sector/regime."""
        params = REGIMES[self.regime]
        market_ret = params["drift"] * 30.0 + float(self.rng.normal(0, 0.009 * params["vol"]))
        sectors = set(st.sector for st in self.stocks.values())
        sec_ret = {sec: float(self.rng.normal(0, 0.006 * params["vol"] * SECTOR_SENS.get(sec, 1.0))) for sec in sectors}
        # Tin lịch sử nén: thỉnh thoảng tạo shock market/sector/company nhưng không lộ biến ẩn cho người chơi.
        hist_news_scope = None
        hist_news_target = None
        hist_news_impact = 0.0
        if self.rng.random() < 0.16:
            rr = self.rng.random()
            if rr < 0.25:
                hist_news_scope, hist_news_target = "MACRO", "ALL"
            elif rr < 0.60:
                hist_news_scope, hist_news_target = "SECTOR", self.py_rng.choice(list(sectors))
            else:
                hist_news_scope, hist_news_target = "COMPANY", self.py_rng.choice(self.symbols)
            hist_news_impact = float(self.rng.normal(0, 0.008 * params["vol"]))
        for st in self.stocks.values():
            prev = st.price
            # Fair value đi theo tăng trưởng cơ sở + chu kỳ doanh nghiệp riêng.
            st.fair_value *= math.exp(st.fundamental_drift_daily)
            fair_gap = math.log(max(st.fair_value, 1) / max(prev, 1))
            fair_pull = fair_gap * 0.040 * st.meanrev_strength * params["meanrev"]

            # Ba nguồn cung/cầu chậm tạo khác biệt dài hạn giữa các mã:
            # 1) luân chuyển dòng tiền ngành, 2) tích lũy/phân phối tổ chức, 3) swing momentum.
            sector_flow = self.sector_state[st.sector] * 0.00135 * SECTOR_SENS.get(st.sector, 1.0)
            inst_flow = st.institutional_flow * st.base_vol_daily * 0.050
            swing = st.swing_momentum * 0.38 * st.momentum_sens * params["momentum"]
            news = 0.0
            if hist_news_scope == "MACRO": news = hist_news_impact
            elif hist_news_scope == "SECTOR" and hist_news_target == st.sector: news = hist_news_impact * 1.15
            elif hist_news_scope == "COMPANY" and hist_news_target == st.symbol: news = hist_news_impact * 1.45
            idio = float(self.rng.normal(0, st.base_vol_daily * 0.66 * params["vol"]))
            ret = (
                market_ret * st.beta + 0.50 * sec_ret[st.sector] + sector_flow
                + fair_pull + inst_flow + swing + news + idio
            )
            limit = PRICE_LIMITS.get(SYMBOL_EXCHANGE.get(st.symbol, "HOSE"), 0.07)
            ret = clamp(ret, -limit * 0.96, limit * 0.96)
            gap = float(self.rng.normal(0, st.base_vol_daily * 0.10))
            o = clamp(prev * math.exp(gap), prev*(1-limit), prev*(1+limit))
            close = clamp(prev * math.exp(ret), prev*(1-limit), prev*(1+limit))
            span = abs(float(self.rng.normal(st.base_vol_daily*0.50, st.base_vol_daily*0.22)))
            high = min(prev*(1+limit), max(o, close) * (1 + span))
            low = max(prev*(1-limit), min(o, close) * (1 - span))
            high = max(high, o, close); low = min(low, o, close)
            abs_ratio = abs(ret) / max(st.base_vol_daily, 1e-6)
            flow_activity = 1.0 + 0.30 * abs(st.institutional_flow) + 0.18 * abs(self.sector_state[st.sector])
            volume = st.base_volume_daily * (0.68 + 0.58*abs_ratio) * flow_activity * float(self.rng.lognormal(0, 0.25))
            st.price = close
            st.momentum = 0.88 * st.momentum + 0.12 * (ret / SESSION_MINUTES)
            st.variance = 0.94 * st.variance + 0.06 * ((ret / math.sqrt(SESSION_MINUTES)) ** 2)
            acc = self._day_accum[st.symbol]
            acc.update({"open": o, "high": high, "low": low, "close": close, "volume": volume})
        self._complete_day()
        self.session_minute = 0
        d = next_weekday(self.now)
        self.now = d.replace(hour=9, minute=0, second=0, microsecond=0)
        self._start_new_day(initial=False)

    def _news_impact_for(self, st: StockState) -> float:
        if not self.active_news:
            return 0.0
        total = 0.0
        alive = []
        for n in self.active_news:
            age = int((self.now - n.ts).total_seconds() // 60)
            if age < 0:
                continue
            if age > n.decay_minutes * 5:
                continue
            relevant = False
            if n.scope == "MACRO":
                relevant = True
            elif n.scope == "SECTOR" and n.target == st.sector:
                relevant = True
            elif n.scope == "COMPANY" and n.target == st.symbol:
                relevant = True
            if relevant:
                decay = math.exp(-age / max(20, n.decay_minutes))
                total += n.impact * decay
            alive.append(n)
        self.active_news = alive
        return total

    def _maybe_news(self):
        # ~0.18-0.3 tin/ngày tùy regime, đủ để có sự kiện nhưng không biến thành casino headline.
        base = 0.00085
        if self.regime in ("VOLATILE", "PANIC"):
            base *= 1.8
        if self.rng.random() > base:
            return
        scope_roll = self.rng.random()
        if scope_roll < 0.28:
            scope = "MACRO"
            target = "ALL"
            good = [
                "Kỳ vọng mặt bằng lãi suất hạ nhiệt hỗ trợ tâm lý thị trường",
                "Dòng tiền cải thiện khi thanh khoản hệ thống dồi dào",
                "Dữ liệu tăng trưởng tốt hơn kỳ vọng của thị trường",
            ]
            bad = [
                "Áp lực tỷ giá tăng khiến nhà đầu tư thận trọng",
                "Thanh khoản thị trường suy yếu trước thông tin vĩ mô mới",
                "Kỳ vọng lãi suất tăng làm khẩu vị rủi ro giảm",
            ]
        elif scope_roll < 0.58:
            scope = "SECTOR"
            target = self.py_rng.choice(list(set(s.sector for s in self.stocks.values())))
            good = [f"Dòng tiền bắt đầu luân chuyển mạnh vào nhóm {target}", f"Triển vọng ngành {target} được đánh giá tích cực hơn"]
            bad = [f"Áp lực chốt lời gia tăng ở nhóm {target}", f"Triển vọng ngắn hạn ngành {target} trở nên thận trọng"]
        else:
            scope = "COMPANY"
            target = self.py_rng.choice(self.symbols)
            good = [f"{target}: kết quả kinh doanh mô phỏng vượt kỳ vọng", f"{target}: xuất hiện thông tin về hợp đồng mới tích cực", f"{target}: kỳ vọng lợi nhuận được điều chỉnh tăng"]
            bad = [f"{target}: kết quả kinh doanh mô phỏng thấp hơn kỳ vọng", f"{target}: áp lực chi phí tăng làm biên lợi nhuận bị chú ý", f"{target}: nhà đầu tư thận trọng trước thông tin doanh nghiệp"]
        direction = 1 if self.rng.random() < 0.5 else -1
        magnitude_roll = self.rng.random()
        if magnitude_roll < 0.75:
            magnitude, amp, decay = "NHẸ", 0.00008, 90
        elif magnitude_roll < 0.97:
            magnitude, amp, decay = "VỪA", 0.00018, 240
        else:
            magnitude, amp, decay = "MẠNH", 0.00045, 600
        amp *= direction * float(self.rng.uniform(0.7, 1.3))
        title = self.py_rng.choice(good if direction > 0 else bad)
        item = NewsItem(self.now, title, scope, target, amp, decay, magnitude)
        self.news.appendleft(item)
        self.active_news.append(item)
        self.market_sentiment = clamp(self.market_sentiment + direction * (0.08 if magnitude == "NHẸ" else 0.18), -1, 1)

    def _complete_day(self):
        weighted_ret = []
        for sym, acc in self._day_accum.items():
            c = Candle(acc["ts"], acc["open"], acc["high"], acc["low"], acc["close"], acc["volume"])
            self.daily_bars[sym].append(c)
            st = self.stocks[sym]
            day_ret = math.log(max(c.close, 1.0) / max(c.open, 1.0))
            st.swing_momentum = 0.90 * st.swing_momentum + 0.10 * day_ret
            if SYMBOL_EXCHANGE.get(sym, "HOSE") == "HOSE":
                weighted_ret.append((c.close / max(c.open, 1e-9) - 1) * st.liquidity)
        if weighted_ret:
            self.vnindex *= 1 + float(np.mean(weighted_ret))
        self.vnindex_history.append((self.now.date(), self.vnindex))
        # sentiment có tính nhớ nhưng dần quay về 0
        self.market_sentiment *= 0.92

    def step_minute(self, allow_news=True):
        if allow_news:
            self._maybe_news()
        params = REGIMES[self.regime]
        daily_mkt_vol = 0.009 * params["vol"]
        minute_mkt_vol = daily_mkt_vol / math.sqrt(SESSION_MINUTES)
        market_shock = float(self.rng.normal(0, minute_mkt_vol))
        # sentiment & regime drift
        market_drift = params["drift"] + self.market_sentiment * 0.000008
        sectors = set(st.sector for st in self.stocks.values())
        sec_shock = {sec: float(self.rng.normal(0, minute_mkt_vol * 0.55 * SECTOR_SENS.get(sec, 1.0))) for sec in sectors}
        market_ret_values = []
        for st in self.stocks.values():
            o = st.price
            minute_vol_base = st.base_vol_daily / math.sqrt(SESSION_MINUTES)
            ewma_vol = math.sqrt(max(st.variance, 1e-10))
            # Fair value và các lực cung/cầu chậm được phân bổ xuống từng phút.
            st.fair_value *= math.exp(st.fundamental_drift_daily / SESSION_MINUTES)
            fair_gap = math.log(max(st.fair_value, 1) / max(st.price, 1))
            meanrev = fair_gap * 0.00020 * st.meanrev_strength * params["meanrev"]
            momentum_effect = st.momentum * 0.16 * st.momentum_sens * params["momentum"]
            sector_flow = self.sector_state[st.sector] * 0.00135 * SECTOR_SENS.get(st.sector, 1.0) / SESSION_MINUTES
            inst_flow = st.institutional_flow * st.base_vol_daily * 0.050 / SESSION_MINUTES
            swing_flow = st.swing_momentum * 0.38 * st.momentum_sens * params["momentum"] / SESSION_MINUTES
            news_effect = self._news_impact_for(st)
            # order-flow tổng hợp của các nhóm agent; dòng tổ chức/sector làm bias nhưng không quyết định chắc chắn giá.
            agent_pressure = (
                0.23 * np.tanh(st.momentum * 700) +
                0.16 * np.tanh(fair_gap * 3.0) +
                0.12 * self.market_sentiment +
                0.16 * np.tanh(st.institutional_flow) +
                0.10 * np.tanh(self.sector_state[st.sector]) +
                float(self.rng.normal(0, 0.17))
            )
            order_flow = agent_pressure * minute_vol_base * 0.10 * st.liquidity
            idio_sigma = max(minute_vol_base * 0.55, ewma_vol * 0.70)
            idio = float(self.rng.normal(0, idio_sigma * params["vol"]))
            r = (
                market_drift + st.beta * market_shock + 0.55 * sec_shock[st.sector]
                + sector_flow + inst_flow + swing_flow
                + meanrev + momentum_effect + news_effect + order_flow + idio
            )
            # tránh spike vô lý mỗi phút nhưng vẫn cho ngày biến động lớn
            r = float(clamp(r, -0.025, 0.025))
            raw_close = o * math.exp(r)
            # Biên độ mô phỏng theo sàn để HOSE/HNX/UPCOM có tính cách khác nhau.
            daily_limit = PRICE_LIMITS.get(SYMBOL_EXCHANGE.get(st.symbol, "HOSE"), 0.07)
            floor = st.day_ref * (1 - daily_limit)
            ceil = st.day_ref * (1 + daily_limit)
            close = clamp(raw_close, floor, ceil)
            realized_r = math.log(max(close, 1) / max(o, 1))
            wiggle = abs(float(self.rng.normal(0, max(minute_vol_base, ewma_vol) * 0.45)))
            h = min(ceil, max(o, close) * (1 + wiggle))
            l = max(floor, min(o, close) * (1 - wiggle))
            h = max(h, o, close)
            l = min(l, o, close)
            # volatility clustering EWMA
            st.variance = 0.965 * st.variance + 0.035 * (realized_r * realized_r)
            st.momentum = 0.94 * st.momentum + 0.06 * realized_r
            st.price = close
            abs_move_ratio = abs(realized_r) / max(minute_vol_base, 1e-6)
            intraday_curve = 0.75 + 0.65 * abs((self.session_minute / SESSION_MINUTES) - 0.5) * 2
            flow_activity = 1.0 + 0.28 * abs(st.institutional_flow) + 0.15 * abs(self.sector_state[st.sector])
            volume = (st.base_volume_daily / SESSION_MINUTES) * intraday_curve * (1 + 0.65 * abs_move_ratio) * flow_activity
            volume *= float(self.rng.lognormal(mean=0.0, sigma=0.22))
            st.day_volume += volume
            candle = Candle(self.now, o, h, l, close, volume)
            self.bars[st.symbol].append(candle)
            acc = self._day_accum[st.symbol]
            acc["high"] = max(acc["high"], h)
            acc["low"] = min(acc["low"], l)
            acc["close"] = close
            acc["volume"] += volume
            market_ret_values.append(realized_r * st.beta)
        self.market_return_last = float(np.mean(market_ret_values)) if market_ret_values else 0.0
        self.session_minute += 1
        self.now += timedelta(minutes=1)
        self._agg_cache.clear()
        if self.session_minute >= SESSION_MINUTES:
            self._complete_day()
            self.session_minute = 0
            d = next_weekday(self.now)
            self.now = d.replace(hour=9, minute=0, second=0, microsecond=0)
            self._start_new_day(initial=False)

    def get_bars(self, symbol: str, timeframe: str, max_bars: int = 1800) -> List[Candle]:
        factor = TIMEFRAME_FACTOR[timeframe]
        raw = list(self.bars[symbol])
        if factor == 1:
            return raw[-max_bars:]
        if timeframe == "1D":
            # Daily bars hoàn chỉnh + ngày hiện tại tạm thời
            out = list(self.daily_bars[symbol])
            acc = self._day_accum.get(symbol)
            if acc and acc["volume"] > 0:
                out.append(Candle(acc["ts"], acc["open"], acc["high"], acc["low"], acc["close"], acc["volume"]))
            return out[-max_bars:]
        # group theo phiên để không gộp qua đêm
        key = (symbol, timeframe, len(raw))
        if key in self._agg_cache:
            return self._agg_cache[key][-max_bars:]
        groups = []
        bucket = []
        last_date = None
        for c in raw:
            d = c.ts.date()
            if last_date is not None and d != last_date:
                if bucket:
                    groups.append(self._aggregate_bucket(bucket))
                bucket = []
            bucket.append(c)
            last_date = d
            if len(bucket) == factor:
                groups.append(self._aggregate_bucket(bucket))
                bucket = []
        if bucket:
            groups.append(self._aggregate_bucket(bucket))
        self._agg_cache[key] = groups
        return groups[-max_bars:]

    @staticmethod
    def _aggregate_bucket(bucket: List[Candle]) -> Candle:
        return Candle(
            bucket[0].ts,
            bucket[0].open,
            max(x.high for x in bucket),
            min(x.low for x in bucket),
            bucket[-1].close,
            sum(x.volume for x in bucket),
        )

    def day_change_pct(self, symbol: str) -> float:
        st = self.stocks[symbol]
        return (st.price / max(st.day_ref, 1e-9) - 1) * 100

    def order_book(self, symbol: str, levels: int = 5):
        st = self.stocks[symbol]
        vol = math.sqrt(max(st.variance, 1e-10))
        spread_pct = clamp(0.0007 + vol * 0.6 / max(st.liquidity, 0.5), 0.0005, 0.006)
        mid = st.price
        tick = max(10.0, round(mid * 0.0005 / 10) * 10)
        bid0 = mid * (1 - spread_pct / 2)
        ask0 = mid * (1 + spread_pct / 2)
        bids, asks = [], []
        for i in range(levels):
            bid = round((bid0 - i * tick) / 10) * 10
            ask = round((ask0 + i * tick) / 10) * 10
            base = st.base_volume_daily / SESSION_MINUTES * st.liquidity
            bv = int(max(100, base * float(self.rng.uniform(0.5, 1.8)) // 100 * 100))
            av = int(max(100, base * float(self.rng.uniform(0.5, 1.8)) // 100 * 100))
            bids.append((bid, bv))
            asks.append((ask, av))
        return bids, asks


class Player:
    """
    Tài khoản mô phỏng theo cơ chế position-based:
    - BUY mở/tăng LONG.
    - SELL mở/tăng SHORT.
    - Đóng LONG/SHORT là hành động CLOSE riêng, không dùng SELL để đóng LONG.
    - Cả LONG/SHORT dùng cơ chế ký quỹ; đòn bẩy 100%-500% làm giảm vốn ký quỹ cần thiết.
    - Đòn bẩy không tự đổi số cổ phiếu: cùng 100 cp thì P/L tiền vẫn theo 100 cp; ROI trên ký quỹ tăng theo leverage.
    """
    def __init__(self, cash: float = START_CASH):
        self.cash = cash
        self.start_cash = cash
        self.positions: Dict[str, Position] = {}
        self.orders: List[Order] = []
        self.trades: deque = deque(maxlen=1200)
        self.realized_pnl = 0.0
        self.total_fees = 0.0
        self.next_oid = 1
        self.max_equity = cash
        self.max_drawdown = 0.0
        self.first_trade_done = False
        self.close_done = False
        self.limit_order_done = False
        self.stop_order_done = False

    def position_value(self, market: Market, symbol: str, p: Position) -> float:
        px = market.stocks[symbol].price
        # Với tài khoản ký quỹ, equity của vị thế = ký quỹ đã khóa + P/L thị trường.
        pnl = (px - p.avg_cost) * p.qty if p.side == "LONG" else (p.avg_cost - px) * p.qty
        return p.margin_locked + pnl

    def position_effective_leverage(self, p: Position) -> float:
        if p.margin_locked <= 0 or p.qty <= 0 or p.avg_cost <= 0:
            return 1.0
        return max(1.0, (p.avg_cost * p.qty) / p.margin_locked)

    def equity(self, market: Market) -> float:
        eq = self.cash + sum(self.position_value(market, s, p) for s, p in self.positions.items())
        self.max_equity = max(self.max_equity, eq)
        if self.max_equity > 0:
            self.max_drawdown = max(self.max_drawdown, (self.max_equity - eq) / self.max_equity)
        return eq

    def unrealized_pnl(self, market: Market) -> float:
        total = 0.0
        for s, p in self.positions.items():
            px = market.stocks[s].price
            gross = (px - p.avg_cost) * p.qty if p.side == "LONG" else (p.avg_cost - px) * p.qty
            total += gross - p.open_fees
        return total

    def unrealized_pnl_net(self, market: Market) -> float:
        """P/L chưa chốt sau cả phí mở + phí/thuế đóng ước tính tại giá hiện tại.
        Dùng cho NET P/L để người chơi thấy gần sát số tiền nếu đóng toàn bộ vị thế ngay.
        Không tính slippage vì slippage phụ thuộc thanh khoản tại thời điểm thực thi.
        """
        total = 0.0
        for s, p in self.positions.items():
            px = market.stocks[s].price
            gross = (px - p.avg_cost) * p.qty if p.side == "LONG" else (p.avg_cost - px) * p.qty
            close_fee = px * p.qty * FEE_RATE
            close_tax = px * p.qty * SELL_TAX_RATE if p.side == "LONG" else 0.0
            total += gross - p.open_fees - close_fee - close_tax
        return total

    def net_pnl(self, market: Market) -> float:
        """Realized + unrealized NET sau chi phí đóng ước tính."""
        return self.realized_pnl + self.unrealized_pnl_net(market)

    @staticmethod
    def _order_closed_qty(order: Order) -> int:
        return int(getattr(order, "closed_qty", 0) or 0)

    @staticmethod
    def _order_realized_pnl(order: Order) -> float:
        return float(getattr(order, "realized_pnl", 0.0) or 0.0)

    def order_pnl_snapshot(self, market: Market, order: Order) -> Tuple[Optional[float], Optional[float], str]:
        """Trả về (P/L net, %, trạng thái) cho từng dòng trong bảng LỆNH.

        OPEN order:
        - phần đã đóng: dùng realized_pnl đã phân bổ theo đúng giá entry của dòng đó;
        - phần còn mở: mark-to-market theo giá hiện tại và trừ phí mở + phí/thuế đóng ước tính.
        CLOSE order: lấy P/L thực tế từ trade cùng oid.
        """
        if order.intent == "CLOSE":
            for t in self.trades:
                if t.get("oid") == order.oid and t.get("pnl") is not None:
                    pnl = float(t.get("pnl", 0.0))
                    return pnl, None, "REALIZED"
            return None, None, "-"

        if order.filled_qty <= 0 or order.avg_fill <= 0:
            return None, None, "WAITING"

        closed_qty = min(order.filled_qty, self._order_closed_qty(order))
        remain_qty = max(0, order.filled_qty - closed_qty)
        realized = self._order_realized_pnl(order)
        live = 0.0
        if remain_qty > 0:
            current = market.stocks[order.symbol].price
            if order.position_side == "LONG":
                gross = (current - order.avg_fill) * remain_qty
                entry_cost = order.avg_fill * remain_qty * FEE_RATE
                exit_cost = current * remain_qty * (FEE_RATE + SELL_TAX_RATE)
            else:
                gross = (order.avg_fill - current) * remain_qty
                entry_cost = order.avg_fill * remain_qty * (FEE_RATE + SELL_TAX_RATE)
                exit_cost = current * remain_qty * FEE_RATE
            live = gross - entry_cost - exit_cost

        pnl = realized + live
        lev = max(1.0, float(getattr(order, "leverage_x", 1.0) or 1.0))
        base = (order.avg_fill * max(order.filled_qty, 1)) / lev
        pct = pnl / base * 100 if base > 0 else None  # ROI trên ký quỹ của dòng lệnh
        state = "LIVE" if remain_qty > 0 else "REALIZED"
        return pnl, pct, state

    def _allocate_close_pnl_to_entry_orders(self, market: Market, symbol: str, position_side: str, qty: int, close_px: float):
        """Phân bổ lần đóng vị thế về từng lệnh OPEN theo FIFO.
        Nhờ vậy mỗi dòng BUY/SELL đã khớp vẫn giữ được P/L lịch sử sau khi vị thế đóng.
        """
        remain_to_close = int(qty)
        if remain_to_close <= 0:
            return
        for o in self.orders:
            if remain_to_close <= 0:
                break
            if o.intent != "OPEN" or o.symbol != symbol or o.position_side != position_side or o.filled_qty <= 0:
                continue
            already_closed = self._order_closed_qty(o)
            open_qty = max(0, o.filled_qty - already_closed)
            if open_qty <= 0:
                continue
            take = min(open_qty, remain_to_close)
            if position_side == "LONG":
                gross = (close_px - o.avg_fill) * take
                entry_cost = o.avg_fill * take * FEE_RATE
                close_cost = close_px * take * (FEE_RATE + SELL_TAX_RATE)
            else:
                gross = (o.avg_fill - close_px) * take
                entry_cost = o.avg_fill * take * (FEE_RATE + SELL_TAX_RATE)
                close_cost = close_px * take * FEE_RATE
            lot_pnl = gross - entry_cost - close_cost
            o.closed_qty = already_closed + take
            o.realized_pnl = self._order_realized_pnl(o) + lot_pnl
            o.last_close_price = float(close_px)
            o.last_close_ts = market.now
            remain_to_close -= take

    def place_order(self, market: Market, symbol: str, side: str, order_type: str, qty: int, limit_price: float = 0.0, leverage_x: float = 1.0) -> Tuple[bool, str]:
        side = side.upper()
        order_type = order_type.upper()
        if side not in ("BUY", "SELL"):
            return False, "Loại lệnh BUY/SELL không hợp lệ."
        if order_type not in ("MARKET", "LIMIT", "STOP"):
            return False, "Chỉ hỗ trợ MARKET / LIMIT / STOP."
        qty = (qty // LOT_SIZE) * LOT_SIZE
        if qty <= 0:
            return False, f"Khối lượng phải tối thiểu {LOT_SIZE} và theo lô {LOT_SIZE}."
        pos_side = "LONG" if side == "BUY" else "SHORT"
        existing = self.positions.get(symbol)
        if existing and existing.qty > 0 and existing.side != pos_side:
            return False, f"{symbol} đang có {existing.side}. Hãy dùng X/ĐÓNG VỊ THẾ trước khi mở {pos_side}."
        if order_type in ("LIMIT", "STOP"):
            if limit_price <= 0:
                return False, f"Giá {order_type.title()} không hợp lệ."
            limit_price = normalize_order_price(limit_price)
            current = market.stocks[symbol].price
            # Khóa logic đúng bản chất lệnh để tránh vừa đặt xong đã khớp ngược ý người chơi.
            if order_type == "LIMIT":
                if side == "BUY" and limit_price >= current:
                    return False, "BUY LIMIT phải đặt thấp hơn giá thị trường hiện tại."
                if side == "SELL" and limit_price <= current:
                    return False, "SELL LIMIT phải đặt cao hơn giá thị trường hiện tại."
            else:  # STOP
                if side == "BUY" and limit_price <= current:
                    return False, "BUY STOP phải đặt cao hơn giá thị trường hiện tại."
                if side == "SELL" and limit_price >= current:
                    return False, "SELL STOP phải đặt thấp hơn giá thị trường hiện tại."
        leverage_x = clamp(float(leverage_x), LEVERAGE_MIN_PCT / 100.0, LEVERAGE_MAX_PCT / 100.0)
        order = Order(self.next_oid, market.now, symbol, side, order_type, qty, limit_price, intent="OPEN", position_side=pos_side, leverage_x=leverage_x)
        self.next_oid += 1
        self.orders.append(order)
        if order_type == "LIMIT": self.limit_order_done = True
        if order_type == "STOP": self.stop_order_done = True
        if order_type == "MARKET":
            self._execute_market(market, order)
            if order.status == "CANCELLED":
                return False, "Không đủ tiền/ký quỹ khả dụng để mở vị thế."
        return True, f"Đã gửi {side} {order_type} {qty} {symbol} ({pos_side}) x{order.leverage_x:.1f}."

    def modify_pending_order_price(self, market: Market, oid: int, new_price: float) -> Tuple[bool, str]:
        """Sửa giá phần CHƯA KHỚP của LIMIT/STOP đang treo.

        Giá đã khớp (avg_fill) là lịch sử giao dịch nên tuyệt đối không được sửa.
        Với PARTIAL, chỉ phần còn lại tiếp tục chờ ở mức giá mới.
        """
        order = next((o for o in self.orders if o.oid == oid), None)
        if order is None:
            return False, "Không tìm thấy lệnh."
        if order.intent != "OPEN" or order.status not in ("OPEN", "PARTIAL"):
            return False, "Chỉ có thể kéo sửa lệnh đang chờ khớp."
        if order.order_type not in ("LIMIT", "STOP"):
            return False, "Chỉ LIMIT/STOP đang chờ mới sửa giá bằng kéo thả."
        if order.qty - order.filled_qty <= 0:
            return False, "Lệnh đã khớp hết, không còn phần chờ để sửa."
        new_price = normalize_order_price(float(new_price))
        if new_price <= 0:
            return False, "Giá mới không hợp lệ."
        current = market.stocks[order.symbol].price
        if order.order_type == "LIMIT":
            if order.side == "BUY" and new_price >= current:
                return False, "BUY LIMIT phải nằm dưới giá thị trường hiện tại."
            if order.side == "SELL" and new_price <= current:
                return False, "SELL LIMIT phải nằm trên giá thị trường hiện tại."
        else:
            if order.side == "BUY" and new_price <= current:
                return False, "BUY STOP phải nằm trên giá thị trường hiện tại."
            if order.side == "SELL" and new_price >= current:
                return False, "SELL STOP phải nằm dưới giá thị trường hiện tại."
        old = order.limit_price
        order.limit_price = new_price
        order.modified_ts = market.now
        return True, f"Đã dời {order.side} {order.order_type} #{order.oid}: {fmt_price(old)} → {fmt_price(new_price)}."

    def _slippage_price(self, market: Market, symbol: str, qty: int, buy_leg: bool) -> float:
        st = market.stocks[symbol]
        typical = max(st.base_volume_daily / SESSION_MINUTES, LOT_SIZE)
        participation = qty / typical
        slip = clamp(0.0004 + 0.0018 * math.sqrt(max(0, participation)), 0.0004, 0.012)
        return st.price * (1 + slip if buy_leg else 1 - slip)

    def _execute_market(self, market: Market, order: Order):
        remain = order.qty - order.filled_qty
        if remain <= 0:
            return
        if order.intent == "CLOSE":
            buy_leg = order.position_side == "SHORT"
        else:
            buy_leg = order.side == "BUY"
        px = self._slippage_price(market, order.symbol, remain, buy_leg)
        if order.intent == "CLOSE":
            self._fill_close(order, remain, px, market)
        else:
            self._fill_entry(order, remain, px, market)

    def process_limit_orders(self, market: Market):
        """Xử lý cả LIMIT và STOP; giữ tên hàm để tương thích game loop cũ."""
        for o in self.orders:
            if o.status not in ("OPEN", "PARTIAL") or o.intent != "OPEN" or o.order_type not in ("LIMIT", "STOP"):
                continue
            bars = market.bars[o.symbol]
            if not bars:
                continue
            c = bars[-1]
            if c.ts < o.ts:
                continue
            if o.order_type == "LIMIT":
                touched = c.low <= o.limit_price if o.side == "BUY" else c.high >= o.limit_price
            else:  # STOP: BUY khi phá lên; SELL/SHORT khi phá xuống.
                touched = c.high >= o.limit_price if o.side == "BUY" else c.low <= o.limit_price
            if not touched:
                continue
            remain = o.qty - o.filled_qty
            if o.order_type == "STOP":
                # Stop sau khi kích hoạt trở thành Market, có slippage.
                self._execute_market(market, o)
                continue
            available = int(max(LOT_SIZE, (c.volume * float(market.rng.uniform(0.05, 0.35))) // LOT_SIZE * LOT_SIZE))
            fill_qty = min(remain, available)
            self._fill_entry(o, fill_qty, o.limit_price, market)

    def _fill_entry(self, order: Order, qty: int, px: float, market: Market):
        if qty <= 0:
            return
        pos_side = order.position_side or ("LONG" if order.side == "BUY" else "SHORT")
        # Nếu trong lúc lệnh chờ, mã đã mở vị thế ngược chiều bằng lệnh khác thì hủy lệnh này
        # trước khi động đến tiền/ký quỹ.
        p = self.positions.get(order.symbol)
        if p is not None and p.qty > 0 and p.side != pos_side:
            order.status = "CANCELLED"
            return
        gross = qty * px
        lev = clamp(float(getattr(order, "leverage_x", 1.0) or 1.0), LEVERAGE_MIN_PCT / 100.0, LEVERAGE_MAX_PCT / 100.0)
        open_tax = gross * SELL_TAX_RATE if pos_side == "SHORT" else 0.0
        fee = gross * FEE_RATE
        # Đòn bẩy làm giảm ký quỹ cần, nhưng không đổi số cổ phiếu/exposure đã nhập.
        cash_need_per_share = px / lev + px * (FEE_RATE + (SELL_TAX_RATE if pos_side == "SHORT" else 0.0))
        max_afford = int(self.cash / max(cash_need_per_share, 1) // LOT_SIZE * LOT_SIZE)
        qty = min(qty, max_afford)
        if qty <= 0:
            order.status = "CANCELLED"
            return
        gross = qty * px
        fee = gross * FEE_RATE
        open_tax = gross * SELL_TAX_RATE if pos_side == "SHORT" else 0.0
        margin = gross / lev
        self.cash -= margin + fee + open_tax
        if p is None:
            p = Position(side=pos_side)
            self.positions[order.symbol] = p
        new_qty = p.qty + qty
        p.avg_cost = (p.avg_cost * p.qty + px * qty) / max(new_qty, 1)
        p.qty = new_qty
        p.margin_locked += margin
        p.open_fees += fee + open_tax
        self.total_fees += fee + open_tax
        prev = order.filled_qty
        order.filled_qty += qty
        order.avg_fill = ((order.avg_fill * prev) + px * qty) / max(order.filled_qty, 1)
        order.status = "FILLED" if order.filled_qty >= order.qty else "PARTIAL"
        self.trades.appendleft({
            "ts": market.now, "symbol": order.symbol, "side": order.side, "position_side": pos_side,
            "action": "OPEN_LONG" if pos_side == "LONG" else "OPEN_SHORT",
            "qty": qty, "price": px, "fee": fee + open_tax, "oid": order.oid
        })
        self.first_trade_done = True

    def set_exit_trigger(self, market: Market, symbol: str, kind: str, trigger_price: float) -> Tuple[bool, str]:
        """Đặt Stop Loss/Take Profit cho toàn bộ vị thế hiện có. Hai lệnh hoạt động theo OCO."""
        p = self.positions.get(symbol)
        if p is None or p.qty <= 0:
            return False, f"{symbol} chưa có vị thế để đặt {kind}."
        trigger_price = normalize_order_price(trigger_price)
        current = market.stocks[symbol].price
        kind = kind.upper()
        if kind == "STOP_LOSS":
            if p.side == "LONG" and trigger_price >= current:
                return False, "Stop Loss cho LONG phải nằm dưới giá hiện tại."
            if p.side == "SHORT" and trigger_price <= current:
                return False, "Stop Loss cho SHORT phải nằm trên giá hiện tại."
            p.stop_loss = trigger_price
            return True, f"Đã đặt Stop Loss {symbol} tại {fmt_price(trigger_price)}."
        if kind == "TAKE_PROFIT":
            if p.side == "LONG" and trigger_price <= current:
                return False, "Take Profit cho LONG phải nằm trên giá hiện tại."
            if p.side == "SHORT" and trigger_price >= current:
                return False, "Take Profit cho SHORT phải nằm dưới giá hiện tại."
            p.take_profit = trigger_price
            return True, f"Đã đặt Take Profit {symbol} tại {fmt_price(trigger_price)}."
        return False, "Loại lệnh thoát không hợp lệ."

    def clear_exit_trigger(self, symbol: str, kind: str) -> Tuple[bool, str]:
        p = self.positions.get(symbol)
        if p is None or p.qty <= 0:
            return False, f"{symbol} không có vị thế đang mở."
        kind = kind.upper()
        if kind == "STOP_LOSS":
            p.stop_loss = 0.0
            return True, f"Đã xóa Stop Loss {symbol}."
        if kind == "TAKE_PROFIT":
            p.take_profit = 0.0
            return True, f"Đã xóa Take Profit {symbol}."
        return False, "Loại lệnh thoát không hợp lệ."

    def process_exit_triggers(self, market: Market):
        """Kiểm tra SL/TP sau mỗi phút. Nếu cùng chạm trong một nến 1M, ưu tiên SL để tránh look-ahead có lợi giả tạo."""
        for symbol, p in list(self.positions.items()):
            bars = market.bars.get(symbol)
            if not bars:
                continue
            c = bars[-1]
            sl_hit = False
            tp_hit = False
            if p.stop_loss > 0:
                sl_hit = c.low <= p.stop_loss if p.side == "LONG" else c.high >= p.stop_loss
            if p.take_profit > 0:
                tp_hit = c.high >= p.take_profit if p.side == "LONG" else c.low <= p.take_profit
            if not sl_hit and not tp_hit:
                continue
            kind = "STOP_LOSS" if sl_hit else "TAKE_PROFIT"
            trigger = p.stop_loss if kind == "STOP_LOSS" else p.take_profit
            qty = p.qty
            order = Order(self.next_oid, market.now, symbol, "CLOSE", kind, qty, trigger, intent="CLOSE", position_side=p.side)
            self.next_oid += 1
            self.orders.append(order)
            # SL trở thành market tại điểm kích hoạt và chịu trượt giá; TP xử lý như limit tại giá mục tiêu.
            if kind == "STOP_LOSS":
                typical = max(market.stocks[symbol].base_volume_daily / SESSION_MINUTES, LOT_SIZE)
                participation = qty / typical
                slip = clamp(0.0004 + 0.0018 * math.sqrt(max(0, participation)), 0.0004, 0.012)
                px = trigger * (1 - slip if p.side == "LONG" else 1 + slip)
            else:
                px = trigger
            self._fill_close(order, qty, px, market)

    def process_margin_calls(self, market: Market) -> List[str]:
        """Tự thanh lý vị thế khi phần equity riêng của vị thế <= maintenance margin.
        Đây là luật GAME để người chơi cảm nhận rủi ro leverage; không đại diện quy định CTCK thực tế.
        """
        messages = []
        for symbol, p in list(self.positions.items()):
            if p.qty <= 0 or p.margin_locked <= 0:
                continue
            px = market.stocks[symbol].price
            pnl = (px - p.avg_cost) * p.qty if p.side == "LONG" else (p.avg_cost - px) * p.qty
            position_equity = p.margin_locked + pnl
            maintenance = p.margin_locked * MAINTENANCE_MARGIN_RATIO
            if position_equity > maintenance:
                continue
            order = Order(self.next_oid, market.now, symbol, "CLOSE", "LIQUIDATION", p.qty, 0.0, intent="CLOSE", position_side=p.side)
            self.next_oid += 1
            self.orders.append(order)
            self._execute_market(market, order)
            if order.status == "FILLED":
                messages.append(f"MARGIN CALL: đã thanh lý {p.side} {symbol} do ký quỹ xuống dưới ngưỡng an toàn.")
        return messages

    def close_position(self, market: Market, symbol: str) -> Tuple[bool, str]:
        p = self.positions.get(symbol)
        if p is None or p.qty <= 0:
            return False, f"{symbol} không có vị thế đang mở."
        order = Order(self.next_oid, market.now, symbol, "CLOSE", "MARKET", p.qty, 0.0, intent="CLOSE", position_side=p.side)
        self.next_oid += 1
        self.orders.append(order)
        self._execute_market(market, order)
        if order.status == "FILLED":
            return True, f"Đã đóng {p.side} {symbol} @ {fmt_price(order.avg_fill)}."
        return False, f"Không thể đóng vị thế {symbol}."

    def _fill_close(self, order: Order, qty: int, px: float, market: Market):
        p = self.positions.get(order.symbol)
        if p is None or p.qty <= 0 or p.side != order.position_side:
            order.status = "CANCELLED"
            return
        qty = min(qty, p.qty)
        gross = qty * px
        close_fee = gross * FEE_RATE
        close_tax = gross * SELL_TAX_RATE if p.side == "LONG" else 0.0
        open_cost_alloc = p.open_fees * (qty / p.qty) if p.qty else 0.0
        pnl_before_costs = (px - p.avg_cost) * qty if p.side == "LONG" else (p.avg_cost - px) * qty
        margin_release = p.margin_locked * (qty / p.qty) if p.qty else 0.0
        self.cash += margin_release + pnl_before_costs - close_fee - close_tax
        p.margin_locked = max(0.0, p.margin_locked - margin_release)
        realized = pnl_before_costs - open_cost_alloc - close_fee - close_tax
        # Ghi P/L của lần đóng về từng dòng lệnh OPEN để bảng LỆNH giữ lịch sử lãi/lỗ từng entry.
        self._allocate_close_pnl_to_entry_orders(market, order.symbol, p.side, qty, px)
        self.realized_pnl += realized
        self.total_fees += close_fee + close_tax
        p.open_fees = max(0.0, p.open_fees - open_cost_alloc)
        p.qty -= qty
        if p.qty <= 0:
            del self.positions[order.symbol]
        prev = order.filled_qty
        order.filled_qty += qty
        order.avg_fill = ((order.avg_fill * prev) + px * qty) / max(order.filled_qty, 1)
        order.status = "FILLED" if order.filled_qty >= order.qty else "PARTIAL"
        close_action = f"CLOSE_{order.position_side}"
        if order.order_type == "STOP_LOSS": close_action = f"SL_{order.position_side}"
        elif order.order_type == "TAKE_PROFIT": close_action = f"TP_{order.position_side}"
        elif order.order_type == "LIQUIDATION": close_action = f"LIQ_{order.position_side}"
        self.trades.appendleft({
            "ts": market.now, "symbol": order.symbol, "side": "CLOSE", "position_side": order.position_side,
            "action": close_action, "qty": qty, "price": px,
            "fee": close_fee + close_tax, "pnl": realized, "oid": order.oid
        })
        self.close_done = True

    def cancel_order(self, oid: int):
        for o in self.orders:
            if o.oid == oid and o.status in ("OPEN", "PARTIAL"):
                o.status = "CANCELLED"
                return True
        return False

    def order_by_id(self, oid: int) -> Optional[Order]:
        for o in self.orders:
            if o.oid == oid:
                return o
        return None


@dataclass
class Mission:
    title: str
    desc: str
    kind: str
    target: float
    reward_xp: int
    done: bool = False


class MissionManager:
    def __init__(self, start_cash: float = START_CASH):
        self.start_cash = float(start_cash)
        self.missions = [
            Mission("Làm quen Watchlist", "Chuyển sang xem ít nhất 3 mã cổ phiếu khác nhau.", "symbols", 3, 100),
            Mission("Mở vị thế đầu tiên", "Mở LONG bằng BUY hoặc mở SHORT bằng SELL với ít nhất 100 cổ phiếu.", "first_trade", 1, 150),
            Mission("Đọc nhiều khung", "Đổi timeframe ít nhất 3 lần.", "timeframes", 3, 100),
            Mission("Khoanh vùng giá", "Dùng công cụ Hình chữ nhật ít nhất 1 lần.", "rect", 1, 120),
            Mission("Fibonacci cơ bản", "Vẽ Fibonacci thoái lui với 5 mốc: 0 / 38.2 / 50 / 61.8 / 100%.", "fib", 1, 150),
            Mission("Kiên nhẫn với Limit", "Đặt ít nhất 1 lệnh Buy Limit hoặc Sell Limit.", "limit", 1, 150),
            Mission("Làm quen Stop", "Đặt ít nhất 1 lệnh Buy Stop hoặc Sell Stop.", "stop", 1, 160),
            Mission("Khép vòng giao dịch", "Dùng nút X để đóng một vị thế LONG hoặc SHORT và chốt lãi/lỗ.", "close", 1, 180),
            Mission("Lợi nhuận đầu tiên", "Đưa tổng P/L (realized + unrealized) đạt +1.000.000đ.", "pnl", 1_000_000, 250),
            Mission("Đa dạng hóa", "Nắm giữ đồng thời 3 mã cổ phiếu.", "positions", 3, 250),
            Mission("Mục tiêu 5%", f"Đưa Equity đạt tối thiểu {fmt_money(self.start_cash * 1.05)}đ.", "equity", self.start_cash * 1.05, 400),
            Mission("Tự do khám phá", "Hoàn thành toàn bộ nhiệm vụ hướng dẫn. Từ đây tự xây chiến lược của riêng bạn.", "finish", 1, 0),
        ]
        self.index = 0
        self.xp = 0
        self.symbols_seen = set()
        self.timeframe_switches = 0
        self.rect_count = 0
        self.fib_count = 0
        self.completed_count = 0

    def __len__(self):
        # Fix lỗi V1.0: draw_mission_panel gọi len(self.missions) trong khi class chưa có __len__.
        return len(self.missions)

    @property
    def guided_total(self):
        return max(0, len(self.missions) - 1)

    @property
    def free_mode(self):
        return self.index >= self.guided_total

    def current(self) -> Mission:
        return self.missions[min(self.index, len(self.missions) - 1)]

    def on_symbol(self, symbol):
        self.symbols_seen.add(symbol)

    def on_timeframe(self):
        self.timeframe_switches += 1

    def on_drawing(self, kind):
        if kind == "RECT": self.rect_count += 1
        if kind == "FIB": self.fib_count += 1

    def update(self, player: Player, market: Market) -> Optional[Mission]:
        # Mission cuối chỉ là trạng thái "Tự do khám phá", không tự hoàn thành lặp lại.
        if self.free_mode:
            self.index = self.guided_total
            return None
        m = self.current()
        pnl = player.realized_pnl + player.unrealized_pnl(market)
        values = {
            "symbols": len(self.symbols_seen),
            "first_trade": 1 if player.first_trade_done else 0,
            "timeframes": self.timeframe_switches,
            "rect": self.rect_count,
            "fib": self.fib_count,
            "limit": 1 if player.limit_order_done else 0,
            "stop": 1 if player.stop_order_done else 0,
            "close": 1 if player.close_done else 0,
            "pnl": pnl,
            "positions": len(player.positions),
            "equity": player.equity(market),
            "finish": 1 if self.index == len(self.missions) - 1 else 0,
        }
        if values.get(m.kind, 0) >= m.target and not m.done:
            m.done = True
            self.xp += m.reward_xp
            self.completed_count += 1
            self.index += 1
            self.index = min(self.index, self.guided_total)
            return m
        return None

    def progress_text(self, player: Player, market: Market) -> str:
        m = self.current()
        pnl = player.realized_pnl + player.unrealized_pnl(market)
        vals = {
            "symbols": len(self.symbols_seen), "first_trade": int(player.first_trade_done),
            "timeframes": self.timeframe_switches, "rect": self.rect_count,
            "fib": self.fib_count, "limit": int(player.limit_order_done),
            "stop": int(player.stop_order_done), "close": int(player.close_done), "pnl": pnl,
            "positions": len(player.positions), "equity": player.equity(market),
            "finish": 1,
        }
        v = vals.get(m.kind, 0)
        if m.kind in ("pnl", "equity"):
            return f"{fmt_money(v)} / {fmt_money(m.target)}"
        return f"{int(v)} / {int(m.target)}"


class ToastManager:
    def __init__(self):
        self.items = deque()

    def push(self, text: str, color=BLUE, duration=3.0):
        self.items.append({"text": text, "color": color, "until": time.time() + duration})
        while len(self.items) > 5:
            self.items.popleft()

    def draw(self, screen, font, w, h):
        now = time.time()
        while self.items and self.items[0]["until"] < now:
            self.items.popleft()
        y = TOP_H + 12
        for item in list(self.items)[-4:]:
            surf = font.render(item["text"], True, TEXT)
            rect = pygame.Rect(w - RIGHT_W - surf.get_width() - 30, y, surf.get_width() + 20, 34)
            pygame.draw.rect(screen, PANEL_2, rect, border_radius=6)
            pygame.draw.rect(screen, item["color"], rect, 1, border_radius=6)
            screen.blit(surf, (rect.x + 10, rect.y + 8))
            y += 40


class InputBox:
    def __init__(self, text="", numeric=False):
        self.text = text
        self.numeric = numeric
        self.active = False
        self.rect = pygame.Rect(0, 0, 100, 28)

    def set_rect(self, rect):
        self.rect = pygame.Rect(rect)

    def handle(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            self.active = self.rect.collidepoint(event.pos)
        if event.type == pygame.KEYDOWN and self.active:
            if event.key == pygame.K_RETURN:
                self.active = False
            elif event.key == pygame.K_BACKSPACE:
                self.text = self.text[:-1]
            elif event.unicode:
                ch = event.unicode
                if self.numeric:
                    if ch.isdigit() or (ch == "." and "." not in self.text):
                        self.text += ch
                else:
                    self.text += ch

    def draw(self, screen, font):
        pygame.draw.rect(screen, (20, 25, 36), self.rect, border_radius=4)
        pygame.draw.rect(screen, BLUE if self.active else BORDER, self.rect, 1, border_radius=4)
        txt = font.render(self.text, True, TEXT)
        screen.blit(txt, (self.rect.x + 7, self.rect.y + (self.rect.h - txt.get_height()) // 2))

    def int_value(self, default=0):
        try: return int(float(self.text))
        except Exception: return default

    def float_value(self, default=0.0):
        try: return float(self.text)
        except Exception: return default

class ChartView:
    def __init__(self):
        self.symbol = "FPT"
        self.timeframe = "1D"
        self.chart_type = "CANDLE"
        self.visible_count = 120
        self.offset = 0
        self.crosshair = True
        self.active_tool = "POINTER"
        self.drawings: List[Drawing] = []
        self.redo_drawings: List[Tuple[int, Drawing]] = []
        self.temp_anchor: Optional[Tuple[datetime, float]] = None
        self.drag_start = None
        self.drag_current = None
        # Kéo trực tiếp trên trục X/Y để zoom kiểu TradingView.
        self.axis_drag: Optional[dict] = None
        self.hover_candle: Optional[Candle] = None
        self.chart_rect = pygame.Rect(0,0,100,100)
        self._visible: List[Candle] = []
        self._price_min = 0.0
        self._price_max = 1.0
        # Hệ số mở rộng trục giá. 1.0 = auto-fit theo nến; >1 = nhìn xa hơn lên/xuống.
        self.price_scale = 1.0
        self._plot_rect = pygame.Rect(0,0,100,100)
        self._vol_rect = pygame.Rect(0,0,100,20)
        self._y_axis_rect = pygame.Rect(0,0,72,100)
        self._x_axis_rect = pygame.Rect(0,0,100,26)
        self.context_price: float = 0.0
        self.context_pos: Optional[Tuple[int, int]] = None
        # Các đường lệnh có thể kéo trực tiếp trên chart. Danh sách được dựng lại mỗi frame.
        self._draggable_levels: List[dict] = []
        self.hover_level: Optional[dict] = None
        self.level_drag: Optional[dict] = None

    def zoom_price_out(self):
        """Mở rộng trục Y để thấy các mức giá xa hơn (đặt SL/TP xa)."""
        self.price_scale = min(PRICE_SCALE_MAX, self.price_scale * PRICE_SCALE_STEP)

    def zoom_price_in(self):
        """Thu trục Y dần về auto-fit, nhưng không crop mất nến đang hiển thị."""
        self.price_scale = max(PRICE_SCALE_MIN, self.price_scale / PRICE_SCALE_STEP)
        if self.price_scale < 1.015:
            self.price_scale = 1.0

    def reset_view(self):
        self.visible_count = 120
        self.offset = 0
        self.price_scale = 1.0

    def _commit_drawing(self, drawing: Drawing):
        self.drawings.append(drawing)
        # Sau một thao tác vẽ mới, nhánh Redo cũ không còn hợp lệ.
        self.redo_drawings.clear()

    def undo_drawing(self) -> bool:
        """Undo hình vẽ gần nhất của đúng mã/timeframe đang xem."""
        for i in range(len(self.drawings)-1, -1, -1):
            d = self.drawings[i]
            if d.symbol == self.symbol and d.timeframe == self.timeframe:
                removed = self.drawings.pop(i)
                self.redo_drawings.append((i, removed))
                return True
        return False

    def redo_drawing(self) -> bool:
        """Redo thao tác vẽ gần nhất đã Undo của đúng mã/timeframe."""
        for i in range(len(self.redo_drawings)-1, -1, -1):
            old_index, d = self.redo_drawings[i]
            if d.symbol == self.symbol and d.timeframe == self.timeframe:
                self.redo_drawings.pop(i)
                idx = int(clamp(old_index, 0, len(self.drawings)))
                self.drawings.insert(idx, d)
                return True
        return False

    def select_symbol(self, symbol: str):
        self.symbol = symbol
        self.offset = 0
        self.temp_anchor = None

    def select_timeframe(self, tf: str):
        if tf != self.timeframe:
            self.timeframe = tf
            self.offset = 0
            self.temp_anchor = None

    def get_visible(self, market: Market):
        bars = market.get_bars(self.symbol, self.timeframe, max_bars=2400)
        if not bars:
            self._visible = []
            return []
        self.offset = clamp(self.offset, 0, max(0, len(bars)-10))
        end = len(bars) - self.offset
        start = max(0, end - self.visible_count)
        self._visible = bars[start:end]
        return self._visible

    def _price_to_y(self, p: float) -> int:
        pr = self._plot_rect
        span = max(1e-9, self._price_max - self._price_min)
        return int(pr.bottom - (p - self._price_min) / span * pr.height)

    def _y_to_price(self, y: int) -> float:
        pr = self._plot_rect
        span = max(1e-9, self._price_max - self._price_min)
        ratio = clamp((pr.bottom - y) / max(pr.height,1), 0, 1)
        return self._price_min + ratio * span

    def _idx_to_x(self, idx: int) -> float:
        if not self._visible:
            return self._plot_rect.left
        return self._plot_rect.left + (idx + 0.5) * self._plot_rect.width / max(len(self._visible),1)

    def _x_to_idx(self, x: int) -> int:
        if not self._visible:
            return 0
        rel = (x - self._plot_rect.left) / max(self._plot_rect.width,1)
        return int(clamp(rel * len(self._visible), 0, len(self._visible)-1))

    def _time_to_x(self, ts: datetime) -> Optional[float]:
        if not self._visible:
            return None
        # nearest candle by timestamp
        diffs = [abs((c.ts-ts).total_seconds()) for c in self._visible]
        idx = int(np.argmin(diffs))
        # Nếu timestamp quá xa khỏi vùng đang xem thì bỏ qua.
        if diffs[idx] > max(TIMEFRAME_FACTOR[self.timeframe]*60*3, 86400*2):
            return None
        return self._idx_to_x(idx)

    def point_from_mouse(self, pos) -> Optional[Tuple[datetime,float]]:
        if not self._plot_rect.collidepoint(pos) or not self._visible:
            return None
        idx = self._x_to_idx(pos[0])
        return self._visible[idx].ts, self._y_to_price(pos[1])

    def _drag_preview_price(self, key: str, identity, fallback: float) -> float:
        d = self.level_drag
        if d and d.get("key") == key and d.get("identity") == identity:
            return float(d.get("preview_price", fallback))
        return fallback

    def _register_draggable_level(self, key: str, identity, price: float, y: int, label: str, color):
        self._draggable_levels.append({
            "key": key, "identity": identity, "price": float(price), "y": int(y),
            "label": label, "color": color
        })

    def _hit_draggable_level(self, pos, tolerance: int = 7) -> Optional[dict]:
        if not self._plot_rect.collidepoint(pos):
            return None
        hits = [d for d in self._draggable_levels if abs(pos[1] - d.get("y", -99999)) <= tolerance]
        if not hits:
            return None
        # Nếu hai đường gần nhau, lấy đường gần con trỏ nhất; SL/TP ưu tiên hơn lệnh entry.
        priority = {"STOP_LOSS": 0, "TAKE_PROFIT": 1, "ORDER": 2}
        hits.sort(key=lambda d: (abs(pos[1]-d["y"]), priority.get(d.get("key"), 9)))
        return hits[0]

    def _commit_level_drag(self, player: Player, market: Market, toast: ToastManager):
        d = self.level_drag
        if not d:
            return False
        key = d.get("key")
        new_price = normalize_order_price(float(d.get("preview_price", d.get("original_price", 0.0))))
        if key == "ORDER":
            ok, msg = player.modify_pending_order_price(market, int(d.get("identity")), new_price)
        elif key in ("STOP_LOSS", "TAKE_PROFIT"):
            ok, msg = player.set_exit_trigger(market, self.symbol, key, new_price)
        else:
            ok, msg = False, "Không thể sửa đường này."
        toast.push(msg, GREEN if ok else RED, 2.4)
        self.level_drag = None
        return True

    def handle_event(self, event, mission: MissionManager, toast: ToastManager, player: Optional[Player] = None, market: Optional[Market] = None):
        # ESC trong lúc kéo lệnh = hủy thao tác, không đổi giá.
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE and self.level_drag is not None:
            self.level_drag = None
            toast.push("Đã hủy kéo đường lệnh.", MUTED, 1.2)
            return True

        # Ưu tiên bắt đường lệnh trước thao tác pan chart. Chỉ POINTER mới kéo lệnh để không phá công cụ vẽ.
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and self.active_tool == "POINTER" and self._plot_rect.collidepoint(event.pos):
            hit = self._hit_draggable_level(event.pos)
            if hit is not None and player is not None and market is not None:
                self.level_drag = dict(hit)
                self.level_drag["original_price"] = float(hit["price"])
                self.level_drag["preview_price"] = float(hit["price"])
                toast.push("Giữ chuột và kéo lên/xuống để đổi giá; thả chuột để xác nhận. ESC để hủy.", BLUE, 2.2)
                return True

        if event.type == pygame.MOUSEMOTION and self.level_drag is not None:
            # Cho phép con trỏ đi hơi ra ngoài vùng plot nhưng giá preview vẫn clamp trong biên Y đang xem.
            y = int(clamp(event.pos[1], self._plot_rect.top, self._plot_rect.bottom))
            self.level_drag["preview_price"] = normalize_order_price(self._y_to_price(y))
            return True

        if event.type == pygame.MOUSEBUTTONUP and event.button == 1 and self.level_drag is not None:
            if player is not None and market is not None:
                return self._commit_level_drag(player, market, toast)
            self.level_drag = None
            return True

        # Kéo trực tiếp trục giá Y / thời gian X giống terminal chart:
        # - Y: kéo xuống = nhìn rộng hơn; kéo lên = phóng to biến động giá.
        # - X: kéo phải = phóng to nến; kéo trái = nhìn nhiều nến hơn.
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            clicks = int(getattr(event, "clicks", 1) or 1)
            if self._y_axis_rect.collidepoint(event.pos):
                if clicks >= 2:
                    self.price_scale = 1.0
                    toast.push("Trục Y về Auto-fit.", MUTED, 1.2)
                else:
                    self.axis_drag = {"axis":"Y", "start":event.pos, "scale":self.price_scale}
                return True
            if self._x_axis_rect.collidepoint(event.pos):
                if clicks >= 2:
                    self.visible_count = 120
                    self.offset = 0
                    toast.push("Trục X về mặc định.", MUTED, 1.2)
                else:
                    self.axis_drag = {"axis":"X", "start":event.pos, "visible":self.visible_count}
                return True

        if event.type == pygame.MOUSEMOTION and self.axis_drag is not None:
            axis = self.axis_drag.get("axis")
            if axis == "Y":
                dy = event.pos[1] - self.axis_drag["start"][1]
                # exponential cho cảm giác mượt ở cả zoom gần và zoom rất xa
                scale = float(self.axis_drag["scale"]) * math.exp(dy / 135.0)
                self.price_scale = float(clamp(scale, PRICE_SCALE_MIN, PRICE_SCALE_MAX))
            else:
                dx = event.pos[0] - self.axis_drag["start"][0]
                visible = float(self.axis_drag["visible"]) * math.exp(-dx / 180.0)
                self.visible_count = int(clamp(round(visible), 20, 650))
            return True

        if event.type == pygame.MOUSEBUTTONUP and event.button == 1 and self.axis_drag is not None:
            self.axis_drag = None
            return True

        if event.type == pygame.MOUSEWHEEL and self.chart_rect.collidepoint(pygame.mouse.get_pos()):
            # Shift + con lăn = zoom theo CHIỀU GIÁ (Y). Con lăn thường vẫn zoom thời gian (X).
            mods = pygame.key.get_mods()
            if mods & pygame.KMOD_SHIFT:
                if event.y > 0:
                    self.zoom_price_in()
                else:
                    self.zoom_price_out()
                toast.push(f"Trục giá Y x{self.price_scale:.2f}", MUTED, 1.2)
            else:
                if event.y > 0:
                    self.visible_count = max(20, int(self.visible_count * 0.82))
                else:
                    self.visible_count = min(650, int(self.visible_count * 1.22))
            return True
        if event.type == pygame.MOUSEBUTTONDOWN and self._plot_rect.collidepoint(event.pos):
            if event.button == 2 or (event.button == 1 and self.active_tool == "POINTER"):
                self.drag_start = event.pos
                return True
            if event.button == 1:
                pt = self.point_from_mouse(event.pos)
                if pt is None:
                    return False
                if self.active_tool in ("TREND", "FIB"):
                    if self.temp_anchor is None:
                        self.temp_anchor = pt
                        toast.push("Chọn điểm thứ hai trên biểu đồ.", MUTED)
                    else:
                        kind = self.active_tool
                        self._commit_drawing(Drawing(kind, self.symbol, self.timeframe, self.temp_anchor[0], self.temp_anchor[1], pt[0], pt[1]))
                        self.temp_anchor = None
                        mission.on_drawing(kind)
                        toast.push("Đã tạo Fibonacci." if kind == "FIB" else "Đã tạo đường xu hướng.", BLUE)
                    return True
                if self.active_tool == "HLINE":
                    self._commit_drawing(Drawing("HLINE", self.symbol, self.timeframe, pt[0], pt[1]))
                    toast.push("Đã tạo đường ngang.", BLUE)
                    return True
                if self.active_tool == "RECT":
                    self.temp_anchor = pt
                    self.drag_current = pt
                    return True
        if event.type == pygame.MOUSEMOTION:
            if self.drag_start is not None:
                dx = event.pos[0] - self.drag_start[0]
                bar_w = self._plot_rect.width / max(len(self._visible), 1)
                if abs(dx) >= bar_w:
                    shift = int(-dx / max(bar_w,1))
                    self.offset = max(0, self.offset + shift)
                    self.drag_start = event.pos
                return True
            if self.temp_anchor is not None and self.active_tool == "RECT" and self._plot_rect.collidepoint(event.pos):
                self.drag_current = self.point_from_mouse(event.pos)
        if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
            if self.active_tool == "RECT" and self.temp_anchor is not None:
                pt = self.point_from_mouse(event.pos)
                if pt is not None:
                    a = self.temp_anchor
                    self._commit_drawing(Drawing("RECT", self.symbol, self.timeframe, a[0], a[1], pt[0], pt[1]))
                    mission.on_drawing("RECT")
                    toast.push("Đã khoanh vùng giá.", BLUE)
                self.temp_anchor = None
                self.drag_current = None
                return True
            self.drag_start = None
        if event.type == pygame.MOUSEBUTTONUP and event.button == 2:
            self.drag_start = None
        return False

    def delete_last(self):
        # Xóa hình cuối cũng đi qua Undo để vẫn có thể Redo nếu xóa nhầm.
        return self.undo_drawing()

    def draw(self, screen, market: Market, player: Player, rect: pygame.Rect, fonts):
        self.chart_rect = rect.copy()
        pygame.draw.rect(screen, BG, rect)
        bars = self.get_visible(market)
        if not bars:
            return
        pad_left, pad_right, pad_top, pad_bottom = 10, 72, 10, 24
        vol_h = int(rect.height * 0.20)
        plot_bottom = rect.bottom - pad_bottom - vol_h
        self._plot_rect = pygame.Rect(rect.x + pad_left, rect.y + pad_top, rect.width-pad_left-pad_right, plot_bottom-(rect.y+pad_top))
        self._vol_rect = pygame.Rect(self._plot_rect.x, plot_bottom+4, self._plot_rect.width, vol_h-8)
        # Vùng kéo trục: dải giá bên phải và dải thời gian phía dưới.
        self._y_axis_rect = pygame.Rect(self._plot_rect.right, rect.y, pad_right, rect.height)
        self._x_axis_rect = pygame.Rect(self._plot_rect.left, self._vol_rect.bottom, self._plot_rect.width, max(18, rect.bottom-self._vol_rect.bottom))
        highs = [c.high for c in bars]
        lows = [c.low for c in bars]
        pmin, pmax = min(lows), max(highs)
        raw_span = max(pmax-pmin, max(pmax*0.01,1))
        # Auto-fit cũ có 8% khoảng thở mỗi phía. price_scale mở rộng khoảng này quanh tâm.
        auto_min = pmin - raw_span*0.08
        auto_max = pmax + raw_span*0.08
        auto_span = max(auto_max-auto_min, 1.0)
        center = (auto_min + auto_max) * 0.5
        target_span = auto_span * clamp(self.price_scale, PRICE_SCALE_MIN, PRICE_SCALE_MAX)
        low = center - target_span*0.5
        high = center + target_span*0.5
        # Giá mô phỏng không âm. Nếu biên dưới vượt 0 thì dồn phần dư lên trên.
        if low < 1.0:
            high += (1.0 - low)
            low = 1.0
        self._price_min = low
        self._price_max = max(low+1.0, high)

        # Hiển thị trạng thái zoom Y để người chơi biết đang ở auto hay đã mở rộng.
        if self.price_scale > 1.01:
            ztxt = fonts["xs"].render(f"Y ZOOM x{self.price_scale:.2f}  |  Shift + cuộn để chỉnh", True, MUTED)
            screen.blit(ztxt, (self._plot_rect.left+8, self._plot_rect.top+6))

        # Grid ngang
        for i in range(7):
            y = self._plot_rect.top + int(i*self._plot_rect.height/6)
            pygame.draw.line(screen, GRID, (self._plot_rect.left,y), (self._plot_rect.right,y), 1)
            price = self._price_max - i*(self._price_max-self._price_min)/6
            s = fonts["xs"].render(fmt_price(price), True, MUTED)
            screen.blit(s, (self._plot_rect.right+8, y-s.get_height()//2))
        # Grid dọc/time label
        for i in range(0, len(bars), max(1, len(bars)//8)):
            x = int(self._idx_to_x(i))
            pygame.draw.line(screen, GRID, (x,self._plot_rect.top), (x,self._vol_rect.bottom), 1)
            c = bars[i]
            if self.timeframe == "1D":
                label = c.ts.strftime("%m/%Y") if self.visible_count > 260 else c.ts.strftime("%d/%m")
            else:
                label = c.ts.strftime("%H:%M")
            s = fonts["xs"].render(label, True, MUTED)
            screen.blit(s, (x-s.get_width()//2, self._vol_rect.bottom+3))

        # Gợi ý trực quan khi rê chuột vào vùng trục có thể kéo để zoom.
        axis_mouse = pygame.mouse.get_pos()
        if self._y_axis_rect.collidepoint(axis_mouse) or (self.axis_drag and self.axis_drag.get("axis")=="Y"):
            pygame.draw.line(screen, BLUE, (self._plot_rect.right, rect.top), (self._plot_rect.right, rect.bottom), 2)
            hint = fonts["xs"].render("Kéo ↑↓ zoom Y", True, BLUE)
            screen.blit(hint, (self._plot_rect.right + 5, rect.bottom - 18))
        if self._x_axis_rect.collidepoint(axis_mouse) or (self.axis_drag and self.axis_drag.get("axis")=="X"):
            pygame.draw.line(screen, BLUE, (self._plot_rect.left, self._x_axis_rect.top), (self._plot_rect.right, self._x_axis_rect.top), 2)
            hint = fonts["xs"].render("Kéo ←→ zoom X", True, BLUE)
            screen.blit(hint, (self._plot_rect.left + 8, self._x_axis_rect.top + 3))

        bar_w = self._plot_rect.width / max(len(bars),1)
        body_w = max(1, min(10, int(bar_w*0.68)))
        vmax = max(c.volume for c in bars) or 1
        if self.chart_type == "CANDLE":
            for i,c in enumerate(bars):
                x = int(self._idx_to_x(i))
                color = GREEN if c.close >= c.open else RED
                yo = self._price_to_y(c.open); yc = self._price_to_y(c.close)
                yh = self._price_to_y(c.high); yl = self._price_to_y(c.low)
                pygame.draw.line(screen, color, (x,yh), (x,yl), 1)
                top = min(yo,yc); hh=max(1,abs(yc-yo))
                pygame.draw.rect(screen, color, (x-body_w//2, top, body_w, hh))
                vh = int(c.volume/vmax*self._vol_rect.height)
                pygame.draw.rect(screen, color, (x-max(1,body_w//3), self._vol_rect.bottom-vh, max(2,body_w//2), vh))
        else:
            pts=[]
            for i,c in enumerate(bars):
                pts.append((int(self._idx_to_x(i)), self._price_to_y(c.close)))
                color = GREEN if c.close>=c.open else RED
                vh = int(c.volume/vmax*self._vol_rect.height)
                pygame.draw.rect(screen,color,(int(self._idx_to_x(i))-1,self._vol_rect.bottom-vh,2,vh))
            if len(pts)>=2:
                pygame.draw.lines(screen,CYAN,False,pts,2)

        # SMA 20/50 - chỉ là indicator, không điều khiển giá
        closes = pd.Series([c.close for c in bars], dtype=float)
        for period,color in ((20,YELLOW),(50,PURPLE)):
            if len(closes)>=period:
                ma=closes.rolling(period).mean().to_numpy()
                pts=[]
                for i,v in enumerate(ma):
                    if not np.isnan(v): pts.append((int(self._idx_to_x(i)),self._price_to_y(float(v))))
                if len(pts)>=2: pygame.draw.lines(screen,color,False,pts,1)

        self._draw_drawings(screen, fonts)
        self._draw_trade_levels(screen, player, fonts)

        # Current price line
        last = bars[-1].close
        y=self._price_to_y(last)
        pygame.draw.line(screen,GREEN,(self._plot_rect.left,y),(self._plot_rect.right,y),1)
        lab=fonts["xs"].render(fmt_price(last),True,WHITE)
        lr=pygame.Rect(self._plot_rect.right+4,y-lab.get_height()//2-3,68,lab.get_height()+6)
        pygame.draw.rect(screen,GREEN,lr,border_radius=2)
        screen.blit(lab,(lr.x+5,lr.y+3))

        # Crosshair + OHLC tooltip
        mx,my=pygame.mouse.get_pos()
        self.hover_candle=None
        if self.crosshair and self._plot_rect.collidepoint((mx,my)):
            idx=self._x_to_idx(mx); c=bars[idx]; self.hover_candle=c
            x=int(self._idx_to_x(idx))
            pygame.draw.line(screen,(95,103,120),(x,self._plot_rect.top),(x,self._vol_rect.bottom),1)
            pygame.draw.line(screen,(95,103,120),(self._plot_rect.left,my),(self._plot_rect.right,my),1)
            price=self._y_to_price(my)
            ptxt=fonts["xs"].render(fmt_price(price),True,WHITE)
            pr=pygame.Rect(self._plot_rect.right+4,my-ptxt.get_height()//2-3,68,ptxt.get_height()+6)
            pygame.draw.rect(screen,(74,82,101),pr,border_radius=2); screen.blit(ptxt,(pr.x+5,pr.y+3))
            chg=(c.close/c.open-1)*100 if c.open else 0
            top=f"{self.symbol}  {self.timeframe}   O {fmt_price(c.open)}  H {fmt_price(c.high)}  L {fmt_price(c.low)}  C {fmt_price(c.close)}   {chg:+.2f}%   Vol {fmt_money(c.volume)}"
            surf=fonts["sm"].render(top,True,GREEN if chg>=0 else RED)
            screen.blit(surf,(rect.x+10,rect.y+4))

        pygame.draw.line(screen,BORDER,(rect.right-1,rect.top),(rect.right-1,rect.bottom),1)

    def _draw_trade_levels(self, screen, player: Player, fonts):
        """Vẽ entry/history + các đường lệnh có thể kéo.

        Giá khớp LONG/SHORT đã thành lịch sử nên chỉ hiển thị, không cho kéo.
        Chỉ phần lệnh LIMIT/STOP chưa khớp và SL/TP đang hoạt động mới có thể kéo sửa.
        """
        self._draggable_levels = []
        self.hover_level = None
        trades = [t for t in list(player.trades) if t.get("symbol") == self.symbol][:12]
        for idx, t in enumerate(reversed(trades)):
            px = float(t.get("price", 0))
            if px <= 0 or not (self._price_min <= px <= self._price_max):
                continue
            y = self._price_to_y(px)
            action = t.get("action", "")
            if action == "OPEN_LONG":
                color, label = (42,183,140), f"LONG {int(t.get('qty',0))} @ {fmt_price(px)}"
            elif action == "OPEN_SHORT":
                color, label = (220,83,94), f"SHORT {int(t.get('qty',0))} @ {fmt_price(px)}"
            else:
                color = (245,194,66)
                pnl = t.get("pnl")
                pnl_txt = f"  P/L {fmt_money(pnl)}" if pnl is not None else ""
                label = f"CLOSE {t.get('position_side','')} @ {fmt_price(px)}{pnl_txt}"
            draw_dashed_line(screen, color, (self._plot_rect.left, y), (self._plot_rect.right, y), 8, 5, 1)
            surf = fonts["xs"].render(label, True, color)
            ly = y - surf.get_height() - 2 if idx % 2 == 0 else y + 2
            screen.blit(surf, (self._plot_rect.left + 6, ly))
        # Lệnh chờ Entry đặt từ panel hoặc menu chuột phải.
        for o in player.orders:
            if o.symbol != self.symbol or o.intent != "OPEN" or o.status not in ("OPEN", "PARTIAL") or o.order_type not in ("LIMIT", "STOP"):
                continue
            px = self._drag_preview_price("ORDER", o.oid, o.limit_price)
            if not (self._price_min <= px <= self._price_max):
                continue
            y = self._price_to_y(px)
            remain = max(0, o.qty - o.filled_qty)
            if o.side == "BUY" and o.order_type == "LIMIT": color, label = (72,190,155), f"BUY LIMIT {remain} @ {fmt_price(px)}"
            elif o.side == "SELL" and o.order_type == "LIMIT": color, label = (225,105,118), f"SELL LIMIT {remain} @ {fmt_price(px)}"
            elif o.side == "BUY": color, label = CYAN, f"BUY STOP {remain} @ {fmt_price(px)}"
            else: color, label = ORANGE, f"SELL STOP {remain} @ {fmt_price(px)}"
            is_drag = bool(self.level_drag and self.level_drag.get("key")=="ORDER" and self.level_drag.get("identity")==o.oid)
            draw_dashed_line(screen, color, (self._plot_rect.left, y), (self._plot_rect.right, y), 5, 4, 2 if is_drag else 1)
            self._register_draggable_level("ORDER", o.oid, px, y, label, color)
            surf = fonts["xs"].render(("[KEO] " if is_drag else "") + label, True, color)
            screen.blit(surf, (self._plot_rect.right - surf.get_width() - 8, y + 2))

        pos = player.positions.get(self.symbol)
        if pos and pos.qty > 0:
            # Stop Loss / Take Profit đang hoạt động.
            if pos.stop_loss > 0:
                sl_px = self._drag_preview_price("STOP_LOSS", self.symbol, pos.stop_loss)
                if self._price_min <= sl_px <= self._price_max:
                    y = self._price_to_y(sl_px)
                    is_drag = bool(self.level_drag and self.level_drag.get("key")=="STOP_LOSS")
                    draw_dashed_line(screen, RED, (self._plot_rect.left, y), (self._plot_rect.right, y), 4, 3, 3 if is_drag else 2)
                    label = f"SL {pos.side} @ {fmt_price(sl_px)}"
                    self._register_draggable_level("STOP_LOSS", self.symbol, sl_px, y, label, RED)
                    surf = fonts["xs"].render(("[KEO] " if is_drag else "") + label, True, RED)
                    screen.blit(surf, (self._plot_rect.left + 6, y - surf.get_height() - 2))
            if pos.take_profit > 0:
                tp_px = self._drag_preview_price("TAKE_PROFIT", self.symbol, pos.take_profit)
                if self._price_min <= tp_px <= self._price_max:
                    y = self._price_to_y(tp_px)
                    is_drag = bool(self.level_drag and self.level_drag.get("key")=="TAKE_PROFIT")
                    draw_dashed_line(screen, GREEN, (self._plot_rect.left, y), (self._plot_rect.right, y), 4, 3, 3 if is_drag else 2)
                    label = f"TP {pos.side} @ {fmt_price(tp_px)}"
                    self._register_draggable_level("TAKE_PROFIT", self.symbol, tp_px, y, label, GREEN)
                    surf = fonts["xs"].render(("[KEO] " if is_drag else "") + label, True, GREEN)
                    screen.blit(surf, (self._plot_rect.left + 6, y + 2))

        if pos and pos.qty > 0 and self._price_min <= pos.avg_cost <= self._price_max:
            y = self._price_to_y(pos.avg_cost)
            color = (98,215,181) if pos.side == "LONG" else (238,112,122)
            draw_dashed_line(screen, color, (self._plot_rect.left, y), (self._plot_rect.right, y), 12, 5, 2)
            surf = fonts["xs"].render(f"{pos.side} {pos.qty} @ {fmt_price(pos.avg_cost)}", True, color)
            screen.blit(surf, (self._plot_rect.right - surf.get_width() - 8, y - surf.get_height() - 2))

        # Hover: làm nổi đường có thể kéo và hiện hướng dẫn ngắn.
        if self.level_drag is None:
            hit = self._hit_draggable_level(pygame.mouse.get_pos())
            if hit is not None:
                self.hover_level = hit
                hy = int(hit["y"]); col = hit["color"]
                pygame.draw.line(screen, col, (self._plot_rect.left, hy), (self._plot_rect.right, hy), 2)
                hint = fonts["xs"].render("Giữ chuột trái + kéo lên/xuống để sửa giá", True, WHITE)
                bx = max(self._plot_rect.left+6, self._plot_rect.right-hint.get_width()-8)
                by = hy-hint.get_height()-4 if hy > self._plot_rect.centery else hy+5
                screen.blit(hint, (bx, by))

    def _draw_drawings(self, screen, fonts):
        relevant=[d for d in self.drawings if d.symbol==self.symbol and d.timeframe==self.timeframe]
        for d in relevant:
            x1=self._time_to_x(d.t1)
            if x1 is None: continue
            y1=self._price_to_y(d.p1)
            if d.kind=="HLINE":
                pygame.draw.line(screen,YELLOW,(self._plot_rect.left,y1),(self._plot_rect.right,y1),1)
                continue
            if d.t2 is None or d.p2 is None: continue
            x2=self._time_to_x(d.t2)
            if x2 is None: continue
            y2=self._price_to_y(d.p2)
            if d.kind=="TREND":
                pygame.draw.line(screen,BLUE,(x1,y1),(x2,y2),2)
                pygame.draw.circle(screen,BLUE,(int(x1),int(y1)),3); pygame.draw.circle(screen,BLUE,(int(x2),int(y2)),3)
            elif d.kind=="RECT":
                r=pygame.Rect(min(x1,x2),min(y1,y2),abs(x2-x1),abs(y2-y1))
                overlay=pygame.Surface((max(1,r.w),max(1,r.h)),pygame.SRCALPHA)
                overlay.fill((64,115,255,35)); screen.blit(overlay,r.topleft)
                pygame.draw.rect(screen,BLUE,r,1)
            elif d.kind=="FIB":
                # Cố ý chỉ giữ 5 mốc cơ bản để chart không rối.
                levels=[(0.0,"0%"),(0.382,"38.2%"),(0.5,"50%"),(0.618,"61.8%"),(1.0,"100%")]
                for lv,label in levels:
                    p=d.p1+(d.p2-d.p1)*lv
                    y=self._price_to_y(p)
                    pygame.draw.line(screen,ORANGE,(min(x1,x2),y),(max(x1,x2),y),1)
                    s=fonts["xs"].render(f"{label}  {fmt_price(p)}",True,ORANGE)
                    screen.blit(s,(max(x1,x2)+5,y-s.get_height()//2))
        if self.temp_anchor and self.drag_current and self.active_tool=="RECT":
            x1=self._time_to_x(self.temp_anchor[0]); x2=self._time_to_x(self.drag_current[0])
            if x1 is not None and x2 is not None:
                y1=self._price_to_y(self.temp_anchor[1]); y2=self._price_to_y(self.drag_current[1])
                r=pygame.Rect(min(x1,x2),min(y1,y2),abs(x2-x1),abs(y2-y1))
                pygame.draw.rect(screen,BLUE,r,1)


class SaveManager:
    @staticmethod
    def save(game):
        data = {
            "version": SAVE_VERSION,
            "market": game.market,
            "player": game.player,
            "missions": game.missions,
            "chart": {
                "symbol": game.chart.symbol,
                "timeframe": game.chart.timeframe,
                "chart_type": game.chart.chart_type,
                "drawings": game.chart.drawings,
                "visible_count": game.chart.visible_count,
                "price_scale": game.chart.price_scale,
                "watch_exchange": game.watch_exchange,
            },
            "settings": {
                "difficulty": getattr(game, "difficulty", "MEDIUM"),
                "leverage_pct": getattr(game, "leverage_pct", 100),
            }
        }
        tmp=SAVE_PATH+".tmp"
        with gzip.open(tmp,"wb",compresslevel=4) as f:
            pickle.dump(data,f,pickle.HIGHEST_PROTOCOL)
        os.replace(tmp,SAVE_PATH)

    @staticmethod
    def load(game) -> bool:
        if not os.path.exists(SAVE_PATH): return False
        with gzip.open(SAVE_PATH,"rb") as f:
            data=pickle.load(f)
        if data.get("version")!=SAVE_VERSION:
            return False
        game.market=data["market"]; game.player=data["player"]; game.missions=data["missions"]
        c=data.get("chart",{})
        game.chart.symbol=c.get("symbol","FPT"); game.chart.timeframe=c.get("timeframe","1D")
        game.chart.chart_type=c.get("chart_type","CANDLE"); game.chart.drawings=c.get("drawings",[])
        game.chart.redo_drawings=[]; game.chart.axis_drag=None
        game.chart.visible_count=c.get("visible_count",120); game.chart.offset=0
        game.chart.price_scale=float(clamp(c.get("price_scale",1.0), PRICE_SCALE_MIN, PRICE_SCALE_MAX))
        game.watch_exchange=c.get("watch_exchange",SYMBOL_EXCHANGE.get(game.chart.symbol,"HOSE"))
        st=data.get("settings",{})
        game.difficulty=st.get("difficulty","MEDIUM")
        game.leverage_pct=int(clamp(st.get("leverage_pct",100),LEVERAGE_MIN_PCT,LEVERAGE_MAX_PCT))
        return True

class Game:
    def __init__(self, seed: Optional[int] = None, load_existing: bool = True):
        pygame.init()
        pygame.display.set_caption("STOCKSIM VN - Mô phỏng chứng khoán")
        self.screen=pygame.display.set_mode((1500,900),pygame.RESIZABLE)
        self.clock=pygame.time.Clock()
        self.fonts={
            "xs": pygame.font.SysFont("Segoe UI",12),
            "sm": pygame.font.SysFont("Segoe UI",14),
            "md": pygame.font.SysFont("Segoe UI",16),
            "lg": pygame.font.SysFont("Segoe UI",20,bold=True),
            "xl": pygame.font.SysFont("Segoe UI",28,bold=True),
        }
        self.market=Market(seed=seed)
        self.player=Player()
        self.missions=MissionManager(self.player.start_cash)
        self.chart=ChartView()
        self.toast=ToastManager()
        self.running=True
        self.paused=False
        self.speed=1
        self.sim_accum=0.0
        self.last_real=time.perf_counter()
        self.last_autosave=time.time()
        self.right_tab="TRADE"
        self.bottom_tab="NEWS"
        self.qty_input=InputBox("100",numeric=True)
        self.price_input=InputBox("",numeric=True)
        self.order_side="BUY"
        self.order_type="MARKET"
        self.leverage_pct=100
        self.difficulty="MEDIUM"
        self.new_game_modal=False
        self.new_game_first_run=False
        self.new_game_buttons={}
        self.ui_hitboxes={}
        self.watch_scroll=0
        self.watch_exchange="HOSE"
        self._selected_order=None
        self.context_menu = None   # {rect, price, items:[(key,label,enabled,color)]}
        self._last_day= self.market.trading_day_index
        self.missions.on_symbol(self.chart.symbol)
        loaded_ok = False
        if load_existing and os.path.exists(SAVE_PATH):
            try:
                loaded_ok = SaveManager.load(self)
                if loaded_ok:
                    self.toast.push("Đã tải save gần nhất.",GREEN)
                else:
                    self.toast.push("Save cũ không tương thích; hãy chọn mức vốn cho game mới.",ORANGE,4.0)
            except Exception:
                self._log_error()
                self.toast.push("Save cũ lỗi; hãy chọn mức vốn cho game mới.",RED)
        if not loaded_ok:
            self.new_game_modal=True
            self.new_game_first_run=True

    def _log_error(self):
        try:
            with open(ERROR_LOG,"a",encoding="utf-8") as f:
                f.write("\n\n"+datetime.now().isoformat()+"\n"+traceback.format_exc())
        except Exception: pass

    def _start_new_game(self, difficulty_key: str):
        cfg = DIFFICULTIES.get(difficulty_key, DIFFICULTIES["MEDIUM"])
        # Ở lần mở đầu, Market hiện tại đã là một thị trường mới có 2 năm history nên tái sử dụng để tránh sinh 2 lần.
        if not self.new_game_first_run:
            self.screen.fill(BG)
            msg=self.fonts["lg"].render("Đang tạo thị trường mới và 2 năm lịch sử...",True,WHITE)
            self.screen.blit(msg,(self.screen.get_width()//2-msg.get_width()//2,self.screen.get_height()//2-msg.get_height()//2))
            pygame.display.flip(); pygame.event.pump()
            self.market=Market(seed=None)
        self.player=Player(cfg["cash"])
        self.missions=MissionManager(cfg["cash"])
        self.chart=ChartView()
        self.missions.on_symbol(self.chart.symbol)
        self.difficulty=difficulty_key
        self.leverage_pct=100
        self.order_side="BUY"; self.order_type="MARKET"
        self.qty_input.text="100"; self.price_input.text=""
        self.right_tab="TRADE"; self.bottom_tab="NEWS"; self.watch_exchange="HOSE"
        self.context_menu=None; self.sim_accum=0.0; self.paused=False; self.speed=1
        self._last_day=self.market.trading_day_index
        self.new_game_modal=False; self.new_game_first_run=False; self.new_game_buttons={}
        try:
            SaveManager.save(self)
        except Exception:
            self._log_error()
        self.toast.push(f"Game mới - {cfg['label']} - vốn {fmt_money(cfg['cash'])}đ.",GREEN,4.0)

    def draw_new_game_modal(self):
        if not self.new_game_modal:
            return
        w,h=self.screen.get_size()
        overlay=pygame.Surface((w,h),pygame.SRCALPHA); overlay.fill((5,8,14,195)); self.screen.blit(overlay,(0,0))
        box_w=min(650,w-60); box_h=430
        box=pygame.Rect((w-box_w)//2,(h-box_h)//2,box_w,box_h)
        pygame.draw.rect(self.screen,(23,28,40),box,border_radius=10); pygame.draw.rect(self.screen,BLUE,box,1,border_radius=10)
        title="CHỌN VỐN KHỞI ĐẦU" if self.new_game_first_run else "CHƠI LẠI / RESET GAME"
        self.draw_text(title,(box.x+24,box.y+22),"lg",WHITE)
        sub="Chọn độ khó theo vốn. Giá, thị trường và nhiệm vụ vẫn có đầy đủ ở cả 3 mức."
        self.draw_text(sub,(box.x+24,box.y+56),"sm",MUTED)
        if not self.new_game_first_run:
            self.draw_text("Lưu hiện tại sẽ được thay thế khi anh chọn một mức mới.",(box.x+24,box.y+80),"xs",ORANGE)
        self.new_game_buttons={}
        y=box.y+112
        mouse=pygame.mouse.get_pos()
        for key in ("EASY","MEDIUM","HARD"):
            cfg=DIFFICULTIES[key]
            rr=pygame.Rect(box.x+24,y,box.w-48,72); self.new_game_buttons[key]=rr
            bg=(42,50,68) if rr.collidepoint(mouse) else (30,36,50)
            pygame.draw.rect(self.screen,bg,rr,border_radius=7); pygame.draw.rect(self.screen,GREEN if key=="EASY" else BLUE if key=="MEDIUM" else ORANGE,rr,1,border_radius=7)
            self.draw_text(cfg["label"],(rr.x+16,rr.y+10),"md",WHITE)
            cash_s=self.fonts["md"].render(f"{fmt_money(cfg['cash'])} đ",True,YELLOW); self.screen.blit(cash_s,(rr.right-cash_s.get_width()-16,rr.y+10))
            self.draw_text(cfg["desc"],(rr.x+16,rr.y+39),"xs",MUTED)
            y+=82
        if not self.new_game_first_run:
            cr=pygame.Rect(box.centerx-70,box.bottom-47,140,30); self.new_game_buttons["CANCEL"]=cr
            pygame.draw.rect(self.screen,(34,40,54),cr,border_radius=5); pygame.draw.rect(self.screen,BORDER,cr,1,border_radius=5)
            tx=self.fonts["sm"].render("HỦY",True,TEXT); self.screen.blit(tx,(cr.centerx-tx.get_width()//2,cr.centery-tx.get_height()//2))

    def process_new_game_modal_click(self, pos):
        for key,rr in self.new_game_buttons.items():
            if not rr.collidepoint(pos):
                continue
            if key=="CANCEL":
                self.new_game_modal=False
                return True
            self._start_new_game(key)
            return True
        return True

    def open_chart_context_menu(self, pos):
        """Mở menu lệnh nhanh ngay tại mức giá con trỏ trên chart."""
        if not self.chart._plot_rect.collidepoint(pos):
            return False
        price = normalize_order_price(self.chart._y_to_price(pos[1]))
        sym = self.chart.symbol
        current = self.market.stocks[sym].price
        p = self.player.positions.get(sym)
        qty = max(LOT_SIZE, (self.qty_input.int_value(LOT_SIZE) // LOT_SIZE) * LOT_SIZE)
        items = [
            ("BUY_LIMIT",  f"BUY LIMIT   {qty:,} @ {fmt_price(price)}  x{self.leverage_pct/100:.1f}", price < current, GREEN),
            ("SELL_LIMIT", f"SELL LIMIT  {qty:,} @ {fmt_price(price)}  x{self.leverage_pct/100:.1f}", price > current, RED),
            ("BUY_STOP",   f"BUY STOP    {qty:,} @ {fmt_price(price)}  x{self.leverage_pct/100:.1f}", price > current, CYAN),
            ("SELL_STOP",  f"SELL STOP   {qty:,} @ {fmt_price(price)}  x{self.leverage_pct/100:.1f}", price < current, ORANGE),
        ]
        if p and p.qty > 0:
            sl_ok = (price < current) if p.side == "LONG" else (price > current)
            tp_ok = (price > current) if p.side == "LONG" else (price < current)
            items += [
                ("STOP_LOSS", f"STOP LOSS {p.side} @ {fmt_price(price)}", sl_ok, RED),
                ("TAKE_PROFIT", f"TAKE PROFIT {p.side} @ {fmt_price(price)}", tp_ok, GREEN),
                ("CLOSE_MARKET", f"ĐÓNG {p.side} NGAY (MARKET)", True, YELLOW),
            ]
            if p.stop_loss > 0: items.append(("CLEAR_SL", f"Xóa SL hiện tại ({fmt_price(p.stop_loss)})", True, MUTED))
            if p.take_profit > 0: items.append(("CLEAR_TP", f"Xóa TP hiện tại ({fmt_price(p.take_profit)})", True, MUTED))
        menu_w = 272
        header_h = 44
        item_h = 29
        menu_h = header_h + len(items) * item_h + 8
        sw, sh = self.screen.get_size()
        x = min(pos[0], sw - menu_w - 6)
        y = min(pos[1], sh - menu_h - 6)
        x = max(4, x); y = max(TOP_H + 4, y)
        self.context_menu = {"rect": pygame.Rect(x, y, menu_w, menu_h), "price": price, "items": items, "header_h": header_h, "item_h": item_h}
        self.chart.context_price = price
        self.chart.context_pos = pos
        return True

    def draw_chart_context_menu(self):
        if not self.context_menu:
            return
        m = self.context_menu; r = m["rect"]; price = m["price"]
        # đường preview giúp nhìn chính xác mức giá đang chuẩn bị đặt lệnh
        if self.chart._price_min <= price <= self.chart._price_max:
            y = self.chart._price_to_y(price)
            draw_dashed_line(self.screen, WHITE, (self.chart._plot_rect.left, y), (self.chart._plot_rect.right, y), 3, 4, 1)
        pygame.draw.rect(self.screen, (20,24,34), r, border_radius=6)
        pygame.draw.rect(self.screen, (78,88,108), r, 1, border_radius=6)
        self.draw_text(f"{self.chart.symbol}  •  Giá {fmt_price(price)}", (r.x+10, r.y+7), "sm", WHITE)
        self.draw_text(f"Click đặt lệnh • đòn bẩy {self.leverage_pct}% (x{self.leverage_pct/100:.1f})", (r.x+10, r.y+25), "xs", MUTED)
        y = r.y + m["header_h"]
        mouse = pygame.mouse.get_pos()
        for idx, (key,label,enabled,color) in enumerate(m["items"]):
            ir = pygame.Rect(r.x+4, y + idx*m["item_h"], r.w-8, m["item_h"]-2)
            if enabled and ir.collidepoint(mouse): pygame.draw.rect(self.screen, (40,47,63), ir, border_radius=3)
            self.draw_text(label, (ir.x+8, ir.y+6), "xs", color if enabled else (78,84,97))

    def process_context_menu_click(self, pos):
        if not self.context_menu:
            return False
        m = self.context_menu; r = m["rect"]
        if not r.collidepoint(pos):
            self.context_menu = None
            self.chart.context_pos = None
            return True
        rel_y = pos[1] - (r.y + m["header_h"])
        idx = rel_y // m["item_h"]
        if idx < 0 or idx >= len(m["items"]):
            return True
        key,label,enabled,color = m["items"][idx]
        if not enabled:
            self.toast.push("Mức giá này không hợp lệ cho loại lệnh đã chọn.", ORANGE)
            return True
        sym = self.chart.symbol; price = m["price"]
        qty = max(LOT_SIZE, (self.qty_input.int_value(LOT_SIZE) // LOT_SIZE) * LOT_SIZE)
        if key == "BUY_LIMIT": ok,msg = self.player.place_order(self.market,sym,"BUY","LIMIT",qty,price,self.leverage_pct/100.0)
        elif key == "SELL_LIMIT": ok,msg = self.player.place_order(self.market,sym,"SELL","LIMIT",qty,price,self.leverage_pct/100.0)
        elif key == "BUY_STOP": ok,msg = self.player.place_order(self.market,sym,"BUY","STOP",qty,price,self.leverage_pct/100.0)
        elif key == "SELL_STOP": ok,msg = self.player.place_order(self.market,sym,"SELL","STOP",qty,price,self.leverage_pct/100.0)
        elif key == "STOP_LOSS": ok,msg = self.player.set_exit_trigger(self.market,sym,"STOP_LOSS",price)
        elif key == "TAKE_PROFIT": ok,msg = self.player.set_exit_trigger(self.market,sym,"TAKE_PROFIT",price)
        elif key == "CLOSE_MARKET": ok,msg = self.player.close_position(self.market,sym)
        elif key == "CLEAR_SL": ok,msg = self.player.clear_exit_trigger(sym,"STOP_LOSS")
        elif key == "CLEAR_TP": ok,msg = self.player.clear_exit_trigger(sym,"TAKE_PROFIT")
        else: ok,msg = False,"Lệnh không xác định."
        self.toast.push(msg, GREEN if ok else RED)
        self.context_menu = None
        self.chart.context_pos = None
        return True

    def layout(self):
        w,h=self.screen.get_size()
        right=pygame.Rect(w-RIGHT_W,TOP_H,RIGHT_W,h-TOP_H-BOTTOM_H)
        bottom=pygame.Rect(LEFT_W,h-BOTTOM_H,w-LEFT_W,BOTTOM_H)
        chart=pygame.Rect(LEFT_W,TOP_H,w-LEFT_W-RIGHT_W,h-TOP_H-BOTTOM_H)
        return chart,right,bottom

    def _set_hit(self,name,rect):
        self.ui_hitboxes[name]=pygame.Rect(rect)
        return rect

    def draw_text(self,text,pos,font="sm",color=TEXT):
        self.screen.blit(self.fonts[font].render(str(text),True,color),pos)

    def draw_button(self,name,rect,label,active=False,accent=BLUE,font="sm"):
        rect=self._set_hit(name,rect)
        mouse=pygame.mouse.get_pos()
        bg=(44,51,68) if rect.collidepoint(mouse) else PANEL_2
        if active: bg=accent
        pygame.draw.rect(self.screen,bg,rect,border_radius=4)
        pygame.draw.rect(self.screen,accent if active else BORDER,rect,1,border_radius=4)
        surf=self.fonts[font].render(label,True,WHITE if active else TEXT)
        self.screen.blit(surf,(rect.centerx-surf.get_width()//2,rect.centery-surf.get_height()//2))

    def draw_topbar(self):
        w,_=self.screen.get_size(); r=pygame.Rect(0,0,w,TOP_H)
        pygame.draw.rect(self.screen,(19,23,33),r); pygame.draw.line(self.screen,BORDER,(0,TOP_H-1),(w,TOP_H-1))
        x=10
        self.draw_text("STOCKSIM VN",(x,9),"lg",WHITE); x+=150
        # symbol
        sym=self.chart.symbol; st=self.market.stocks[sym]; ch=self.market.day_change_pct(sym)
        self.draw_text(f"{sym} {SYMBOL_EXCHANGE.get(sym,'')}  {self.chart.timeframe}",(x,11),"md",TEXT); x+=155
        self.draw_text(f"{fmt_price(st.price)}  {ch:+.2f}%",(x,11),"md",GREEN if ch>=0 else RED); x+=175
        # chart type
        self.draw_button("chart_candle",pygame.Rect(x,7,72,28),"NẾN",self.chart.chart_type=="CANDLE"); x+=78
        self.draw_button("chart_line",pygame.Rect(x,7,72,28),"LINE",self.chart.chart_type=="LINE"); x+=86
        for tf in ["1M","5M","15M","1H","1D"]:
            ww=42 if len(tf)<=2 else 46
            self.draw_button(f"tf_{tf}",pygame.Rect(x,7,ww,28),tf,self.chart.timeframe==tf)
            x+=ww+4
        # clock + speed ở phải
        right_x=w-520
        self.draw_text(self.market.now.strftime("%d/%m/%Y %H:%M"),(right_x,11),"sm",MUTED)
        right_x+=150
        self.draw_button("pause",pygame.Rect(right_x,7,74,28),"▶ Chạy" if self.paused else "Ⅱ Dừng",self.paused,ORANGE); right_x+=80
        for sp in [1,2,5,10,20]:
            self.draw_button(f"speed_{sp}",pygame.Rect(right_x,7,42,28),f"x{sp}",self.speed==sp)
            right_x+=46
        self.draw_button("save",pygame.Rect(w-55,7,45,28),"Lưu",False,GREEN,"xs")

    def _draw_tool_icon(self, key, br, color):
        """Vẽ icon bằng primitive, không phụ thuộc glyph Unicode nên build EXE không còn ô vuông rỗng."""
        cx, cy = br.centerx, br.centery
        if key == "POINTER":
            pts=[(br.x+10,br.y+8),(br.x+12,br.bottom-9),(br.x+18,br.bottom-14),(br.x+23,br.bottom-7),(br.x+26,br.bottom-9),(br.x+21,br.bottom-16),(br.x+27,br.y+13)]
            pygame.draw.lines(self.screen,color,False,pts,2)
        elif key == "TREND":
            pygame.draw.line(self.screen,color,(br.x+9,br.bottom-9),(br.right-9,br.y+9),2)
            pygame.draw.circle(self.screen,color,(br.x+9,br.bottom-9),3); pygame.draw.circle(self.screen,color,(br.right-9,br.y+9),3)
        elif key == "HLINE":
            pygame.draw.line(self.screen,color,(br.x+8,cy),(br.right-8,cy),2)
        elif key == "RECT":
            pygame.draw.rect(self.screen,color,pygame.Rect(br.x+9,br.y+9,br.w-18,br.h-18),2)
        elif key == "FIB":
            for off, ww in [(9,18),(14,23),(19,16),(24,22)]:
                pygame.draw.line(self.screen,color,(br.x+7,br.y+off),(br.x+7+ww,br.y+off),1)
            pygame.draw.line(self.screen,color,(br.x+7,br.y+7),(br.x+7,br.bottom-7),1)
        elif key == "ZOOM_IN" or key == "ZOOM_OUT":
            pygame.draw.circle(self.screen,color,(cx-3,cy-3),8,2)
            pygame.draw.line(self.screen,color,(cx+3,cy+3),(cx+11,cy+11),2)
            pygame.draw.line(self.screen,color,(cx-7,cy-3),(cx+1,cy-3),2)
            if key == "ZOOM_IN": pygame.draw.line(self.screen,color,(cx-3,cy-7),(cx-3,cy+1),2)
        elif key in ("Y_ZOOM_IN", "Y_ZOOM_OUT"):
            # Icon trục giá: đường dọc + mũi tên, không dùng Unicode để tránh lỗi font onefile.
            pygame.draw.line(self.screen,color,(cx,br.y+7),(cx,br.bottom-7),2)
            pygame.draw.line(self.screen,color,(cx-4,br.y+11),(cx,br.y+7),2)
            pygame.draw.line(self.screen,color,(cx+4,br.y+11),(cx,br.y+7),2)
            pygame.draw.line(self.screen,color,(cx-4,br.bottom-11),(cx,br.bottom-7),2)
            pygame.draw.line(self.screen,color,(cx+4,br.bottom-11),(cx,br.bottom-7),2)
            # Dấu +/- nhỏ ở bên phải.
            pygame.draw.line(self.screen,color,(cx+6,cy),(cx+14,cy),2)
            if key == "Y_ZOOM_IN": pygame.draw.line(self.screen,color,(cx+10,cy-4),(cx+10,cy+4),2)
        elif key in ("UNDO", "REDO"):
            rr = pygame.Rect(br.x+8, br.y+9, 20, 18)
            if key == "UNDO":
                pygame.draw.arc(self.screen,color,rr,0.2,4.8,2)
                pygame.draw.polygon(self.screen,color,[(br.x+9,br.y+15),(br.x+16,br.y+10),(br.x+16,br.y+19)])
            else:
                pygame.draw.arc(self.screen,color,rr,-1.7,2.9,2)
                pygame.draw.polygon(self.screen,color,[(br.right-9,br.y+15),(br.right-16,br.y+10),(br.right-16,br.y+19)])
        elif key == "RESET":
            pygame.draw.arc(self.screen,color,pygame.Rect(br.x+8,br.y+8,20,20),0.45,5.5,2)
            pygame.draw.polygon(self.screen,color,[(br.x+9,br.y+9),(br.x+16,br.y+8),(br.x+12,br.y+15)])
        elif key == "DELETE":
            pygame.draw.rect(self.screen,color,pygame.Rect(br.x+12,br.y+12,12,15),2)
            pygame.draw.line(self.screen,color,(br.x+10,br.y+10),(br.x+26,br.y+10),2)
            pygame.draw.line(self.screen,color,(br.x+15,br.y+7),(br.x+21,br.y+7),2)

    def draw_toolbar(self):
        _,h=self.screen.get_size(); r=pygame.Rect(0,TOP_H,LEFT_W,h-TOP_H)
        pygame.draw.rect(self.screen,(20,24,35),r); pygame.draw.line(self.screen,BORDER,(LEFT_W-1,TOP_H),(LEFT_W-1,h))
        items=[
            ("POINTER","Con trỏ"),("TREND","Trend line"),("HLINE","Đường ngang"),
            ("RECT","Hình chữ nhật"),("FIB","Fibonacci"),
            ("ZOOM_IN","Zoom X vào"),("ZOOM_OUT","Zoom X ra"),
            ("Y_ZOOM_IN","Thu trục giá Y"),("Y_ZOOM_OUT","Mở rộng trục giá Y"),
            ("UNDO","Undo hình vẽ (Ctrl+Z)"),("REDO","Redo hình vẽ (Ctrl+Y)"),
            ("RESET","Về khung mặc định"),("DELETE","Xóa hình cuối"),
        ]
        y=54; mouse=pygame.mouse.get_pos()
        for key,tip in items:
            br=pygame.Rect(8,y,36,34); self._set_hit(f"tool_{key}",br)
            active=self.chart.active_tool==key and key in ("POINTER","TREND","HLINE","RECT","FIB")
            pygame.draw.rect(self.screen,BLUE if active else ((38,45,61) if br.collidepoint(mouse) else (20,24,35)),br,border_radius=5)
            self._draw_tool_icon(key,br,WHITE if active else TEXT)
            if br.collidepoint(mouse):
                ts=self.fonts["xs"].render(tip,True,WHITE); tr=pygame.Rect(LEFT_W+5,br.y,ts.get_width()+14,26)
                pygame.draw.rect(self.screen,PANEL_2,tr,border_radius=4); pygame.draw.rect(self.screen,BORDER,tr,1,border_radius=4)
                self.screen.blit(ts,(tr.x+7,tr.y+6))
            y+=42
        self.draw_text("Wheel X",(7,h-52),"xs",MUTED); self.draw_text("Kéo X/Y",(7,h-35),"xs",MUTED)

    def draw_right(self,rect):
        pygame.draw.rect(self.screen,PANEL,rect); pygame.draw.line(self.screen,BORDER,(rect.left,rect.top),(rect.left,rect.bottom))
        # Watchlist theo từng sàn: 10 mã/sàn.
        self.draw_text("WATCHLIST",(rect.x+12,rect.y+9),"sm",WHITE)
        ex_y=rect.y+31; bx=rect.x+8
        for ex in ("HOSE","HNX","UPCOM"):
            bw=(rect.w-24)//3
            self.draw_button(f"exchange_{ex}",pygame.Rect(bx,ex_y,bw,24),ex,self.watch_exchange==ex,BLUE,"xs"); bx+=bw+4
        y=ex_y+29
        header=pygame.Rect(rect.x+8,y,rect.w-16,22); pygame.draw.rect(self.screen,(22,27,39),header)
        self.draw_text("Mã",(header.x+6,header.y+4),"xs",MUTED); self.draw_text("Ngành",(header.x+47,header.y+4),"xs",MUTED); self.draw_text("Giá",(header.x+154,header.y+4),"xs",MUTED); self.draw_text("%",(header.right-50,header.y+4),"xs",MUTED)
        y+=24
        for sym in EXCHANGE_SYMBOLS[self.watch_exchange]:
            row=pygame.Rect(rect.x+8,y,rect.w-16,23); self._set_hit(f"sym_{sym}",row)
            if sym==self.chart.symbol: pygame.draw.rect(self.screen,(36,48,74),row,border_radius=3)
            elif row.collidepoint(pygame.mouse.get_pos()): pygame.draw.rect(self.screen,(32,38,52),row,border_radius=3)
            st=self.market.stocks[sym]; ch=self.market.day_change_pct(sym); col=GREEN if ch>0 else RED if ch<0 else MUTED
            self.draw_text(sym,(row.x+6,row.y+4),"xs",WHITE if sym==self.chart.symbol else TEXT)
            self.draw_text(st.sector[:12],(row.x+47,row.y+4),"xs",MUTED)
            self.draw_text(fmt_price(st.price),(row.x+154,row.y+4),"xs",TEXT)
            self.draw_text(f"{ch:+.2f}",(row.right-51,row.y+4),"xs",col)
            y+=24
        tabs_y=y+6
        tabs=[("TRADE","GIAO DỊCH"),("PORTFOLIO","DANH MỤC"),("MISSION","NHIỆM VỤ")]
        bx=rect.x+8
        for key,label in tabs:
            bw=(rect.w-24)//3
            self.draw_button(f"rtab_{key}",pygame.Rect(bx,tabs_y,bw,27),label,self.right_tab==key,BLUE,"xs"); bx+=bw+4
        content=pygame.Rect(rect.x+8,tabs_y+34,rect.w-16,rect.bottom-(tabs_y+42))
        if self.right_tab=="TRADE": self.draw_trade_panel(content)
        elif self.right_tab=="PORTFOLIO": self.draw_portfolio_panel(content)
        else: self.draw_mission_panel(content)

    def draw_trade_panel(self,r):
        sym=self.chart.symbol; st=self.market.stocks[sym]
        self.draw_text(f"Đặt lệnh {sym}",(r.x+3,r.y+4),"md",WHITE)
        y=r.y+32
        half=(r.w-6)//2
        self.draw_button("side_BUY",pygame.Rect(r.x,y,half,28),"MUA / LONG",self.order_side=="BUY",GREEN,"xs")
        self.draw_button("side_SELL",pygame.Rect(r.x+half+6,y,half,28),"BÁN / SHORT",self.order_side=="SELL",RED,"xs")
        y+=36
        bw=(r.w-8)//3
        self.draw_button("otype_MARKET",pygame.Rect(r.x,y,bw,27),"MARKET",self.order_type=="MARKET",BLUE,"xs")
        self.draw_button("otype_LIMIT",pygame.Rect(r.x+bw+4,y,bw,27),"LIMIT",self.order_type=="LIMIT",BLUE,"xs")
        self.draw_button("otype_STOP",pygame.Rect(r.x+2*(bw+4),y,bw,27),"STOP",self.order_type=="STOP",ORANGE,"xs")
        y+=37
        self.draw_text("Khối lượng",(r.x,y+6),"xs",MUTED); self.qty_input.set_rect((r.x+92,y,100,28)); self.qty_input.draw(self.screen,self.fonts["sm"])
        self.draw_text(f"Lô {LOT_SIZE}",(r.x+202,y+6),"xs",MUTED); y+=36
        price_label="Giá Limit" if self.order_type=="LIMIT" else "Giá Stop" if self.order_type=="STOP" else "Giá"
        self.draw_text(price_label,(r.x,y+6),"xs",MUTED); self.price_input.set_rect((r.x+92,y,100,28))
        if self.order_type=="MARKET":
            old=self.price_input.active; self.price_input.active=False
            pygame.draw.rect(self.screen,(22,26,35),self.price_input.rect,border_radius=4); self.draw_text("Theo TT",(self.price_input.rect.x+15,self.price_input.rect.y+7),"xs",MUTED); self.price_input.active=old
        else:
            self.price_input.draw(self.screen,self.fonts["sm"])
        y+=36
        # Đòn bẩy 100%-500%, bước 50%. Dùng primitive để không phụ thuộc font icon.
        self.draw_text("Đòn bẩy",(r.x,y+7),"xs",MUTED)
        left=self._set_hit("lev_down",pygame.Rect(r.x+92,y,28,28)); right=self._set_hit("lev_up",pygame.Rect(r.x+202,y,28,28))
        for rr in (left,right):
            pygame.draw.rect(self.screen,(28,34,48),rr,border_radius=4); pygame.draw.rect(self.screen,BORDER,rr,1,border_radius=4)
        pygame.draw.polygon(self.screen,TEXT,[(left.centerx+4,left.centery-6),(left.centerx-5,left.centery),(left.centerx+4,left.centery+6)])
        pygame.draw.polygon(self.screen,TEXT,[(right.centerx-4,right.centery-6),(right.centerx+5,right.centery),(right.centerx-4,right.centery+6)])
        levbox=pygame.Rect(r.x+124,y,74,28); pygame.draw.rect(self.screen,(22,26,35),levbox,border_radius=4); pygame.draw.rect(self.screen,BLUE,levbox,1,border_radius=4)
        levtxt=f"{self.leverage_pct}%  x{self.leverage_pct/100:.1f}"; surf=self.fonts["xs"].render(levtxt,True,WHITE); self.screen.blit(surf,(levbox.centerx-surf.get_width()//2,levbox.centery-surf.get_height()//2))
        y+=36
        qty=max(0,(self.qty_input.int_value()//LOT_SIZE)*LOT_SIZE)
        px=st.price if self.order_type=="MARKET" else self.price_input.float_value(st.price)
        est=qty*px
        margin=est/max(self.leverage_pct/100.0,1.0)
        self.draw_text(f"Giá trị vị thế: {fmt_money(est)} đ",(r.x,y),"xs",TEXT); y+=18
        self.draw_text(f"Ký quỹ cần: {fmt_money(margin)} đ | Phí: {fmt_money(est*FEE_RATE)} đ",(r.x,y),"xs",MUTED); y+=24
        col=GREEN if self.order_side=="BUY" else RED
        action="MỞ LONG" if self.order_side=="BUY" else "MỞ SHORT"
        self.draw_button("submit_order",pygame.Rect(r.x,y,r.w,32),f"{action} - {self.order_type}",False,col,"xs"); y+=38
        pos=self.player.positions.get(sym)
        if pos:
            up=(st.price-pos.avg_cost)*pos.qty if pos.side=="LONG" else (pos.avg_cost-st.price)*pos.qty
            lev_eff=self.player.position_effective_leverage(pos)
            self.draw_text(f"Đang mở: {pos.side} {pos.qty:,} @ {fmt_price(pos.avg_cost)} | x{lev_eff:.1f} | {fmt_money(up-pos.open_fees)}",(r.x,y),"xs",GREEN if up-pos.open_fees>=0 else RED); y+=19
            risk=[]
            if pos.stop_loss>0: risk.append(f"SL {fmt_price(pos.stop_loss)}")
            if pos.take_profit>0: risk.append(f"TP {fmt_price(pos.take_profit)}")
            if risk:
                self.draw_text(" • ".join(risk),(r.x,y),"xs",TEXT); y+=18
        self.draw_text("Chuột phải chart: Limit / Stop / SL / TP",(r.x,y),"xs",YELLOW); y+=19
        self.draw_text("Đóng vị thế: tab LỆNH → nút X",(r.x,y),"xs",MUTED); y+=22
        eq=self.player.equity(self.market); upnl=self.player.unrealized_pnl(self.market); total=eq-self.player.start_cash
        self.draw_text("TÀI KHOẢN",(r.x,y),"sm",WHITE)
        self.draw_button("restart_game",pygame.Rect(r.right-112,y-4,112,24),"CHƠI LẠI",False,ORANGE,"xs")
        y+=21
        margin_total=sum(p.margin_locked for p in self.player.positions.values())
        rows=[("Tiền mặt",fmt_money(self.player.cash)),("Ký quỹ khóa",fmt_money(margin_total)),("Equity",fmt_money(eq)),("Realized P/L",fmt_money(self.player.realized_pnl)),("Unrealized P/L",fmt_money(upnl)),("Tổng P/L",fmt_money(total))]
        for k,v in rows:
            self.draw_text(k,(r.x,y),"xs",MUTED); c=GREEN if ("P/L" in k and not v.startswith("-")) else RED if ("P/L" in k and v.startswith("-")) else TEXT
            surf=self.fonts["xs"].render(v,True,c); self.screen.blit(surf,(r.right-surf.get_width(),y)); y+=18
        y+=2
        self.draw_text("SỔ LỆNH MÔ PHỎNG",(r.x,y),"xs",WHITE); y+=18
        bids,asks=self.market.order_book(sym,2)
        for price,vol in reversed(asks):
            self.draw_text("ASK",(r.x,y),"xs",RED); self.draw_text(fmt_price(price),(r.x+70,y),"xs",TEXT); self.draw_text(fmt_money(vol),(r.right-65,y),"xs",MUTED); y+=17
        self.draw_text(f"LAST {fmt_price(st.price)}",(r.x+70,y),"xs",WHITE); y+=17
        for price,vol in bids:
            self.draw_text("BID",(r.x,y),"xs",GREEN); self.draw_text(fmt_price(price),(r.x+70,y),"xs",TEXT); self.draw_text(fmt_money(vol),(r.right-65,y),"xs",MUTED); y+=17

    def draw_portfolio_panel(self,r):
        eq=self.player.equity(self.market); upnl=self.player.unrealized_pnl(self.market)
        self.draw_text("DANH MỤC / VỊ THẾ",(r.x,r.y+3),"md",WHITE)
        self.draw_text(f"Equity {fmt_money(eq)}  |  Tổng P/L {fmt_money(eq-self.player.start_cash)}",(r.x,r.y+29),"xs",GREEN if eq>=self.player.start_cash else RED)
        y=r.y+58
        if not self.player.positions:
            self.draw_text("Chưa có vị thế.",(r.x,y),"sm",MUTED); return
        for sym,p in list(self.player.positions.items()):
            st=self.market.stocks[sym]
            gross=(st.price-p.avg_cost)*p.qty if p.side=="LONG" else (p.avg_cost-st.price)*p.qty
            pnl=gross-p.open_fees
            pct=(gross/(p.avg_cost*p.qty)*100) if p.avg_cost and p.qty else 0
            row=pygame.Rect(r.x,y,r.w,64); self._set_hit(f"pos_{sym}",row); pygame.draw.rect(self.screen,(22,27,39),row,border_radius=4)
            side_col=GREEN if p.side=="LONG" else RED
            lev_eff=self.player.position_effective_leverage(p)
            self.draw_text(f"{sym}   {p.side}   {p.qty:,}   x{lev_eff:.1f}",(row.x+7,row.y+6),"sm",side_col)
            self.draw_text(f"GV {fmt_price(p.avg_cost)} → {fmt_price(st.price)}",(row.x+7,row.y+27),"xs",MUTED)
            risk=[]
            if p.stop_loss>0: risk.append(f"SL {fmt_price(p.stop_loss)}")
            if p.take_profit>0: risk.append(f"TP {fmt_price(p.take_profit)}")
            self.draw_text(" | ".join(risk) if risk else "SL/TP: chưa đặt",(row.x+7,row.y+44),"xs",MUTED)
            col=GREEN if pnl>=0 else RED; surf=self.fonts["sm"].render(f"{fmt_money(pnl)} ({pct:+.1f}%)",True,col); self.screen.blit(surf,(row.right-surf.get_width()-7,row.y+17)); y+=69

    def draw_mission_panel(self,r):
        m=self.missions.current()
        self.draw_text("HỆ THỐNG NHIỆM VỤ",(r.x,r.y+3),"md",WHITE)
        self.draw_text(f"XP: {self.missions.xp}   Hoàn thành: {min(self.missions.completed_count,self.missions.guided_total)}/{self.missions.guided_total}",(r.x,r.y+30),"xs",MUTED)
        box=pygame.Rect(r.x,r.y+56,r.w,128); pygame.draw.rect(self.screen,(22,27,39),box,border_radius=6); pygame.draw.rect(self.screen,BLUE,box,1,border_radius=6)
        self.draw_text(m.title,(box.x+9,box.y+9),"sm",WHITE)
        # wrap đơn giản
        words=m.desc.split(); lines=[]; line=""
        for w in words:
            test=(line+" "+w).strip()
            if self.fonts["xs"].size(test)[0]>box.w-18:
                lines.append(line); line=w
            else: line=test
        if line: lines.append(line)
        yy=box.y+34
        for ln in lines[:3]: self.draw_text(ln,(box.x+9,yy),"xs",TEXT); yy+=18
        prog=self.missions.progress_text(self.player,self.market)
        self.draw_text("Tiến độ:",(box.x+9,box.bottom-25),"xs",MUTED); self.draw_text(prog,(box.x+72,box.bottom-25),"xs",YELLOW)
        y=box.bottom+16
        self.draw_text("Mục tiêu sau hướng dẫn:",(r.x,y),"sm",WHITE); y+=23
        notes=["• Quan sát chart và volume.","• Tự thử chiến lược, không có công thức thắng cố định.","• Giá game sinh từ regime + sector + fair value + momentum + news.","• Nhiệm vụ chỉ dẫn thao tác, không chỉ dẫn mua/bán mã cụ thể."]
        for n in notes:
            # wrap nhanh
            parts=[]; cur=""
            for w in n.split():
                t=(cur+" "+w).strip()
                if self.fonts["xs"].size(t)[0]>r.w: parts.append(cur); cur=w
                else: cur=t
            if cur: parts.append(cur)
            for p in parts: self.draw_text(p,(r.x,y),"xs",MUTED); y+=17
            y+=3

    def draw_bottom(self,rect):
        pygame.draw.rect(self.screen,PANEL,rect); pygame.draw.line(self.screen,BORDER,(rect.left,rect.top),(rect.right,rect.top))
        x=rect.x+10
        for key,label in [("NEWS","TIN TỨC"),("ORDERS","LỆNH"),("TRADES","GIAO DỊCH")]:
            self.draw_button(f"btab_{key}",pygame.Rect(x,rect.y+7,92,25),label,self.bottom_tab==key,BLUE,"xs"); x+=98
        content=pygame.Rect(rect.x+10,rect.y+38,rect.w-20,rect.h-45)
        if self.bottom_tab=="NEWS": self.draw_news(content)
        elif self.bottom_tab=="ORDERS": self.draw_orders(content)
        else: self.draw_trades(content)

    def draw_news(self,r):
        if not self.market.news:
            self.draw_text("Chưa có tin mới.",(r.x,r.y),"sm",MUTED); return
        y=r.y
        for n in list(self.market.news)[:5]:
            col=CYAN if n.scope=="MACRO" else ORANGE if n.scope=="SECTOR" else PURPLE
            self.draw_text(n.ts.strftime("%d/%m %H:%M"),(r.x,y),"xs",MUTED)
            self.draw_text(n.scope,(r.x+92,y),"xs",col)
            self.draw_text(n.title,(r.x+165,y),"xs",TEXT)
            self.draw_text(n.magnitude,(r.right-50,y),"xs",YELLOW if n.magnitude!="NHẸ" else MUTED)
            y+=20

    def draw_orders(self,r):
        # Tổng NET: đã chốt + chưa chốt sau phí/thuế đóng ước tính tại giá hiện tại.
        net = self.player.net_pnl(self.market)
        upnl_net = self.player.unrealized_pnl_net(self.market)
        realized = self.player.realized_pnl
        net_pct = net / self.player.start_cash * 100 if self.player.start_cash else 0.0
        summary = f"NET P/L {fmt_money(net)} ({net_pct:+.2f}%)   |   Đã chốt {fmt_money(realized)}   |   Đang mở {fmt_money(upnl_net)}"
        ss = self.fonts["xs"].render(summary, True, GREEN if net >= 0 else RED)
        self.screen.blit(ss, (r.right - ss.get_width(), r.y))

        y=r.y+20
        # Dùng cột tọa độ cố định thay vì một chuỗi dài để không vỡ bố cục khi thêm P/L.
        cols = {
            "id": r.x, "time": r.x+38, "sym": r.x+142, "order": r.x+186,
            "qty": r.x+355, "fill": r.x+414, "price": r.x+474,
            "pnl": r.x+568, "pct": r.x+658, "status": r.x+724
        }
        for key,label in [("id","ID"),("time","Thời gian"),("sym","Mã"),("order","Lệnh"),("qty","KL"),("fill","Khớp"),("price","Giá"),("pnl","Lãi/Lỗ NET"),("pct","% KQ"),("status","Trạng thái")]:
            self.draw_text(label,(cols[key],y),"xs",MUTED)
        self.draw_text("X = hủy / đóng",(r.right-102,y),"xs",YELLOW)
        y+=20

        max_rows = max(1, min(6, int((r.bottom-y)/19)))
        for o in list(self.player.orders)[-max_rows:][::-1]:
            price=o.limit_price if o.order_type in ("LIMIT","STOP","STOP_LOSS","TAKE_PROFIT") else (o.avg_fill or self.market.stocks[o.symbol].price)
            if o.intent=="CLOSE":
                label=f"{o.order_type} {o.position_side}" if o.order_type in ("STOP_LOSS","TAKE_PROFIT") else f"CLOSE {o.position_side}"
            else:
                label=f"{o.side}/{o.order_type} {o.position_side}"

            pnl,pct,pnl_state = self.player.order_pnl_snapshot(self.market,o)
            pnl_text = "--" if pnl is None else fmt_money(pnl)
            pct_text = "--" if pct is None else f"{pct:+.2f}%"
            pnl_col = MUTED if pnl is None else GREEN if pnl >= 0 else RED

            self.draw_text(str(o.oid),(cols["id"],y),"xs",TEXT)
            self.draw_text(o.ts.strftime('%d/%m %H:%M'),(cols["time"],y),"xs",TEXT)
            self.draw_text(o.symbol,(cols["sym"],y),"xs",TEXT)
            self.draw_text(label[:22],(cols["order"],y),"xs",TEXT)
            self.draw_text(str(o.qty),(cols["qty"],y),"xs",TEXT)
            self.draw_text(str(o.filled_qty),(cols["fill"],y),"xs",TEXT)
            self.draw_text(fmt_price(price),(cols["price"],y),"xs",TEXT)
            self.draw_text(pnl_text,(cols["pnl"],y),"xs",pnl_col)
            self.draw_text(pct_text,(cols["pct"],y),"xs",pnl_col)
            status_col=GREEN if o.status=="FILLED" else YELLOW if o.status in ("OPEN","PARTIAL") else MUTED
            self.draw_text(o.status,(cols["status"],y),"xs",status_col)

            can_cancel=o.status in ("OPEN","PARTIAL")
            pos=self.player.positions.get(o.symbol)
            # Chỉ hiện X đóng vị thế nếu dòng entry này vẫn còn lượng chưa đóng.
            row_remain = max(0, o.filled_qty - self.player._order_closed_qty(o)) if o.intent=="OPEN" else 0
            can_close=(o.status=="FILLED" and o.intent=="OPEN" and row_remain>0 and pos is not None and pos.qty>0 and pos.side==o.position_side)
            if can_cancel or can_close:
                xr=pygame.Rect(r.right-24,y-2,20,18); self._set_hit(f"order_action_{o.oid}",xr)
                pygame.draw.rect(self.screen,(93,39,46) if can_close else (60,55,36),xr,border_radius=3)
                pygame.draw.rect(self.screen,RED if can_close else YELLOW,xr,1,border_radius=3)
                self.draw_text("X",(xr.x+6,xr.y+2),"xs",WHITE)
            y+=19

    def draw_trades(self,r):
        y=r.y
        self.draw_text("Thời gian       Mã   Hành động       KL       Giá khớp       P/L/Phí",(r.x,y),"xs",MUTED); y+=21
        for t in list(self.player.trades)[:6]:
            action=t.get("action",t.get("side",""))
            extra=fmt_money(t.get("pnl",-t.get("fee",0)))
            txt=f"{t['ts'].strftime('%d/%m %H:%M')}   {t['symbol']:<4} {action:<15} {t['qty']:<8} {fmt_price(t['price']):<14} {extra}"
            if action.startswith("TP_"): col=GREEN
            elif action.startswith(("SL_","LIQ_")): col=RED
            else: col=YELLOW if action.startswith("CLOSE") else GREEN if action=="OPEN_LONG" else RED
            self.draw_text(txt,(r.x,y),"xs",col); y+=20

    def draw(self):
        self.ui_hitboxes.clear(); self.screen.fill(BG)
        chart_rect,right,bottom=self.layout()
        self.draw_topbar(); self.draw_toolbar(); self.chart.draw(self.screen,self.market,self.player,chart_rect,self.fonts); self.draw_right(right); self.draw_bottom(bottom)
        self.toast.draw(self.screen,self.fonts["sm"],*self.screen.get_size())
        # status tool
        if self.chart.active_tool!="POINTER":
            msg={"TREND":"Trend: chọn 2 điểm","HLINE":"Đường ngang: click mức giá","RECT":"HCN: kéo chuột vùng giá","FIB":"Fibonacci: chọn đáy/đỉnh hoặc đỉnh/đáy"}.get(self.chart.active_tool,"")
            if msg:
                s=self.fonts["xs"].render(msg,True,TEXT); r=pygame.Rect(LEFT_W+10,TOP_H+35,s.get_width()+16,26); pygame.draw.rect(self.screen,PANEL_2,r,border_radius=4); pygame.draw.rect(self.screen,BLUE,r,1,border_radius=4); self.screen.blit(s,(r.x+8,r.y+6))
        self.draw_chart_context_menu()
        self.draw_new_game_modal()
        pygame.display.flip()

    def process_click(self,pos):
        # top / tools / tabs / rows
        for name,rect in list(self.ui_hitboxes.items()):
            if not rect.collidepoint(pos): continue
            if name=="chart_candle": self.chart.chart_type="CANDLE"; return True
            if name=="chart_line": self.chart.chart_type="LINE"; return True
            if name.startswith("tf_"):
                tf=name[3:]; self.chart.select_timeframe(tf); self.context_menu=None; self.missions.on_timeframe(); return True
            if name=="pause": self.paused=not self.paused; return True
            if name.startswith("speed_"):
                self.speed=int(name.split("_")[1]); self.paused=False; return True
            if name=="save":
                try: SaveManager.save(self); self.toast.push("Đã lưu game.",GREEN)
                except Exception: self._log_error(); self.toast.push("Lưu thất bại - xem error.log",RED)
                return True
            if name.startswith("tool_"):
                tool=name[5:]
                if tool=="DELETE":
                    if self.chart.delete_last(): self.toast.push("Đã xóa hình vẽ cuối. Có thể Redo.",MUTED)
                    return True
                if tool=="UNDO":
                    self.toast.push("Undo hình vẽ." if self.chart.undo_drawing() else "Không còn hình để Undo.", MUTED)
                    return True
                if tool=="REDO":
                    self.toast.push("Redo hình vẽ." if self.chart.redo_drawing() else "Không còn hình để Redo.", MUTED)
                    return True
                if tool=="ZOOM_IN":
                    self.chart.visible_count=max(20,int(self.chart.visible_count*0.80)); return True
                if tool=="ZOOM_OUT":
                    self.chart.visible_count=min(650,int(self.chart.visible_count*1.25)); return True
                if tool=="Y_ZOOM_IN":
                    self.chart.zoom_price_in(); self.toast.push(f"Trục giá Y x{self.chart.price_scale:.2f}",MUTED); return True
                if tool=="Y_ZOOM_OUT":
                    self.chart.zoom_price_out(); self.toast.push(f"Trục giá Y x{self.chart.price_scale:.2f}",MUTED); return True
                if tool=="RESET":
                    self.chart.reset_view(); return True
                self.chart.active_tool=tool; self.chart.temp_anchor=None; return True
            if name.startswith("exchange_"):
                self.watch_exchange=name.split("_",1)[1]; return True
            if name.startswith("sym_"):
                sym=name[4:]; self.chart.select_symbol(sym); self.context_menu=None; self.watch_exchange=SYMBOL_EXCHANGE.get(sym,self.watch_exchange); self.missions.on_symbol(sym); self.price_input.text=str(int(self.market.stocks[sym].price)); return True
            if name.startswith("rtab_"): self.right_tab=name[5:]; return True
            if name.startswith("btab_"): self.bottom_tab=name[5:]; return True
            if name.startswith("pos_"):
                sym=name[4:]; self.chart.select_symbol(sym); self.watch_exchange=SYMBOL_EXCHANGE.get(sym,self.watch_exchange); self.missions.on_symbol(sym); return True
            if name=="lev_down": self.leverage_pct=max(LEVERAGE_MIN_PCT,self.leverage_pct-LEVERAGE_STEP_PCT); return True
            if name=="lev_up": self.leverage_pct=min(LEVERAGE_MAX_PCT,self.leverage_pct+LEVERAGE_STEP_PCT); return True
            if name=="restart_game":
                self.new_game_modal=True; self.new_game_first_run=False; self.context_menu=None; return True
            if name=="side_BUY": self.order_side="BUY"; return True
            if name=="side_SELL": self.order_side="SELL"; return True
            if name=="otype_MARKET": self.order_type="MARKET"; return True
            if name in ("otype_LIMIT","otype_STOP"):
                self.order_type="LIMIT" if name=="otype_LIMIT" else "STOP"
                if not self.price_input.text: self.price_input.text=str(int(self.market.stocks[self.chart.symbol].price))
                return True
            if name.startswith("order_action_"):
                oid=int(name.split("_")[-1]); o=self.player.order_by_id(oid)
                if o is None: return True
                if o.status in ("OPEN","PARTIAL"):
                    ok=self.player.cancel_order(oid); self.toast.push("Đã hủy phần lệnh còn chờ." if ok else "Không thể hủy lệnh.",GREEN if ok else RED)
                elif o.status=="FILLED" and o.intent=="OPEN":
                    ok,msg=self.player.close_position(self.market,o.symbol); self.toast.push(msg,GREEN if ok else RED)
                return True
            if name=="submit_order":
                qty=self.qty_input.int_value(0); lp=self.price_input.float_value(0)
                ok,msg=self.player.place_order(self.market,self.chart.symbol,self.order_side,self.order_type,qty,lp,self.leverage_pct/100.0)
                self.toast.push(msg,GREEN if ok else RED)
                return True
        return False

    def handle_event(self,event):
        if event.type==pygame.QUIT: self.running=False; return
        if event.type==pygame.VIDEORESIZE:
            w=max(MIN_W,event.w); h=max(MIN_H,event.h); self.screen=pygame.display.set_mode((w,h),pygame.RESIZABLE); return
        if self.new_game_modal:
            if event.type==pygame.MOUSEBUTTONDOWN and event.button==1:
                self.process_new_game_modal_click(event.pos)
            elif event.type==pygame.KEYDOWN and event.key==pygame.K_ESCAPE and not self.new_game_first_run:
                self.new_game_modal=False
            return
        self.qty_input.handle(event)
        if self.order_type in ("LIMIT","STOP"): self.price_input.handle(event)
        if event.type==pygame.KEYDOWN and not (self.qty_input.active or self.price_input.active):
            mods = pygame.key.get_mods()
            if (mods & pygame.KMOD_CTRL) and event.key==pygame.K_z:
                if mods & pygame.KMOD_SHIFT:
                    self.toast.push("Redo hình vẽ." if self.chart.redo_drawing() else "Không còn hình để Redo.", MUTED)
                else:
                    self.toast.push("Undo hình vẽ." if self.chart.undo_drawing() else "Không còn hình để Undo.", MUTED)
            elif (mods & pygame.KMOD_CTRL) and event.key==pygame.K_y:
                self.toast.push("Redo hình vẽ." if self.chart.redo_drawing() else "Không còn hình để Redo.", MUTED)
            elif event.key==pygame.K_ESCAPE:
                if self.context_menu:
                    self.context_menu=None; self.chart.context_pos=None
                else:
                    self.chart.active_tool="POINTER"; self.chart.temp_anchor=None
            elif event.key==pygame.K_SPACE: self.paused=not self.paused
            elif event.key==pygame.K_DELETE: self.chart.delete_last()
            elif event.key in (pygame.K_PLUS, pygame.K_EQUALS, pygame.K_KP_PLUS):
                if pygame.key.get_mods() & pygame.KMOD_CTRL:
                    self.chart.zoom_price_in()
                else:
                    self.chart.visible_count=max(20,int(self.chart.visible_count*0.80))
            elif event.key in (pygame.K_MINUS, pygame.K_KP_MINUS):
                if pygame.key.get_mods() & pygame.KMOD_CTRL:
                    self.chart.zoom_price_out()
                else:
                    self.chart.visible_count=min(650,int(self.chart.visible_count*1.25))
            elif event.key==pygame.K_HOME: self.chart.reset_view()
            elif event.key==pygame.K_c: self.chart.chart_type="LINE" if self.chart.chart_type=="CANDLE" else "CANDLE"
            elif event.key==pygame.K_b: self.order_side="BUY"; self.right_tab="TRADE"
            elif event.key==pygame.K_s: self.order_side="SELL"; self.right_tab="TRADE"
            elif event.key==pygame.K_F5:
                try: SaveManager.save(self); self.toast.push("Đã lưu game.",GREEN)
                except Exception: self._log_error()
            elif event.key==pygame.K_F9:
                try:
                    if SaveManager.load(self): self.toast.push("Đã tải game.",GREEN)
                except Exception: self._log_error(); self.toast.push("Không thể tải save.",RED)
            elif event.key in (pygame.K_1,pygame.K_2,pygame.K_5):
                self.speed={pygame.K_1:1,pygame.K_2:2,pygame.K_5:5}[event.key]; self.paused=False
        if event.type==pygame.MOUSEBUTTONDOWN:
            if event.button==3:
                if self.open_chart_context_menu(event.pos): return
                self.context_menu=None; self.chart.context_pos=None
            elif event.button==1:
                if self.context_menu:
                    self.process_context_menu_click(event.pos); return
                if self.process_click(event.pos): return
        if event.type==pygame.MOUSEWHEEL and self.context_menu:
            self.context_menu=None; self.chart.context_pos=None
        chart_rect,_,_=self.layout()
        if chart_rect.collidepoint(pygame.mouse.get_pos()) or self.chart.drag_start is not None or self.chart.temp_anchor is not None or self.chart.axis_drag is not None or self.chart.level_drag is not None:
            self.chart.handle_event(event,self.missions,self.toast,self.player,self.market)

    def update(self,dt):
        if self.new_game_modal:
            return
        # Trong lúc người chơi đang kéo sửa giá lệnh, tạm dừng simulation để lệnh cũ
        # không vô tình khớp ở mức giá trước khi thả chuột xác nhận mức mới.
        if not self.paused and self.chart.level_drag is None:
            self.sim_accum += dt * BASE_SIM_MPS * self.speed
            steps=min(500,int(self.sim_accum))
            if steps>0:
                self.sim_accum-=steps
                for _ in range(steps):
                    self.market.step_minute()
                    self.player.process_limit_orders(self.market)
                    self.player.process_exit_triggers(self.market)
                    for msg in self.player.process_margin_calls(self.market):
                        self.toast.push(msg,RED,4.0)
        if self.market.trading_day_index!=self._last_day:
            self._last_day=self.market.trading_day_index
            self.toast.push(f"Ngày giao dịch mới - {self.market.now.strftime('%d/%m/%Y')}",CYAN)
        completed=self.missions.update(self.player,self.market)
        if completed:
            self.toast.push(f"Hoàn thành: {completed.title}  +{completed.reward_xp} XP",YELLOW,4.0)
        if time.time()-self.last_autosave>=AUTOSAVE_SECONDS:
            try: SaveManager.save(self)
            except Exception: self._log_error()
            self.last_autosave=time.time()

    def run(self):
        try:
            while self.running:
                dt=self.clock.tick(FPS)/1000.0
                for event in pygame.event.get(): self.handle_event(event)
                self.update(dt); self.draw()
        except Exception:
            self._log_error()
            try: SaveManager.save(self)
            except Exception: pass
            raise
        finally:
            try:
                if not (self.new_game_modal and self.new_game_first_run):
                    SaveManager.save(self)
            except Exception: pass
            pygame.quit()


def self_test():
    print("STOCKSIM VN SELF TEST")
    m=Market(seed=123456,pregen_days=3)
    assert all(len(v)==10 for v in EXCHANGE_SYMBOLS.values())
    assert len(MissionManager()) == 12
    # deterministic history
    m2=Market(seed=123456,pregen_days=3)
    for sym in m.symbols:
        a=list(m.bars[sym]); b=list(m2.bars[sym])
        assert len(a)==len(b)>0
        assert abs(a[-1].close-b[-1].close)<1e-9, "Seed không deterministic"
        for c in a[-1000:]:
            assert c.low<=c.open<=c.high
            assert c.low<=c.close<=c.high
            assert c.high>=c.low and c.volume>=0 and c.close>0
        for tf in ["5M","15M","1H","1D"]:
            bars=m.get_bars(sym,tf,200)
            assert bars, f"Không aggregate được {tf}"
            for c in bars:
                assert c.low<=min(c.open,c.close)<=max(c.open,c.close)<=c.high
    p=Player(START_CASH)
    sym="FPT"; px=m.stocks[sym].price
    # BUY mở LONG, CLOSE là thao tác riêng.
    ok,_=p.place_order(m,sym,"BUY","MARKET",100)
    assert ok and p.positions[sym].side=="LONG" and p.positions[sym].qty==100 and p.cash<START_CASH
    ok,_=p.close_position(m,sym); assert ok and sym not in p.positions
    # SELL ngay từ lệnh đầu tiên phải mở SHORT, không cần có cổ phiếu sẵn.
    ok,_=p.place_order(m,sym,"SELL","MARKET",100)
    assert ok and p.positions[sym].side=="SHORT" and p.positions[sym].qty==100
    ok,_=p.close_position(m,sym); assert ok and sym not in p.positions
    # Buy Limit thấp xa và Buy Stop cao xa không được tự fill khi chưa chạm.
    far_low=px*0.5; ok,_=p.place_order(m,sym,"BUY","LIMIT",100,far_low); assert ok
    before=p.orders[-1].filled_qty; p.process_limit_orders(m); assert p.orders[-1].filled_qty==before
    p.cancel_order(p.orders[-1].oid)
    far_high=px*1.5; ok,_=p.place_order(m,sym,"BUY","STOP",100,far_high); assert ok
    before=p.orders[-1].filled_qty; p.process_limit_orders(m); assert p.orders[-1].filled_qty==before
    # Kéo/sửa giá lệnh chờ: hợp lệ thì đổi, kéo sai phía thị trường phải bị từ chối.
    drag_oid=p.orders[-1].oid
    ok,_=p.modify_pending_order_price(m,drag_oid,m.stocks[sym].price*1.25); assert ok
    assert abs(p.orders[-1].limit_price-normalize_order_price(m.stocks[sym].price*1.25))<1e-9
    bad,_=p.modify_pending_order_price(m,drag_oid,m.stocks[sym].price*0.95); assert not bad
    p.cancel_order(drag_oid)
    # Logic giá lệnh: BUY LIMIT phải dưới giá hiện tại, SELL STOP phải dưới giá hiện tại.
    bad,_=p.place_order(m,sym,"BUY","LIMIT",100,m.stocks[sym].price*1.1); assert not bad
    bad,_=p.place_order(m,sym,"SELL","STOP",100,m.stocks[sym].price*1.1); assert not bad
    # SL/TP: tạo LONG rồi kiểm tra lưu mức bảo vệ và OCO khi một phía khớp.
    ok,_=p.place_order(m,sym,"BUY","MARKET",100); assert ok
    cur=m.stocks[sym].price
    ok,_=p.set_exit_trigger(m,sym,"STOP_LOSS",cur*0.95); assert ok and p.positions[sym].stop_loss>0
    ok,_=p.set_exit_trigger(m,sym,"TAKE_PROFIT",cur*1.05); assert ok and p.positions[sym].take_profit>0
    tp=p.positions[sym].take_profit
    last=m.bars[sym][-1]
    m.bars[sym][-1]=Candle(last.ts,last.open,max(last.high,tp*1.001),last.low,tp,last.volume)
    m.stocks[sym].price=tp
    p.process_exit_triggers(m); assert sym not in p.positions

    # Leverage: x2 phải khóa khoảng 1/2 notional, P/L tiền vẫn theo đúng số cổ phiếu.
    levp=Player(100_000_000); levm=Market(seed=777,pregen_days=5); lsym="HPG"
    before_cash=levp.cash; ok,_=levp.place_order(levm,lsym,"BUY","MARKET",100,0.0,2.0); assert ok
    lp=levp.positions[lsym]; notional=lp.avg_cost*lp.qty
    assert 0.45*notional <= lp.margin_locked <= 0.55*notional
    assert before_cash-levp.cash < notional*0.60
    assert 1.8 <= levp.position_effective_leverage(lp) <= 2.2
    ok,_=levp.close_position(levm,lsym); assert ok and lsym not in levp.positions
    assert DIFFICULTIES["EASY"]["cash"] > DIFFICULTIES["MEDIUM"]["cash"] > DIFFICULTIES["HARD"]["cash"]

    # Dataframe indicator smoke test
    bars=m.get_bars("FPT","1D",100); s=pd.Series([c.close for c in bars]); _=s.rolling(20).mean()
    # Smoke test lịch sử 2 năm: đủ > 500 nến ngày, nhưng minute history chỉ giữ phần gần.
    longm=Market(seed=654321,pregen_days=PREGEN_DAYS)
    assert len(longm.get_bars("FPT","1D",800)) >= 500
    assert len(longm.bars["FPT"]) >= INTRADAY_HISTORY_DAYS*SESSION_MINUTES
    # 30 mã phải có độ phân hóa đủ rõ sau 2 năm, tránh tất cả cùng sideway/tăng nhẹ.
    two_year_returns=[]
    for sym in longm.symbols:
        db=list(longm.daily_bars[sym])
        if len(db)>=2:
            two_year_returns.append(db[-1].close/max(db[0].open,1.0)-1.0)
    assert len(two_year_returns)>=30
    assert np.std(two_year_returns)>0.05, "Các mã chưa đủ phân hóa dài hạn"
    assert max(two_year_returns)-min(two_year_returns)>0.18, "Biên phân hóa 2 năm quá hẹp"

    # Undo/Redo hình vẽ không cần mở cửa sổ.
    cv=ChartView(); now=datetime.now()
    cv._commit_drawing(Drawing("HLINE","FPT","1D",now,100.0))
    assert len(cv.drawings)==1 and cv.undo_drawing() and len(cv.drawings)==0
    assert cv.redo_drawing() and len(cv.drawings)==1
    print("SELF TEST PASSED")


def parse_args():
    ap=argparse.ArgumentParser()
    ap.add_argument("--self-test",action="store_true")
    ap.add_argument("--new",action="store_true",help="Bỏ qua save hiện có")
    ap.add_argument("--seed",type=int,default=None)
    return ap.parse_args()


def main():
    args=parse_args()
    if args.self_test:
        self_test(); return
    game=Game(seed=args.seed,load_existing=not args.new)
    game.run()


if __name__=="__main__":
    main()
