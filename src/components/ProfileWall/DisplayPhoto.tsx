import React, { useState, useEffect } from 'react'
import DisplayPicPlaceholder from '@material-ui/icons/Person';

import { DisplayPhoto_Div, ImageCircularProgress } from './styles';
import { useAuthContext } from '../../contexts/AuthContext';
import { useModalContext } from '../../contexts/ModalContext';

const DisplayPhoto = () => {
    const [profilePicURL, setProfilePicURL] = useState(null)
    const [displayError, setDisplayError] = useState(false)
    const {currentUserData, changeProfilePicture, removeProfilePicture} = useAuthContext()
    const {loadingDisplayPicture, setLoadingDisplayPicture} = useModalContext()

    useEffect(() => {
        if (currentUserData) {
            const {profilePicURL} = currentUserData
            setProfilePicURL(profilePicURL)
            setLoadingDisplayPicture(false)
        }
    }, [currentUserData])

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

    const renderImage = () => {
        if (profilePicURL === null || loadingDisplayPicture) {
            return <ImageCircularProgress thickness={2} />
        } 

        if (profilePicURL === '') {
            return <DisplayPicPlaceholder />
        } else{
            return <img src={profilePicURL} />
        }
    }

    return (
        <DisplayPhoto_Div displayError = {displayError}>
            <div className="innerPicture">
                {renderImage()}
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
