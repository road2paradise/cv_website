import React from 'react';
import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';
import './carousel.styles.scss';

const image1 = require('../../assets/photography/img_1.jpg');
const image2 = require('../../assets/photography/img_2.jpg');
const image3 = require('../../assets/photography/img_3.jpg');
const image4 = require('../../assets/photography/img_4.jpg');
const image5 = require('../../assets/photography/img_5.jpg');
const image6 = require('../../assets/photography/img_6.jpg');
const image7 = require('../../assets/photography/img_7.jpg');
const image8 = require('../../assets/photography/img_8.jpg');



const CarouselPhotos = () => {
    return (
        <div className = 'carousel-container'>
            <Carousel
            interval = {null}
            keyboard = {false}
            >
                <Carousel.Item>
                    <Image
                    className = "photos"
                    src = {image1}
                    alt = "first slide"
                    />
                    <Carousel.Caption>
                        <h3> Auckland CBD, Stanley Bay July 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image2}
                    alt = "second slide"
                    />
                    <Carousel.Caption>
                        <h3> Asakusa Temple and Tokyo Sky tree, Tokyo, Japan January 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image3}
                    alt = "third slide"
                    />
                    <Carousel.Caption>
                        <h3> Gibbs Sculpture Park, Kaipara Coast, Auckland Febuary 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image4}
                    alt = "fourth slide"
                    />
                    <Carousel.Caption>
                        <h3> Northcote Point view of the Auckland Harbour Bridge, Northcote Point, Auckland June 2019  </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image5}
                    alt = "fifth slide"
                    />
                    <Carousel.Caption>
                        <h3> Museum Forecourt view of Auckland CBD silhouette at Twilight, Auckland June 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image6}
                    alt = "sixth slide"
                    />
                    <Carousel.Caption>
                        <h3> Mount Eden Twilight View of Auckland CBD, Auckland January 2020 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image7}
                    alt = "seventh slide"
                    />
                    <Carousel.Caption>
                        <h3> Muriwai cliff-face at twilight, Auckland, Febuary 2020</h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = {image8}
                    alt = "eighth slide"
                    />
                    <Carousel.Caption>
                        <h3> Muriwai Gannet Colony Sunet view, Auckland Febuary 2020 </h3>
                    </Carousel.Caption>
                </Carousel.Item>                              
            </Carousel>
        </div>
    )
}

export default CarouselPhotos;