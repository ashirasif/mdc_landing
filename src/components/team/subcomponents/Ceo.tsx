import { useState } from "react";

function Ceo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-white to-secondary p-0.5 rounded-[32px] text-lg">
      <div className="bg-secondary rounded-[32px] py-6 px-8 flex flex-col sm:flex-row gap-10">
        {!open && <img src="/dummy.png" className="rounded-lg" />}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-medium text-white">
              Shahzor Ali Shah
            </h3>
            <span className="text-[#323130]">
              Chief Executive Officer, CEOs
            </span>
          </div>
          {open && <img src="/xmark-solid (1).svg" className="w-4 h-4 cursor-pointer" onClick={()=>setOpen(false)}/>}
          </div>

          <div className="flex flex-col gap-6">
            <p>
              Dear friends, I pray to All Mighty Allah to shower his blessings
              on all those, who in line of our efforts forming MDC stood by us
              with vision, knowledge, moral strength and courage, couple of
              years ago. Today Alhamdulillah MDC, besides being on panel of
              government of Pakistan (MOD), Inter-Services organizations, carry
              deep professional bonds across the globe with world class
              technological companies, working in pursuit of safe and bright
              future for our coming{" "}
              {open ? (
                <span>
                  <br /><br />
                  I earnestly believe that as long as core professionals in the field of Fifth
                  Generation Technology (FGT), Aerospace and Avionics and
                  related areas keep viable their know how to developing
                  countries, the dream of education for all shall remain a test.
                  MDC maintains highest standards of discipline in all tire of
                  their work at national and international level, with utmost
                  competence and dedication. Truth, piety and diligence being
                  company’s main asset, always steers up for the just decision,
                  our motto set for all times to come what may, I quote “Save
                  the Humanity, Save the Universe”. The benefits of universe
                  will continue to increase in boundless, productive and
                  beneficial aspects to human beings, if safe and bright future
                  is ensured through the application of compatible education and
                  FGT, both in scientific and technological domains.
                </span>
              ) : (
                <span className="underline italic text-white cursor-pointer" onClick={()=>setOpen(true)}>Read More</span>
              )}
            </p>
            <div className="flex gap-2">
              <a href="/"><img src="/linkedin-brands-solid.svg" className="w-6 h-6 opacity-50"/></a>
              <a href="/"><img src="/x-twitter-brands-solid.svg" className="w-6 h-6 opacity-50"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ceo;
