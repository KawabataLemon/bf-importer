import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../credentials/firebase';

class FirebaseStorageClient {
  constructor() {
    initializeApp(firebaseConfig)
  }

  async getDownloadURL(fileName: string): Promise<string>{
    const storage = getStorage();
    const pathReference = ref(storage, fileName);
    return await getDownloadURL(pathReference);
  }
}

const client = new FirebaseStorageClient();

export {
  client
}