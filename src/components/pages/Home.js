import React from 'react';
import homepageImg from '../../assets/images/homepage.jpg';

// import backgroundImage from '../../assets/images/homepage.jpg';

export default function Home({handlePageChange}) {
    
    return (
        <div  style={{ backgroundImage:`url(${homepageImg})` }}  className='homepage container-fluid'>                
            <div className='row'>
                <div className='col-4'>
                    <div>
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
            </div>
        </div>
    )
}