import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import { DeleteButton, NewCourseCard } from './styles'
import { useAuthContext } from '../../contexts/AuthContext'

const CourseCard = ({ courseName }) => {
    const {deleteNewCourse} = useAuthContext()

    return (
        <NewCourseCard>
            <label>{courseName}</label>
            <DeleteButton onClick={e => deleteNewCourse(e, courseName)}>
                <DeleteIcon />
            </DeleteButton>
        </NewCourseCard>
    )
}

export default CourseCard
