import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDX0Y0s_NFvI4prqwHaTdbnxajTsqIH6k",
  authDomain: "database-crwn-clothing.firebaseapp.com",
  projectId: "database-crwn-clothing",
  storageBucket: "database-crwn-clothing.appspot.com",
  messagingSenderId: "418362411748",
  appId: "1:418362411748:web:5105da645f139a2a307af1",
  measurementId: "G-QML2LZD2G0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, user => {
  console.log('You are logged in as', user);
});


provider.setCustomParameters({ prompt: `select_account`});
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default app;