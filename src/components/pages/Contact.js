import React from 'react';
import liLogo from '../../assets/images/linkedInLogo.png';

export default function Contact() {
  return (
  <div className='container-fluid bright-gray-4'> 
    <section className='barrier'/>
    <section className='col-12'>
            <nav className=''>
                <h4>External Links</h4>
                <div>
                    <a
                    href='https://www.linkedin.com/in/mark-barstow-554389210/' target='_blank' rel='noreferrer' className='row align-items-center'>
                    {/* GH Logo element goes here */}
                    <img src={liLogo} alt='linkedIn Logo' className='mini-logo-sc col-2'/>
                    <h5 className='col-2'>linkedIn</h5>
                    </a>
                </div>
            </nav>
    </section>
    <main className='latest-releases'>
    {/* the main section will contain latest releases, in addition to any music announcements or special promotions. SCROLLABLE GRID */}
    <div className='row'>
                    <div className='col-4'></div>
                    <h4 className='col-4'>Page in Development</h4>
                    <div className='col-4'></div>
                </div>
    </main>
    <section className='barrier'/>
</div>
  );
}
