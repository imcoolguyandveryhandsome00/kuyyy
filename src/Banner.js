// Banner.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="/images/image2.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
                <img src="/images/image2.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
                <img src="/images/image2.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
            </div>
        </Slider>
    );
};

export default Banner;
