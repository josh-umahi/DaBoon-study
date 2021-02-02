import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import NewCourseCard from './styles'

const CourseCard = () => {
    return (
        <NewCourseCard>
            <label>AOT 211</label>
            <button className="deleteButton">
                <DeleteIcon />
            </button>
        </NewCourseCard>
    )
}

export default CourseCard
