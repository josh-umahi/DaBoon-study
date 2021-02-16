import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import Theme from '../styles';
import DisplayPhoto from '../../components/ProfileWall/DisplayPhoto';
import EducationInfo from '../../components/ProfileWall/EducationInfo';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage = () => {
    const [fullName, setFullName] = useState('')
    const [collegeMajor, setCollegeMajor] = useState('')
    const [collegeCourses, setCollegeCourses] = useState('')
    const {currentUserData, signOut} = useAuth()
    const history = useHistory()

    useEffect(() => {
        (async () => {
            if (currentUserData) {
                const {fullName, collegeMajor, collegeCourses} = await currentUserData
                setFullName(fullName)
                setCollegeMajor(collegeMajor)
                setCollegeCourses(collegeCourses)
            }
        })()
    }, [currentUserData])

    const handleLogOut = async () => {
        try {
            await signOut()
            history.push('/home')
        } catch (error) {
            console.log("Failed to log out");
        }
    }

    return (
        <ThemeProvider theme={Theme}>
            <div className="profileContainer">
                <Header handleLogOut={handleLogOut} />
                <DisplayPhoto />
                <EducationInfo 
                    fullName={fullName} 
                    collegeMajor={collegeMajor}
                    collegeCourses={collegeCourses} 
                />
            </div>
        </ThemeProvider>
    )
}

export default ProfilePage
