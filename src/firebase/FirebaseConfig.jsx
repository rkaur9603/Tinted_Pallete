import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEqLrCuoE7jKpSV0UsfgksntVbcwmPWRo",
  authDomain: "tintedpallete.firebaseapp.com",
  projectId: "tintedpallete",
  storageBucket: "tintedpallete.appspot.com",
  messagingSenderId: "965441090063",
  appId: "1:965441090063:web:9c629fe1521685214fa97a"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }