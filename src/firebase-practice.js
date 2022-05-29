// import './index.css'
// import React, { useState, useEffect } from 'react'
// import { initializeApp } from 'firebase/app'
// import {
//   getFirestore,
//   collection,
//   getDoc,
//   addDoc,
//   deleteDoc,
//   doc,
//   onSnapshot,
//   query,
//   where,
//   orderBy,
//   serverTimestamp,
//   getDocs,
//   updateDoc,
// } from 'firebase/firestore'

// function Apps() {
//   const firebaseConfig = {
//     apiKey: 'AIzaSyAEyVXWnYNHeElJBxbRQPltnKYmJ5d3ZkQ',
//     authDomain: 'todo-cdaa5.firebaseapp.com',
//     projectId: 'todo-cdaa5',
//     storageBucket: 'todo-cdaa5.appspot.com',
//     messagingSenderId: '781851607229',
//     appId: '1:781851607229:web:bc17e32ccf75740d72f7d4',
//   }

//   // init firebase app
//   initializeApp(firebaseConfig)

//   // init service
//   const db = getFirestore()

//   // Collection ref
//   const colRef = collection(db, 'users')

//   // queries
//   const q = query(colRef, orderBy('createdAt'))

//   // Real time Collection Data
//   onSnapshot(q, (snapshot) => {
//     let list = []
//     snapshot.docs.forEach((doc) => {
//       list.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(list)
//   })

//   //get collection data
//   // getDocs(colRef)
//   //   .then((snapshot) => {
//   //     let users = []
//   //     snapshot.docs.forEach((doc) => {
//   //       users.push({ ...doc.data(), id: doc.id })
//   //     })
//   //     console.log(users)
//   //   })
//   //   .catch((err) => console.log(err.message))
//   // What this does is that it goes into the database and brings out all the elements inside the specified collection

//   // Instantiation
//   const [userName, setUserName] = useState('')
//   const [email, setEmail] = useState('')
//   const [id, setId] = useState('')

//   // adding Documents
//   const handleAdd = (e) => {
//     e.preventDefault()
//     addDoc(colRef, {
//       email: email,
//       userName: userName,
//       createdAt: serverTimestamp(),
//     })
//   }

//   // delete Documents
//   const handleDelete = (e) => {
//     e.preventDefault()
//     const docRef = doc(db, 'users', id)
//     deleteDoc(docRef)
//   }

//   // get a single document
//   const docRef = doc(db, 'users', 'RJ2abPPJHmnMsIwZS4zn')
//   //  getDocs(docRef).then((doc) => {
//   //     console.log(doc.data(), doc.id)
//   //   })

//   onSnapshot(docRef, (doc) => {
//     console.log(doc.data(), doc.id)
//   })

//   // update a document
//   const handleUpdate = (e) => {
//     e.preventDefault()

//     const docRef = doc(db, 'users', id)
//     updateDoc(docRef, {
//       userName: 'updated name',
//     })
//   }

//   return (
//     <div className="h-full ">
//       <h1>Getting started with firebase 9</h1>
//       <h2>Firebase Firestore</h2>
//       <form className="add" onSubmit={handleAdd}>
//         <label htmlFor="title">Username:</label>
//         <input
//           onChange={(e) => {
//             setUserName(e.target.value)
//           }}
//           type="text"
//           name="username"
//           required
//         />
//         <label htmlFor="email">Email:</label>

//         <input
//           type="text"
//           onChange={(e) => {
//             setEmail(e.target.value)
//           }}
//           name="email"
//           required
//         />

//         <button>Add a new User</button>
//       </form>
//       <form className="delete" onSubmit={handleDelete}>
//         <label htmlFor="id">User id:</label>
//         <input
//           type="text"
//           name="id"
//           onChange={(e) => {
//             setId(e.target.value)
//           }}
//           required
//         />

//         <button>Delete a new User</button>
//       </form>
//       <form className="update" onSubmit={handleUpdate}>
//         <label htmlFor="id">User id:</label>
//         <input
//           type="text"
//           name="id"
//           onChange={(e) => {
//             setId(e.target.value)
//           }}
//           required
//         />

//         <button>Update a new User</button>
//       </form>
//     </div>
//   )
// }

// export default Apps
