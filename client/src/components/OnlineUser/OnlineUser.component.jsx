import React from 'react';

import {motion} from 'framer-motion';

import './OnlineUser.styles.css'

import onlineIcon from '../../icons/onlineIcon.png';
import { connect } from 'react-redux';
const OnlineUser = ({users}) => {
    return (
        <div className="OnlineUser">
          <span>
              <h3>Users in room</h3>
          </span>
          {users.map((user,i) => (
            <motion.span 
                className="userSpan">
                <img src={onlineIcon} alt="online icon" className='onlineIcon' />
                <span>
                   { user.name} #{user.uniCode}
                </span> 
            </motion.span>
          ))}
           
           
        </div>
    )
}
const mapStateToProps = (state) => ({
    users:state.roomData.users
})
export default connect(mapStateToProps)(OnlineUser);