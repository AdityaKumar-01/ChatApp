import React from 'react';

import {motion} from 'framer-motion';

import './OnlineUser.styles.css'

import onlineIcon from '../../icons/onlineIcon.png';
const OnlineUser = () => {
    return (
        <div className="OnlineUser">
          <span>
              <h3>Users in room</h3>
          </span>
           <motion.span 
                whileHover={{x:10, color:"pink"}}
                transition={{type:"spring", duration:1, stiffness: 400}}
                className="userSpan">
                <img src={onlineIcon} alt="online icon" className='onlineIcon' />
                <span>
                    Aditya
                </span> 
            </motion.span>
           
        </div>
    )
}

export default OnlineUser;