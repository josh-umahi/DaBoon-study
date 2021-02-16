import React from 'react'
import DisplayPicPlaceholder from '@material-ui/icons/Person';

const DisplayPhoto = () => {
    return (
        <div className="displayPhotoDiv">
            <div className="innerPicture">
                {/* <img src={TemporaryImage} alt="Display photo" /> */}
                <DisplayPicPlaceholder />
            </div>
            <label>
                <input type="file" />
                <span>Edit profile picture</span>
            </label>
        </div>
    )
}

export default DisplayPhoto
