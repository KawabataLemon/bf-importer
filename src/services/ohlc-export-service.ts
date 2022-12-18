import { DataFrame } from 'danfojs-node';
import { OhlcColumns, OhlcResponse } from '../models/OhlcResponse';
// とってきたデータを書き込みに行ったりするサービス
class OhlcExportService {
  async exportToCSV(jsonFilename: string, jsonData: OhlcResponse) {
    const csvFileName = jsonFilename.replace('json', 'csv');
    const df = new DataFrame(jsonData, { columns: OhlcColumns });
    df.print();
    df.toCSV({
      filePath: jsonFilename
    })
  }
}

const service = new OhlcExportService();

export {
  service,
}