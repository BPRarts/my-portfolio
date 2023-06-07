import React from 'react';
import email from './Img/email.png';
import link from './Img/linkedin.png';
import insta from './Img/instagram.png';
import git from './Img/github.png';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h4 className='contact-title'>Contact Me</h4>
            <div className='my-socials'>
            <a href='mailto:bryanpablo472@gmail.com'>
          <img className='email' src={email} alt='' />
        </a>
        <a href='https://www.linkedin.com/in/bryan-pablo-524b25274/'>
          <img className='link' src={link} alt='' />
        </a>
        <a href='https://www.instagram.com/bpr_arts1/'>
          <img className='insta' src={insta} alt='' />
        </a>
        <a href='https://github.com/BPRarts'>
          <img className='git' src={git} alt='' />
        </a>

            </div>
        </div>
    );
}

export default Contact;
