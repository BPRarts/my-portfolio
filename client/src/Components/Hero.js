import React from 'react';
import hero from './Img/portfoliobanner.jpg';


const Hero = () => {
    return (
        <div>
           <img className = "hero" src={hero} alt= ''/>
        </div>
    );
}

export default Hero;
