import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAEyVXWnYNHeElJBxbRQPltnKYmJ5d3ZkQ',
  authDomain: 'todo-cdaa5.firebaseapp.com',
  projectId: 'todo-cdaa5',
  storageBucket: 'todo-cdaa5.appspot.com',
  messagingSenderId: '781851607229',
  appId: '1:781851607229:web:bc17e32ccf75740d72f7d4',
}

initializeApp(firebaseConfig)
export const db = getFirestore()

const colRef = collection(db, 'todos')
export const ref = colRef
export const timeStamp = serverTimestamp()
export const config = firebaseConfig
export const initialize = initializeApp
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
const analytics = getAnalytics()
export const authentication = getAuth()
