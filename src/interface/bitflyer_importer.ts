import { OHLC, OHLC_TYPE_LABEL } from '../constants/ohlc'
import { FileResult } from '../constants/results';

class BitflyerImporter {

  // 指定期間にあるファイルを返す
  async getFiles(type: OHLC, from: Date, to: Date, isDryRun: Boolean): Promise<FileResult[]> {
    
    console.log(`isDryRun: ${isDryRun}`)
    console.log(`${OHLC_TYPE_LABEL[type]}のOHLCを取得します`)    

    if (isDryRun) {
      // ファイルの存在を確認しておしまい
      // 該当の足に匹敵するファイル群を返しておしまい
      return [
        ``
      ]
    }
     // ファイル自体を読み取って返す
    

    return [];
  }
}

export {
  BitflyerImporter
}