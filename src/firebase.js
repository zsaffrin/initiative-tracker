import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => ({ status: 'success', result: res }))
      .catch((err) => ({ status: 'error', result: err.message }));
  }

  logout() {
    this.auth.signOut();
  }

  getDoc(collection, docQuery) {
    return this.db
      .collection(collection)
      .doc(docQuery)
      .get()
      .then((doc) => (doc.exists ? doc.data() : null))
      .catch((err) => console.error(err.message));
  }

  getCollection(collection) {
    return this.db
      .collection(collection)
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })))
      .catch((err) => console.error(err.message));
  }

  addDoc(collection, doc) {
    return this.db
      .collection(collection)
      .add(doc)
      .then((res) => ({ status: 'success', result: res }))
      .catch((err) => ({ status: 'error', result: err.message }));
  }

  updateDoc(query, value) {
    return this.db
      .doc(query)
      .update(value)
      .then((res) => ({ status: 'success', result: res }))
      .catch((err) => ({ status: 'error', result: err.message }));
  }

  deleteDoc(query) {
    return this.db
      .doc(query)
      .delete()
      .then((res) => ({ status: 'success', result: res }))
      .catch((err) => ({ status: 'error', result: err.message }));
  }
}

export default new Firebase();
