import Ceo from "./subcomponents/Ceo";

const teamMembers = [
  {
    name: "Air Cdre. (R) Pervez Sadiq",
    role: "Vice President",
    image: "/Pervez Sadiq.png",
  },
  {
    name: "Ghazi Muqaddas Ali Shah",
    role: "Director Aerospace & Defense Projects",
    image: "/Ghazi Muqaddas Ali Shah.png",
  },
  {
    name: "Umair Asghar",
    role: "Director Operations",
    image: "/Umair Asghar.png",
  },
  {
    name: "Adil Muhammad Shah",
    role: "Director, Strategies & Marketing",
    image: "/Adil Muhammad Shah.png",
  },
  {
    name: "Muhammad Usman Shah",
    role: "Director Finance",
    image: "/Muhammad Usman Shah.png",
  },
  {
    name: "Noor Abbas Mirza",
    role: "Deputy Director Aerospace & Defense Projects",
    image: "/Noor Abbas Mirza.png",
  },
  {
    name: "Ismail Akram",
    role: "Manager Operations",
    image: "/Ismail Akram.png",
  },
  {
    name: "Mr. Umair Razzaq",
    role: "Manager Aerospace & Defense Projects",
    image: "/Mr. Umair Razzaq.png",
  },
  {
    name: "Muhammad Reyan Awan",
    role: "Manager Technical",
    image: "/Muhammad Reyan Awan.png",
  },
  {
    name: "Nasir Aziz",
    role: "Team Lead Radar Engineer & Field Support Resource (FSR)",
    image: "/Nasir Aziz.png",
  },
  {
    name: "Col. (R) Raza Iftikhar",
    role: "Director Land Warfare",
    image: "/WhatsApp Image 2024-12-16 at 18.42.01_acb7e4f2.jpg",
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
              <img src={member.image} className="mx-auto sm:mx-0 w-28 grayscale rounded-lg" />
              <div className="flex flex-col gap-4 justify-center">
                <h3 className="text-3xl text-white">{member.name}</h3>
                <span className="text-[#9B9CA1]">{member.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
