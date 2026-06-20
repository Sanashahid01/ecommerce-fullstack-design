import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJwN3OMfrAYJ32xFCBoZbkCvsmPm364ow",
  authDomain: "ecommerce-intern-task.firebaseapp.com",
  projectId: "ecommerce-intern-task",
  storageBucket: "ecommerce-intern-task.firebasestorage.app",
  messagingSenderId: "800763255137",
  appId: "1:800763255137:web:f5069a60a1d2fb8c34cd20"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);