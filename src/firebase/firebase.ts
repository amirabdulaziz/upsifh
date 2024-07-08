// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp(getFirebaseConfig());

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage(app);

// Sign in user
export const signInUser = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign out user
export const signOutUser = async () => {
  return await signOut(auth);
};

// Listen to authentication state changes
export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};
