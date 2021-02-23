import React, { useState, useEffect } from 'react'
import DisplayPicPlaceholder from '@material-ui/icons/Person';

import { DisplayPhoto_Div } from './styles';
import { useAuth } from '../../contexts/AuthContext';

const DisplayPhoto = () => {
    const {photoURL, changeProfilePicture, removeProfilePicture} = useAuth()
    const [profilePicURL, setProfilePicURL] = useState('')
    const [displayError, setDisplayError] = useState(false)

    useEffect(() => {
        if (photoURL) {
            setProfilePicURL(photoURL+'')
        }else{
            setProfilePicURL('')
        }
        console.log("in here")
    }, [photoURL])

    const handleChangeProfilePicture = e => {
        const types = ["image/jpeg", "image/png", "image/jpg"]

        const selectedFile = e.target.files[0]
        if (selectedFile && types.includes(selectedFile.type)) {
            changeProfilePicture(selectedFile)
            setDisplayError(false)
        }else{
            setDisplayError(true)
        }
    }

    return (
        <DisplayPhoto_Div displayError = {displayError}>
            <div className="innerPicture">
                {profilePicURL ? <img src={profilePicURL} /> : <DisplayPicPlaceholder />}
            </div>
            <h6>Please select an image file (jpeg, png or jpg)</h6>
            <div className="actions">
                <label>
                    <input type="file" onChange={handleChangeProfilePicture} />
                    <span>Change profile picture</span>
                </label>
                <button onClick={removeProfilePicture}>
                    Remove profile picture
                </button>
            </div>
        </DisplayPhoto_Div>
    )
}

export default DisplayPhoto
