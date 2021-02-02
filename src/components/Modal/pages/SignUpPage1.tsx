import React from 'react';
import {SvgIcon} from '@material-ui/core/';

import { GoogleAuth, Submit } from '../styles';
import TextFieldGrouped from '../components/TextFieldGrouped';
import GoogleLogo from '../../../images/google_icon.svg';
import SignUp from '../components/SignUp';

export default function SignUpPage1({ open, handleClose, handleSignUpPage2Open, handleLogInOpen }) {
  const goToPage2 = (e) => {
    handleSignUpPage2Open()
  }

  return (
    <SignUp open={open} handleClose={handleClose} handleLogInOpen={handleLogInOpen}>
      <GoogleAuth fullWidth>
        <SvgIcon component={GoogleLogo} viewBox="0 0 600 476.6" />
        Sign up with Google
      </GoogleAuth>
      <h6 className="marginBelowH6">or</h6>
      <TextFieldGrouped />
      <Submit fullWidth onClick={goToPage2}>Create account</Submit>
    </SignUp>
  );
}
