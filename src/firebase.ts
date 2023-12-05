// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDFMXxPL1mh_1vZFchKnBYhOolCPeEF0",
  authDomain: "nwitter-reloaded-80e0a.firebaseapp.com",
  projectId: "nwitter-reloaded-80e0a",
  storageBucket: "nwitter-reloaded-80e0a.appspot.com",
  messagingSenderId: "984450709487",
  appId: "1:984450709487:web:268b0273f20dacc18ea81a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app); //인증서비스에 대한 직접링크를 받아옴

// if (!app) {
//   console.error("Firebase initialization failed!");
// }

export const auth = getAuth(app); // 인증 서비스에 대한 직접 링크를 받아옴