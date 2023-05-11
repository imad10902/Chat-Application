// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDoZ5O27Y5BGIR-B5xr0cuAXGRYYwjsxU8",
    authDomain: "chat-application-imad.firebaseapp.com",
    databaseURL: "https://chat-application-imad-default-rtdb.firebaseio.com",
    projectId: "chat-application-imad",
    storageBucket: "chat-application-imad.appspot.com",
    messagingSenderId: "1096782841650",
    appId: "1:1096782841650:web:81deaae97b86cb8ecbb92b",
    measurementId: "G-5P393ELN2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;