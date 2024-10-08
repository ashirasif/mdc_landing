function Navbar() {
  const navs=[
    'Home',
    'About Us',
    'Services',
    'Our Team',
    'Careers'
  ]
  return (
    <div className="flex justify-between  w-full">
      <img src="/Logo.png" className="w-[5.773rem]" />
      <div className="flex gap-8 w-2/3 h-12 my-auto self-stretch ">
        <div className="flex gap-4 w-2/3 self-stretch">
          {
            navs.map((nav, i)=>{
              return(
              <div className="flex justify-center items-center w-1/5 self-stretch ">
            <span className="font-inter text-white">{nav}</span>
          </div>
              )
            })
          }
        </div>

        <div className="flex justify-center items-center border w-2/5 cursor-pointer bg-white rounded-lg">
          <span className="font-inter font-medium text-black">Book Free Consultation Call</span>
        </div>
      </div>      
    </div>
  )
}

export default Navbar
