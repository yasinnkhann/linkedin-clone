import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDm-tpyJjeoayncbri-wHAj9-RDRFGnyc8',
  authDomain: 'linkedin-clone-d69ad.firebaseapp.com',
  projectId: 'linkedin-clone-d69ad',
  storageBucket: 'linkedin-clone-d69ad.appspot.com',
  messagingSenderId: '745550315349',
  appId: '1:745550315349:web:7c6d529b73652c70d0b9dc',
  measurementId: 'G-LFFF6VEP3C',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
