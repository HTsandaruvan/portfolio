import React from 'react';
import Image from "next/image";
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
const About = () => {
    return (
        <div className='bg-[#121121] pb-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center '>
               <div>
                    <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1.5rem]'>
                        ABOUT ME 
                    </h1>
                    <h2 className='text-[40px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] 
                    font-bold text-white'>
                        Transforming <span className='text-yellow-400'>Visions</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos, adipisci labore dolorem totam illum est sint iusto, 
                            neque blanditiis incidunt quis doloribus velit voluptatem omnis voluptate a sunt sed.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                    <button className={"px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[20px] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2"}>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                    </button>
               </div>
               <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative  '>
               <Image
                    src={"/images/user-profile.png"} alt="user" layout="fill" objectFit='contain' className="object-contain absolute w-[100%] h-[100%] z-[11] " />
                <div className='absolute w-[92%] h-[97%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-1.8rem]'>

                </div>
               </div>
              
            </div>
        </div>
    );
};

export default About;