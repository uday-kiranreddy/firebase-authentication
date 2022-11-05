import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPNYM1f6bMpQDFeUPEBmghnwmkGFmRxbE",
  authDomain: "fir-authentcation-6d955.firebaseapp.com",
  projectId: "fir-authentcation-6d955",
  storageBucket: "fir-authentcation-6d955.appspot.com",
  messagingSenderId: "91833689447",
  appId: "1:91833689447:web:a2888f59ee5e229a17bbc2",
  measurementId: "G-WKH7JPCLRW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
