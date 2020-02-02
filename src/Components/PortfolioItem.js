import React from 'react';
import { NavLink } from 'react-router-dom';


const PortfolioItem = (props) => (
    <div className = {props.appName}>
        <h1 className = 'portfolio-header'> {props.appName} </h1>
        <div className = 'lil-border'> </div>
        <div className = 'portfolio-item'>
            <NavLink to = {props.appPath}> <img src= {props.appImage} className='portfolio-preview' alt='app-preview'/> </NavLink>
            <p> {props.description} </p>
        </div>
    </div>
)

export default PortfolioItem;