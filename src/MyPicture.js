import React from 'react';
import picture from '../public/img/jibola_pic.jpg';

const MyPicture = () => {
    return (
        <div className="pic-container">
            <img src={picture} alt="Jibola Sogbein" className="pic"/>
        </div>
    )
}

export default MyPicture;
