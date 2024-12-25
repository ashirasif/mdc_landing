import { useEffect, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalImages = clients.length;

  // Create an array that duplicates the images for looping
  const loopedImages = [...clients, ...clients];

  // Detect if the screen is mobile
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    };

    // Initialize and listen for window resize
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset the index for an infinite loop
    if (currentIndex >= totalImages) {
      setTimeout(() => {
        setCurrentIndex(0); // Jump back to the start without animation
      }, 500); // Wait for the transition to finish
    }
  }, [currentIndex, totalImages]);

  const translateFactor = isMobile ? 100 / 3 : 100 / 6; // Dynamic translate factor

  return (
    <div className="bg-secondary w-full border-accent border p-10 flex flex-col gap-10 rounded-3xl text-lg">
      <div className="w-full flex flex-col gap-4 text-center text-white">
        <h2 className="font-inter font-medium text-4xl">Our Clients</h2>
        <p className="font-inter text-foreground sm:text-lg sm:w-11/12 mx-auto">
          MDC is proudly serving prestigious Military, Para Military, organizations in Public and Private Sector of Pakistan. It is our utmost obligation to serve them with the best products available in the market.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden w-full"> {/* Set max width */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex % totalImages) * translateFactor}%)`,
            }}
          >
            {loopedImages.map((src, index) => (
              <div
                key={index}
                className={`flex-shrink-0 flex justify-center ${
                  isMobile ? "w-1/3" : "w-1/6"
                }`}
              >
                <img
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  className="h-[50px] sm:h-[90px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
