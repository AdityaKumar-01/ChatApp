import React from 'react';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

import './EmojiSelector.styles.css'
const EmojiSelector = () =>{
    return(
        <span className="EmojiSelector">
            <span className="EmojiIcon">
                <EmojiEmotionsOutlinedIcon 
                    fontSize="large"
                    style={{ color: "rgb(28, 50, 70)" }}
                 />
            </span>
            
        </span>
    )
}

export default EmojiSelector;