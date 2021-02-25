import React, { useState, useEffect } from 'react';
import {SvgIcon} from '@material-ui/core/';

import { GoogleAuthButton, FormH6_MarginBelow, SubmitButton } from '../styles';
import TextFieldGrouped from '../components/TextFieldGrouped';
import GoogleLogo from '../../../images/google_icon.svg';
import SignUp from '../components/SignUp';
import { useAuthContext } from '../../../contexts/AuthContext';
import { NO_ERROR } from '../../../EnumsAndConstants';
import { useModalContext } from '../../../contexts/ModalContext';

export default function SignUpPage1() {
  const [emailEntry, setEmailEntry] = useState('')
  const [passwordEntry, setPasswordEntry] = useState('') 
  const [textFieldErrorDetails, setTextFieldErrorDetails] = useState(null)
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const {signUp} = useAuthContext()
  const {signUpPage1Open, handleSignUpPage1Close, handleSignUpPage2Open} = useModalContext()

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
      open={signUpPage1Open} handleClose={handleSignUpPage1Close}
      resetStates={resetStates}
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
