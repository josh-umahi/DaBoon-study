import { Button, Toolbar } from '@material-ui/core';
import styled, { css } from 'styled-components'

import { Colors } from '../../styles/variables';

export const LogoText = styled.h1`
    font-family: 'Niconne', cursive;
    font-size: 2.6rem;
    color: ${Colors.Primary};

    span{
        font-family: 'Bree Serif', serif;
        padding-left: 0.075em;
        font-size: 1.75rem;
        color: ${Colors.Secondary};
    }
`;

export const HeaderToolbar = styled(Toolbar)`
    && {
        background-color: white;
        display: flex;
        justify-content: space-between;
    }
`;

const AuthButton = css`
    border-radius: 8px;
    border: 0;
    padding: 0.5em 1.5em;
`;

export const LogInButton = styled(Button)`
    && {
        ${AuthButton}
        padding: 0.5em 1em;
        margin-right: 0.5em;
        color: black;
        &:hover {
            background-color: rgba(0,0,0,0);
        }
    }
`;

export const SignUpButton = styled(Button)`
    && {
        ${AuthButton}
        background-color: ${Colors.Primary};
        color: white;
        transition: transform 200ms;
        &:hover {
            background-color: ${Colors.Primary};
            transform: translateY(-2px);
        }
    }
`;

export const SignOutButton = styled(Button)`
    && {
        ${AuthButton}
        background-color: ${Colors.Secondary};
        color: white;
        &:hover {
            background-color: ${Colors.Secondary};
        }
    }
`;