import React from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './EmojiSelector.styles.css';

const EmojiSelector = () =>{
    return(
        <span className="EmojiSelector">
            <span className="EmojiIcon">
                <EmojiEmotionsIcon 
                    fontSize="large"
                    style={{ color: "white" }}
                 />
            </span>
            
        </span>
    )
}

export default EmojiSelector;