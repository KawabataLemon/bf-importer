import { BitflyerImporter } from './interface/bitflyer_importer';
import yargs from 'yargs';
import { OHLC, ohlcType } from '../src/constants/ohlc'
import { utils } from './utils/date_utils';
const importer = new BitflyerImporter();
const main = async () => {
  const args = yargs
    .command("* <from> <to> <type>", "print a message received as an argument")
    .options({
      "from": {
        type: "string",
        describe: "set required date string format 'yyyy-mm-dd'",
      },
      "to": {
        type: "string",
        describe: "set required date string format 'yyyy-mm-dd'",
      },
      "type": {
        type: "string",
        describe: `set ohlcType (${ohlcType.join(",")})`
      }
    })
    .check((args) => {
      if (args.type == undefined) {
        return false
      }
      
      if (!(args.from != undefined && args.to != undefined)) {
        return false;
      }
      return true
    })
    .parseSync()
    
  const fromDate = utils.dateFromString(args.from!);
  const toDate = utils.dateFromString(args.to!)
  const results = await importer.getFiles(args.type as OHLC, fromDate, toDate, false)
    results.forEach(console.log)
};

main();
