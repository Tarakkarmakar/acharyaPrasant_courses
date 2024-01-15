import React from 'react'
import { FaCircle } from "react-icons/fa6";
const Banner = () => {
  return (
<div className='flex bg-[#1e293b] h-[57px] w-full justify-center items-center font-medium pl-3 pr-5'>

        <div className='flex flex-row h-9/12 items-center text-white w-full text-wrap justify-center items-center'>
<FaCircle  color='red'/><span className='text-[9px] sm:text-sm md:text-md lg:text-[1rem] ml-3 mr-6'>
Just the right start to your New Year! Support Acharya Prashant's Work</span>
<button className='p-2 flex flex-row  items-center justify-center text-[8px] sm:text-sm md:text-md lg :text-md 
border-white border-2 h-[1.8rem] rounded-md w-[100px] sm:w-[130px] md:w-[100px] lg:w-[100px]'>Click Here</button>
        </div>
      
    </div>
  )
}

export default Banner
