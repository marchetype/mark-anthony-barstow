import React from 'react';
import ghLogo from '../../assets/images/github-sign.png'

export default function Code() {
    return (
        <div className='container-fluid'>
                <aside className='sm-col-12 md-col-2'>
                {/* this aside section will provide links to GitHub, other code-related sites */}
                    <nav className=''>
                        <h4>External Links</h4>
                        <div className=''>
                            <a
                            href='https://github.com/marchetype' target='_blank' rel='noreferrer' className='d-flex flex-row align-items-center'>
                            {/* GH Logo element goes here */}
                            <img src={ghLogo} alt='GitHub Logo' className='mini-logo'/>
                            <h5>marchetype</h5>
                            </a>
                        </div>
                    </nav>
                </aside>
            <main className='col-'>
            {/* the main section will include all latest projects in a SCROLLABLE GRID */}

            </main>
        </div>
    );
}