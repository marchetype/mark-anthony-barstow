import React from 'react';
import bootstrapLogo from '../assets/images/bootstrap-logo.svg';
import reactLogo from '../assets/images/react-logo-2.svg';
import jsLogo from '../assets/images/javascript-logo.svg'
import htmlLogo from '../assets/images/html-logo.svg';
import cssLogo from '../assets/images/css-logo.svg';

export default function Footer() {
    return(
        <div className='floater'>
            <footer className='container-fluid row navigation-styles'>
                <section className='barrier'/>
                <div className='col-12 col-md-4'>
                    <h6 className='row justify-content-center'>Technologies used</h6>
                    <div className='row justify-content-center'>
                        <div className='col-3'/>
                        <p className='col-4'>
                        <section className='row logo-section'>
                            <img src={bootstrapLogo} alt='Bootstrap 5' className='footer-logo'/>
                            <img src={reactLogo} alt='React.js' className='footer-logo'/>
                            <img src={jsLogo} alt='JavaScript' className='footer-logo'></img>
                            <img src={cssLogo} alt='CSS3' className='footer-logo'/>
                            <img src={htmlLogo} alt='HTML5' className='footer-logo'/>
                        </section>
                        </p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <h6 className='row justify-content-center'>Site Created by Mark Barstow</h6>
                    <div className='row justify-content-center'>
                        <div className='col-3'/>
                        <p className='col-4'>GitHub: <a href='https://github.com/marchetype' target='_blank' rel='noreferrer'>marchetype</a></p>
                    </div>
                </div>
                {/* this section only needed for spacing at the moment. */}
                <div className='col-12 col-md-4'>
                </div>

            </footer>
        </div>
        
    )
}