// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'reart-web3-dapp.firebaseapp.com',
  databaseURL: 'https://reart-web3-dapp-default-rtdb.firebaseio.com',
  projectId: 'reart-web3-dapp',
  storageBucket: 'reart-web3-dapp.appspot.com',
  messagingSenderId: '1087981197218',
  appId: '1:1087981197218:web:1e682893a3ce8c120f04fb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = getFirestore(app);

// Helpers
export const getCollectionDocs = async (collectionName: string) =>
  getDocs(collection(db, collectionName));
