import React from 'react';


const PortfolioItem = (props) => (
    <div className = {props.appName}>
        <h1 className = 'portfolio-header'> {props.appName} </h1>
        <div className = 'lil-border'> </div>
        <div className = 'portfolio-item'>
            <img src= {props.appImage} className='portfolio-preview' />
            <p> {props.description} </p>
        </div>
    </div>
)

export default PortfolioItem;