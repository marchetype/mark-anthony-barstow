import React from 'react';
import ghLogo from '../../assets/images/vectors/github-sign.png'
import CodeProjects from '../CodeProjects';

export default function Code() {
    return (
        <div className='border-bottom'>
            <div className='container-fluid bright-gray-4'>
                <section className='barrier'/>
                <div className='row'>
                    <aside className='col-12 col-md-3'>
                    {/* this aside section will provide links to GitHub, other code-related sites */}
                        <nav className=''>
                            <h4>External Links</h4>
                            <div className='container-fluid'>
                                <a
                                href='https://github.com/marchetype' target='_blank' rel='noreferrer' className='row align-items-center'>
                                {/* GH Logo element goes here */}
                                <img src={ghLogo} alt='GitHub Logo' className='mini-logo-gh col-2'/>
                                <h5 className='col-2'>marchetype</h5>
                                </a>
                            </div>
                        </nav>
                    </aside>

                    <CodeProjects/>
            
                </div> 
                <section className='barrier'/>
            </div>
        </div>
        
    );
}