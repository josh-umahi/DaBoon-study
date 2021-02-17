import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import { DeleteButton, NewCourseCard } from './styles'

const CourseCard = ({ courseName }) => {
    return (
        <NewCourseCard>
            <label>{courseName}</label>
            <DeleteButton>
                <DeleteIcon />
            </DeleteButton>
        </NewCourseCard>
    )
}

export default CourseCard
