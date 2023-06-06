import React from 'react';
import email from './Img/email.png';
import link from './Img/linkedin.png';
import insta from './Img/instagram.png';
import git from './Img/github.png';

const Contact = () => {
    return (
        <div>
            <h4>Contact Me</h4>
            <div className='my-socials'>
            <img className = "email" src={email} alt= ''/>
            <img className = "link" src={link} alt= ''/>
            <img className = "insta" src={insta} alt= ''/>
            <img className = "git" src={git} alt= ''/>

            </div>
        </div>
    );
}

export default Contact;
