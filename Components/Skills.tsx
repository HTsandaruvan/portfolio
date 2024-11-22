import React from 'react'
import SkillItems from './SkillItems'
import SkillLanguages from './SkillLanguages'


const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Education & <span className='text-yellow-400'>Skills</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-2 md:grid-cols-1 gap-[2rem] items-center'>
            <div>
            <SkillItems 
                    title="  Lithan Academy  l Singapore"  
                    year="2022 - 2023"
                    description = " I have completed full-stack developer level with a year of experience and also i have worked with projects through full SDLC process."/>
                <SkillItems 
                    title=" Trainee Web Developer @  Tech360.tv  | Singapore"  
                    year="2023 Nov - 2024 Jan"
                    description = "I have experience in website testing, error solving and web development."/>
                <SkillItems 
                    title=" FlexyCode (PVT) LTD · Internship | Sri Lanka" 
                    year=" 2024 June  - 2023 Aug"
                    description = " I have successfully completed the training on FlexyCode."/>
                <SkillItems 
                    title=" Brand Marketing Supervisor - Part Time @  Coca-Cola, Unilever" 
                    year=" 2022 June  - Present"
                    description = "I have worked on brand promotion event management and team handling"/>           
            </div>
            <div>
                <SkillLanguages skill1="Next Js" skill2="React Js" skill3="TypeScript" level1="w-[85%]" level2="w-[90%]" level3="w-[95%]"/>
                <SkillLanguages skill1="Next Js" skill2="React Js" skill3="TypeScript" level1="w-[85%]" level2="w-[90%]" level3="w-[95%]"/>
                <SkillLanguages skill1="Next Js" skill2="React Js" skill3="TypeScript" level1="w-[85%]" level2="w-[90%]" level3="w-[95%]"/>
                <SkillLanguages skill1="Next Js" skill2="React Js" skill3="TypeScript" level1="w-[85%]" level2="w-[90%]" level3="w-[95%]"/>
            </div>
        </div>
    </div>
  )
}

export default Skills