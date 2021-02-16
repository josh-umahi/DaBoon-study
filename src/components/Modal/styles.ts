import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Colors, textFieldFontSize } from '../../EnumsAndConstants';
import { Button, Select } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const shared = {
    border: "2.5px solid "+ Colors.Black,
    borderRadius: '8px',
    lineHeight: '100%',
    padding: '0 1em',
    height: '48px',
    marginBottom: '1.2em'
}

export const MajorSelect = withStyles({
    root: {
        backgroundColor: Colors.White,
        color: Colors.Black,
        borderRadius: '8px',
        height: shared.height,
        padding: shared.padding,
        display: 'flex',
        alignItems: 'center',
        '& .MuiSelect-icon': {
            color: Colors.Black,
        },
    }
})(Select);

export const AuthTextField = withStyles({
    root: {
        marginBottom: shared.marginBottom,
        '& fieldset': {
            border: shared.border,
            borderRadius: shared.borderRadius,
        },
        '& p': {
            marginLeft: 0,
            marginRight: 0,
            fontSize: '0.85rem',
            padding: '0 0.5em',
        },
        '& input': {
            height: shared.height,
            padding: shared.padding,
            fontSize: textFieldFontSize,
            '&::placeholder': {
                color: 'rgba(0,0,0, 0.9)'
            }
        },
        '& label': {
            fontSize: textFieldFontSize,
        },
    },
})(TextField);

export const GoogleAuth = withStyles({
    root: {
        ...shared,
        backgroundColor: Colors.White,
        color: Colors.Black,
        "&:hover": {
            backgroundColor: Colors.White,
        },
        '& svg': {
            fontSize: "1.3rem",
            marginRight: '.25em'
        },
    }
})(Button);

export const Submit = withStyles({
    root: {
        ...shared,
        backgroundColor: Colors.Black,
        color: Colors.White,
        "&:hover": {
            backgroundColor: Colors.Black,
        },
    }
})(Button);

const useModalStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: Colors.White,
        padding: '1.25em',
        outline: 0,
    },
    innerContainer: {
        width: '21em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default useModalStyles
