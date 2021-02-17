import React from 'react'
import { MenuItem } from "@material-ui/core";

import { CollegeMajorsData, Colors, TemplateTexts, defaultCourseButtonStyles, ErrorIsRegarding } from "./EnumsAndConstants";
import CourseCard from './components/ProfileWall/CourseCard'

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

export const foundErrorInFullName = (str: string) => {
    const Regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/
    return !Regex.test(str)
}

export const firebase_returnErrorDetails = (errorCode: string) => {
    let errorType = ErrorIsRegarding.Nil
    let helperText = ''

    switch (errorCode) {
        case 'auth/invalid-email': 
            errorType = ErrorIsRegarding.Email
            helperText = 'The email address is badly formatted'
            break;

        case 'auth/email-already-in-use': 
            errorType = ErrorIsRegarding.Email
            helperText = 'This user already exists. Log in'
            break;

        case 'auth/weak-password': 
            errorType = ErrorIsRegarding.Password
            helperText = 'The password must be at least 6 characters'
            break;

        case 'auth/operation-not-allowed': 
            errorType = ErrorIsRegarding.Email
            helperText = 'This sign up method is unauthorized'
            break;

        case 'auth/user-disabled': 
            errorType = ErrorIsRegarding.Email
            helperText = "This user's account is disabled"
            break;

        case 'auth/user-not-found': 
            errorType = ErrorIsRegarding.Email
            helperText = 'This user does not exist'
            break;

        case 'auth/user-wrong-password': 
            errorType = ErrorIsRegarding.Password
            helperText = 'Wrong password entered'
            break;

        default:console.log("An unknown error occurred in function: returnErrorDetails");
            errorType = ErrorIsRegarding.Nil
            helperText = 'Email address is not valid'
            break;
    }

    return {
        errorType,
        helperText
    }
}