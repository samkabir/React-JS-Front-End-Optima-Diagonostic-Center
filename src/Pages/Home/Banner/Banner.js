import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/1.jpg';
import banner2 from '../../../images/Banner/2.jpg';
import banner3 from '../../../images/Banner/3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Our Doctors and experts are the best there is in the Country! </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Operating everyday at Maximum Capacity</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>State of the art Tech!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;