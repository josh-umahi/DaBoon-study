import React, { useContext, createContext, useState, useEffect } from 'react'
import { NO_ERROR } from '../EnumsAndConstants';
import { auth, db } from '../firebase/config'
import { returnErrorDetails } from '../Functions/firebase';

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [currentUserData, setCurrentUserData] = useState()
    const [loading, setLoading] = useState(true)

    /*** These functions are all you need to change if you want to use another BAAS ***/
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsuscribe
    }, [])

    useEffect(() => {
        ( () => {
            if (currentUser){
                try {
                     db.collection('users').doc(currentUser.uid)
                    .get().then(snapshot => 
                        setCurrentUserData(snapshot.data())
                    ).catch(err => { throw err; })
                } catch (err) {
                    return returnErrorDetails((err.code))
                }
            }
        })()
    }, [currentUser])

    function signUp(email, password) {
        try {
                auth.createUserWithEmailAndPassword(email, password)
                .catch(err => { throw err; })
                return NO_ERROR
        } catch (err) {
            return returnErrorDetails((err.code))
        }
    }

    function finishSigningUp(uid, fullName, collegeMajor, collegeCourses) {
        try {
                currentUser.updateProfile({
                    displayName: fullName
                }).catch(err => { throw err; })
        } catch (err) {
            return err
        }

        try {
                db.collection('users').doc(uid).set({
                fullName,
                collegeMajor,
                collegeCourses
            })
        } catch (err) {
            return err
        }
        
        return NO_ERROR
    }

    function logIn(email, password) {
        try {
            auth.signInWithEmailAndPassword(email, password)
            .catch(err => { throw err; })
            return NO_ERROR
        } catch (err) {
            return returnErrorDetails((err.code))
        }
    }

    function signOut() {
        return auth.signOut()
    }
    /***   *********************************  **/

    const value = {
        currentUser, currentUserData,
        signUp, finishSigningUp,
        logIn, signOut
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}