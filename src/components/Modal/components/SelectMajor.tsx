import React from 'react'
import { MenuItem } from '@material-ui/core';

import { MajorSelect_outerDiv, MajorSelect } from '../styles';
import { textFieldFontSize } from '../../../EnumsAndConstants';
import { displayCollegeMajorOptions } from '../../../Functions';

const SelectMajor = ({ collegeMajor, setCollegeMajor }) => {
    const handleChange = (e) => {
        setCollegeMajor(e.target.value);
    };

    return (
        <MajorSelect_outerDiv>
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
        </MajorSelect_outerDiv>
    )
}

export default SelectMajor
