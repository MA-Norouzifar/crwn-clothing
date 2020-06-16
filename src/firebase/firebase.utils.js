import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCDinUJS85LecPOHdAKWoHpWzcbFqIngu8",
    authDomain: "crwn-db-a5591.firebaseapp.com",
    databaseURL: "https://crwn-db-a5591.firebaseio.com",
    projectId: "crwn-db-a5591",
    storageBucket: "crwn-db-a5591.appspot.com",
    messagingSenderId: "464433521611",
    appId: "1:464433521611:web:9e5bccf276b41c949b8c4e",
    measurementId: "G-54QF2P5ZS8"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;