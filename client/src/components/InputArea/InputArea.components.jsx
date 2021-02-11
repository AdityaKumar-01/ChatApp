import React from 'react';

import './InputArea.styles.css'
import EmojiSelector from './../EmojiSelector/EmojiSelector.component';
import MessageInput from './../MessageInput/MessageInput.component';
import CodeEditor from './../CodeEditor/CodeEditor.component';

const InputArea = ({sendMessage,message,setMessage, sendCode, code, setCode, onEmojiClick}) => {
    return(
        <div className="InputArea">
            <div className="popupSection">
                <EmojiSelector
                    onEmojiClick={onEmojiClick}
                />
                <CodeEditor
                    sendCode={sendCode}
                    code={code}
                    setCode={setCode}
                />            
            </div>
            <MessageInput 
                sendMessage = {sendMessage}
                message={message} 
                setMessage={setMessage}/>  
                  
        </div>
        
    )
}

export default InputArea;