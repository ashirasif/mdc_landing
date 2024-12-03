import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Principals from "./subcomponents/Principals";
import Aerospace from "./subcomponents/Aerospace";

function Services() {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState<string | undefined>(
    searchParams.get("section") || undefined
  );

  useEffect(() => {
    const handleUpdateAccordion = (event: CustomEvent<string>) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('updateAccordion', handleUpdateAccordion as EventListener);

    return () => {
      window.removeEventListener('updateAccordion', handleUpdateAccordion as EventListener);
    };
  }, []);

  // useEffect(() => {
  //   if (activeSection) {
  //     const element = document.getElementById(activeSection);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);

  return (
    <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-6 px-4 sm:px-0 font-inter">
      <h2 className="text-4xl text-center text-white font-medium">
        Support & Services{" "}
      </h2>
      <Accordion 
        type="single" 
        collapsible 
        className="flex flex-col gap-6 text-white text-center sm:text-start"
        value={activeSection}
        onValueChange={setActiveSection}
      >
        <AccordionItem value="item-1" id="item-1">
          <AccordionTrigger>Principals and OEMs</AccordionTrigger>
          <AccordionContent>
            <Principals/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" id="item-2">
          <AccordionTrigger>Aerospace & Defense</AccordionTrigger>
          <AccordionContent>
            <Aerospace/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" id="item-3">
          <AccordionTrigger>Cybersecurity Services</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <div className="w-full h-0.5 bg-gradient-to-r from-white to-black rounded-full mt-10"></div>
            <p className="text-lg">Metallon Delta Corporation, in collaboration with its sister concern BugsLife, offers comprehensive cybersecurity services tailored to safeguard businesses against the rising tide of digital threats. Leveraging BugsLife's expertise in ethical hacking, vulnerability assessment, and incident response, the partnership delivers robust security solutions for organizations of all sizes. Together, they provide cutting-edge defense strategies, including real-time threat detection, data protection, and risk management. Their services ensure that companies can operate confidently in today's digital landscape, minimizing vulnerabilities and protecting critical infrastructure from cyberattacks. With this alliance, Metallon Delta Corporation and BugsLife are committed to fortifying the cybersecurity landscape in Pakistan and beyond.</p>            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" id="item-4">
          <AccordionTrigger>Research & Development</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <div className="w-full h-0.5 bg-gradient-to-r from-white to-black rounded-full mt-10"></div>
            <p className="text-lg">Metallon Delta Corporation's Research and Development (R&D) division plays a pivotal role in advancing innovation across high-tech industries. By investing in cutting-edge research, the corporation target to be at the forefront of developing next-generation technologies that enhance operational capabilities, safety, and efficiency for versatile missions systems. This commitment to innovation ensures that the clients receive state-of-the-art products and solutions tailored to the demanding needs of modern aerospace, defense, and technical industries.</p>            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" id="item-5">
          <AccordionTrigger>Innovation Center</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <div className="w-full h-0.5 bg-gradient-to-r from-white to-black rounded-full mt-10"></div>
            <p className="text-lg">Metallon Delta Corporation's Innovation Centre is set to become a pivotal hub for driving breakthrough solutions in the Pakistani civil business market. With a focus on fostering creativity and cutting-edge research, the centre aims to introduce a wide range of new innovative products that will cater to the evolving needs of industries across Pakistan.</p>
            <p className="text-lg">Leveraging state-of-the-art technology and expert collaboration, the Innovation Centre will offer advanced tools, resources, and partnerships designed to propel businesses toward sustainable growth. By pioneering new market trends and offering customized solutions, Metallon Delta Corporation seeks to empower Pakistani enterprises to compete on a global scale, enhancing efficiency, productivity, and profitability.</p>            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Services;

