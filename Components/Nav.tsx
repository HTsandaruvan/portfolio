
import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react'
import { BsEmojiSmileFill } from "react-icons/bs";




interface Props {
    openNav:() => void
}

const Nav = ({openNav}:Props) => {

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[8vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="  flex-[0.5] cursor-pointer text-[25px] text-white font-bold">
                Harsha 
                <span className=" inline-flex text-yellow-300 ml-1"><BsEmojiSmileFill className=''/></span>
            </h1>
            
            <div className="nav-link"><a href="#services">Services</a></div>
            <div className="nav-link"><a href="#about">About</a></div>
            <div className="nav-link"><a href="#project">Project</a></div>
            <div className="nav-link"><a href="#contact">Contact</a></div>
            <div onClick={openNav}>
                <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
            </div>
        </div>
    </div>
  )
}

export default Nav;