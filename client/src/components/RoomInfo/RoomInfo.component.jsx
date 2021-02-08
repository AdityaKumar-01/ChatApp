import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './RoomInfo.stlyes.css'
const RoomInfo = ({name,room}) =>{
    return(
        <div className="RoomInfo">
            <div className="roomName">
                <img src={onlineIcon} alt="online icon" className='onlineIcon' />
                <span >{room}</span>
            </div>
             <span className="closeIcon"> <img src={closeIcon} alt="online icon" className='closeIcon' /></span>
        </div>
        
    )
}

export default RoomInfo;