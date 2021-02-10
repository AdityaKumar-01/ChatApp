import React from 'react';

import JoiningForm from './../../components/JoiningForm/JoiningForm.component';


import './JoinPage.styles.css';

const BrandNameVaraints = {
    initialState:{
        scale:3.8
    },
    finalState:{
        scale:1,
        rotate:-8
    }
}

const JoinPage = () =>{

   
    return(
        <div className="JoinPage">
            <div className="BrandName"
            variants={BrandNameVaraints}
                initial="initialState"
                animate="finalState"
            >CODELAZA !!</div>
            <JoiningForm/>
        </div>
        
)};
    

export default JoinPage;