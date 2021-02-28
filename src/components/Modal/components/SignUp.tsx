import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';

import useModalStyles, { FormH6 } from '../styles';
import { useModalContext } from '../../../contexts/ModalContext';
import { useAuthContext } from '../../../contexts/AuthContext';

interface SignUpProps {
  open: boolean, 
  handleClose: any,
  signUpNotCompleted?: boolean,
  resetStates: any
}

const SignUp: React.FC<SignUpProps> = ({ open, handleClose, signUpNotCompleted, resetStates, children }) => {
  const classes = useModalStyles()
  const history = useHistory()
  const {signOut} = useAuthContext()
  const {resetModalStates} = useModalContext()

  const returnToHomePage = e => {
    e.preventDefault()
    resetModalStates()
    signOut()
    history.push('/home')
  }

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={e => {
          if(!signUpNotCompleted){
            resetStates()
            signOut()
            handleClose(e)
          }
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.innerContainer}>
              {children}
              <FormH6>
                By signing up, you agree to our
                <a href="/"> Terms</a>,
                <a href="/"> Data Policy </a>and
                <a href="/"> Cookies Policy</a>.
              </FormH6>
              <br/>
              <FormH6>
                Go back to <button onClick={returnToHomePage}>home page</button>
              </FormH6> 
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SignUp