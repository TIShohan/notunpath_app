import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDow8xPQkrDcyAAweVB2Ypnxm_WyCU3P6I",
  authDomain: "notunpath-3c848.firebaseapp.com",
  projectId: "notunpath-3c848",
  storageBucket: "notunpath-3c848.firebasestorage.app",
  messagingSenderId: "239725860412",
  appId: "1:239725860412:web:07c784ba10237dbfdf9539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
