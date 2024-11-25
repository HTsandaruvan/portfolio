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
       image='/images/Certificates/c2.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c3.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c4.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c5.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c6.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c7.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c8.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c9.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c10.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c11.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c12.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c13.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c14.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c15.png'
       name = "Talkur"
       role = "Web Developer"/>
       <CertificateAbout 
       image='/images/Certificates/c16.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c17.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c18.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c19.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c20.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c21.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c22.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c23.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c24.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c25.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c26.png'
       name = "Talkur"
       role = "Web Developer"/>
        <CertificateAbout 
       image='/images/Certificates/c27.png'
       name = "Talkur"
       role = "Web Developer"/>
      
       
    </Carousel>
  )
}

export default CertificatesSlider