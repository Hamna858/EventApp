import { initializeApp } from 'firebase/app';
import { getAuth ,signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9mezo-FyH_oV5QjS_7F8htrbGoleOi_Y",
  authDomain: "eventapp-2a9a6.firebaseapp.com",
  projectId: "eventapp-2a9a6",
  storageBucket: "eventapp-2a9a6.appspot.com",
  messagingSenderId: "664252904159",
  appId: "1:664252904159:web:3664f39038cc3846ca6f6a"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User successfully signed in
      const user = userCredential.user;
      console.log('User signed in:', user.uid);
      // Handle further actions after successful sign-in
    } catch (error) {
      // Handle sign-in errors
      console.error('Sign-in error:', error.message);
      // Handle error scenarios
    }
  };

  const signUps = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User successfully signed up
      const user = userCredential.user;
      console.log('User signed up:', user.uid);
      // Handle further actions after successful sign-up
    } catch (error) {
      // Handle sign-up errors
      console.error('Sign-up error:', error.message);
      // Handle error scenarios
    }
  };

// Sign-out function
const signOut = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
    // Additional actions after sign-out
  } catch (error) {
    console.error('Sign-out error:', error.message);
    // Handle sign-out errors
  }
};

export { signIn, signUps, signOut, auth };
