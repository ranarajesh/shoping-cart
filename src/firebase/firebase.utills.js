import firebase from 'firebase/app'; // load only app firebase library
import 'firebase/auth'; // this is automatically attach
import 'firebase/firestore'; // this is automatically attach to firebase dependency

// firebase configuration information
const firebaseConfig = {
  apiKey: 'AIzaSyCDPxFZ1nCRLWx-EmF5eGrh6sY4AyibNCo',
  authDomain: 'crown-db-ed936.firebaseapp.com',
  databaseURL: 'https://crown-db-ed936.firebaseio.com',
  projectId: 'crown-db-ed936',
  storageBucket: 'crown-db-ed936.appspot.com',
  messagingSenderId: '152713712699',
  appId: '1:152713712699:web:f23bbd7b6dea9c31d8b81e',
  measurementId: 'G-PS3Y1V27KK',
};

// initialize the firebase project by providing config object
firebase.initializeApp(firebaseConfig);

// export auth
export const auth = firebase.auth();

// export firestore
export const firestore = firebase.firestore();

// Setup the firebase provider setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// export siginwithgoogle method for attach
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//create user profile for first time user login by google mail
//
export const createUserProfileDocument = async (
  userAuth,
  additionalDetails
) => {
  if (!userAuth) return;
  // Firestore function always return two object one is Reference and Snapshort i.e. documentReference, documentSnapshort, collectionReference, collectionSnapshort.
  // reference object provide the reference of object with property, methods to access this, whereas Snapshot return the object store value itself
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
    } catch (error) {
      console.error('Error for creating user profile ', error.message);
    }
  }
  return userRef;
};

export default firebase;
