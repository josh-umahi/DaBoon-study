import React from 'react'
import { MenuItem } from "@material-ui/core";

import { CollegeMajorsData, TemplateTexts } from "../EnumsAndConstants";
import { Colors, defaultCourseButtonStyles  } from "../styles/variables";
import CourseCard from '../components/ProfileWall/CourseCard'

export const displayCollegeMajorOptions = () => {
    return CollegeMajorsData.map((option, i) => {
        return <MenuItem key={i} value={option.name}>{option.name}</MenuItem>
    })
}

export const displayCollegeCourses = (coursesArray: Array<string>) => {
    if (coursesArray.length > 0) {
        return (
            <div className="courseCards_div">
                {
                    coursesArray.map((courseName, i) => {
                        return <CourseCard key={i} courseName={courseName} />
                    })
                }
            </div>
        )
    }else{
        return null
    }
}

export const toggleCourseButtonColor = e => {
    if (e.target.style.color!.split(' ').join('') === Colors.Primary) {
        e.target.style.color = defaultCourseButtonStyles.color
        e.target.style.borderColor = defaultCourseButtonStyles.borderColor
        e.target.style.backgroundColor = defaultCourseButtonStyles.backgroundColor
    }else{
        e.target.style.color = Colors.Primary
        e.target.style.borderColor = Colors.Primary
        e.target.style.backgroundColor = Colors.White
    }
}

export const returnTemplateText = (coursesArray: Array<string>) => {
    if (coursesArray.length > 0) {
        return TemplateTexts.takingCourses
    }else{
        return TemplateTexts.notTakingCourses
    }
}
