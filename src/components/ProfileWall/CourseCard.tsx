import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import NewCourseCard from './styles'

const CourseCard = ({ courseName }) => {
    return (
        <NewCourseCard>
            <label>{courseName}</label>
            <button className="deleteButton">
                <DeleteIcon />
            </button>
        </NewCourseCard>
    )
}

export default CourseCard
