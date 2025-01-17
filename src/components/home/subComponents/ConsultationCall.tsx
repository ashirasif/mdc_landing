
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Contact from "./Contact";

function ConsultationCall(props: { shadow: boolean }) {
  const [stroke, setStroke] = useState("#323130");
  return (
    <Dialog>
      <DialogTrigger>
        <button
          className={`py-4 px-6 rounded-lg min-w-56 w-full duration-200 cursor-pointer lg:w-auto my-4 lg:my-0 ${
            props.shadow && "shadow-heroBtn border-0"
          } bg-white hover:bg-inherit text-secondary hover:text-primary-foreground flex gap-2 justify-center border hover:border-[#F9F6F3] items-center`}
          onMouseOver={() => setStroke("#F9F6F3")}
          onMouseLeave={() => setStroke("#323130")}
        >
          <span className="w-full font-medium">Request a consultation call</span>
          <svg
            className="w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8L21 12M21 12L17 16M21 12H3"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent>
        <Contact/>
      </DialogContent>
    </Dialog>
  );
}

export default ConsultationCall;
