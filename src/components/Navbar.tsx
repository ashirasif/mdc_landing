import { useState } from "react";

function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const navs = ["Home", "About Us", "Services", "Our Team", "Careers"];
  return (
    <>
      <div className="flex flex-col lg:top-10 flex-wrap fixed left-1/2 -translate-x-1/2 z-50 sm:flex-row  justify-between items-center w-full max-w-screen-xl bg-secondary border px-8 border-borderColor rounded-lg">
        <div className="flex w-full lg:w-auto justify-between">
          <img src="/Logo.png" className="w-[5.773rem]" />
          <img
            src={dropdown ? "/xmark-solid.svg" : "/bars-solid.svg"}
            className="w-4 lg:hidden cursor-pointer duration-200"
            onClick={() => setdropdown(!dropdown)}
          />
        </div>
        <div
          className={`lg:flex flex-col justify-between lg:flex-row gap-8 lg:w-2/3 lg:my-auto self-stretch ${
            dropdown ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-4 w-full self-stretch">
            {navs.map((nav, i) => {
              return (
                <div
                  key={i}
                  className="flex lg:justify-center items-center lg:w-1/5 self-stretch "
                >
                  <div className="font-inter text-white">{nav}</div>
                </div>
              );
            })}
          </div>

          <div className="py-3 px-4 rounded-lg border cursor-pointer lg:w-1/3 my-4 lg:my-0 bg-white flex gap-4 justify-center items-center">
            <span className="text-black w-full font-medium">Get in touch now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"1.5rem"}
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
