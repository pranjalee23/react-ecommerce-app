import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCw4dLYyUxb7MdAzvz-EzeYMQ_c3-OEK18',
  authDomain: 'ztm-ecommerce-app-db.firebaseapp.com',
  projectId: 'ztm-ecommerce-app-db',
  storageBucket: 'ztm-ecommerce-app-db.appspot.com',
  messagingSenderId: '201786493658',
  appId: '1:201786493658:web:ae3d7a7fb5583a35b133e3',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
