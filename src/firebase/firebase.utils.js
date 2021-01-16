import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDpsnJ4_JzKFpys84OqzO7yoYDT6gpgKnw",
  authDomain: "react-ecommerce-db-7a41a.firebaseapp.com",
  projectId: "react-ecommerce-db-7a41a",
  storageBucket: "react-ecommerce-db-7a41a.appspot.com",
  messagingSenderId: "19056811105",
  appId: "1:19056811105:web:9e22fa1c48acb8525ede20",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
