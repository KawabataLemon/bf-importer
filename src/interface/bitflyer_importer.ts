import { OHLC, OHLC_TYPE_LABEL } from '../constants/ohlc'
import { FileResult } from '../constants/results';
import { client } from '../infrastructures/firebase_storage';
import { utils } from '../utils/date_utils'
import { service } from '../services/ohlc-export-service';
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
        const ohlc = await client.getFile(filename);
        const result = await service.exportToCSV(type,filename, ohlc);  
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