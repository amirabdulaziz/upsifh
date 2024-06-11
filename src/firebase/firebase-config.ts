const firebaseConfig = {
  apiKey: "AIzaSyA9rGbSFqg90z0-dz29ux0FttErJtHF0xo",
  authDomain: "upsifh.firebaseapp.com",
  projectId: "upsifh",
  storageBucket: "upsifh.appspot.com",
  messagingSenderId: "852385529372",
  appId: "1:852385529372:web:2039025d96204c622869d9",
  measurementId: "G-P1VC3FHZ82",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return firebaseConfig;
  }
}
