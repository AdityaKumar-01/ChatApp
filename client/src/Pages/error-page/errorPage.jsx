import React from 'react';
import error from '../../icons/undraw_page_not_found_su7k.svg';
import "./error-page.css";
const errorPage = () =>{
    return <div className="error-page">
        <img src={error} alt="error" className="error-img"/>
        <p>Open this in your laptop</p>
    </div>;
}

export default errorPage;