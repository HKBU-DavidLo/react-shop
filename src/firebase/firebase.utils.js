import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAaJsYkBU74cN2OOe8u62gtnZ5j5ZoPzEo",
    authDomain: "dlcrwn-db.firebaseapp.com",
    projectId: "dlcrwn-db",
    storageBucket: "dlcrwn-db.appspot.com",
    messagingSenderId: "663485552414",
    appId: "1:663485552414:web:f94bd1dedc908763285b0f",
    measurementId: "G-1S13QF6Y9T"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
