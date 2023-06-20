import React from 'react';
import homepageImg from '../../assets/images/homepage.jpg';

// import backgroundImage from '../../assets/images/homepage.jpg';

export default function Home({handlePageChange}) {
    
    return (
        <div  style={{ backgroundImage:`url(${homepageImg})`}}  className='homepage container-fluid charcoal'>                
            <div className='row'>
                <div className='col-8'/>
                <div className='col-4'>
                    <div className='title-card bright-gray-5'>
                        <div className='home-letter d-flex flex-row justify-content-center'>
                            <h2 className='home-letter-m row'>M</h2>
                        </div>
                        <div className='home-letter d-flex flex-row justify-content-center'>
                            <h2 className='home-letter-a row'>A</h2>
                        </div>
                        <div className='home-letter d-flex flex-row justify-content-center'>
                            <h2 className='home-letter-b row'>B</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}