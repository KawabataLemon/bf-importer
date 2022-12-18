import { OHLC, OHLC_TYPE_LABEL } from '../constants/ohlc'
import { FileResult } from '../constants/results';
import { utils } from '../utils/date_utils'
import { service as export_service } from '../services/ohlc_export_service';
import { service as download_service } from '../services/ohlc_download_service';

class BitflyerImporter {

  // 指定期間にあるファイルを返す
  async getFiles(type: OHLC, from: Date, to: Date, isDryRun: Boolean): Promise<FileResult[]> {
    
    console.log(`isDryRun: ${isDryRun}`)
    console.log(`${OHLC_TYPE_LABEL[type]}のOHLCを取得します。`)    
    console.log(`${utils.formatDate(from)}から${utils.formatDate(to)}まで取得します`)

    const dates = utils.generateRangeStrings(from,  to);
    const fileNames = dates.map((e) => `${type}_${e}.json`);
    if (isDryRun) {
      // ファイルの存在を確認しておしまい
      // 該当の足に匹敵するファイル群を返しておしまい
      return fileNames;
    }

    const exportedFiles = [];
    for (let filename of fileNames) {
      try {
        const ohlc = await download_service.downloadOhlc(filename);
        const result = await export_service.exportToCSV(type,filename, ohlc);  
        exportedFiles.push(result);
      } catch (e) {
        continue;
      }
    }
    return exportedFiles;
  }
}

export {
  BitflyerImporter
}