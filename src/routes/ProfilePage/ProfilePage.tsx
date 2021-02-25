import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import Theme, { ProfileContainer_div } from '../styles';
import DisplayPhoto from '../../components/ProfileWall/DisplayPhoto';
import EducationInfo from '../../components/ProfileWall/EducationInfo';
import { useAuthContext } from '../../contexts/AuthContext';

const ProfilePage = () => {
    const [fullName, setFullName] = useState('')
    const [collegeMajor, setCollegeMajor] = useState('')
    const [collegeCourses, setCollegeCourses] = useState([])
    const {currentUserData} = useAuthContext()

    useEffect(() => {
        if (currentUserData) {
            const {fullName, collegeMajor, collegeCourses} = currentUserData
            setFullName(fullName)
            setCollegeMajor(collegeMajor)
            setCollegeCourses(collegeCourses)
        }
    }, [currentUserData])

    return (
        <ThemeProvider theme={Theme}>
            <ProfileContainer_div>
                <Header showSignOut={true} />
                <DisplayPhoto />
                <EducationInfo 
                    fullName={fullName} 
                    collegeMajor={collegeMajor}
                    collegeCourses={collegeCourses} 
                />
            </ProfileContainer_div>
        </ThemeProvider>
    )
}

export default ProfilePage
