import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='topbar'>
            <ul className='nav'>
                <li>
                    <a
                    href='#home'
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}
                    >
                    HOME
                    </a>
                </li>
                <li>
                    <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                    >
                    ABOUT
                    </a>
                </li>
                <li>
                    <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                    >
                    CONTACT
                    </a>
                </li>
            </ul>
            <div className='logo-section'>
                <h2
                className='logo'
                onClick={() => handlePageChange('Home')}>
                    MARK BARSTOW
                </h2>
            </div>
        </div>
    )
}

export default NavTabs;