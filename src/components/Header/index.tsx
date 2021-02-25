import React from 'react'
import { AppBar } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import { LogoText, LogInButton, SignUpButton, SignOutButton, HeaderToolbar } from './styles';
import { useModalContext } from '../../contexts/ModalContext';
import { useAuthContext } from '../../contexts/AuthContext';

interface HeaderProps {
    showSignOut?: boolean
}

const Header: React.FC<HeaderProps> = ({showSignOut}) => {
    const {handleSignUpPage1Open, handleLogInOpen} = useModalContext()
    const history = useHistory()
    const {signOut} = useAuthContext()

    const handleLogOut = () => {
        try {
            signOut()
            history.push('/home')
        } catch (error) {
            console.log("Failed to log out");
        }
    }

    return (
        <AppBar position="fixed">
            <HeaderToolbar>
            <LogoText>DaBoon<span>study</span></LogoText>
                {
                    (() => {
                        switch (showSignOut) {
                            case true: return <SignOutButton onClick={handleLogOut}>Sign out</SignOutButton>;
                            default: return (
                                <div>
                                    <LogInButton onClick={handleLogInOpen} disableRipple>Log in</LogInButton>
                                    <SignUpButton onClick={handleSignUpPage1Open}>Sign up</SignUpButton>
                                </div>
                            );
                        }
                    })()
                }
            </HeaderToolbar>
        </AppBar>
    )
}

export default Header
