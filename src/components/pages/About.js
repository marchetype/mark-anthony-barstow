import React from 'react';
import portraitPhoto from '../../assets/images/markBPhoto1.png';

export default function About() {
  return (
    <div className='container-fluid bright-gray-4'>
      <section className='barrier'/>
      <div className='row d-flex align-items-center'>
        <div className='col-lg-2'></div>
          <div className='col-12 col-md-6 col-lg-4'>
            <h3>About Me</h3>
            <p>
                  22 y/o full-stack bootcamp graduate looking to enhance creative skills through code. 
                  In addition to software engineering, I find great interest in the subjects of visual art, 
                  design, and music production. Working to turn daydreams into reality.
            </p>
          </div>
        <div className='col-lg-1'/>  
        <div className='col-12 col-md-6 col-lg-4'>
          <img src={portraitPhoto} className='portrait' alt='Portrait'/>
        </div>
      </div>
      <section className='barrier'/>
    </div>
  );
}
