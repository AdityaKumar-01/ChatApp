import React from 'react';

import './InputArea.styles.css'
import EmojiSelector from './../EmojiSelector/EmojiSelector.component';
import MessageInput from './../MessageInput/MessageInput.component';
const InputArea = () => {
    return(
        <div className="InputArea">
            <EmojiSelector/>
            <MessageInput/>            
        </div>
        
    )
}

export default InputArea;