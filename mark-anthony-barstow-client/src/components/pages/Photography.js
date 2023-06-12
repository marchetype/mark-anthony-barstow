import React from 'react';
import igLogo from '../../assets/images/instagram-icon.png';

export default function Photography() {
    return (
        <div className='photo-section container-fluid'>
            <div className='row'>
                <section className='col-12 col-md-3'>
                    <nav className=''>
                        <h4>External Links</h4>
                        <div className='container-fluid'>
                            <a
                            href='https://www.instagram.com/baarstow/' target='_blank' rel='noreferrer' className='row align-items-center'>
                            {/* GH Logo element goes here */}
                            <img src={igLogo} alt='Instagram Logo' className='mini-logo-ig col-2'/>
                            <h5 className='col-2'>Baarstow</h5>
                            </a>
                        </div>
                    </nav>
                </section>
            </div>
            <main className='photo-showcase'>
            {/* the main section may be able to provide two displays, one for smaller photos and one to show them in a larger size */}
                <section className='primary-display'>

                </section>
                <section className='secondary-display'>

                </section>
            </main>
        </div>
    );
}