import React from 'react';
import {Modal, Backdrop, Fade, SvgIcon} from '@material-ui/core/';

import useModalStyles, { GoogleAuth, Submit } from '../styles';
import TextFieldGrouped from '../components/TextFieldGrouped';
import GoogleLogo from '../../../images/google_icon.svg';

export default function LogIn({ open, handleClose, handleSignUpPage1Open }) {
  const classes = useModalStyles()

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.innerContainer}>
              <GoogleAuth fullWidth>
                <SvgIcon component={GoogleLogo} viewBox="0 0 600 476.6" />
                Log in with Google
              </GoogleAuth>
              <h6 className="marginBelowH6">or</h6>
              <TextFieldGrouped />
              <Submit fullWidth>Log in</Submit>
              <h6>
                <a href="#">Forgot Password?</a>
              </h6>
              <br/>
              <h6>
                Don’t have an account? <button onClick={handleSignUpPage1Open}>Sign up</button>
              </h6>
            </div>
          </div>
            
        </Fade>
      </Modal>
    </div>
  );
}
