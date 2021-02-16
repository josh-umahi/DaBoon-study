import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export default withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '15px',
        border: '1px solid black',
        width: '213px',
        padding: '28px 0',
        marginTop: '0.5em',
        marginRight: '1em',
        fontSize: '1.5em',
        boxShadow: 'none',
        '&:last-child': {
            marginRight: '0',
        }
    }
})(Card);