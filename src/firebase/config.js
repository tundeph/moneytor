import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LsqKq_P1K80dSKq3apf3YX0fvpyrPPY",
  authDomain: "moneytor-822f2.firebaseapp.com",
  projectId: "moneytor-822f2",
  storageBucket: "moneytor-822f2.appspot.com",
  messagingSenderId: "814379692812",
  appId: "1:814379692812:web:7673af7264834c08eecf29",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//initalize services
const moneytorAuth = firebase.auth()
const moneytorDb = firebase.firestore()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { moneytorDb, moneytorAuth, timestamp }
