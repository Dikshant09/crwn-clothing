import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS3hbQQAAMCGCk3YG0J3OyNTK5wymWkQk",
  authDomain: "crwn-clothing--database.firebaseapp.com",
  projectId: "crwn-clothing--database",
  storageBucket: "crwn-clothing--database.appspot.com",
  messagingSenderId: "474624420172",
  appId: "1:474624420172:web:4889579cdf259ea3c787e9",
  measurementId: "G-6BGMFZMY67"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: `select_account`});
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default app;