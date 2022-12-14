// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase , much like express server
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

//create an instance of authentication and set default language
export const auth = getAuth();
auth.useDeviceLanguage();

//create a provider for any authentication method we are using

const googleProvider = new GoogleAuthProvider();

//Exports a function that uses SignInWithPopUp() method pulled from firebase, passing the provider we created in our getAuth() instance, auth.

export const signInWithGoogle = () => {
  try {
    //the signInWithPopUp() method accepts ANY provider we create. this is authentication logic
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      console.log(user);
    });
  } catch (err) {
    console.log(err);
  }
};

//Sign Out Method

export const logOut = async () => {
  try {
    await signOut(auth);
    alert("you've signed out - congrats.");
  } catch (err) {
    console.log(err);
  }
};
