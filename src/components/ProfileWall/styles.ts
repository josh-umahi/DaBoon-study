import { Card } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../EnumsAndConstants';

import { flexDisplay, fontSettings, primaryFont } from '../../styles/mixins';

export const DeleteButton = styled.button`
    padding: 0;
    margin-left: 1.5em;
    background: none;

    .MuiSvgIcon-root {
        font-size: 2rem;
    }
`

export const DisplayPhoto_div = styled.div`
    margin-top: 100px;
    ${flexDisplay('column', 'flex-start', 'center')}

    .innerPicture{
        overflow: hidden;
        background-color: white;    
        ${flexDisplay('row', 'center', 'center')}
        width: 7em;
        height: 7em;
        border-radius: 50%;
        border: 1px solid black;
    }

    & img{
        height: 100%;
        width: auto;
    }

    & svg{
        color: black;
        font-size: 5rem;
    }

    & input{
        display: none;
    }

    & label{
        ${fontSettings(primaryFont, '14px', 400, 'center', Colors.Primary)}
        margin: 1em;
        background: none;
    }

    & label:hover{
        cursor: pointer;
    }
`

export const EducationInfo_div = styled.div`
    ${flexDisplay('column', 'center', 'center')}

    & h1{
        ${fontSettings(primaryFont, '1.5rem', 400, 'center', 'black')}
        line-height: 140%;
        margin: .75em auto .25em;
    }

    .secondaryColor{
        color: ${Colors.Secondary};
    }

    .courseCards_div{
        width: 80%;
        ${flexDisplay('row', 'center', 'center')}
        flex-wrap: wrap;
    }

    .courseCards_div label{
        ${fontSettings(primaryFont, '1.5rem', 400, 'center', 'black')}
    }

    .addNewCourse{
        ${fontSettings(primaryFont, '14px', 400, 'center', Colors.Primary)}
        background-color: rgba(209, 206, 253, 0.301);
        border: 1px solid ${Colors.Primary};
        padding: 0.5em 1em;
        margin: 2em 0 0;
    }

    .dropDownCourses{
        display: none;
        transition: all 250ms ease 100ms;
        background-color: white;
        margin-top: 0.35em;
        -webkit-box-shadow: 10px 10px 14px -6px rgba(0,0,0,0.2);
        -moz-box-shadow: 10px 10px 14px -6px rgba(0,0,0,0.2);
        box-shadow: 10px 10px 14px -6px rgba(0,0,0,0.2);

        & button{
            display: block;
            ${fontSettings(primaryFont, '1rem', 400, 'left', 'black')}
            background-color: white;
            width: 200px;
            padding: 10px 1em;
        }

        & button:hover{
            background-color: ${Colors.LightGrey};
        }
    }
`

export const NewCourseCard = styled(Card)`
    && {
        ${flexDisplay('row', 'center', 'center')}
        border-radius: 15px;
        border: 1px solid black;
        width: 213px;
        padding: 28px 0;
        margin-top: 0.5em;
        margin-right: 1em;
        font-size: 1.5em;
        box-shadow: none;
        &:last-child{
            margin-right: 0;
        }
    }
`;