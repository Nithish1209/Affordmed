import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const images = [
    'images/im1.jpeg',
    'images/im2.jpeg',
    'images/im3.jpeg',
    'images/im4.jpeg',
    'images/im5.jpeg'
    // Add more image paths here
  ];

  return (
    <div className='bodybanner'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
