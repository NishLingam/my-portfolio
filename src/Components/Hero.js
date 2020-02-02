import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {

return (
<div className = 'hero-image-container'>  
    <div className = 'hero-image'>
        <div className = 'home-description'>
            <div className = 'hello'>
                Hello,
            </div>
            <div className = 'bio-summary'>
                My name is Nish, a Web Developer and LSE Mathematics graduate.
            </div>
            <NavLink to='/portfolio'> 
                <button className = 'see-work'>
                    SEE WORK
                </button>
            </NavLink>
        </div>
    </div>
</div>
    
)
}

export default Hero;