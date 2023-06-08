import React from 'react';
import ghLogo from '../../assets/images/github-sign.png'

export default function Code() {
    return (
        <div className='code-section'>
            <aside className='external-links nav flex-column'>
            {/* this aside section will provide links to GitHub, other code-related sites */}
                <div className='external-linker nav item'>
                    {/* GH Logo element goes here */}
                        <img src={ghLogo} alt='GitHub Logo' className='mini-logo'/>
                        <a
                        href='https://github.com/marchetype' target='_blank' rel='noreferrer'>
                        marchetype
                        </a>
                </div>
                <div className='external-linker nav item'>
                    {/* GH Logo element goes here */}
                        <img src={ghLogo} alt='GitHub Logo' className='mini-logo'/>
                        <a
                        href='https://github.com/marchetype' target='_blank' rel='noreferrer'>
                        marchetype
                        </a>
                </div>
                <div className='external-linker nav item'>
                    {/* GH Logo element goes here */}
                        <img src={ghLogo} alt='GitHub Logo' className='mini-logo'/>
                        <a
                        href='https://github.com/marchetype' target='_blank' rel='noreferrer'>
                        marchetype
                        </a>
                </div>
            </aside>
            <main className='code-highlights container text-center'>
            {/* the main section will include all latest projects in a SCROLLABLE GRID */}
                <section className='row'>
                    <div className='col bordered code-proj'>
                        <img className='code-proj-img'/>
                        <section className='code-proj-desc'>

                        </section>
                    </div>
                    <div className='col bordered'>

                    </div>
                    <div className='col bordered'>

                    </div>
                </section>
            </main>
        </div>
    );
}