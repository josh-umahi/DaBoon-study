import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Submit, AuthTextField } from '../styles';
import SelectMajor from '.././components/SelectMajor';
import { foundErrorInFullName, toggleCourseButtonColor } from '../../../Functions';
import SignUp from '../components/SignUp';
import { useAuth } from '../../../contexts/AuthContext';
import { CoursesData, defaultCourseButtonStyles, NO_ERROR } from '../../../EnumsAndConstants';

export default function SignUpPage2({ open, handleClose, handleLogInOpen }) {
  const [fullName, setFullName] = useState('')
  const [collegeMajor, setCollegeMajor] = useState('')
  const [collegeCourses, setCollegeCourses] = useState([])
  const [isErrorInFullName, setIsErrorInFullName] = useState(false)
  const [helperTextFullName, setHelperTextFullName] = useState('')
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [courseButtonStyles, setCourseButtonStyles] = useState({})
  const {currentUser, finishSigningUp} = useAuth()
  const history = useHistory()

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

  const submitFinishSignUpForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    const fullNameTrimmed = fullName.trim()
    const fullNameHasError = foundErrorInFullName(fullNameTrimmed)

    if (fullNameHasError) {
      setIsErrorInFullName(true)
      setHelperTextFullName("Please enter a valid name")
    } else {
      const signUpError = await finishSigningUp(currentUser.uid, fullNameTrimmed, collegeMajor, collegeCourses)

      if (signUpError === NO_ERROR) {
        history.push('/')
        return
      } else{
        console.log(signUpError)
        alert("An unknown error occured. See console for more details")
      }
    }

    setLoading(false)
  }

  return (
    <SignUp 
      open={open} handleClose={handleClose} 
      handleLogInOpen={handleLogInOpen} resetStates={resetStates}
    >
      <label className="labelHeader">Tell us about yourself</label>
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
      <label className="labelHeader smaller">Courses</label>
      <div className="courseButtonGroup">
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
      </div>
      <Submit disabled={submitIsDisabled && !loading} fullWidth 
        onClick={submitFinishSignUpForm}
      >
        Finish creating account
      </Submit>
    </SignUp>
  );
}
