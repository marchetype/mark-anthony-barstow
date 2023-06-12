import React from 'react';
import ghLogo from '../../assets/images/github-sign.png'

export default function Code() {
    return (
        <div className='code-section'>
                <aside className=''>
                {/* this aside section will provide links to GitHub, other code-related sites */}
                    <nav className='w-10'>
                        <h4>External Links</h4>
                        <div className='align-items-center'>
                        {/* GH Logo element goes here */}
                            <img src={ghLogo} alt='GitHub Logo' className='mini-logo'/>
                            <a
                            href='https://github.com/marchetype' target='_blank' rel='noreferrer'>
                            marchetype
                            </a>
                    </div>
                    </nav>
                    
                </aside>
            <div className='aside-border'/>
            <main className='code-highlights container text-center'>
            {/* the main section will include all latest projects in a SCROLLABLE GRID */}

            </main>
        </div>
    );
}