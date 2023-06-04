import React from 'react';
import solopro from './Img/games-advertisment-.png'
import grouppro from './Img/image.png'

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
                <div className='displays'>
                    <div className='project'>
                       <img className='solopro' src = {solopro} alt ='' />
                       <p className='title'>Games Market Place</p>
                       <p className='description'> a web application that allows gamers to sell games, and buy games.</p>
                    </div>
                     
                    <div className='project'>
                        <img className='grouppro' src = {grouppro} alt ='' />
                        <p className='title'>Looking For GameNight</p>
                       <p className='description'>an aplication that helps people find local game nights.</p>
                    </div>

               </div>

        </div>
    );
}

export default Projects;
