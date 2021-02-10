import React from 'react';

import './InputArea.styles.css'
import EmojiSelector from './../EmojiSelector/EmojiSelector.component';
import MessageInput from './../MessageInput/MessageInput.component';
const InputArea = ({sendMessage,message,setMessage,onEmojiClick}) => {
    return(
        <div className="InputArea">
            <EmojiSelector
                onEmojiClick={onEmojiClick}
            />
            <MessageInput 
                sendMessage = {sendMessage}
                message={message} 
                setMessage={setMessage}/>            
        </div>
        
    )
}

export default InputArea;