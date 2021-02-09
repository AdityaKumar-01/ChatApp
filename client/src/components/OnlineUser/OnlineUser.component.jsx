import React from 'react';

import {motion} from 'framer-motion';

import './OnlineUser.styles.css'

import onlineIcon from '../../icons/onlineIcon.png';
import { connect } from 'react-redux';
const OnlineUser = ({uniCode}) => {
    return (
        <div className="OnlineUser">
          <span>
              <h3>Users in room</h3>
          </span>
           <motion.span 

                className="userSpan">
                <img src={onlineIcon} alt="online icon" className='onlineIcon' />
                <span>
                    Aditya #{uniCode}
                </span> 
            </motion.span>
           
        </div>
    )
}
const mapStateToProps = (state) => ({
    uniCode : state.user.uniCode
})
export default connect(mapStateToProps)(OnlineUser);