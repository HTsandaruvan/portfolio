import React from 'react'
import CertificatesSlider from './CertificatesSlider'

const Certificates = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            My <span className='text-yellow-400'>Certificates</span>
        </h1>
        <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto '>
            {/* Slider*/}
            <CertificatesSlider/>
        </div>
    </div>
  )
}

export default Certificates