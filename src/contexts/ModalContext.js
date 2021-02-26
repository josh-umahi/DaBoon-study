import React, { useContext, useState } from 'react'

const ModalContext = React.createContext()
export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [signUpPage1Open, setSignUpPage1Open] = useState(false);
    const [signUpPage2Open, setSignUpPage2Open] = useState(false);
    const [logInOpen, setLogInOpen] = useState(false);
    const [signUpNotCompleted, setSignUpNotCompleted] = useState(false);

    const resetModalStates = () =>{
        setSignUpPage1Open(false)
        setSignUpPage2Open(false)
        setLogInOpen(false)
        setSignUpNotCompleted(false)
    }

    const handleSignUpPage1Open = (e) => {
        e.preventDefault()
        setSignUpPage1Open(true);
        setSignUpPage2Open(false);
        setLogInOpen(false);
    };

    const handleSignUpPage1Close = (e) => {
        e.preventDefault()
        setSignUpPage1Open(false);
    };

    const handleSignUpPage2Open = () => {
        setSignUpPage2Open(true);
        setSignUpPage1Open(false);
        setLogInOpen(false);
    };

    const handleSignUpPage2Close = (e) => {
        e.preventDefault()
        setSignUpPage2Open(false);
    };

    const handleLogInOpen = (e) => {
        e.preventDefault()
        setLogInOpen(true);
        setSignUpPage1Open(false);
        setSignUpPage2Open(false);
    };

    const handleLogInClose = (e) => {
        e.preventDefault()
        setLogInOpen(false);
    };
    
    const value = {
        signUpPage1Open, setSignUpPage1Open,
        handleSignUpPage1Open, handleSignUpPage1Close,
        signUpPage2Open, setSignUpPage2Open,
        handleSignUpPage2Open, handleSignUpPage2Close,
        logInOpen, setLogInOpen,
        handleLogInOpen, handleLogInClose,
        signUpNotCompleted, setSignUpNotCompleted,
        resetModalStates
    }

    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}