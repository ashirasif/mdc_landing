function Navbar() {
  const navs=[
    'Home',
    'About Us',
    'Services',
    'Our Team',
    'Careers'
  ]
  return (
    <div className="flex justify-between items-center w-full bg-secondary px-8 border border-borderColor rounded-lg">
      <img src="/Logo.png" className="w-[5.773rem]" />
      <div className="flex gap-8 w-2/3 h-12 my-auto self-stretch ">
        <div className="flex gap-4 w-2/3 self-stretch">
          {
            navs.map((nav, i)=>{
              return(
              <div key={i} className="flex justify-center items-center w-1/5 self-stretch ">
            <span className="font-inter text-white">{nav}</span>
          </div>
              )
            })
          }
        </div>

        <div className='w-1/3 rounded-lg border cursor-pointer bg-white flex gap-4 justify-center items-center'>
        <span className='text-black font-medium'>Get in touch now</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={'1.5rem'} viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
      </div>
      </div>      
    </div>
  )
}

export default Navbar
