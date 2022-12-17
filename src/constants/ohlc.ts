const ohlcType = ["1m", "3m", "5m", "15m", "30m", "1h", "2h", "4h", "6h", "12h", "1d","3d", "1w"] as const;

type OHLC = typeof ohlcType[number];

const OHLC_TYPE_LABEL: {[ K in OHLC]?: string}  = {
  "1m": "1分足",
  "3m": "3分足",
  "5m": "5分足",
  "15m": "15分足",
  "30m": "30分足",
  "1h": "1時間足",
  "2h": "2時間足",
  "4h": "4時間足",
  "6h": "6時間足",
  "12h": "12時間足",
  "1d": "日足",
  "3d": "3日足",
  "1w": "週足",
}

export {
  ohlcType,
  OHLC,
  OHLC_TYPE_LABEL
}