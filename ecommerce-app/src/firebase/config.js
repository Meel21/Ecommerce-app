// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0MqCzigEK_XsfdCSEJpdjCpS8edTvCiQ",
  authDomain: "ecommerce-app22.firebaseapp.com",
  projectId: "ecommerce-app22",
  storageBucket: "ecommerce-app22.appspot.com",
  messagingSenderId: "869669300134",
  appId: "1:869669300134:web:fc5de1d29f6f7240cf9167",
  measurementId: "G-FKDXDJ1Q6B"
};

// Initialize Firebase
initializeApp (firebaseConfig);

export default getFirestore();
