import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGESENDER,
  appId: process.env.FIREBASE_APPID,
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
// const auth = firebase.auth();
// const provider = firebase.auth.GoogleAuthProvider();

export { db };
