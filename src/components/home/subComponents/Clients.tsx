function Clients() {
  return (
    <div className="bg-secondary w-full border-accent border p-10 flex flex-col gap-10 rounded-3xl text-lg">
      <div className="w-full flex flex-col gap-4 text-center text-white">
        <h2 className="font-inter font-medium text-4xl">
        Our Clients 
        </h2>
        <p className="font-inter text-foreground sm:text-lg sm:w-11/12 mx-auto">
        MDC is proudly serving prestigious Military, Para Military, organizations in Public and Private Sector of Pakistan. It is our utmost obligation to serve them with the best products available in the market.
        </p>
      </div>
      <div className="flex items-center gap-5 sm:gap-[88px] mx-auto">
        <img src="/image 3.svg" className="h-[50px] sm:h-[90px] w-auto" />
        <img src="/image 4.svg" className="h-[50px] sm:h-[90px] w-auto" />
        <img src="/image 5.svg" className="h-[50px] sm:h-[90px] w-auto" />
        <img src="/image 6.svg" className="h-[50px] sm:h-[90px] w-auto" />
      </div>
    </div>
  )
}

export default Clients
