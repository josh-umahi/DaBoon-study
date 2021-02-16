import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import SignUpPage1 from '../../components/Modal/pages/SignUpPage1';
import SignUpPage2 from '../../components/Modal/pages/SignUpPage2';
import LogIn from '../../components/Modal/pages/LogIn';
import Theme from '../styles';

const Home = () => {
    const [signUpPage1Open, setSignUpPage1Open] = useState(false);
    const [signUpPage2Open, setSignUpPage2Open] = useState(false);
    const [logInOpen, setLogInOpen] = useState(false);

    const handleSignUpPage1Open = (e) => {
        e.preventDefault()
        setSignUpPage1Open(true);
        setSignUpPage2Open(false);
        setLogInOpen(false);
    };

    const handleSignUpClose = (e) => {
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
    
    return (
        <ThemeProvider theme={Theme}>
            <Header handleLogInOpen={handleLogInOpen} handleSignUpPage1Open={handleSignUpPage1Open}/>
            <SignUpPage1 
                open={signUpPage1Open} handleClose={handleSignUpClose} 
                handleLogInOpen={handleLogInOpen} handleSignUpPage2Open={handleSignUpPage2Open}
            />
            <SignUpPage2 
                open={signUpPage2Open} 
                handleClose={handleSignUpPage2Close}
                handleLogInOpen={handleLogInOpen} 
            />
            <LogIn open={logInOpen} handleClose={handleLogInClose} handleSignUpPage1Open={handleSignUpPage1Open} />
        </ThemeProvider>
    )
}

export default Home
