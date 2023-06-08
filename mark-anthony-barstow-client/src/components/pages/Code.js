import React from 'react';

export default function Code() {
    return (
        <div className='code-section'>
            <aside className='external-links'>
            {/* this aside section will provide links to GitHub, other code-related sites */}
            <div
            className='github'>
                {/* GH Logo element goes here */}
                <img src='' alt='GitHub Logo'/>
                <a
                href='https://github.com/marchetype' target='_blank' rel='noreferrer'>
                    marchetype
                </a>
            </div>
            </aside>
            <main className='code-highlights'>
            {/* the main section will include all latest projects in a SCROLLABLE GRID */}

            </main>
        </div>
    );
}