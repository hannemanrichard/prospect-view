// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0L4bjVrv8eM0izz8jqbqHH-Ye6KfEmNY",
//   authDomain: "landing-54760.firebaseapp.com",
//   projectId: "landing-54760",
//   storageBucket: "landing-54760.appspot.com",
//   messagingSenderId: "1090140081949",
//   appId: "1:1090140081949:web:aea814751c4fa6628d5bf4",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDO1gQvh58aHF2W0rMWatnwCvj59kySBnM",
  authDomain: "agiva-traffic.firebaseapp.com",
  projectId: "agiva-traffic",
  storageBucket: "agiva-traffic.appspot.com",
  messagingSenderId: "917206257212",
  appId: "1:917206257212:web:2d9e7534bc743e32923d39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
