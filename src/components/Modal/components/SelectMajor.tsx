import React from 'react'
import { MenuItem } from '@material-ui/core';

import { MajorSelect } from '../styles';
import { textFieldFontSize } from '../../../EnumsAndConstants';
import { displayCollegeMajorOptions } from '../../../Functions';

const SelectMajor = () => {
    const [major, setMajor] = React.useState('');

    const handleChange = (event) => {
        setMajor(event.target.value);
    };

    return (
        <div className='majorSelect'>
            <MajorSelect
                value={major}
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
        </div>
    )
}

export default SelectMajor
