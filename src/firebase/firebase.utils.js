import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHPWPW1N-RL9fsh1r0uec1ZVUNA6qtlIQ",
  authDomain: "clothstore-db-53044.firebaseapp.com",
  projectId: "clothstore-db-53044",
  storageBucket: "clothstore-db-53044.appspot.com",
  messagingSenderId: "696184348569",
  appId: "1:696184348569:web:48f45083a9baa721e57d08",
  measurementId: "G-MRPWKN99E6",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(firestore.doc('users/ajdhfew'));
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
