import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export default withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '15px',
        border: '1px solid black',
        padding: '28px 1em',
        marginTop: '0.5em',
        // marginLeft: '1em',
        fontSize: '1.5em',
        boxShadow: 'none',
        // '&:first-child': {
        //     marginLeft: '0',
        // }
    }
})(Card);