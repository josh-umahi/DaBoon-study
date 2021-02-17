import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import Theme, { ProfileContainer_div } from '../styles';
import DisplayPhoto from '../../components/ProfileWall/DisplayPhoto';
import EducationInfo from '../../components/ProfileWall/EducationInfo';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage = () => {
    const [fullName, setFullName] = useState('')
    const [collegeMajor, setCollegeMajor] = useState('')
    const [collegeCourses, setCollegeCourses] = useState([])
    const {currentUserData, signOut} = useAuth()
    const history = useHistory()

    useEffect(() => {
        const fullName = "Josh Jimu"
        const collegeMajor = "Astrophysics"
        const collegeCourses = ["CSC 230", "CSC 230", "CSC 230"]

        setFullName(fullName)
        setCollegeMajor(collegeMajor)
        setCollegeCourses([...collegeCourses])
    }, [])

    useEffect(() => {
        (async () => {
            if (currentUserData) {
                const {fullName, collegeMajor, collegeCourses} = await currentUserData
                setFullName(fullName)
                setCollegeMajor(collegeMajor)
                setCollegeCourses([...collegeCourses])
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
            <ProfileContainer_div>
                <Header handleLogOut={handleLogOut} />
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
