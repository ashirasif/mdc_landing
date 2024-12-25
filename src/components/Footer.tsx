import LinkedIn from "/linkedin-brands-solid.svg";
import GetInTouchButton from "./home/subComponents/GetInTouchButton";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const socialLinks = [
    { name: "LinkedIn", icon: LinkedIn, url: "https://www.linkedin.com/company/metallon-delta-corporation-pvt-limited/" },
  ];
  const handleScroll = () => {
    const target = document.getElementById('about-us');
    if (target) {
      const offset = 200; // Adjust the offset (e.g., 200px above the div)
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  const handleClick = () => {
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

  return (
    <div className="bg-[#0F0F0F] px-8 sm:px-28 font-inter w-full mt-24">
      <div className="flex flex-col gap-11 py-12 ">
        <div className="flex flex-col sm:flex-row gap-8 sm:justify-between">

          <div className="flex flex-col max-w-[496px] gap-8">
          <img src="/Logo.svg" className="w-[135px] h-[59px]" alt="Logo" />
            <div className="flex flex-col gap-6">
              <p>
                Truth, piety and diligence remain a hallmark in setting
                company’s goal and response
              </p>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`Visit our ${link.name} page`}
                  >
                    <img src={link.icon} className="w-6 h-6 opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-medium text-white">Company</h4>
            <ul className="flex flex-col gap-6">
              <li>
                <NavLink
                  to='/services'
                  className="flex w-16 cursor-pointer border-b border-transparent hover:border-primary transition-colors duration-300 hover:text-primary-foreground"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/our-team'}
                  className="flex w-20 cursor-pointer border-b border-transparent hover:border-primary transition-colors duration-300 hover:text-primary-foreground"
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <div
                  onClick={handleClick}
                  className="flex w-20 cursor-pointer border-b border-transparent hover:border-primary transition-colors duration-300 hover:text-primary-foreground"
                >
                  About us
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-medium text-white">Sister Companies</h4>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  target="_blank"
                  className="flex gap-2 cursor-pointer border-b border-transparent hover:border-primary transition-colors duration-300 hover:text-primary-foreground"
                  href="https://bugslife.co/"
                >
                  <span>BugsLife</span>
                  <img src="/arrow-up-right-from-square-solid.svg" className="w-4" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="flex gap-2 cursor-pointer border-b border-transparent hover:border-primary transition-colors duration-300 hover:text-primary-foreground"
                  href="https://abdullahorganicfarms.com/"
                >
                  <span>Abdullah Organic Farms</span>
                  <img src="/arrow-up-right-from-square-solid.svg" className="w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-medium text-white">
              Looking for a solution?
            </h4>
            <GetInTouchButton shadow={true} />
          </div>
        </div>

        <div className="border border-accent w-full"></div>
        <p className="text-center">
          © Copyright 2024, All Rights Reserved by Metallon Delta Corporation
          (MDC)
        </p>
      </div>
    </div>
  );
}

export default Footer;
