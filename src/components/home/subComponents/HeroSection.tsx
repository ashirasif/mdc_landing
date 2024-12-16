import GetInTouchButton from "./GetInTouchButton"

function HeroSection() {
  return (
    <div className='w-full flex flex-col gap-6 text-center items-center text-white p-8 rounded-lg text-lg'>
      {
      //   <div className="animated-border-box-glow relative"></div>
      //     <div className="animated-border-box after:border border-white py-4 pl-6 sm:px-4 flex items-center gap-4 relative">
      //       <div className='flex justify-center items-center'>
      //         <img src="dummy.png" className='w-6 rounded-full border border-[#D9D9D9]' />
      //         <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
      //         <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
      //         <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
      //       </div>
      //         <div className='flex items-center'>
      //           <span className='font-inter'>Trusted by 40+ companies</span>
      //           </div>
      // </div>
      }
      <h1 className='text-3xl sm:text-5xl font-bold font-inter leading-tight'>Pioneering Engineering and Technological <br /> Innovations for a Rapidly Evolving World</h1>
      <p className='font-inter text-foreground w-11/12'>
        Metallon Delta Corporation (MDC) drives engineering and technological innovation, continually seeking groundbreaking ideas and solutions. Our expert team delivers cutting-edge, cost-effective products and services. We ensure our customers receive the most viable solutions, both nationally and internationally.
      </p>
      <GetInTouchButton shadow={true}/>
    </div>
  )
}

export default HeroSection
