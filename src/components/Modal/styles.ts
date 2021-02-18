import { makeStyles } from '@material-ui/core/styles';
import { Button, Select } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import styled, { css } from 'styled-components';

import { primaryFont, fontSettings, flexDisplay } from '../../styles/mixins';
import { Colors, textFieldFontSize } from '../../styles/variables';

const shared = {
    border: "2.5px solid "+ Colors.Black,
    borderRadius: '8px',
    lineHeight: '100%',
    padding: '0 1em',
    height: '48px',
    marginBottom: '1.2em'
}

const shared_styles = css`
    border: ${shared.border};
    border-radius: ${shared.borderRadius};
    line-height: ${shared.lineHeight};
    padding: ${shared.padding};
    height: ${shared.height};
    margin-bottom: ${shared.marginBottom};
`;

export const LabelHeader = styled.label`
    ${fontSettings(primaryFont, '1rem', 400, 'center', 'black')}
    margin: 1em 0;
`;

export const LabelHeader_Small = styled(LabelHeader)`
    font-size: 0.9rem;
    margin-top: 1.5em;
    margin-bottom: 0em;
`

export const FormH6 = styled.h6`
    width: 100%;
    color: $grey;
    text-align: center;
    font-size: 0.9rem;
    line-height: 145%;

    a, button {
        color: ${Colors.Primary};
    }

    button {
        background: none;
    }
`;

export const FormH6_MarginBelow = styled(FormH6)`
    margin-bottom: 1.25em;
`;

export const MajorSelect_OuterDiv = styled.div`
    width: 100%;
    em{
        color: #9F9F9F;
    }
    .MuiOutlinedInput-root{
        border-radius: 8px;
        height: 48px;
    }
    .MuiSelect-icon{
        color: black;
    }
    .MuiOutlinedInput-notchedOutline:focus,
    .MuiOutlinedInput-notchedOutline{
        border: 2.5px solid black;
        border-color: black;
    }
    .MuiSelect-select:focus {
        background-color: white;
    }
`;

export const MajorSelect = styled(Select)`
    && {
        background-color: white;
        color: black;
        border-radius: 8px;
        height: ${shared.height};
        display: flex;
        align-items: 'center';
        .MuiSelect-icon {
            color: black;
        }
    }
`;

export const AuthTextField = styled(TextField)`
    && {
        margin-bottom: ${shared.marginBottom};
        & fieldset {
            border: ${shared.border};
            border-radius: ${shared.borderRadius};
        }
        & p {
            margin-left: 0;
            margin-right: 0;
            font-size: 0.85rem;
            padding: 0 0.5em;
        }
        & input {
            height: ${shared.height};
            padding: ${shared.padding};
            font-size: ${textFieldFontSize};
            &::placeholder {
                color: rgba(0,0,0, 0.9);
            }
        }
        & label {
            font-size: ${textFieldFontSize};
        }
    }
`;

export const GoogleAuthButton = styled(Button)`
    && {
        ${shared_styles}
        background-color: white;
        color: black;
        &:hover {
            background-color: white;
        };
        & svg {
            font-size: 1.3rem;
            margin-right: 0.25em;
        }
    }
`;

export const SubmitButton = styled(Button)`
    && {
        ${shared_styles}
        background-color: black;
        color: white;
        &:hover {
            background-color: black;
        }
    }
`;

export const CourseButtons_Div = styled.div`
    ${flexDisplay('row', 'space-between', 'center')}
    margin: 0.25em 0 1.25em;
    width: 100%;
    flex-wrap: wrap;

    & button{
        ${fontSettings(primaryFont, '14px', 400, 'center', 'rgba(0,0,0,0.6)')}
        width: 30%;
        border: 2.5px solid #DDDDDD;
        border-radius: 8px;
        height: 48px;
        line-height: 100%;
        margin-top: 0.5em;
        background-color: ${Colors.LightGrey};
        transition: all 250ms;
    }

    & button:hover{
        color: ${Colors.Primary};
        border-color: ${Colors.Primary};
        background-color: white;
    }

    & button:first-child{
        margin-left: 0;
    }
`;

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
