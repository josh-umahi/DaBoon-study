import React from 'react';

import { Submit, AuthTextField } from '../styles';
import SelectMajor from '.././components/SelectMajor';
import { displayCourseButtons } from '../../../Functions';
import SignUp from '../components/SignUp';

export default function SignUpPage2({ open, handleClose, handleLogInOpen }) {

  return (
      <SignUp open={open} handleClose={handleClose} handleLogInOpen={handleLogInOpen}>
         <label className="labelHeader">Tell us about yourself</label>
          <AuthTextField fullWidth placeholder="Full Name" variant="outlined" size="small"/>
          <SelectMajor />
          <label className="labelHeader smaller">Courses</label>
          <div className="courseButtonGroup">
            {displayCourseButtons()}
          </div>
          <Submit fullWidth>Create account</Submit>
      </SignUp>
  );
}
