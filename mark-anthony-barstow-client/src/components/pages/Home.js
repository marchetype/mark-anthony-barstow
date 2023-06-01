import React from 'react';
import backgroundImage from '../../assets/images/homepage.jpg';

export default function Home() {
  return (
    <div className='home-page'>
        <div className='home-image'>
            <img src={backgroundImage} alt='homepage'></img>
        </div>
    </div>
  );
}