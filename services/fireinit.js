import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyDFbD2wySpnKElE2eeQP4W2wLn4jVOd6l8',
  authDomain: 'nandos-malaria.firebaseapp.com',
  databaseURL: 'https://nandos-malaria.firebaseio.com',
  projectId: 'nandos-malaria',
  storageBucket: 'nandos-malaria.appspot.com',
  messagingSenderId: '716141342744'
}

export const initFireBase = !firebase.apps.length ? firebase.initializeApp(config) : ''
export const FacebookProvider = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
