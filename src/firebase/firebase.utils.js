import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDinUJS85LecPOHdAKWoHpWzcbFqIngu8",
  authDomain: "crwn-db-a5591.firebaseapp.com",
  databaseURL: "https://crwn-db-a5591.firebaseio.com",
  projectId: "crwn-db-a5591",
  storageBucket: "crwn-db-a5591.appspot.com",
  messagingSenderId: "464433521611",
  appId: "1:464433521611:web:9e5bccf276b41c949b8c4e",
  measurementId: "G-54QF2P5ZS8",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
