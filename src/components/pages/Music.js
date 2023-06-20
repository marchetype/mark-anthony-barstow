import React from 'react';
import scLogo from '../../assets/images/soundcloud-icon.png'

export default function Music() {
    return (
        <div className='container-fluid'> 
            <section className='barrier'/>
            <section className='col-12'>
                    <nav className=''>
                        <h4>External Links</h4>
                        <div>
                            <a
                            href='https://soundcloud.com/user-271681043' target='_blank' rel='noreferrer' className='row align-items-center'>
                            {/* GH Logo element goes here */}
                            <img src={scLogo} alt='SoundCloud Logo' className='mini-logo-sc col-2'/>
                            <h5 className='col-2'>Baarstow</h5>
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