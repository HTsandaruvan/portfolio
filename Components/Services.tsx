
import { CommandLineIcon } from '@heroicons/react/24/solid'
import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt=[8rem] pb-[5rem]'>
        <p className='heading'>
            My <span className='text-yellow-400'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white '>
            <div>
              <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
              uppercase font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[12rem] h-[8rem] mx-auto text-[#d3fae8] '/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5] mb-[1.5rem]'>
                  Frontend
                </h1>
                <p className='text-[15px] text-[#d3d2d2]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis tempore voluptatem, deleniti nam odio 
                  ipsa distinctio dolore, labore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, 
                  tempora aperiam voluptates dolore vel animi? Maxime deleniti non inventore ratione sunt.
                </p>
              </div>
            </div>
            <div>
              <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300
              uppercase font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[12rem] h-[8rem] mx-auto text-[#d3fae8] '/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5] mb-[1.5rem]'>
                  Backend
                </h1>
                <p className='text-[15px] text-[#d3d2d2]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis tempore voluptatem, deleniti nam odio 
                  ipsa distinctio dolore, labore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, 
                  tempora aperiam voluptates dolore vel animi? Maxime deleniti non inventore ratione sunt.
                </p>
              </div>
            </div>
            <div>
              <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 
              uppercase font-semibold text-center p-[2rem]'>
                <CommandLineIcon className='w-[12rem] h-[8rem] mx-auto text-[#d3fae8] '/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5] mb-[1.5rem]'>
                  Full-Stack
                </h1>
                <p className='text-[15px] text-[#d3d2d2]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis tempore voluptatem, deleniti nam odio 
                  ipsa distinctio dolore, labore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, 
                  tempora aperiam voluptates dolore vel animi? Maxime deleniti non inventore ratione sunt.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services