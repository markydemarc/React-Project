import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAtyQJgTwB3q12U7G1pHJgY_TSt_e_4UbY",
  authDomain: "proyecto-react-5b893.firebaseapp.com",
  projectId: "proyecto-react-5b893",
  storageBucket: "proyecto-react-5b893.appspot.com",
  messagingSenderId: "1005698250624",
  appId: "1:1005698250624:web:190ab0b4f00df3d6577365"
})

export function getFirebase() {
  return app
}

export function getFirestore() {
  return firebase.firestore(app)
}