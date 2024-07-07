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
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Initialize Firebase app
const app = initializeApp(getFirebaseConfig());

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage(app);

// Register user
export const registerUser = async (
  name: string,
  email: string,
  phoneNumber: string,
  password: string
) => {
  try {
    const usersRef = collection(db, "users");
    const userDoc = await getDoc(doc(usersRef, email));

    if (userDoc.exists()) {
      throw new Error("Email already exists.");
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(usersRef, user.uid), {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error registering user: ", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};

// Sign in user
export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error signing in: ", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};

// Add feedback
export const addFeedback = async (
  name: string,
  email: string,
  feedbackText: string
) => {
  try {
    const feedbackRef = collection(db, "feedback");
    console.log("Adding feedback to:", feedbackRef);

    const docRef = await addDoc(feedbackRef, {
      name: name,
      email: email,
      feedbackText: feedbackText,
      status: 0,  // Adding the status field with default value 0
      createdAt: new Date(),
    });

    return docRef.id;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error adding feedback: ", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};