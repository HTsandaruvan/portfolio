import React from 'react'
import Particle from './Particle'
import TextAnimate from './TextAnimate'
import Image from "next/image";
import {ArrowDownTrayIcon, PlayCircleIcon} from "@heroicons/react/16/solid";


const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/home-background.png')] mt-[5vh] bg-cover bg-center bg-blend-overlay bg-black/50">
        <Particle/>
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
                <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                    HI, I&apos;M <span className='text-yellow-400'>HARSHA!</span>
                </h1>
                <TextAnimate/>
                <p className="mt-[1.5rem] text-[20px] text-[#ffffff92] ">
                    lorum ipsum dolor sit amet consectetur adipisicing elit.
                    lorum ipsum dolor sit amet consectetur adipisicing elit.
                    lorum ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center  sm:space-x-6">
                    <button className={"px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[20px] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2"}>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                    </button>

                    <button className={"flex items-center space-x-2 "}>
                        <PlayCircleIcon className="w-[4rem] h-[4rem hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                        <p className={"text-[20px] font-semibold text-white"}>
                            Watch The Video
                        </p>
                    </button>
                </div>
            </div>
            <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
                <Image
                    src={"/images/about-me-2.png"} alt="user" layout="fill" className="object-cover rounded-full" />
            </div>
        </div>

    </div>
  )
}

export default Hero