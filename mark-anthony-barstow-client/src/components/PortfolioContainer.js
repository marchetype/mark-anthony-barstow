import React, { useState } from 'react';

import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        //switch statement for handling page changes
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            default:
                return <Home />;
        };
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}