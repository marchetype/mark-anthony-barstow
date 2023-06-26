import { React, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import camA from '../assets/images/photoImages/Camera A FINAL Brightened.png';
import camB from '../assets/images/photoImages/Camera B FINAL Brightened.png';
import camC from '../assets/images/photoImages/Camera C FINAL Brightened.png'
import camD from '../assets/images/photoImages/Camera D FINAL Brightened.png'
import camE from '../assets/images/photoImages/Camera E FINAL Brightened.png'
import camF from '../assets/images/photoImages/Camera F FINAL Brightened.png'


export default function PhotographyCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
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
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='item-c'>
                <img
                className='d-block w100 photo-c'
                src={camA}
                alt='First slide'
                /> 
            </Carousel.Item>
            <Carousel.Item className='item-c'>
                <img
                className='d-block w100 photo-c'
                src={camB}
                alt='First slide'
                /> 
            </Carousel.Item>
            <Carousel.Item className='item-c'>
                <img
                className='d-block w100 photo-c'
                src={camC}
                alt='First slide'
                /> 
            </Carousel.Item>
            <Carousel.Item className='item-c'>
                <img
                className='d-block w100 photo-c'
                src={camD}
                alt='First slide'
                /> 
            </Carousel.Item>
            <Carousel.Item className='item-c'>
                <img
                className='d-block w100 photo-c'
                src={camE}
                alt='First slide'
                /> 
            </Carousel.Item>
            <Carousel.Item className='item-c'>
                <img
                className='d-block w100 photo-c'
                src={camF}
                alt='First slide'
                /> 
            </Carousel.Item>
            
            
        </Carousel>
    )
}