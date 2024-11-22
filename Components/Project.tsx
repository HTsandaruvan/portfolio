
"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from "aos";
import 'aos/dist/aos.css';

const Project = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 data-aos="fade-up" className='heading'>
            pro<span className='text-yellow-400'>ject</span>
        </h1>
        <div  className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/projects/project-1.jpeg" alt="portfolio" layout="fill" className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/projects/project-1.jpeg" alt="portfolio" layout="fill" className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/projects/project-1.jpeg" alt="portfolio" layout="fill" className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/projects/project-1.jpeg" alt="portfolio" layout="fill" className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/projects/project-1.jpeg" alt="portfolio" layout="fill" className='object-contain'/>
                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/projects/project-1.jpeg" alt="portfolio" layout="fill" className='object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project