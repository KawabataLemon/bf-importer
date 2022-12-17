import { BitflyerImporter } from './interface/bitflyer_importer';

const importer = new BitflyerImporter();
const main = async () => {
  const results = await importer.getFiles("1m", new Date(2022, 10,18), new Date(2023,12,18), true)
  results.forEach(console.log)
};

main();
