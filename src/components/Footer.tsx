import Facebook from "/facebook-brands-solid.svg";
import X from "/x-twitter-brands-solid.svg";
import LinkedIn from "/linkedin-brands-solid.svg";
import GetInTouchButton from "./home/subComponents/GetInTouchButton";

function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "X", icon: X, url: "https://X.com" },
    { name: "LinkedIn", icon: LinkedIn, url: "https://linkedin.com" },
  ];
  return (
    <div className="bg-[#0F0F0F] p-8 font-inter w-full mt-8">
      <div className="flex flex-col gap-11 py-12 ">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8 sm:w-2/5">
            <img src="/Logo.png" className="w-24" />
            <div className="flex flex-col gap-24">
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
                    <img src={link.icon} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:w-1/5">
            <h4 className="text-xl font-medium text-white">Company</h4>
            <ul className="flex flex-col gap-6">
              <li>
                <div className="flex w-24 cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center ">
                  Service
                </div>
              </li>
              <li>
                <div className="flex  w-24 cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center ">
                  Resources
                </div>
              </li>
              <li>
                <div className="flex w-24 cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center ">
                  About us
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 sm:w-1/5">
            <h4 className="text-xl font-medium text-white">Help</h4>
            <ul className="flex flex-col gap-6">
            <li>
                <div className="flex w-44 cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center ">
                Customer Support
                </div>
              </li>
            <li>
                <div className="flex w-44 cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center ">
                Terms & Conditions
                </div>
              </li>
            <li>
                <div className="flex w-44 cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center ">
                Privacy Policy
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-medium text-white">
              Looking for a solution?
            </h4>
            <GetInTouchButton shadow={true}/>
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
