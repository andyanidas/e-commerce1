import firebaseClient from "firebase/app";
import "firebase/auth";


const CLIENT_CONFIG = {
  apiKey: "AIzaSyBMAPXQR7Hdw3Ooy_HxbAIxdbGPnkC1w7w",
  authDomain: "auth-developer-66d68.firebaseapp.com",
  projectId: "auth-developer-66d68",
  storageBucket: "auth-developer-66d68.appspot.com",
  messagingSenderId: "920196545382",
  appId: "1:920196545382:web:074656a3ce914f6e7966a7"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
