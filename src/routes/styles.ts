import { createMuiTheme } from '@material-ui/core/styles';
import { Colors } from '../EnumsAndConstants';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: Colors.Primary
        },
        secondary: {
            main: Colors.Secondary
        },
        error: {
            main: Colors.Secondary
        },
        action: {
            disabled: Colors.White,
        }
    },
    typography: {
        fontFamily: 'Work Sans, sans-serif',
        fontSize: 14
    }
});

export default theme 