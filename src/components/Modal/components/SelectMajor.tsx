import React from 'react'
import { MenuItem } from '@material-ui/core';

import { MajorSelect_OuterDiv, MajorSelect } from '../styles';
import { textFieldFontSize } from '../../../styles/variables';
import { displayCollegeMajorOptions } from '../../../Functions/UI_components';

const SelectMajor = ({ collegeMajor, setCollegeMajor }) => {
    const handleChange = (e) => {
        setCollegeMajor(e.target.value);
    };

    return (
        <MajorSelect_OuterDiv>
            <MajorSelect
                value={collegeMajor}
                onChange={handleChange} displayEmpty
                fullWidth 
                variant="outlined"
                inputProps={{ 'aria-label': 'Without label', 'fontSize': {textFieldFontSize} }}
            >
                <MenuItem value="">
                    <em>What is your college major?</em>
                </MenuItem>
                {displayCollegeMajorOptions()}
            </MajorSelect>
        </MajorSelect_OuterDiv>
    )
}

export default SelectMajor
