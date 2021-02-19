import React, { useEffect, useState } from 'react'
import { ErrorIsRegarding } from '../../../EnumsAndConstants';
import { AuthTextField } from '../styles';

const TextFieldGrouped = ({ 
    emailEntry, passwordEntry, 
    setEmailEntry, setPasswordEntry, 
    textFieldErrorDetails
}) => {
    const [isErrorInEmail, setIsErrorInEmail] = useState(false)
    const [isErrorInPassword, setIsErrorInPassword] = useState(false)
    const [helperTextEmailEntry, setHelperTextEmailEntry] = useState('')
    const [helperTextPasswordEntry, setHelperTextPasswordEntry] = useState('')

    useEffect(() => {
        if(textFieldErrorDetails === null || textFieldErrorDetails === undefined){
            // Reset all states
            setIsErrorInEmail(false)
            setIsErrorInPassword(false)
            setHelperTextEmailEntry('')
            setHelperTextPasswordEntry('')
        }
        else{
            if(textFieldErrorDetails.errorType === ErrorIsRegarding.Email){
                setIsErrorInEmail(true)
                setHelperTextEmailEntry(textFieldErrorDetails.helperText)
                setIsErrorInPassword(false)
                setHelperTextPasswordEntry('')
            }
            if(textFieldErrorDetails.errorType === ErrorIsRegarding.Password){
                setIsErrorInEmail(false)
                setHelperTextEmailEntry('')
                setIsErrorInPassword(true)
                setHelperTextPasswordEntry(textFieldErrorDetails.helperText)
            }
        }
    }, [textFieldErrorDetails])
    
    return (
        <>
            <AuthTextField 
                value={emailEntry} 
                onChange={(e)=>setEmailEntry(e.target.value)} 
                fullWidth placeholder="Email" 
                variant="outlined" size="small" error={isErrorInEmail}
                helperText={helperTextEmailEntry}
            />
            <AuthTextField
                value={passwordEntry} 
                onChange={(e)=>setPasswordEntry(e.target.value)} 
                type="password" fullWidth placeholder="Password" 
                variant="outlined" size="small" error={isErrorInPassword}
                helperText={helperTextPasswordEntry}
            />
        </>
    )
}

export default TextFieldGrouped
