import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-c_cpp';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-terminal';

import './Message.styles.css';

import ReactEmoji from 'react-emoji';
import { connect } from 'react-redux';

const Message = ({ message: { text, user, type }, name, language, theme }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

   let mode = " ";
            if (language === 'C' || language === 'C++') {
                mode = 'c_cpp';
            } else {
                mode = language;
            }
  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className={ type==="code"? "codeBox" : "messageBox"}>
            {type==="code" ?
              <AceEditor
                        value={text}
                        mode={mode.toLowerCase()}
                        theme={theme.toLowerCase()}
                        name="coding-space-message"
                        highlightActiveLine
                        showGutter={false}
                        fontSize={15}
                        showPrintMargin={false}
                        editorProps={{ $blockScrolling: false }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
              :
              <p className="messageText ">{ReactEmoji.emojify(text)}</p>
              }
            
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
           <div className={ type==="code"? "codeBox" : "messageBox backgroundLight"}>
            { type==="code" ? 
                <AceEditor
                        value={text}
                        mode={mode.toLowerCase()}
                        theme={theme.toLowerCase()}
                        name="coding-space-message"
                        highlightActiveLine
                        showGutter={false}
                        fontSize={15}
                        showPrintMargin={false}
                        editorProps={{ $blockScrolling: false }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                :
                <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            }
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

const mapStateToProps = (state) =>({
    theme : state.codeDetails.theme,
    language : state.codeDetails.language,
})

export default connect(mapStateToProps)(Message);