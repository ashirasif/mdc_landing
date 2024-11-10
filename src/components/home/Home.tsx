import Navbar from "../Navbar";
import Clients from "./subComponents/Clients";
import HeroSection from "./subComponents/HeroSection";
import Certifications from "./subComponents/Certifications";
import SisterConcernCompanies from "./subComponents/SisterConcernCompanies";
import About from "./subComponents/About";
import Testimonial from "./subComponents/Testimonials";

function Home() {
  return (
    <div className="flex justify-center text-white self-stretch font-inter text-lg">
      <div className="w-full px-5 sm:px-0 max-w-screen-xl flex flex-col justify-between gap-20">
          <Navbar />
        <div className="flex flex-col gap-20 mt-10">
          <HeroSection />
          <Clients />
        

        <About/>
        <Testimonial/>
        <Certifications />

        <div className="p-6 flex flex-col sm:flex-row gap-2 bg-secondary shadow-inner rounded-3xl border border-accent">
          <div className="flex flex-col gap-16 py-12 sm:px-16 sm:w-3/5">
            <h2 className="text-5xl sm:text-7xl font-extrabold text-center sm:text-start">
              Reinforce Your Security Framework with MDC’s Cutting-Edge
              Solutions
            </h2>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="rounded-lg border px-4 py-3 cursor-pointer bg-white hover:bg-inherit hover:border-foreground text-[#323130] hover:text-foreground duration-200 flex gap-4 justify-center items-center">
                <span className="font-medium">
                  Request a consulation call
                </span>
                <img src="/Arrow-Right.svg" />
                </div>

              <div className="flex justify-center items-center py-2 px-4 border rounded-lg cursor-pointer">
                <span>Explore our Services</span>
              </div>
            </div>
          </div>

          <img src="/Banner Image.svg" className="sm:w-2/5"/>
        </div>

        <SisterConcernCompanies/>
        </div>
      </div>
    </div>
  );
}

export default Home;
