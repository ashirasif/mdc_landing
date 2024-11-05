import Navbar from "../Navbar";
import Clients from "./subComponents/Clients";
import HeroSection from "./subComponents/HeroSection";
import Certifications from "./subComponents/Certifications";
import SisterConcernCompanies from "./subComponents/SisterConcernCompanies";
import About from "./subComponents/About";
import Testimonial from "./subComponents/Testimonials";

function Home() {
  return (
    <div className="flex justify-center text-white sm:p-10 self-stretch font-inter">
      <div className="w-11/12 flex flex-col justify-between gap-20">
        <div className="flex flex-col gap-20">
          <Navbar />
          <HeroSection />
          <Clients />
        </div>

        <About/>
        <Testimonial/>
        <Certifications />

        <div className="p-6 flex flex-col sm:flex-row gap-2 bg-secondary rounded-3xl border border-accent">
          <div className="flex flex-col gap-14 py-12 sm:w-3/5">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-center sm:text-start">
              Reinforce Your Security Framework with MDC’s Cutting-Edge
              Solutions
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="rounded-lg border px-4 py-3 cursor-pointer bg-white flex gap-4 justify-center items-center">
                <span className="text-black font-medium">
                  Request a consulation call
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width={"1.5rem"} viewBox="0 0 512 512"> <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
              </div>

              <div className="flex justify-center items-center py-2 px-4 border rounded-lg cursor-pointer">
                <span>Explore our Services</span>
              </div>
            </div>
          </div>

          <img src="/dummy.png" className="sm:w-2/5"/>
        </div>

        <SisterConcernCompanies/>
      </div>
    </div>
  );
}

export default Home;
