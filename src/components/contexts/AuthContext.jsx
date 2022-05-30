import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

// We want to be able to access our user anywhere in the app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('')
  const [loading, setLoading] = useState(true)
const provider = new GoogleAuthProvider()


  const signUp = (email, password) => {
    // This returns a promise
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = (email, password) => {
    return signOut(auth, email, password)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  const google = () => {
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    //Make onAuthStateChanged run only once
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    google,
  }
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
