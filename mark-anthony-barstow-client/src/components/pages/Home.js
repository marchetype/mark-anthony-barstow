import React from 'react';


// import backgroundImage from '../../assets/images/homepage.jpg';

export default function Home({handlePageChange}) {
    


/*     const [currentContent, setCurrentContent] = useState('PortfolioList');
    
    const renderContent = () => {
        //switch statement for handling portfolio content display
        switch (currentContent) {
            case 'PortfolioList':
                return <PortfolioList />;
            case 'Code':
                return <Code />;
            case 'Photography':
                return <Photography />;
            case 'Music':
                return <Music />;
            default:
                return <PortfolioList />;
        }
    } */

    // const handleContentChange = (content) => setCurrentContent(content);

    return (
        <div className='homepage'>
            <ul>
                <li>
                    <a
                    href='#code'
                    // onClick={() => handlePageChange('Code')}
                    >
                    CODE
                    </a>
                </li>
                <li>
                    <a
                    href='#photography'
                    // onClick={() => handlePageChange('Photography')}
                    >
                    PHOTOGRAPHY
                    </a>
                </li>
                <li>
                    <a
                    href='#music'
                    // onClick={() => handlePageChange('Music')}
                    >
                    MUSIC
                    </a>
                </li>
            </ul>

        </div>
    );
}