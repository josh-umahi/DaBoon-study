import React from 'react'
import { ThemeProvider } from '@material-ui/styles';

import Header from '../../components/Header';
import Theme from '../styles';
import DisplayPhoto from '../../components/ProfileWall/DisplayPhoto';
import EducationInfo from '../../components/ProfileWall/EducationInfo';

const ProfilePage = () => {
   
    return (
        <ThemeProvider theme={Theme}>
            <div className="profileContainer">
                <Header />
                <DisplayPhoto />
                <EducationInfo />
            </div>
        </ThemeProvider>
    )
}

export default ProfilePage
