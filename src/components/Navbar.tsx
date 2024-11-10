import { useState } from "react";
import GetInTouchButton from "./home/subComponents/GetInTouchButton";
function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const navs = ["Home", "About Us", "Services", "Our Team", "Careers"];
  return (
    <>
      <div className="flex flex-col lg:top-10 flex-wrap fixed left-1/2 -translate-x-1/2 z-50 sm:flex-row  justify-between items-center w-full max-w-screen-xl bg-secondary border px-8 py-4 border-borderColor rounded-lg text-lg">
        <div className="flex w-full lg:w-auto justify-between">
          <img src="/Logo.png" className="w-[5.773rem]" />
          <img
            src={dropdown ? "/xmark-solid.svg" : "/bars-solid.svg"}
            className="w-4 lg:hidden cursor-pointer duration-200"
            onClick={() => setdropdown(!dropdown)}
          />
        </div>
        <div
          className={`lg:flex flex-col justify-between lg:flex-row gap-10 lg:my-auto self-stretch ${
            dropdown ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8 self-stretch">
            {navs.map((nav, i) => {
              return (
                <div
                  // to={'/'}
                  key={i}
                  className="flex lg:justify-center cursor-pointer p-2 gap-2 hover:border-b active:border-b active:rounded-lg active:bg-secondary border-foreground items-center "
                >{nav}
                {
                  nav==='Services' && <img src="/arrow-down-s-line.svg" alt="" />
                }
                </div>
              );
            })}
          </div>

          <GetInTouchButton shadow={false}/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
