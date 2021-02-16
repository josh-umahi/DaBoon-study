import React, { useState, useEffect } from 'react';
import {Modal, Backdrop, Fade, SvgIcon} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';

import useModalStyles, { GoogleAuth, Submit } from '../styles';
import TextFieldGrouped from '../components/TextFieldGrouped';
import GoogleLogo from '../../../images/google_icon.svg';
import { NO_ERROR } from '../../../EnumsAndConstants';
import { useAuth } from '../../../contexts/AuthContext';

export default function LogIn({ open, handleClose, handleSignUpPage1Open }) {
  const classes = useModalStyles()
  const [emailEntry, setEmailEntry] = useState('')
  const [passwordEntry, setPasswordEntry] = useState('') 
  const [textFieldErrorDetails, setTextFieldErrorDetails] = useState(null)
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const {signUp} = useAuth()
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

    const signUpError = await signUp(emailEntry, passwordEntry)

    if (signUpError === NO_ERROR) {
      resetStates()
      history.push('/')
    } else{
      setTextFieldErrorDetails(signUpError)
    }

    setLoading(false)
  }

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={e => {
          resetStates()
          handleClose(e)
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form className={classes.paper}>
            <div className={classes.innerContainer}>
              <GoogleAuth fullWidth>
                <SvgIcon component={GoogleLogo} viewBox="0 0 600 476.6" />
                Log in with Google
              </GoogleAuth>
              <h6 className="marginBelowH6">or</h6>
              <TextFieldGrouped emailEntry={emailEntry} passwordEntry={passwordEntry}
                setEmailEntry={setEmailEntry} setPasswordEntry={setPasswordEntry}
                textFieldErrorDetails={textFieldErrorDetails}
              />
              <Submit disabled={submitIsDisabled && !loading} fullWidth 
                onClick={submitLogInForm}
              >
                Log in
              </Submit>
              <h6>
                <a href="/">Forgot Password?</a>
              </h6>
              <br/>
              <h6>
                Don’t have an account? <button onClick={handleSignUpPage1Open}>Sign up</button>
              </h6>
            </div>
          </form>
            
        </Fade>
      </Modal>
    </div>
  );
}
