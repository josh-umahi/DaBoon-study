import React, { useContext, useState, useEffect } from 'react'
import { NO_ERROR } from '../EnumsAndConstants';
import { auth, db, firebaseStorage } from '../firebase/config'
import { getErrorDetails } from '../Functions/Firebase';
import { useModalContext } from './ModalContext';

const AuthContext = React.createContext()
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserData, setCurrentUserData] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {setSignUpNotCompleted} = useModalContext()
    const {setLoadingDisplayPicture} = useModalContext()

    /*** These functions are all you need to change if you want to use another BAAS ***/
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if(user){
                setCurrentUser(user)
                setIsAuthenticated(true)
                localStorage.setItem("isAuthenticated", "1")

                db.collection('users').doc(user.uid)
                .get().then(snapshot => {
                    setSignUpNotCompleted(snapshot.data().signUpNotCompleted)
                }).catch(err => { 
                    console.log(err + '\n' + 'Not a problem if this is happening after the first page of Sign up'); 
                })
            }else{
                localStorage.setItem("isAuthenticated", "0")
                setIsAuthenticated(false)
                setCurrentUser(null)
            }
        })
        return unsuscribe
    }, [])
    
    useEffect(() => {
        setUserData() //This already has a currentUser error handler in getUserData()
    }, [currentUser])

    async function signUp(email, password) {
        let returnValue = NO_ERROR
        await auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            db.collection('users').doc(userCredentials.user.uid).set({
                signUpNotCompleted: true,
            }).catch(err => { 
                console.log(err);
            })
        })
        .catch(err => {
            returnValue = getErrorDetails((err.code))
        })
        return returnValue
    }

    function finishSigningUp(uid, fullName, collegeMajor, collegeCourses) {
        let returnValue = NO_ERROR

        db.collection('users').doc(uid).set({
            fullName,
            collegeMajor,
            collegeCourses,
            profilePicURL: '',
            signUpNotCompleted: false,
        }).catch(err => { 
            returnValue = err
        })
        
        setUserData()
        return returnValue
    }

    async function logIn(email, password) {
        let returnValue = NO_ERROR
        await auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
            returnValue = getErrorDetails((err.code))
        })
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

    async function uploadProfilePicture(file) {
        await firebaseStorage.ref('users/' + currentUser.uid + '/profileImg.jpg')
        .put(file).catch(err => { 
            console.log(err);
        })
    }

    async function updatePhotoURL() {
        firebaseStorage.ref('users/' + currentUser.uid + '/profileImg.jpg')
        .getDownloadURL().then(profilePicURL => {
            db.collection('users').doc(currentUser.uid).update({
                profilePicURL
            }).catch(err => { 
                console.log(err);
            })
            setCurrentUserData({...currentUserData, profilePicURL})
        })
        .catch(err => { 
            console.log(err);
        })
    }

    async function changeProfilePicture(file) {
        setLoadingDisplayPicture(true)
        await uploadProfilePicture(file)
        await updatePhotoURL()
    }

    async function removeProfilePicture(e) {
        e.preventDefault()
        db.collection('users').doc(currentUser.uid).update({
            profilePicURL: ''
        }).catch(err => { 
            console.log(err);
        })
        setCurrentUserData({...currentUserData, profilePicURL: ''})

        firebaseStorage.ref('users/' + currentUser.uid + '/profileImg.jpg')
        .delete().then(() => {
            // console.log("Successfully deleted image from storage")
        }).catch((err) => {
            console.log(err)
        });
    }

    async function addNewCourse(e, courseToAdd) {
        e.preventDefault()
        if (currentUser !== null){
            const newCollegeCourses = [...currentUserData.collegeCourses, courseToAdd]
            db.collection('users').doc(currentUser.uid).update({
                collegeCourses: newCollegeCourses
            }).catch(err => { 
                console.log(err);
            })
            setCurrentUserData({...currentUserData, collegeCourses: newCollegeCourses})
        }
    }

    async function deleteNewCourse(e, courseToDelete) {
        e.preventDefault()
        if (currentUser !== null){
            const newCollegeCourses = currentUserData.collegeCourses.filter(courseName => {
                return courseName !== courseToDelete
            })
            db.collection('users').doc(currentUser.uid).update({
                collegeCourses: newCollegeCourses
            }).catch(err => { 
                console.log(err);
            })
            setCurrentUserData({...currentUserData, collegeCourses: newCollegeCourses})
        }
    }

    function signOut() {
        return auth.signOut()
    }
    /***   *********************************  **/

    const value = {
        currentUser, currentUserData, isAuthenticated, 
        signUp, finishSigningUp, logIn, signOut, 
        changeProfilePicture, removeProfilePicture,
        addNewCourse, deleteNewCourse
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}