import React from 'react'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNbqPhnP6WWV3Nt0ZvgBtq2o4qWDrf9ew",
    authDomain: "messenger-clone-29cdf.firebaseapp.com",
    databaseURL: "https://messenger-clone-29cdf-default-rtdb.firebaseio.com",
    projectId: "messenger-clone-29cdf",
    storageBucket: "messenger-clone-29cdf.appspot.com",
    messagingSenderId: "740315676018",
    appId: "1:740315676018:web:8cb4c5f2dd070bb504b1eb",
    measurementId: "G-8GVQQ9KGDZ"
})

const db=firebaseApp.firestore();

export default db;
