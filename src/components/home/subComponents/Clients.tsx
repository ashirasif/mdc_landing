function Clients() {
  return (
    <div className="bg-secondary w-full after:border border-accent border p-8 flex flex-col gap-10 rounded-3xl">
      <div className="w-full flex flex-col gap-4 text-center text-white">
        <h2 className="font-inter font-medium text-4xl">
        Our Clients 
        </h2>
        <p className="font-inter sm:text-lg sm:w-11/12 mx-auto">
        MDC is proudly serving prestigious Military, Para Military, organizations in Public and Private Sector of Pakistan. It is our utmost obligation to serve them with the best products available in the market.
        </p>
      </div>
      <div className="flex gap-5 sm:gap-20 mx-auto">
        <img src="/Client-logo1.png" className="w-10 sm:w-40"/>
        <img src="/Client-logo2.png" className="w-10 sm:w-40"/>
        <img src="/Client-logo3.png" className="w-10 sm:w-40"/>
        <img src="/Client-logo4.png" className="w-10 sm:w-40"/>
      </div>
    </div>
  )
}

export default Clients
