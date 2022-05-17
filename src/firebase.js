// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO3YT0Eekg1qZrQUf2W9BrntcGEm2XN2w",
  authDomain: "proffus-assignment-8041f.firebaseapp.com",
  projectId: "proffus-assignment-8041f",
  storageBucket: "proffus-assignment-8041f.appspot.com",
  messagingSenderId: "521288026637",
  appId: "1:521288026637:web:81935c75cc8e5e24eee344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { storage }
export default db