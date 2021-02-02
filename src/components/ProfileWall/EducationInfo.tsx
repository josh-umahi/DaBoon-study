import React, { useState, useRef } from 'react'
import CourseCard from './CourseCard'

const EducationInfo = () => {
    const [dropDownCoursesIsOpen, setDropDownCoursesIsOpen] = useState(false);
    const refForDropDownCourses = useRef(null)

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
                Hi I’m <span className="secondaryColor">Tufa Amadi</span>, I study&nbsp;
                <span className="secondaryColor">Theatre Arts</span> here at LoremIpsum.
                <br/>
                Below are the courses I’m taking this semester
            </h1>
            <div className="courseCards">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
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
