import { DataFrame } from 'danfojs-node';
import { OHLC } from '../constants/ohlc';
import { OhlcColumns, OhlcResponse } from '../models/OhlcResponse';
import { mkdirSync } from 'fs';
// とってきたデータを書き込みに行ったりするサービス
class OhlcExportService {
  async exportToCSV(ohlc: OHLC,jsonFilename: string, jsonData: OhlcResponse) {
    const filename = jsonFilename.replace('json', 'csv')
    const filenameContainsPath = filename.replace(`${ohlc}_`, "")
    const df = new DataFrame(jsonData, { columns: OhlcColumns });
    return df.toCSV({
      filePath: filenameContainsPath
    })
  }
}

const service = new OhlcExportService();

export {
  service,
}