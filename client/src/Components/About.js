import React from 'react';
import me from './Img/me.jpg'
const About = () => {
    return (
        <div className='about-container'>
            <h3 className='about-title'>About Me</h3>
               <div className='img-des'>
                 <img className='me' src = {me} alt ='' />
                 <p className='about-description'>Hello! I love to build/design things that are on the internet.
                  My interest in web development began after graduating high school when I didn't know what to persue next.
                  When someone told me about web developing, my interest grew, and I decided to enroll in an intensive online 
                   coding bootcamp with Coding Dojo.</p>

                 <p className='about-description'>When I am not coding, I enjoy drawing, playing video games, and watching anime.</p>
               </div>
        </div>
    );
}

export default About;
