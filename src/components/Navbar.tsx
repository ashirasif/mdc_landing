import { useState } from "react";
import GetInTouchButton from "./home/subComponents/GetInTouchButton";
import { cn } from "@/lib/utils";
function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const navs = ["Home", "About Us", "Services", "Our Team", "Careers"];
  return (
    <>
<div className="fixed lg:left-1/2 lg:-translate-x-1/2 z-50 flex flex-col sm:flex-row items-center justify-between lg:w-full w-screen max-w-screen-xl px-8 py-4 bg-secondary border border-borderColor rounded-lg text-lg top-0 left-0 lg:top-10">
  <div className="flex w-full justify-between lg:w-auto">
    <img src="/Logo.png" className="w-[5.773rem]" />
    <img
      src={dropdown ? "/xmark-solid.svg" : "/bars-solid.svg"}
      className="w-4 cursor-pointer duration-200 lg:hidden"
      onClick={() => setdropdown(!dropdown)}
    />
  </div>
  <div
    className={`flex flex-col lg:flex-row gap-10 self-stretch lg:my-auto ${
      dropdown ? "" : "hidden"
    } lg:flex`}
  >
    <div className="flex flex-col gap-8 self-stretch lg:flex-row">
      {navs.map((nav, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center p-2 gap-2 cursor-pointer border-b border-transparent active:border-b active:rounded-lg active:bg-secondary hover:border-foreground transition-colors duration-500",
            nav !== "Home" && "border-transparent"
          )}
        >
          {nav}
          {nav === "Services" && (
            <img src="/arrow-down-s-line.svg" alt="" />
          )}
        </div>
      ))}
    </div>

    <GetInTouchButton shadow={false} />
  </div>
</div>
    </>
  );
}

export default Navbar;
