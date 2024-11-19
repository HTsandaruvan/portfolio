import React from 'react'
import SkillItems from './SkillItems'
import SkillLanguages from './SkillLanguages'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Education & <span className='text-yellow-400'>Skills</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillItems title="React Developer" year="2014 - 2018"/>
                <SkillItems title="Mern Stack Developer" year="2018 - 2019"/>
                <SkillLanguages skill1="HTML" skill2="CSS" skill3="JavaScript" level1="w-[91%]" level2="w-[80%]" level3="w-[80%]"/>
            </div>
            <div>
                <SkillItems title="Next Js Developer" year="2020 - 2021"/>
                <SkillItems title="Node Js Developer" year="2022 - 2024"/>
                <SkillLanguages skill1="Next Js" skill2="React Js" skill3="TypeScript" level1="w-[85%]" level2="w-[900%]" level3="w-[95%]"/>
            </div>
        </div>
    </div>
  )
}

export default Skills