import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmBwKQvZYbLrmk46FFy9Zvy4NCqIqIujo',
  authDomain: 'finance-476ff.firebaseapp.com',
  projectId: 'finance-476ff',
  storageBucket: 'finance-476ff.appspot.com',
  messagingSenderId: '1082658495038',
  appId: '1:1082658495038:web:b2253832b292272d5d0f6f',
  measurementId: 'G-Y3PS2X6MD3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
export { db, auth };
