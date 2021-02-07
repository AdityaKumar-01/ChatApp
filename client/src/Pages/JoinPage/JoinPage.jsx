import React from 'react';

import JoiningForm from './../../components/JoiningForm/JoiningForm.component';

import {motion} from 'framer-motion';

import './JoinPage.styles.css'
const BrandNameVaraints = {
    initialState:{
        scale:3.8
    },
    finalState:{
        scale:1,
        rotate:-8
    }
}
const JoinPage = ({socket}) =>{
    return(
        <div className="JoinPage">
            <motion.div className="BrandName"
            variants={BrandNameVaraints}
                initial="initialState"
                animate="finalState"
            >CODELAZA !!</motion.div>
            <JoiningForm socket={socket}/>
        </div>
        
)};
    

export default JoinPage;