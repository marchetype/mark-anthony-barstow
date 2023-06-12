import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='container-fluid'>
            <div className='navbar bg-light'>
                <ul className='col-12 col-md-7 d-flex justify-content-around'>
                    <li>
                        <a 
                        href='#code'
                        onClick={() => handlePageChange('Code')}
                        className={currentPage === 'Code' ? 'nav-link-active' : 'nav-link'}
                        >
                        CODE
                        </a>
                    </li>
                    <li>
                        <a
                        href='#music'
                        onClick={() => handlePageChange('Music')}
                        className={currentPage === 'Music' ? 'nav-link-active' : 'nav-link'}
                        >
                        MUSIC
                        </a>
                    </li>
                    <li>
                        <a
                        href='#photography'
                        onClick={() => handlePageChange('Photography')}
                        className={currentPage === 'Photography' ? 'nav-link-active' : 'nav-link'}
                        >
                        PHOTOGRAPHY
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
                <div className='navbar-brand float-right'>
                        <a
                        href='#home'
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}
                        >
                            <h2
                            className='logo'>
                                MARK BARSTOW
                            </h2>
                        </a>
                    </div>
            </div>

        </div>
    )
}

export default NavTabs;