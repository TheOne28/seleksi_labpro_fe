import { storage } from "../service/firebase";
import {  ref,  getDownloadURL, uploadBytesResumable} from 'firebase/storage';


export default async function uploadPhoto(photo: File, username: string){
    const imageRef = ref(storage, `foto_ktp_${username}`);

    const snapshot = await uploadBytesResumable(imageRef, photo);
    const url = await getDownloadURL(snapshot.ref)

    return url;
}