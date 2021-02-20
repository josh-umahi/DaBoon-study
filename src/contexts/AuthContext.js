import React, { useContext, useState, useEffect } from 'react'
import { NO_ERROR } from '../EnumsAndConstants';
import { auth, db } from '../firebase/config'
import { getErrorDetails } from '../Functions/Firebase';

const AuthContext = React.createContext()
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserData, setCurrentUserData] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    /*** These functions are all you need to change if you want to use another BAAS ***/
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if(user){
                setCurrentUser(user)
                setIsAuthenticated(true)
                localStorage.setItem("isAuthenticated", "1")
            }else{
                localStorage.setItem("isAuthenticated", "0")
                setIsAuthenticated(false)
                setCurrentUser(null)
            }
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
            returnValue = getErrorDetails((err.code))
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
        let userData = null;
        if (currentUser !== null){
            await db.collection('users').doc(currentUser.uid)
            .get().then(snapshot => {
                userData = snapshot.data()
            }).catch(err => { 
                console.log(err); 
            })
        }

        return userData
    }

    async function setUserData() {
        const userData = await getUserData()
        setCurrentUserData(userData)
    }

    async function logIn(email, password) {
        let returnValue = NO_ERROR
        await auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
            returnValue = getErrorDetails((err.code))
        })
        return returnValue
    }

    function signOut() {
        return auth.signOut()
    }
    /***   *********************************  **/

    const value = {
        currentUser, currentUserData, isAuthenticated, 
        signUp, finishSigningUp,
        logIn, signOut
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}