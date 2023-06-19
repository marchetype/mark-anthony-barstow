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
                    <div className='justify-content-around'>
                        <div className='home-letter d-flex flex-row align-items-center'>
                            <h2 className='home-letter-m row'>M</h2>
                            <h3 className='child-letters'>ark</h3>
                        </div>
                        <div className='home-letter d-flex flex-row align-items-center'>
                            <h2 className='home-letter home-letter-a row'>A</h2>
                            <h3 className='child-letters'>nthony</h3>
                        </div>
                        <div className='home-letter d-flex flex-row align-items-center'>
                            <h2 className='home-letter home-letter-b row'>B</h2>
                            <h3 className='child-letters'>arstow</h3>
                        </div>

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