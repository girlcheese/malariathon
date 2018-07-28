import firebase from 'firebase'

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID
}

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get runs () {
    return this.store().collection('runs')
  }
}

export default new Firebase()
