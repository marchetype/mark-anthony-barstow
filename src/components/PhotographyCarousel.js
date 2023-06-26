import React from 'react';

import camA from '../assets/images/photoImages/Camera A FINAL Brightened.png';
import camB from '../assets/images/photoImages/Camera B FINAL Brightened.png';
import camC from '../assets/images/photoImages/Camera C FINAL Brightened.png'
// import camD from '../assets/images/photoImages/Camera D FINAL Brightened.png'
// import camE from '../assets/images/photoImages/Camera E FINAL Brightened.png'
// import camF from '../assets/images/photoImages/Camera F FINAL Brightened.png'


export default function RenderPhotographyCarousel() {
    
    // const projectsArr = [
    //     {
    //         id: 0,
    //         thumbnail: camA,
    //         alt: 'camA',
    //     },
    //     {
    //         id: 1,
    //         thumbnail: camB,
    //         alt: 'camB',
    //     },
    //     {
    //         id: 2,
    //         thumbnail: camC,
    //         alt: 'camC',
    //     },
    //     {
    //         id: 3,
    //         thumbnail: camD,
    //         alt: 'camD',
    //     },
    //     {
    //         id: 4,
    //         thumbnail: camE,
    //         alt: 'camE',
    //     },
    //     {
    //         id: 5,
    //         thumbnail: camF,
    //         alt: 'camF',
    //     },
    // ]

    
    return(
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={camA} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={camB} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={camC} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}