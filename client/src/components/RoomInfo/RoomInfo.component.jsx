import React from 'react';
import { connect } from 'react-redux';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './RoomInfo.stlyes.css'
const RoomInfo = ({currentRoom}) =>{
    return(
        <div className="RoomInfo">
            <div className="roomName">
                <img src={onlineIcon} alt="online icon" className='onlineIcon' />
                <span >{currentRoom}</span>
            </div>
             <span className="closeIcon"> <img src={closeIcon} alt="online icon" className='closeIcon' /></span>
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    currentRoom: state.user.currentRoom
})

export default connect(mapStateToProps)(RoomInfo);