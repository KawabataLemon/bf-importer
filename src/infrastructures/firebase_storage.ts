import { getBlob, getDownloadURL, getStorage, ref } from "firebase/storage";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../credentials/firebase';
import axios, {} from 'axios';
import { OhlcResponse } from "../models/OhlcResponse";

class FirebaseStorageClient {
  constructor() {
    initializeApp(firebaseConfig)
  }

  async getFile(fileName: string): Promise<OhlcResponse>{
    const storage = getStorage();
    const pathReference = ref(storage, fileName);
    const downloadURL = await getDownloadURL(pathReference);
    const { data } = await axios.get<OhlcResponse>(downloadURL)
    return data;    
  }
}

const client = new FirebaseStorageClient();

export {
  client
}