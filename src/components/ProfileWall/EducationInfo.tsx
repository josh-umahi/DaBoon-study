import React, { useState, useRef, useEffect } from 'react'
import { returnTemplateText, displayCollegeCourses } from '../../Functions';

const EducationInfo = ({ fullName, collegeMajor, collegeCourses }) => {
    const [dropDownCoursesIsOpen, setDropDownCoursesIsOpen] = useState(false);
    const [templateText, setTemplateText] = useState(returnTemplateText(collegeCourses));
    const [collegeCoursesDisplayed, setCollegeCoursesDisplayed] = useState(displayCollegeCourses(collegeCourses));
    const refForDropDownCourses = useRef(null)

    useEffect(() => {
        setTemplateText(returnTemplateText(collegeCourses));
        setCollegeCoursesDisplayed(displayCollegeCourses(collegeCourses));
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
        <div className="educationInfo">
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
                <button>SENG 265</button>
                <button>ENGR 240</button>
                <button>CSC 230</button>
                <button>SENG 265</button>
                <button>ENGR 240</button>
                <button>CSC 230</button>
            </div>
        </div>
    )
}

export default EducationInfo
