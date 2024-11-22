"use client"
import React, { useEffect } from 'react'

import Particle from './Particle'
import TextAnimate from './TextAnimate'
import Image from "next/image";
import {EnvelopeIcon} from "@heroicons/react/16/solid";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import AOS from "aos";
import 'aos/dist/aos.css';
import {motion} from 'framer-motion'
const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
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
                    A highly motivated and detail-oriented trainee software engineer seeking to use my 
                    expertise in <b> Software development,Web app development, Cloud computing, Cyber security, 
                    Computer networking, Data analytics and Computer programming </b> to provide innovative solutions and outstanding customer service at your Company.
                </p>
                <motion.div
                initial={{ opacity:0, y:100 }}
                animate ={{opacity:1, y:0}}
                transition={{
                    duration:0.3, 
                    type:"spring",
                    stiffness:125,
                    damping: 10,
                    }} 
                className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center  sm:space-x-6">
                     <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                        <Link 
                        href={"#"} 
                        className='px-4 py-3 hover:bg-yellow-400 transition-all rounded-full gap-2 duration-200 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2'>
                            Connect<EnvelopeIcon className="w-[1.6rem] h-[1.7rem] text-black"/> </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                        <Link 
                        href={"#"} 
                        className='px-4 py-3 hover:bg-yellow-400 transition-all rounded-full gap-2 duration-200 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2'>
                            <FaLinkedin className="w-[1.6rem] h-[1.7rem] text-black"/> </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                        <Link 
                        href={"#"} 
                        className='px-4 py-3 hover:bg-yellow-400 transition-all rounded-full gap-2 duration-200 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2'>
                            <FaGithub className="w-[1.6rem] h-[1.7rem] text-black"/> </Link>
                    </motion.div>      
                </motion.div>
            </div>
            <motion.div
            initial={{ opacity:0,scale:0}}
            animate ={{opacity:1, scale:1}}
            transition={{
                duration:0.3, 
                type:"spring",
                stiffness:125,
                damping: 10,}}>
                <motion.div
                animate={{
                    y: [0, -20, 0], // Move up 30px, then back down
                }}
                transition={{
                    duration: 2,  // Duration of one cycle (in seconds)
                    repeat: Infinity,  // Repeat the bounce infinitely
                    repeatType: "loop", // Loop animation continuously
                    ease: "easeInOut",  // Smooth bounce effect
                }}
                className="w-[500px] hidden  relative lg:flex items-center rounded-full h-[500px] shadow-xl">
                    <Image
                    src={"/images/about-me-4.png"} alt="user" layout="fill" className="object-cover rounded-full shadow-2xl shadow-green-500" />
                </motion.div>
            </motion.div>
        </div>

    </div>
  
  )
}

export default Hero