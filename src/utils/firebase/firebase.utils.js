// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmNCIcYduuHhodXW1kdKeiC4QHvsjHhZw",
  authDomain: "rr-clothing-nagaram.firebaseapp.com",
  projectId: "rr-clothing-nagaram",
  storageBucket: "rr-clothing-nagaram.appspot.com",
  messagingSenderId: "388224540188",
  appId: "1:388224540188:web:dc3d8b9a16dc529c3589d9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup =  ()=> signInWithPopup(auth,authProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = await doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);
    
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        }catch(error){
            console.log('error creating user ', error);
        }
    }

    return userDocRef;
}