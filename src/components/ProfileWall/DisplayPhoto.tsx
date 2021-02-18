import React from 'react'
import DisplayPicPlaceholder from '@material-ui/icons/Person';

import { DisplayPhoto_Div } from './styles';

const DisplayPhoto = () => {
    return (
        <DisplayPhoto_Div>
            <div className="innerPicture">
                <DisplayPicPlaceholder />
            </div>
            <label>
                <input type="file" />
                <span>Edit profile picture</span>
            </label>
        </DisplayPhoto_Div>
    )
}

export default DisplayPhoto
