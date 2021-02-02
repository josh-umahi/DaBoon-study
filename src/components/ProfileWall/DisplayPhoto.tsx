import React from 'react'
import TemporaryImage from "../../images/blackman.jpg"

const DisplayPhoto = () => {
    return (
        <div className="displayPhotoDiv">
            <img src={TemporaryImage} alt="Display photo"/>
            <label>
                <input type="file" />
                <span>Edit profile picture</span>
            </label>
        </div>
    )
}

export default DisplayPhoto
