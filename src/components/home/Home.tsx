import Clients from "./subComponents/Clients";
import HeroSection from "./subComponents/HeroSection";
import Certifications from "./subComponents/Certifications";
import About from "./subComponents/About";
import Testimonial from "./subComponents/Testimonials";
import { useState } from "react";
import Contact from "./subComponents/Contact";
import { NavLink } from "react-router-dom";

function Home() {
  const [stroke, setStroke] = useState('#323130')

  return (
    <div className="flex justify-center text-white self-stretch font-inter text-lg">
      <div className="w-full px-5 sm:px-0 max-w-screen-xl flex flex-col justify-between gap-20">
        <div className="flex flex-col gap-20">
          <HeroSection />
          <Clients />
          <div id="about-us">
        <About/>
          </div>
        
        
        <Testimonial/>
        <Certifications />

        <div className="p-6 flex flex-col sm:flex-row gap-2 bg-secondary shadow-inner rounded-3xl border border-accent">
          <div className="flex flex-col gap-16 py-12 sm:px-16 sm:w-3/5">
            <h2 className="text-5xl sm:text-7xl font-extrabold text-center sm:text-start">
              Reinforce Your Security Framework with MDC’s Cutting-Edge
              Solutions
            </h2>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="rounded-lg border px-4 py-3 cursor-pointer bg-white hover:bg-inherit hover:border-foreground text-[#323130] hover:text-[#F9F6F3] duration-200 flex gap-1 sm:gap-2 justify-center items-center"
              onMouseOver={()=>setStroke('#F9F6F3')}
              onMouseLeave={()=>setStroke('#323130')}>
                <span className="sm:font-medium">
                  Request a consulation call
                </span>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
                </div>

              <NavLink to="/services" className="flex justify-center items-center py-2 px-4 border border-primary-foreground hover:bg-[#302F2F] text-primary-foreground rounded-lg cursor-pointer">
                <span>Explore our Services</span>
              </NavLink>
            </div>
          </div>
          <img src="/helicopters.jpg" className="sm:w-2/5 rounded-lg"/>
        </div>
        </div>
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
