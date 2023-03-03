import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsVfbzn6-ug3rlgILa0yIPvxNrQv66iOE",
  authDomain: "testfirestore-6a411.firebaseapp.com",
  projectId: "testfirestore-6a411",
  storageBucket: "testfirestore-6a411.appspot.com",
  messagingSenderId: "900149853149",
  appId: "1:900149853149:web:d755f79951ca9cdfa45434",
  measurementId: "G-LWHNFDMN0G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;