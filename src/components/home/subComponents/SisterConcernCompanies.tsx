
function SisterConcernCompanies() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl text-center font-medium">Sister Concern Companies</h2>
      <div className="flex gap-6">
        <div className="bg-secondary rounded-3xl p-8 w-1/2">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
            <div className="text-center flex flex-col gap-2">
              <p className="font-medium text-sm">BugsLife Cybersecurity Services</p>
              <p className="text-xs text-foreground">20.09.2012</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-3xl p-8 w-1/2">
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
