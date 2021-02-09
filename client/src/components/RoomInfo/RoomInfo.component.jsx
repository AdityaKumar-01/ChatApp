import React from 'react';
import { connect } from 'react-redux';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './RoomInfo.stlyes.css'
const RoomInfo = ({userUser}) =>{
    return(
        <div className="RoomInfo">
            <div className="roomName">
                <img src={onlineIcon} alt="online icon" className='onlineIcon' />
                <span >{userUser}</span>
            </div>
             <span className="closeIcon"> <img src={closeIcon} alt="online icon" className='closeIcon' /></span>
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    userUser: state.user.currentUser
})

export default connect(mapStateToProps)(RoomInfo);