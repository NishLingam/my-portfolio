import React from 'react';


const Footer = () => {

    const mailToHandler = () => {
        window.open("mailto:nitharshanlingam@gmail.com");
    }


    return (
        <div className = 'footer'> 
            <p className='contact-header'> Contact Me </p>
            <p onClick = {mailToHandler}> Email: nitharshanlingam@gmail.com </p>
            <a href='https://github.com/NishLingam' target = "_blank" >GitHub: NishLingam </a> 
            <p> Copyright © 2020 Nish Lingam - All Rights Reserved. </p>
        </div>
    )
}

export default Footer;