// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCd-5piicNwJ1cqiTKV5kmKERzMz9qZwEY",
  authDomain: "project-ease-e14b1.firebaseapp.com",
  projectId: "project-ease-e14b1",
  storageBucket: "project-ease-e14b1.appspot.com",
  messagingSenderId: "422755895512",
  appId: "1:422755895512:web:930eae76be08297fd62fad",
  measurementId: "G-WTXZS90DMC",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
