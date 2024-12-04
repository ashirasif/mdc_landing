import Ceo from "./subcomponents/Ceo";

const teamMembers = [
  {
    name: "Ravi Kumar Singh",
    role: "Managing Director, MD",
    image: "/dummy.png",
    linkedIn: "/",
    x: "/",
  },
  {
    name: "Aisha Patel",
    role: "Operations Head, OH",
    image: "/dummy.png",
    linkedIn: "/",
    x: "/",
  },
  {
    name: "Mohammed Tariq",
    role: "Product Manager, PM",
    image: "/dummy.png",
    linkedIn: "/",
    x: "/",
  },
  {
    name: "Fatima Noor",
    role: "Sales Director, SD",
    image: "/dummy.png",
    linkedIn: "/",
    x: "/",
  },
  {
    name: "Karan Mehta",
    role: "Technical Lead, TL",
    image: "/dummy.png",
    linkedIn: "/",
    x: "/",
  },
  {
    name: "Sofia Ahmed",
    role: "Marketing Specialist, MS",
    image: "/dummy.png",
    linkedIn: "/",
    x: "/",
  },
];

function Team() {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-8 font-inter text-lg px-4 sm:px-0">
      <h2 className="text-4xl font-medium text-white text-center">
        Meet Our Team
      </h2>
      <Ceo />
      <div className="flex flex-col sm:flex-row gap-x-3 gap-y-8 flex-wrap text-center sm:text-start">
        {teamMembers.map((member, i) => {
          return (
            <div key={i} className="flex flex-col sm:flex-row bg-secondary border border-borderColor py-6 sm:w-[49.5%] gap-10 px-8 rounded-[32px]">
              <img src={member.image} className="mx-auto sm:mx-0 w-28 rounded-lg" />
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl text-white">{member.name}</h3>
                <span className="text-[#323130]">{member.role}</span>
                <div className="flex gap-2 mx-auto sm:mx-0">
                  <a href="/">
                    <img
                      src="/linkedin-brands-solid.svg"
                      className="w-6 h-6 opacity-50"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="/x-twitter-brands-solid.svg"
                      className="w-6 h-6 opacity-50"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
