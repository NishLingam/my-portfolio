import React, { useState } from 'react';

const NavBar = () => { 

    const [navBarClass, setNavBarClass] = useState('nav-bar')

    console.log(window.scrollY);
    
    return (
    <div className = {window.scrollY === 0 ? 'nav-bar' : 'nav-bar-scrolled'} >
        <div> 
            Nish Lingam
        </div>
        <div className = 'nav-bar-right'>
            <div className = 'home-button'>
                Home
            </div>
            <div className = 'portfolio-button'>
                Portfolio
            </div>
        </div>
    </div>
)
}

export default NavBar;
