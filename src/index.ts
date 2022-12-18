import { BitflyerImporter } from './interface/bitflyer_importer';

const importer = new BitflyerImporter();
const main = async () => {
  const results = await importer.getFiles("1d", new Date(2022, 10,18), new Date(2022,11,15), false)
  results.forEach(console.log)
};

main();
