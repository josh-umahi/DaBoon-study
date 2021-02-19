import React, { useContext, createContext, useState, useEffect } from 'react'
import { NO_ERROR } from '../EnumsAndConstants';
import { auth, db } from '../firebase/config'
import { returnErrorDetails } from '../Functions/firebase';

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserData, setCurrentUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    /*** These functions are all you need to change if you want to use another BAAS ***/
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            user ? setCurrentUser(user) : setCurrentUser(null)
        })
        return unsuscribe
    }, [])
    
    useEffect(() => {
        setUserData()
    }, [currentUser])

    async function signUp(email, password) {
        let returnValue = NO_ERROR
        await auth.createUserWithEmailAndPassword(email, password)
        .catch(err => {
            returnValue = returnErrorDetails((err.code))
        })
        return returnValue
    }

    function finishSigningUp(uid, fullName, collegeMajor, collegeCourses) {
        let returnValue = NO_ERROR

        currentUser.updateProfile({
            displayName: fullName
        }).catch(err => { 
            returnValue = err + '\n\n'; 
        })

        db.collection('users').doc(uid).set({
            fullName,
            collegeMajor,
            collegeCourses
        }).catch(err => { 
            returnValue += err
        })
        
        setUserData()
        return returnValue
    }

    async function getUserData() {
        let returnValue = null;
        if (currentUser !== null){
            await db.collection('users').doc(currentUser.uid)
            .get().then(snapshot => {
                returnValue = snapshot.data()
            }).catch(err => { 
                console.log(err); 
            })
        }

        return returnValue
    }

    async function setUserData() {
        const userData = await getUserData()
        console.log(userData)
        setCurrentUserData(userData)
    }

    async function logIn(email, password) {
        let returnValue = NO_ERROR
        await auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
            returnValue = returnErrorDetails((err.code))
        })
        return returnValue
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