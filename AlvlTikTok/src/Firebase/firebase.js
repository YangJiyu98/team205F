import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrVLph7V_PCIzIMoAUwJeH8wZ3LXamdoQ",
    authDomain: "hack-and-roll-d76d6.firebaseapp.com",
    projectId: "hack-and-roll-d76d6",
    storageBucket: "hack-and-roll-d76d6.appspot.com",
    messagingSenderId: "438380290770",
    appId: "1:438380290770:web:d60fe6a1d091e3969cc30b",
    measurementId: "G-BKSWQ58FRJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db