import Clients from "./subComponents/Clients";
import HeroSection from "./subComponents/HeroSection";
import Certifications from "./subComponents/Certifications";
import About from "./subComponents/About";
import Contact from "./subComponents/Contact";
import { NavLink } from "react-router-dom";
import ConsultationCall from "./subComponents/ConsultationCall";

function Home() {

  return (
    <div className="flex justify-center text-white self-stretch font-inter text-lg">
      <div className="w-full px-5 sm:px-0 max-w-screen-xl flex flex-col justify-between gap-20">
        <div className="flex flex-col gap-20">
          <HeroSection />
          <Clients />
          <div id="about-us">
            <About/>
          </div>
          {
           // <Testimonial/>
          }
          <Certifications />

          <div className="p-6 flex flex-col sm:flex-row gap-2 bg-secondary shadow-inner rounded-3xl border border-accent">
            <div className="flex flex-col gap-16 py-12 sm:px-16 sm:w-3/5">
              <h2 className="text-5xl sm:text-7xl font-extrabold text-center sm:text-start">
                Reinforce Your Security Framework with MDC’s Cutting-Edge
                Solutions
              </h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <ConsultationCall shadow={true}/>
                <NavLink to="/services" className="flex justify-center items-center py-2 px-4 border border-primary-foreground hover:bg-[#302F2F] text-primary-foreground rounded-lg cursor-pointer">
                  <span>Explore our Services</span>
                </NavLink>
              </div>
            </div>
          <img src="/Helicopter.svg" className="sm:w-2/5 rounded-lg"/>
        </div>
        <Contact/>
      </div>
    </div>
    </div>
  );
}

export default Home;
