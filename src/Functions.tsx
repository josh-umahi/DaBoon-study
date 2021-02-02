import React from 'react'
import { MenuItem } from "@material-ui/core";
import { CollegeMajorsData, CoursesData, Colors } from "./EnumsAndConstants";

export const displayCollegeMajorOptions = () => {
    return CollegeMajorsData.map((option, i) => {
        return <MenuItem key={i} value={option.name}>{option.name}</MenuItem>
    })
}

const clickedOnCourseButton = e => {
    if (e.target.style.color!.split(' ').join('') === Colors.Primary) {
        e.target.style.color = 'rgba(0,0,0,0.6)'
        e.target.style.borderColor = 'rgb(221,221,221)'
        e.target.style.backgroundColor = Colors.LightGrey
    }else{
        e.target.style.color = Colors.Primary
        e.target.style.borderColor = Colors.Primary
        e.target.style.backgroundColor = Colors.White
    }
}

export const displayCourseButtons = () => {
    return CoursesData.map((course, i) => {
        return <button onClick={clickedOnCourseButton} key={i} value={course.name}>{course.name}</button>
    })
}