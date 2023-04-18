import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBc1Lxt8w3Cgy5S-UxoD0vYj6bGARrXoJo",
    authDomain: "nuxt-list-db.firebaseapp.com",
    projectId: "nuxt-list-db",
    storageBucket: "nuxt-list-db.appspot.com",
    messagingSenderId: "959823263549",
    appId: "1:959823263549:web:6d74f39c2951dca98f7754"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db }