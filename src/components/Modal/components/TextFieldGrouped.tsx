import React from 'react'
import { AuthTextField } from '../styles';

const TextFieldGrouped = () => {
    return (
        <>
            <AuthTextField fullWidth placeholder="Email" variant="outlined" size="small"/>
            <AuthTextField fullWidth placeholder="Password" variant="outlined" size="small"/>
        </>
    )
}

export default TextFieldGrouped
