import React from 'react';
import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';
import './carousel.styles.scss';



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
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_1.jpg"
                    alt = "first slide"
                    />
                    <Carousel.Caption>
                        <h3> Auckland CBD, Stanley Bay July 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_2.jpg"
                    alt = "second slide"
                    />
                    <Carousel.Caption>
                        <h3> Gibbs Sculpture Park, Kaipara Coast, Auckland Febuary 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_3.jpg"
                    alt = "third slide"
                    />
                    <Carousel.Caption>
                        <h3> Northcote Point view of the Auckland Harbour Bridge, Northcote Point, Auckland June 2019  </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_4.jpg"
                    alt = "fourth slide"
                    />
                    <Carousel.Caption>
                        <h3> Museum Forecourt view of Auckland CBD silhouette at Twilight, Auckland June 2019 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_5.jpg"
                    alt = "fifth slide"
                    />
                    <Carousel.Caption>
                        <h3> Mount Eden Twilight View of Auckland CBD, Auckland January 2020 </h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_6.jpg"
                    alt = "sixth slide"
                    />
                    <Carousel.Caption>
                        <h3> Muriwai cliff-face at twilight, Auckland, Febuary 2020</h3>
                    </Carousel.Caption>
                </Carousel.Item>               
                <Carousel.Item>
                    <img
                    className = "photos"
                    src = "https://s3-ap-southeast-2.amazonaws.com/nguyen-kenny.com/photos/img_7.jpg"
                    alt = "seventh slide"
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