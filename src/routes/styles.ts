import { createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import { Colors } from '../EnumsAndConstants';
import { flexDisplay } from '../styles/mixins';

export const ProfileContainer_div = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.LighterGrey};
    position: fixed;
    z-index: 10;
    ${flexDisplay('column', 'flex-start', 'center')}
    
    .MuiPaper-elevation4{
        box-shadow:  0px 0px 4px 2px rgba(61, 61, 61, 0.2);
        -moz-box-shadow: 0px 0px 4px 2px rgba(61, 61, 61, 0.2);
        -webkit-box-shadow: 0px 0px 4px 2px rgba(61, 61, 61, 0.2);
    }
`

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