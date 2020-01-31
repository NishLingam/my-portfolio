import React from 'react';
import { ReactComponent as EmailSVG } from '../images/gmail.svg';
import { ReactComponent as GitHubSVG } from '../images/github.svg'
import { ReactComponent as LinkedInSVG } from '../images/linkedin.svg'
const Footer = () => {

    const mailToHandler = () => {
        window.open("mailto:nitharshanlingam@gmail.com");
    }


    return (
        <div className = 'footer'> 
            <p className='contact-header'> Contact Me </p>
            <div className = 'lil-border'> </div>
            <div className = 'footer-detail'> 
                <EmailSVG className = 'footer-icon' onClick = {mailToHandler}/>
                <a href = 'https://github.com/NishLingam' target = 'blank'> <GitHubSVG className = 'footer-icon' /> </a>
                <a href = 'https://linkedin.com/in/nitharshanlingam' target = 'blank'> <LinkedInSVG className = 'footer-icon'/> </a>
            </div>
            <p className = 'copyright'> Copyright © 2020 Nish Lingam - All Rights Reserved. </p>
        </div>
    )
}

export default Footer;