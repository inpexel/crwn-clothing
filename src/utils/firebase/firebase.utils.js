// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import{getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDQE9AfMuhs56ZDmjiHc9D4SMCe3TzrF7M",
    authDomain: "crwn-clothing-db-db854.firebaseapp.com",
    projectId: "crwn-clothing-db-db854",
    storageBucket: "crwn-clothing-db-db854.appspot.com",
    messagingSenderId: "665538802294",
    appId: "1:665538802294:web:ecce720854c0296e77a557"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promp:"select_account"
});

export const auth= getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email} = userAuth;
    const createAu = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAu
      });
    } catch(error){
      console.log('error creating the user', error. message)
    }
  }

  return userDocRef;
}