import React from 'react';
import bootstrapLogo from '../assets/images/vectors/bootstrap-logo.svg';
import reactLogo from '../assets/images/vectors/react-logo-2.svg';
import jsLogo from '../assets/images/vectors/javascript-logo.svg'
import htmlLogo from '../assets/images/vectors/html-logo.svg';
import cssLogo from '../assets/images/vectors/css-logo.svg';

export default function Footer() {
    return(
        <div className='slate-gray'>
            <footer className='container-fluid row'>
                <section className='barrier'/>
                <div className='col-12 col-md-4'>
                    <h6 className='row justify-content-center'>Technologies used</h6>
                    <div className='row justify-content-center'>
                        <div className='col-3'/>
                        <p className='col-4'>
                        <section className='row logo-section'>
                            <img src={bootstrapLogo} alt='Bootstrap 5' className='footer-logo'/>
                            <img src={reactLogo} alt='React.js' className='footer-logo'/>
                            <img src={jsLogo} alt='JavaScript' className='footer-logo'/>
                            <img src={cssLogo} alt='CSS3' className='footer-logo'/>
                            <img src={htmlLogo} alt='HTML5' className='footer-logo'/>
                        </section>
                        </p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <h6 className='row justify-content-center'>Site created by Mark Barstow</h6>
                    <div className='row justify-content-center'>
                        <div className='col-3'/>
                        <div className='col-4 footer-gh'>
                            <p>GITHUB: <a href='https://github.com/marchetype' target='_blank' rel='noreferrer'>MARCHETYPE</a></p>
                        </div>
                    </div>
                </div>
                {/* this section only needed for spacing at the moment. */}
                <div className='col-12 col-md-4'>
                </div>

            </footer>
        </div>
        
    )
}