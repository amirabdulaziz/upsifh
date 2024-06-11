import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const app = initializeApp(getFirebaseConfig());
export const db = getFirestore();
export const auth = getAuth(app);
const storage = getStorage(app);
// import { auth, db } from "./firebase-config";

// Register user
export const registerUser = async (
  name: string,
  email: string,
  phoneNumber: string,
  password: string
) => {
  try {
    // Construct the reference to the users collection
    const usersRef = collection(db, "users");

    // Check if a user with the provided email already exists
    const userDoc = await getDoc(doc(usersRef, email));

    if (userDoc.exists()) {
      throw new Error("Email already exists.");
    }

    // Create the user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Set the user data in the users collection
    await setDoc(doc(usersRef, user.uid), {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    throw error;
  }
};

// Sign in user
export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
