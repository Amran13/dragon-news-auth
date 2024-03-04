import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Observing : ', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    } ,[])
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }

     
    const logInUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        createUser,
        logInUser,
        logOutUser,
        logInUserWithGoogle
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;