import React from 'react';


const Hero = () => {

    console.log(window.scrollY)

return (
<div className = 'hero-image-container'>
    <div className = 'hero-image'>
        <div className = {window.scrollY === 0 ? 'nav-bar' : 'nav-bar-scrolled'} onScroll={(e)=>console.log(e)}>
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
        <div className = 'home-description'>
        <div className = 'hello'>
            Hello,
        </div>
        <div>
            My name is Nish, a Junior Developer and LSE Mathematics graduate.
        </div>
        <button className = 'see-work'>
            SEE WORK
        </button>
    </div>
    </div>
</div>
    
)
}

export default Hero;