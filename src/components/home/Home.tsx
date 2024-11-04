import Navbar from "../Navbar";
import Clients from "./subComponents/Clients";
import HeroSection from "./subComponents/HeroSection";

import Testimonials from "./subComponents/Testimonials";
import Certifications from "./subComponents/Certifications";
import SisterConcernCompanies from "./subComponents/SisterConcernCompanies";

function Home() {
  return (
    <div className="bg-[#0a0a0a] flex justify-center text-white p-10 self-stretch font-inter">
      <div className="w-11/12 flex flex-col justify-between gap-20">
        <div className="flex flex-col gap-20">
          <Navbar />
          <HeroSection />
          <Clients />
        </div>

        <div className="flex flex-col gap-24">
          <div className="flex gap-8">
            <div className="w-3/5 p-8 rounded-3xl gap-10 border bg-secondary border-accent">
              <div className="flex flex-col gap-4">
                <h1 className="text-center text-4xl font-medium">About Us</h1>
                <div className="text-white">
                  <img src="/quote-left-solid.svg" className="w-12" alt="" />
                </div>
                <p className="text-center text-foreground">
                  Metallon Delta Corporation (Pvt) Limited is a blend of dynamic
                  professionals from Aerospace & Defense Technology,
                  Procurement, Supply Chain Management and Research &
                  Development to collaborate and work with core teams about
                  respective skill around the globe, for a safe and bright
                  future.
                </p>
                <div className="text-white flex justify-end">
                  <img src="/quote-right-solid.svg" className="w-12" alt="" />
                </div>
              </div>
            </div>

            <div className="bg-[url('/dummy.png')] w-2/5 bg-cover bg-center rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <div className="w-8/12 bg-secondary border rounded-3xl border-accent">
                <div className="p-8 flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">Mission & Vision</h2>
                  <p className="text-foreground">
                    Define future industry by envisioning strategic innovative
                    solutions, to meet the prime objectives and to maintain pace
                    in line with technological advancement with complete
                    understanding about growing industry requirement and
                    critical time management.
                  </p>
                </div>

                <div className="flex gap-8 px-8">
                  <div className="bg-[url('/dummy.png')] bg-cover bg-center h-40 w-1/3 rounded-lg"></div>
                  <div className="bg-[url('/dummy.png')] bg-cover bg-center h-40 w-1/2 rounded-lg"></div>
                </div>
              </div>

              <div className="w-4/12 border rounded-3xl bg-secondary border-accent">
                <div className="p-8 flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">Values</h2>
                  <p className="text-foreground">
                    Truth, piety and diligence remain a hallmark in setting
                    company’s goal and response
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-secondary rounded-3xl border border-accent">
              <div className="p-8 flex flex-col gap-4">
                <h2 className="text-3xl font-medium">Why Choose Use?</h2>
                <p className="text-foreground">
                  Metallon Delta Corporation (MDC) is a trusted leader in
                  aerospace and defense, bridging international technology firms
                  with Pakistan’s government and private sectors. Representing
                  top aerospace companies from Europe and the USA, we provide
                  local expertise and full project support, from opportunity
                  identification to completion, ensuring seamless integration
                  and credibility with global OEMs.
                </p>
              </div>
              <div className="flex px-8 gap-8">
                <div className="bg-[url('/dummy.png')] bg-cover bg-center h-40 w-1/3 rounded-lg"></div>
                <div className="bg-[url('/dummy.png')] bg-cover bg-center h-40 w-3/5 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="w-full flex">
              <h2 className="w-4/5 text-3xl font-medium text-center">
                Support & Services
              </h2>
              <div className="w-1/5 border border-[#F9F6F3] py-4 rounded-lg flex justify-center items-center gap-2">
                <span>View All Services</span>
                <img src="/arrow-right-long-solid.svg" className="w-6" alt="" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-6 w-3/5">
                <div className="rounded-3xl bg-secondary border border-accent p-8">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-medium">
                      Principals and OEMs
                    </h2>
                    <p className="text-foreground">
                      In partnership with BugsLife, Metallon Delta Corporation
                      provides tailored cybersecurity services, from ethical
                      hacking to real-time threat detection and risk management,
                      ensuring robust protection for businesses. Together, they
                      help organizations secure their digital operations.{" "}
                      <a className="text-white underline italic cursor-pointer">
                        View more details
                      </a>
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-secondary border border-accent p-8">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-medium">
                      Research & Development
                    </h2>
                    <p className="text-foreground">
                      Metallon Delta Corporation’s Innovation Centre is set to
                      become a pivotal hub for driving breakthrough solutions in
                      the Pakistani civil business market. With a focus on
                      fostering creativity and cutting-edge research, the centre
                      aims to introduce a wide range of new innovative products
                      that will cater to the evolving needs of industries across
                      Pakistan.{" "}
                      <a className="text-white underline italic cursor-pointer">
                        View more details
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl w-2/5 bg-secondary border border-accent p-8">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-medium">Aerospace & Defence</h2>
                  <p className="text-foreground">
                    Metallon Delta Corporation offers a full suite of Aerospace
                    and Defense solutions, covering RADAR system support,
                    electronic warfare, aircraft life cycle management, and
                    comprehensive engine MRO services. Our expertise extends to
                    airborne fuses, advanced border security, fire-fighting and
                    anti-locust aerial systems, and cutting-edge drone and
                    counter-drone technologies. Through collaborations with top
                    global OEMs, we ensure all solutions—from installation and
                    integration to maintenance and rapid response—meet the
                    highest standards, enhancing mission-readiness, security,
                    and operational efficiency. View more details{" "}
                    <a className="text-white underline italic cursor-pointer">
                      View more details
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary border border-accent p-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-medium">Cybersecurity Services</h2>
                <p className="text-foreground">
                  Metallon Delta Corporation, in partnership with{" "}
                  <a className="text-white underline italic cursor-pointer">
                    BugsLife
                  </a>
                  , offers tailored cybersecurity solutions to protect
                  businesses from digital threats. Leveraging BugsLife's
                  expertise in ethical hacking, vulnerability assessment, and
                  incident response, they provide real-time threat detection,
                  data protection, and risk management. This alliance
                  strengthens cybersecurity for organizations across Pakistan
                  and beyond, ensuring secure operations in today’s digital
                  landscape.{" "}
                  <a className="text-white underline italic cursor-pointer">
                    View more details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        <Certifications />

        <div className="p-6 flex gap-2 bg-secondary rounded-3xl border border-accent">
          <div className="flex flex-col gap-14 py-12 w-3/5">
            <h2 className="text-[3.875rem] font-extrabold">
              Reinforce Your Security Framework with MDC’s Cutting-Edge
              Solutions
            </h2>
            <div className="flex gap-6">
              <div className="rounded-lg border px-4 py-3 cursor-pointer bg-white flex gap-4 justify-center items-center">
                <span className="text-black font-medium">
                  Request a consulation call
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width={"1.5rem"} viewBox="0 0 512 512"> <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
              </div>

              <div className="flex justify-center items-center py-2 px-4 border rounded-lg cursor-pointer">
                <span>Explore our Services</span>
              </div>
            </div>
          </div>

          <img src="/dummy.png" className="w-2/5"/>
        </div>

        <SisterConcernCompanies/>
      </div>
    </div>
  );
}

export default Home;
