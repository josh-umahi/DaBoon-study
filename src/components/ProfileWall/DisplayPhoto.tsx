import React from 'react'
import DisplayPicPlaceholder from '@material-ui/icons/Person';

import { DisplayPhoto_div } from './styles';

const DisplayPhoto = () => {
    return (
        <DisplayPhoto_div>
            <div className="innerPicture">
                <DisplayPicPlaceholder />
            </div>
            <label>
                <input type="file" />
                <span>Edit profile picture</span>
            </label>
        </DisplayPhoto_div>
    )
}

export default DisplayPhoto
