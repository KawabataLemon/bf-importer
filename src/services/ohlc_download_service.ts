import { client } from '../infrastructures/firebase_storage';
import axios from 'axios';
import { OhlcResponse } from "../models/ohlc_response";

class OhlcDownloadService {
  
  async downloadOhlc(filename: string): Promise<OhlcResponse>  {
    let downloadURL = await client.getDownloadURL(filename)
    const { data } = await axios.get<OhlcResponse>(downloadURL)
    return data;    
  }
}

const service = new OhlcDownloadService();

export {
  service
}