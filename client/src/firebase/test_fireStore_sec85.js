import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('bs8yyCWVEaeXzUNIwNHs')
  .collection('cartItems')
  .doc('FQSKEp45hE4Y2VlXOfMh');
firestore.doc('/users/bs8yyCWVEaeXzUNIwNHs/cartItems/FQSKEp45hE4Y2VlXOfMh');
firestore.collection('/users/bs8yyCWVEaeXzUNIwNHs/cartItems');
