import React from 'react';
import igLogo from '../../assets/images/vectors/instagram-icon.png';
import PhotographyCarousel from '../PhotographyCarousel';
// import CamA from '../../assets/images/photoImages/Camera A FINAL Brightened.png';
// import CamB from '../../assets/images/photoImages/Camera B FINAL Brightened.png';
// import CamC from '../../assets/images/photoImages/Camera C FINAL Brightened.png';
// import CamD from '../../assets/images/photoImages/Camera D FINAL Brightened.png';
// import CamE from '../../assets/images/photoImages/Camera E FINAL Brightened.png';
// import CamF from '../../assets/images/photoImages/Camera F FINAL Brightened.png';

export default function Photography() {
    return (
        <div className='photo-section container-fluid bright-gray-4'>
            <section className='barrier'/>
            <div className='row'>
                <section className='col-3'>
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
                <section className='primary-display col-9 justify-content-center'>
                    <PhotographyCarousel/>
                </section>

            </div>
            <main className='photo-showcase col-12'>
            {/* the main section may be able to provide two displays, one for smaller photos and one to show them in a larger size */}
                <div className='row'>
                    
                    <section className='secondary-display col-12 col-md-6'>

                    </section>
                    <section className='secondary-display col-12 col-md-6'>

                    </section>
                </div>

            </main>
            <section className='barrier'/>
        </div>
    );
}