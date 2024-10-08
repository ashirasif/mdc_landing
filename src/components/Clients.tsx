function Clients() {
  return (
    <div className="bg-[#15151599]/60 w-full border border-[#2E2C2C] p-8 flex flex-col gap-10 rounded-[40px]">
      <div className="w-full flex flex-col gap-4 text-center text-white">
        <h2 className="font-inter font-medium text-4xl">
        Our Clients 
        </h2>
        <p className="font-inter text-lg w-11/12 mx-auto">
        MDC is proudly serving prestigious Military, Para Military, organizations in Public and Private Sector of Pakistan. It is our utmost obligation to serve them with the best products available in the market.
        </p>
      </div>
      <div className="flex gap-20 mx-auto">
        <img src="/Client-logo1.png"/>
        <img src="/Client-logo2.png"/>
        <img src="/Client-logo3.png"/>
        <img src="/Client-logo4.png"/>
      </div>
    </div>
  )
}

export default Clients
