import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GetInTouchButton from "./home/subComponents/GetInTouchButton";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navs = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About Us",
      link: ""
    },
    {
      title: "Services",
      dropDownItems: [
        { title: "Aerospace & Defence", value: "item-2" },
        { title: "Research & Development", value: "item-4" },
        { title: "Cybersecurity Services", value: "item-3" },
        { title: "Principals and OEMs", value: "item-1" },
        { title: "Innovation Center", value: "item-5" },
      ],
    },
    {
      title: "Our Team",
      link: "our-team",
    },
    {
      title: "Careers",
      link: "careers",
    },
  ];
  const handleScroll = () => {
    const target = document.getElementById('about-us');
    if (target) {
      const offset = 200; // Adjust the offset (e.g., 100px above the div)
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  const handleClick = () => {
    setDropdown(false); // Close dropdown

    if (location.pathname === '/') {
      // Already on the home page, scroll with offset
      handleScroll();
    } else {
      // Navigate to home and scroll with offset
      navigate('/');
      setTimeout(() => {
        handleScroll();
      }, 100); // Allow navigation to complete
    }
  };

  const handleServiceClick = (value: string) => {
    if (location.pathname === "/services") {
      // If already on the services page, use the custom event to update the accordion
      window.dispatchEvent(new CustomEvent('updateAccordion', { detail: value }));
    } else {
      // If not on the services page, navigate to it with the query parameter
      navigate(`/services?section=${value}`);
    }
    setDropdown(false);
  };

  return (
    <>
      <div className={`fixed lg:left-1/2 lg:-translate-x-1/2 z-50 flex flex-col sm:flex-row items-center justify-between lg:w-full w-screen max-w-screen-xl px-8 py-4 bg-secondary border border-borderColor rounded-lg text-lg top-0 left-0 lg:top-10`}>
        <div className="flex w-full justify-between lg:w-auto">
          <NavLink to={"/"}>
            <img src="/Logo.png" className="w-[5.773rem]" alt="Logo" />
          </NavLink>
          <img
            src={dropdown ? "/xmark-solid.svg" : "/bars-solid.svg"}
            className="w-4 cursor-pointer duration-200 lg:hidden"
            onClick={() => setDropdown(!dropdown)}
            alt="Menu toggle"
          />
        </div>
        <div
          className={`flex flex-col lg:flex-row gap-10 self-stretch lg:my-auto ${
            dropdown ? "" : "hidden"
          } lg:flex`}
        >
          <div className="flex flex-col gap-8 self-stretch lg:flex-row">
            {navs.map((nav, i) => {
              if (nav.title !== "Services" && nav.title !== "About Us") {
                return (
                  <NavLink
                    to={nav.link || "/"}
                    key={i}
                    onClick={()=>setDropdown(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center p-2 gap-2 cursor-pointer border-b active:rounded-lg active:bg-secondary hover:border-foreground transition-colors duration-500 hover:text-primary-foreground",
                        isActive
                          ? "lg:border-foreground border-primary"
                          : "border-transparent"
                      )
                    }
                  >
                    {nav.title}
                  </NavLink>
                );
              }else if(nav.title === "About Us"){
                return (
                  <div
                    key={i}
                    onClick={handleClick}
                    className="flex items-center p-2 gap-2 cursor-pointer border-b active:rounded-lg active:bg-secondary hover:border-foreground transition-colors duration-500 border-transparent hover:text-primary-foreground"
                  >
                    {nav.title}
                  </div>
                );
              }else {
                return (
                  <DropdownMenu key={i}>
                    <DropdownMenuTrigger asChild>
                      <div
                        className={cn(
                            "flex items-center p-2 gap-2 cursor-pointer border-b active:rounded-lg active:bg-secondary hover:border-foreground transition-colors duration-500 hover:text-primary-foreground",
                            location.pathname === "/services"?"lg:border-foreground border-primary"
                          : "border-transparent"
                          )
                        }
                      >
                        {nav.title}
                        <img src="/arrow-down-s-line.svg" alt="Dropdown arrow" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <div className="flex flex-col items-start">
                        {nav.dropDownItems?.map((dropdownItem) => (
                          <DropdownMenuItem
                            key={dropdownItem.title}
                            className="w-full p-4 bg-secondary hover:bg-primary-foreground text-primary-foreground text-base hover:text-secondary border hover:border-b border-borderColor cursor-pointer outline-none"
                            onClick={() => handleServiceClick(dropdownItem.value)}
                          >
                            <span className="w-full">{dropdownItem.title}</span>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
            })}
          </div>
          <GetInTouchButton shadow={false} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
