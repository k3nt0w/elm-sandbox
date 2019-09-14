import firebase from 'firebase/app'
import 'firebase/firestore'
import clientCredential from './credentials/client'

const app = !firebase.apps.length
  ? firebase.initializeApp(clientCredential)
  : firebase.app()

const db = app.firestore()

export { db }
