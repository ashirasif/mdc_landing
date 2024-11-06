
function SisterConcernCompanies() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl text-center font-medium">Sister Concern Companies</h2>
      <div className="shadow-heroBtn absolute left-[44%] mt-7 z-10 bg-white/20 h-1  -translate-x-1/2 w-64 "></div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="bg-secondary rounded-3xl p-8 sm:w-1/2">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
            <div className="text-center flex flex-col gap-2">
              <p className="font-medium text-sm">BugsLife Cybersecurity Services</p>
              <p className="text-xs text-foreground">20.09.2012</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-3xl p-8 sm:w-1/2">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
            <div className="text-center flex flex-col gap-2">
              <p className="font-medium text-sm">Abdullah Organic Farms</p>
              <p className="text-xs text-foreground">20.09.2012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SisterConcernCompanies
