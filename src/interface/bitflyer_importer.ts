import { OHLC, OHLC_TYPE_LABEL } from '../constants/ohlc'
import { FileResult } from '../constants/results';
import { utils } from '../utils/date_utils'
class BitflyerImporter {

  // 指定期間にあるファイルを返す
  async getFiles(type: OHLC, from: Date, to: Date, isDryRun: Boolean): Promise<FileResult[]> {
    
    console.log(`isDryRun: ${isDryRun}`)
    console.log(`${OHLC_TYPE_LABEL[type]}のOHLCを取得します。`)    
    console.log(`${utils.formatDate(from)}から${utils.formatDate(to)}まで取得します`)

    const dates = utils.generateRangeStrings(from,  to);

    if (isDryRun) {
      // ファイルの存在を確認しておしまい
      // 該当の足に匹敵するファイル群を返しておしまい
      return dates.map((e) => `${type}_${e}.json`)
    }

    // ファイル自体を読み取って返す
    
    return [];
  }
}

export {
  BitflyerImporter
}