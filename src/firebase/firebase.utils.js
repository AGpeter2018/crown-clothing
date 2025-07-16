import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const Config = {
  apiKey: "AIzaSyBUXT__LpmiAw86rSQIJ40Mj5aAzGrzKrQ",
  authDomain: "crowning-clothing.firebaseapp.com",
  projectId: "crowning-clothing",
  storageBucket: "crowning-clothing.firebasestorage.app",
  messagingSenderId: "795660661309",
  appId: "1:795660661309:web:380a3f95214f7533407054",
  measurementId: "G-CGNQGCVMED",
};

firebase.initializeApp(Config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();
  // console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("create error user", error.message);
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
