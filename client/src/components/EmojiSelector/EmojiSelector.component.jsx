import React,{useState} from 'react';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import './EmojiSelector.styles.css'
const EmojiSelector = ({onEmojiClick}) =>{

    const [showEmjPicker, setEmjPicker] = useState(false)
    const emjIconClick = () =>{
        setEmjPicker(!showEmjPicker)
    }

    const addEmoji = (e) => {
        const emoji = e.native;
        onEmojiClick(emoji);
    };

    return (
      <span className="EmojiSelector">
      
        <span className="emojiPicker">
          {showEmjPicker ? (
            <Picker
              onSelect={addEmoji}
              title="Pick your emoji…"
              emoji="point_up"
              theme="dark"
              showSkinTones="false"
              position="absolute"

            />
          ) : null}
        </span>

        <span className="EmojiIcon">
          <EmojiEmotionsOutlinedIcon
            fontSize="large"
            onClick={emjIconClick}
            className="EmojiFace"
          />
        </span>
      </span>
    );
}

export default EmojiSelector;