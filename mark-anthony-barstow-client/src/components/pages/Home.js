import React, { useState } from 'react';

import Code from './home-list-content/Code';
import Music from './home-list-content/Music';
import Photography from './home-list-content/Photography';
// import backgroundImage from '../../assets/images/homepage.jpg';

export default function Home() {
    
    function PortfolioList({ handleContentChange }) {
        return (
            <ul>
                <li>
                    <h3
                    onClick={() => handleContentChange('Code')}
                    >
                    CODE
                    </h3>
                </li>
                <li>
                    <h3
                    onClick={() => handleContentChange('Photography')}
                    >
                    PHOTOGRAPHY
                    </h3>
                </li>
                <li>
                    <h3
                    onClick={() => handleContentChange('Music')}
                    >
                    MUSIC
                    </h3>
                </li>
            </ul>
        )
    }

    const [currentContent, setCurrentContent] = useState('PortfolioList');
    
    const renderContent = () => {
        //switch statement for handling portfolio content display
        switch (currentContent) {
            case 'Code':
                return <Code />;
            case 'Photography':
                return <Photography />;
            case 'Music':
                return <Music />;
            default:
                return <PortfolioList />;
        }
    }

    const handleContentChange = (content) => setCurrentContent(content);

    return (
        <div className='home-page'>
            <div currentContent={currentContent} handleContentChange={handleContentChange}/>
            {renderContent()}
        </div>
    );
}