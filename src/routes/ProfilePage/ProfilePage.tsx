import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import Theme, { ProfileContainer_div, EducationInfoCircularProgress} from '../styles';
import DisplayPhoto from '../../components/ProfileWall/DisplayPhoto';
import EducationInfo from '../../components/ProfileWall/EducationInfo';
import { useAuthContext } from '../../contexts/AuthContext';
import { useModalContext } from '../../contexts/ModalContext';

const ProfilePage = () => {
    const [fullName, setFullName] = useState('')
    const [collegeMajor, setCollegeMajor] = useState('')
    const [collegeCourses, setCollegeCourses] = useState([])
    const {currentUserData} = useAuthContext()
    const {loadingProfile, setLoadingProfile} = useModalContext()

    useEffect(() => {
        if (currentUserData) {
            const {fullName, collegeMajor, collegeCourses} = currentUserData
            setFullName(fullName)
            setCollegeMajor(collegeMajor)
            setCollegeCourses(collegeCourses)
            setLoadingProfile(false)
        }
    }, [currentUserData])

    const renderEducationInfo = () => {
        if (fullName === '' || loadingProfile) {
            return <EducationInfoCircularProgress
                        thickness={1.5} size={80} 
                    />
        } else{
            return <EducationInfo 
                        fullName={fullName} 
                        collegeMajor={collegeMajor}
                        collegeCourses={collegeCourses} 
                    />
        }
    }

    return (
        <ThemeProvider theme={Theme}>
            <ProfileContainer_div>
                <Header showSignOut={true} />
                <DisplayPhoto />
                {renderEducationInfo()}
            </ProfileContainer_div>
        </ThemeProvider>
    )
}

export default ProfilePage
