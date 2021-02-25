import React, { useState, useRef, useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext';
import { returnTemplateText, displayCollegeCourses } from '../../Functions/UI_components';
import { getNonCollegeCourses } from '../../Functions/Under_the_hood';
import SignUpPage2 from '../Modal/pages/SignUpPage2';
import { EducationInfo_Div } from './styles';

const EducationInfo = ({ fullName, collegeMajor, collegeCourses }) => {
    const [dropDownCoursesIsOpen, setDropDownCoursesIsOpen] = useState(false);
    const [templateText, setTemplateText] = useState('');
    const [collegeCoursesDisplayed, setCollegeCoursesDisplayed] = useState(null);
    const [nonCollegeCourses, setNonCollegeCourses] = useState([]);
    const refForDropDownCourses = useRef(null)
    const {addNewCourse} = useAuthContext()

    useEffect(() => {
        setTemplateText(returnTemplateText(collegeCourses));
        setCollegeCoursesDisplayed(displayCollegeCourses(collegeCourses));
        setNonCollegeCourses(getNonCollegeCourses(collegeCourses));
    }, [collegeCourses])

    const toggleDropDownCourses = (e) => {
        e.preventDefault()

        if (dropDownCoursesIsOpen) {
            refForDropDownCourses.current.style.display = 'none'
            setDropDownCoursesIsOpen(false)
        }else{
            refForDropDownCourses.current.style.display = 'block'
            setDropDownCoursesIsOpen(true)
        }
    }
    
    return (
        <>
            {/* <SignUpPage2 open={true} isInProfilePage={true} 
                handleLogInOpen={e=>{e.preventDefault()}} 
                handleClose={e=>{e.preventDefault()}}
            /> */}
            <EducationInfo_Div>
                <h1>
                    Hi I’m <span className="secondaryColor">{fullName}</span>, I study&nbsp;
                    <span className="secondaryColor">{collegeMajor}</span> here at LoremIpsum.
                    <br/>
                    {templateText}
                </h1>
                {collegeCoursesDisplayed}
                <button onClick={toggleDropDownCourses} className="addNewCourse">
                    Add a new course
                </button>
                <div className="dropDownCourses" ref={refForDropDownCourses}>
                    {
                        nonCollegeCourses.map((course, i) => {
                            const courseName = course.name
                            return (
                                <button onClick={e => addNewCourse(e, courseName)} key={i}>{courseName}</button>
                            )
                        })
                    }
                </div>
            </EducationInfo_Div>
        </>
    )
}

export default EducationInfo
