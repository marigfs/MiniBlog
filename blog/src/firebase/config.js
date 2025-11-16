import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCup1USot0Ra5TAbb3BHks1kqoksT70rB0",
  authDomain: "miniblog-1d786.firebaseapp.com",
  projectId: "miniblog-1d786",
  storageBucket: "miniblog-1d786.appspot.com",
  messagingSenderId: "659075615437",
  appId: "1:659075615437:web:a9a27f8a05e41a613d7784",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
