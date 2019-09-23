import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAH7u4PwJnXPLl84JVadD1OWTxJyYDpwhM',
  authDomain: 'di-crwn-db.firebaseapp.com',
  databaseURL: 'https://di-crwn-db.firebaseio.com',
  projectId: 'di-crwn-db',
  storageBucket: '',
  messagingSenderId: '12886275659',
  appId: '1:12886275659:web:42c424d786a2a7f9783fce'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
