// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZYLKROFfCSMQDVSg4elDYQu00DM6YRKY",
  authDomain: "photo-gallery-83fbc.firebaseapp.com",
  projectId: "photo-gallery-83fbc",
  storageBucket: "photo-gallery-83fbc.appspot.com",
  messagingSenderId: "923544319926",
  appId: "1:923544319926:web:9bc19e8c67e1eb127a3317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;