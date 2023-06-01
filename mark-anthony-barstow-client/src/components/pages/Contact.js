import React from 'react';

export default function Contact() {
  return (
    <div className='page-format'>
      <div className='contact-card-section'>
        <div className='contact-card'>
          <a href='https://github.com/marchetype' target='_blank' rel='noreferrer'>
            <h2 className='descript-divide'>GitHub</h2>
            <p>marchetype</p>
          </a>
        </div>
        <div className='contact-card'>
          <a href='https://www.linkedin.com/in/mark-barstow-554389210/' target='_blank' rel='noreferrer'>
            <h2 className='descript-divide'>linkedIn</h2>
            <p>Mark Barstow</p>
          </a>
        </div>
        <div className='contact-card'>
          <a href="mailto:example@gmail.com" target='_blank' rel='noreferrer'>
            <h2 className='descript-divide'>Email Me</h2>
            <p>@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
