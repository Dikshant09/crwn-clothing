import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, getDocs, query, where} from "firebase/firestore";

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
export const auth = getAuth(app);

const db = getFirestore(app);
const provider = new GoogleAuthProvider();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const docRef = doc(db, "users", `${userAuth.uid}`);
    
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();  
     
    try {
      // use setDoc()
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      }).then(() => console.log("Data saved successfully"));
 
    } catch (error) {
      console.log("ERROR", error.message);
    }
  }
  return docRef;
}


provider.setCustomParameters({ prompt: `select_account`});
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default app;