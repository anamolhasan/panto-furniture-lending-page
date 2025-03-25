import React from 'react'
import bannerImg from '../../assets/banner.png'
import { FaSearch } from 'react-icons/fa'
const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage : `url(${bannerImg})`}}>
     <div className='md:pt-28 pt-24 px-2 text-center space-y-6 md:w-1/2 mx-auto '>
        <h1 className='text-4xl lg:text-5xl font-medium lg:leading-tight leading-snug '>Make your interior more minimalistic & modern</h1>
        <p className='text-2xl font-normal '>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <div className='relative inline-block z-30'>
          <input type="text" name="" id="" placeholder='Search furniture' className='w-full md:w-80 px-6 py-2 bg-white/25 placeholder:text-white rounded-full border border-gray-300 focus:outline-none'/>
          <div  className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer'>
            <FaSearch />
          </div>
        </div>
     </div>

     {/* bottom blur effer */}
     <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'>

     </div>

     {/* hover button for displaying box */}
     <div className='absolute bottom-40 left-24 group'>
        <button className='relative p-4 bg-white/25 rounded-full border border-1 bg-white text-xl'>
        <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex'>
          <div className='size-6 bg-red-700 border border-white rounded-full'/>
          <div className='size-6 bg-green-700 border border-white rounded-full'/>
          <div className='size-6 bg-blue-700 border border-white rounded-full'/>

          {/* tooltop arrow */}
          <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'></div>
        </div>
        </button>
     </div>
    </section>
  )
}

export default Hero