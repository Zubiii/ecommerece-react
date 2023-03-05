// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
  } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();
// Allow user to select account when login into application
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signinWithGooglePopup = () => signInWithPopup(auth, provider)

export const FirestoreDB = getFirestore()     // initalize Firestore Databse 

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(FirestoreDB, 'users', userAuth.uid)
  const UserSnapshot = await getDoc(userDocRef)

  console.log("UserSnapshot => ", UserSnapshot, UserSnapshot.exists())
  if(!UserSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new  Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(err){
      console.log("Error Createing User: ", err)
    }
  }
  return userDocRef
}
