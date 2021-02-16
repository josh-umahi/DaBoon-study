import React from 'react'
import { AppBar } from '@material-ui/core';
import Logo from './Logo';
import { LogInButton, SignUpButton, SignOutButton, HeaderToolbar } from './styles';

interface HeaderProps {
    handleSignUpPage1Open?: any;
    handleLogInOpen?: any;
    handleLogOut?: any;
}

const Header: React.FC<HeaderProps> = ({ handleSignUpPage1Open, handleLogInOpen, handleLogOut }) => {
    return (
        <AppBar position="fixed">
            <HeaderToolbar>
                <Logo />
                {
                    // Using an Immediately Invoked Function Exxpression
                    (() => {
                        switch (handleLogInOpen) {
                            case undefined:   return <SignOutButton onClick={handleLogOut}>Sign out</SignOutButton>;
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
