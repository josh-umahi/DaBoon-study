import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';

import useModalStyles, { FormH6 } from '../styles';
import { useModalContext } from '../../../contexts/ModalContext';

interface SignUpProps {
  open: boolean, 
  handleClose: any,
  isInProfilePage?: boolean,
  resetStates: any
}

const SignUp: React.FC<SignUpProps> = ({ open, handleClose, isInProfilePage, resetStates, children }) => {
  const classes = useModalStyles()
  const history = useHistory()
  const {handleLogInOpen} = useModalContext()

  const returnToHomePage = e => {
    e.preventDefault()
    history.push('/home')
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
              {children}
              <FormH6>
                By signing up, you agree to our
                <a href="/"> Terms</a>,
                <a href="/"> Data Policy </a>and
                <a href="/"> Cookies Policy</a>.
              </FormH6>
              <br/>
              {
                (!isInProfilePage)
                ? <FormH6>
                    Already have an account? <button onClick={handleLogInOpen}>Log in</button>
                  </FormH6>
                : <FormH6>
                    Go back to <button onClick={returnToHomePage}>home page</button>
                  </FormH6> 
              }
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}

export default SignUp