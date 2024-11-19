import React from 'react'
interface Props{
    title: string
    year:string
}
const SkillItems = ({title,year} :Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
        <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
            {year}
        </span>
        <h1 className=' mt-[2rem] uppercase font-semibold mb-[2rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quibusdam impedit voluptatum voluptas, corporis cumque at 
            maiores quod? Non et aspernatur eaque illum id beatae fugiat voluptas quasi, iusto, ab facilis.
        </p>
    </div>
  )
}

export default SkillItems