'use client'
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import React, { useState } from "react";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Project from "@/Components/Project";


const HomePage =() => {
  
  const [nav,setNav] = useState(false);
  const openNav = ()=>setNav(true);
  const closeNav = () =>setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/*  Navbar */}
        <MobileNav nav= {nav} closeNav = {closeNav}/>
        <Nav openNav = {openNav}/>
        {/*  Hero Section */}
        <Hero/>
      </div>
      <div className={"relative z-[30]"}>
      {/*  About Section */}
        <About/>

      {/*  Services Section */}
        <Services/>

        <Skills/>
       <Project/>
        
      </div>
       
       
      
    </div>
  );
}
export default HomePage