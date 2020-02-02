import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeDescription = () => (
    <div className = 'home-description'>
        <div className = 'hello'>
            Hello,
        </div>
        <div className = 'bio-summary'>
            My name is Nish, a Junior Developer and LSE Mathematics graduate. 
        </div>
        <NavLink to='/portfolio'> 
        <button className = 'see-work'>
            SEE WORK
        </button>
        </NavLink>
    </div>
)

export default HomeDescription;