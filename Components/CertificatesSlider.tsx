import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CertificateAbout from './CertificateAbout';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CertificatesSlider = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass="item">
        
       <CertificateAbout 
       image='/images/about-me-2.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/about-me-2.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/about-me-2.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/about-me-2.png'
       name = "Talkur"
       role = "Web Developer"/>
    </Carousel>
  )
}

export default CertificatesSlider