// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlq9iEBm74PcJLS_R60N2ES9jGU97JXh0",
  authDomain: "realtor-clone-react-proj-89245.firebaseapp.com",
  projectId: "realtor-clone-react-proj-89245",
  storageBucket: "realtor-clone-react-proj-89245.appspot.com",
  messagingSenderId: "97677844990",
  appId: "1:97677844990:web:c65cc5030d817ce10820af"
};

 initializeApp(firebaseConfig);
 export const db= getFirestore();

 //22:30