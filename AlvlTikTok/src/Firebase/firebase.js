import firebase from './firebase';

import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDrVLph7V_PCIzIMoAUwJeH8wZ3LXamdoQ",
    authDomain: "hack-and-roll-d76d6.firebaseapp.com",
    projectId: "hack-and-roll-d76d6",
    storageBucket: "hack-and-roll-d76d6.appspot.com",
    messagingSenderId: "438380290770",
    appId: "1:438380290770:web:d60fe6a1d091e3969cc30b",
    measurementId: "G-BKSWQ58FRJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;
