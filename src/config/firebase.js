
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRJ8vfe0uAGhpH0Eh3AWgojU_Xo2_LVVA",
  authDomain: "first-project-4c521.firebaseapp.com",
  projectId: "first-project-4c521",
  storageBucket: "first-project-4c521.appspot.com",
  messagingSenderId: "844017649137",
  appId: "1:844017649137:web:1e2a642ebeaa81e1ebf050",
  measurementId: "G-7W48CNMK5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);