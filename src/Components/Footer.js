import React from 'react';
import { ReactComponent as EmailSVG} from '../images/gmail.svg';
import { ReactComponent as GitHubSVG} from '../images/github.svg'

const Footer = () => {

    const mailToHandler = () => {
        window.open("mailto:nitharshanlingam@gmail.com");
    }


    return (
        <div className = 'footer'> 
            <p className='contact-header'> Contact Me </p>
            <div onClick = {mailToHandler} className = 'footer-detail'> 
                <EmailSVG className = 'footer-icon'/>
                nitharshanlingam@gmail.com 
            </div>
            <div className = 'footer-detail'>
                <GitHubSVG className = 'footer-icon'/>
                GitHub: NishLingam 
            </div> 
            <p> Copyright © 2020 Nish Lingam - All Rights Reserved. </p>
        </div>
    )
}

export default Footer;