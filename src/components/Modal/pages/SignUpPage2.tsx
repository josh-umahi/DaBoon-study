import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SubmitButton, AuthTextField, LabelHeader, LabelHeader_Small, CourseButtons_Div } from '../styles';
import SelectMajor from '.././components/SelectMajor';
import { toggleCourseButtonColor } from '../../../Functions/UI_components';
import { foundErrorInFullName } from '../../../Functions/Under_the_hood';
import SignUp from '../components/SignUp';
import { useAuthContext } from '../../../contexts/AuthContext';
import { CoursesData, NO_ERROR } from '../../../EnumsAndConstants';
import { defaultCourseButtonStyles } from '../../../styles/variables';
import { useModalContext } from '../../../contexts/ModalContext';

export default function SignUpPage2() {
  const [fullName, setFullName] = useState('')
  const [collegeMajor, setCollegeMajor] = useState('')
  const [collegeCourses, setCollegeCourses] = useState([])
  const [isErrorInFullName, setIsErrorInFullName] = useState(false)
  const [helperTextFullName, setHelperTextFullName] = useState('')
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [courseButtonStyles, setCourseButtonStyles] = useState({})
  const {currentUser, finishSigningUp} = useAuthContext()
  const history = useHistory()
  const {signUpPage2Open, handleSignUpPage2Close, signUpNotCompleted} = useModalContext()

  useEffect(() => {
    if (fullName === '' || collegeMajor === '') {
      setSubmitIsDisabled(true)
    } else {
      setSubmitIsDisabled(false)
    }
  }, [fullName, collegeMajor])

  const resetStates = () => {
    setFullName('')
    setCollegeMajor('')
    setCollegeCourses([])
    setIsErrorInFullName(false)
    setHelperTextFullName('')
    setSubmitIsDisabled(true)
    setLoading(false)
    setCourseButtonStyles(defaultCourseButtonStyles)
  }

  const courseButtonClicked = e => {
    e.preventDefault()
    toggleCourseButtonColor(e)
    const courseName = e.target.value

    if (collegeCourses.indexOf(courseName) === -1) {
      setCollegeCourses([...collegeCourses, courseName])
    } else {
      const indexToRemove = collegeCourses.indexOf(courseName) 
      setCollegeCourses(collegeCourses.filter((course, i) => {
        return i !== indexToRemove
      }))
    }
  }

  const submitFinishSignUpForm = e => {
    e.preventDefault()
    setLoading(true)
    const fullNameTrimmed = fullName.trim()
    const fullNameHasError = foundErrorInFullName(fullNameTrimmed)

    if (fullNameHasError) {
      setIsErrorInFullName(true)
      setHelperTextFullName("Please enter a valid name")
    } else {
      const signUpError = finishSigningUp(currentUser.uid, fullNameTrimmed, collegeMajor, collegeCourses)

      if (signUpError === NO_ERROR) {
        history.push('/')
      } else{
        console.log(signUpError)
      }
    }

    setLoading(false)
  }

  return (
      <SignUp 
          open={signUpPage2Open} handleClose={handleSignUpPage2Close}
          resetStates={resetStates} signUpNotCompleted={signUpNotCompleted}
      >
      <LabelHeader>Tell us about yourself</LabelHeader>
      <AuthTextField  
        value={fullName} 
        onChange={(e)=>setFullName(e.target.value)} 
        fullWidth placeholder="Full Name" 
        variant="outlined" size="small" error={isErrorInFullName}
        helperText={helperTextFullName}
      />
      <SelectMajor
        collegeMajor={collegeMajor} setCollegeMajor={setCollegeMajor}
      />
      <LabelHeader_Small>Courses</LabelHeader_Small>
      <CourseButtons_Div>
        {
          CoursesData.map((course, i) => {
            return (
              <button onClick={courseButtonClicked} 
                key={i} value={course.name} 
                style={courseButtonStyles}
              >
                {course.name}
              </button>
            )
          })
        }
      </CourseButtons_Div>
      <SubmitButton disabled={submitIsDisabled && !loading} fullWidth 
        onClick={submitFinishSignUpForm}
      >
        Finish creating account
      </SubmitButton>
    </SignUp>
  );
}
