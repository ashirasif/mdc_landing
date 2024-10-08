import React from 'react'

function HeroSection() {
  return (
    <div className='w-full flex flex-col gap-8 text-center items-center text-white'>
      <div className=' h-12 border rounded-3xl py-2 px-4 flex justify-center gap-2   '>
        <div className='flex justify-center items-center'>
          <img src="dummy.png" className='w-6 rounded-full border border-[#D9D9D9]' />
          <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
          <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
          <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
        </div>
        <div className='flex items-center '>
        <span className='font-inter'>Trusted by 40+ companies</span>
        </div>
      </div>
      <h1 className='text-5xl font-bold font-inter leading-tight'>Pioneering Engineering and Technological Innovations for a Rapidly Evolving World</h1>
      <p className='font-inter w-11/12'>
        Metallon Delta Corporation (MDC) drives engineering and technological innovation, continually seeking groundbreaking ideas and solutions. Our expert team delivers cutting-edge, cost-effective products and services. We ensure our customers receive the most viable solutions, both nationally and internationally.
      </p>
      <div className='w-52 h-14 rounded-lg border  shadow-heroBtn  bg-white flex gap-4 justify-center items-center'>
        
        <span className='text-black font-medium'>Get in touch now</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={'1.5rem'} viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                
      </div>
    </div>
  )
}

export default HeroSection
