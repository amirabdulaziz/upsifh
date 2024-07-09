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
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query, updateDoc } from "firebase/firestore";
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

// Listen to authentication state changes
export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};

// fetch user feedback
export const getFeedback = async () => {
  try {
    const feedbackRef = collection(db, "feedback");
    const feedbackQuery = query(feedbackRef, orderBy("createdAt", "desc"));
    const feedbackSnapshot = await getDocs(feedbackQuery);

    const feedbackList = feedbackSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return feedbackList;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error getting feedback: ", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};

// update feedback status
export const updateFeedbackStatus = async (
  feedbackId: string,
  status: number
) => {
  try {
    const feedbackRef = doc(db, "feedback", feedbackId);
    await updateDoc(feedbackRef, {
      status,
    });
    console.log("Feedback status updated successfully", status);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating feedback status: ", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};

// Function to delete feedback by ID
export const deleteFeedbackById = async (feedbackId: string): Promise<void> => {
  try {
    const feedbackDocRef = doc(db, 'feedback', feedbackId);
    await deleteDoc(feedbackDocRef);
    console.log(`Feedback with ID ${feedbackId} deleted successfully.`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error deleting feedback:', error.message);
    } else {
      console.error('Unexpected error', error);
    }
    throw new Error('Error deleting feedback');
  }
};
