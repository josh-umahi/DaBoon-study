import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import SignUpPage1 from '../../components/Modal/pages/SignUpPage1';
import SignUpPage2 from '../../components/Modal/pages/SignUpPage2';
import LogIn from '../../components/Modal/pages/LogIn';
import Theme from '../styles';

const Home = () => {
    
    return (
        <ThemeProvider theme={Theme}>
            <Header />
            <SignUpPage1 />
            <SignUpPage2 />
            <LogIn />
        </ThemeProvider>
    )
}

export default Home
