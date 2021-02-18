import React, { useState, useEffect } from 'react';
import {SvgIcon} from '@material-ui/core/';

import { GoogleAuthButton, FormH6_MarginBelow, SubmitButton } from '../styles';
import TextFieldGrouped from '../components/TextFieldGrouped';
import GoogleLogo from '../../../images/google_icon.svg';
import SignUp from '../components/SignUp';
import { useAuth } from '../../../contexts/AuthContext';
import { NO_ERROR } from '../../../EnumsAndConstants';

export default function SignUpPage1({ open, handleClose, handleLogInOpen, handleSignUpPage2Open }) {
  const [emailEntry, setEmailEntry] = useState('')
  const [passwordEntry, setPasswordEntry] = useState('') 
  const [textFieldErrorDetails, setTextFieldErrorDetails] = useState(null)
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const {signUp} = useAuth()

  useEffect(() => {
    if (emailEntry === '' || passwordEntry === '') {
      setSubmitIsDisabled(true)
    } else {
      setSubmitIsDisabled(false)
    }
  }, [emailEntry, passwordEntry])

  const resetStates = () => {
    setEmailEntry('')
    setPasswordEntry('')
    setTextFieldErrorDetails(null)
    setSubmitIsDisabled(true)
    setLoading(false)
  }

  const submitSignUpForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    const signUpError = await signUp(emailEntry, passwordEntry)

    if (signUpError === NO_ERROR) {
      resetStates()
      handleSignUpPage2Open()
    } else{
      setTextFieldErrorDetails(signUpError)
    }

    setLoading(false)
  }

  return (
    <SignUp 
      open={open} handleClose={handleClose} 
      handleLogInOpen={handleLogInOpen} resetStates={resetStates}
    >
      <GoogleAuthButton fullWidth>
        <SvgIcon component={GoogleLogo} viewBox="0 0 600 476.6" />
        Sign up with Google
      </GoogleAuthButton>
      <FormH6_MarginBelow>or</FormH6_MarginBelow>
      <TextFieldGrouped emailEntry={emailEntry} passwordEntry={passwordEntry}
        setEmailEntry={setEmailEntry} setPasswordEntry={setPasswordEntry}
        textFieldErrorDetails={textFieldErrorDetails}
      />
      <SubmitButton disabled={submitIsDisabled && !loading} fullWidth 
        onClick={submitSignUpForm}
      >
        Create account
      </SubmitButton>
    </SignUp>
  );
}
