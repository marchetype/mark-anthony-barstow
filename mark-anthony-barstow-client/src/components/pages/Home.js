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
        <div className='homepage container-fluid'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                    <div className='row'>
                        <h2 className='home-letter-m col-4'>M</h2>
                        <h2 className='home-letter-a col-4'>A</h2>
                        <h2 className='home-letter-b col-4'>B</h2>
                    </div>
                </div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className='col-4'/>
                <h3 className='col-4'>Creativity and Design</h3>
                <div className='col-4'/>
            </div>
            
            
        </div>
    )
}