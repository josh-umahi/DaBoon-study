import { Button, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Colors } from '../../EnumsAndConstants';

export const HeaderToolbar = withStyles({
    root: {
        backgroundColor: Colors.White,
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: 'none !important' 
    }
})(Toolbar);

export const Auth_Button = withStyles({
    root: {
        borderRadius: '8px',
        border: 0,
        padding: '0.5em 1.5em',
    }
})(Button);

export const LogInButton = withStyles({
    root: {
        padding: '0.5em 1em',
        marginRight: '.5em',
        color: 'black',
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,0)',
        }
    }
})(Auth_Button);

export const SignUpButton = withStyles({
    root: {
        backgroundColor: Colors.Primary,
        color: 'white',
        transition: 'transform 200ms',
        "&:hover": {
            backgroundColor: Colors.Primary,
            transform: "translateY(-2px)"
        }
    }
})(Auth_Button);

export const SignOutButton = withStyles({
    root: {
        backgroundColor: Colors.Secondary,
        color: 'white',
        "&:hover": {
            backgroundColor: Colors.Secondary,
        }
    }
})(Auth_Button);