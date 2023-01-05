import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FirebaseAppProvider } from "reactfire";

import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY22129JihVNT4tx2FscecUQfomVCjZrk",
  authDomain: "react-fire-e964f.firebaseapp.com",
  projectId: "react-fire-e964f",
  storageBucket: "react-fire-e964f.appspot.com",
  messagingSenderId: "648518032242",
  appId: "1:648518032242:web:e30947703b29d33fcedbeb",
  measurementId: "G-WT1H311Q2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
    ,
  </React.StrictMode>
);
