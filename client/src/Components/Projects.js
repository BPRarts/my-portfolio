import React from 'react';
import solopro from './Img/games-advertisment-.png'
import grouppro from './Img/image.png'


const Projects = () => {
    return (
        <div className='project-container'>
            <h1 className='project-title'>Projects</h1>
                <div className='displays'>
                    <div className='project'>
                       <img className='solopro' src = {solopro} alt ='' />
                       <p className='title'>Games Market Place</p>
                       <p className='description'> A web application that allows gamers to sell games, and buy games.</p>
                        <a className='project-link' href='https://github.com/BPRarts/games-market-place'>GitHub</a>
                      
                    
                    </div>
                     
                    <div className='project'>
                        <img className='grouppro' src = {grouppro} alt ='' />
                        <p className='title'>Looking For GameNight</p>
                       <p className='description'>A web application that helps people find local game nights.</p>
                       
                        <a className ='project-link' href='https://github.com/DeShawnThomas/L.F.G.-Looking-For-Gamenight--Group-Project-'>GitHub</a>
                      
                    </div>

               </div>

        </div>
    );
}

export default Projects;
