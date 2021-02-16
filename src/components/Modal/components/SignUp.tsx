import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core/';

import useModalStyles from '../styles';

export default function SignUp({ open, handleClose, handleLogInOpen, children, resetStates }) {
  const classes = useModalStyles()

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
              {children}
              <h6>
                By signing up, you agree to our
                <a href="/"> Terms</a>,
                <a href="/"> Data Policy </a>and
                <a href="/"> Cookies Policy</a>.
              </h6>
              <br/>
              <h6>
                Already have an account? <button onClick={handleLogInOpen}>Log in</button>
              </h6>
            </div>
          </form>
            
        </Fade>
      </Modal>
    </div>
  );
}
