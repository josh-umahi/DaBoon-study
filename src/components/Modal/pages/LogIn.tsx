import React, { useState, useEffect } from 'react';
import {Modal, Backdrop, Fade, SvgIcon} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';

import useModalStyles, { GoogleAuthButton, FormH6, FormH6_MarginBelow, SubmitButton } from '../styles';
import TextFieldGrouped from '../components/TextFieldGrouped';
import GoogleLogo from '../../../images/google_icon.svg';
import { NO_ERROR } from '../../../EnumsAndConstants';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useModalContext } from '../../../contexts/ModalContext';

export default function LogIn() {
  const classes = useModalStyles()
  const [emailEntry, setEmailEntry] = useState('')
  const [passwordEntry, setPasswordEntry] = useState('') 
  const [textFieldErrorDetails, setTextFieldErrorDetails] = useState(null)
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const {logIn} = useAuthContext()
  const {logInOpen, handleLogInClose, handleSignUpPage1Open} = useModalContext()
  const history = useHistory()

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

  const submitLogInForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    const logInError = await logIn(emailEntry, passwordEntry)

    if (logInError === NO_ERROR) {
      history.push('/')
    } else{
      setTextFieldErrorDetails(logInError)
    }

    setLoading(false)
  }

  return (
    <div>
      <Modal
        className={classes.modal}
        open={logInOpen}
        onClose={e => {
          resetStates()
          handleLogInClose(e)
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={logInOpen}>
          <form className={classes.paper}>
            <div className={classes.innerContainer}>
              <GoogleAuthButton fullWidth>
                <SvgIcon component={GoogleLogo} viewBox="0 0 600 476.6" />
                Log in with Google
              </GoogleAuthButton>
              <FormH6_MarginBelow>or</FormH6_MarginBelow>
              <TextFieldGrouped emailEntry={emailEntry} passwordEntry={passwordEntry}
                setEmailEntry={setEmailEntry} setPasswordEntry={setPasswordEntry}
                textFieldErrorDetails={textFieldErrorDetails}
              />
              <SubmitButton disabled={submitIsDisabled && !loading} fullWidth 
                onClick={submitLogInForm}
              >
                Log in
              </SubmitButton>
              <FormH6>
                <a href="/">Forgot Password?</a>
              </FormH6>
              <br/>
              <FormH6>
                Don’t have an account? <button onClick={handleSignUpPage1Open}>Sign up</button>
              </FormH6>
            </div>
          </form>
            
        </Fade>
      </Modal>
    </div>
  );
}
