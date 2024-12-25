const clients = [
  '/Logo 1.svg',
  '/Logo 2.svg',
  '/Logo 3.svg',
  '/Logo 4.svg',
  '/Logo 5.svg',
  '/Logo 6.svg',
  '/Logo 7.svg',
  '/Logo 8.svg',
  '/Logo 9.svg',
];

const Clients = () => {
  return (
    <div className="bg-secondary w-full border-accent border p-10 flex flex-col gap-10 rounded-3xl text-lg">
      <div className="w-full flex flex-col gap-4 text-center text-white">
        <h2 className="font-inter font-medium text-4xl">Our Clients</h2>
        <p className="font-inter text-foreground sm:text-lg sm:w-11/12 mx-auto">
          MDC is proudly serving prestigious Military, Para Military, organizations in Public and Private Sector of Pakistan. It is our utmost obligation to serve them with the best products available in the market.
        </p>
      </div>
      <div className="overflow-hidden w-full flex space-x-16">
        <div className="flex space-x-16 animate-loop-scroll">
          {clients.map((client, i) => (
            <img
              key={i}
              src={client}
              className="h-[50px] sm:h-[90px] w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
