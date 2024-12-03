const points = [
  "Business consultancy, local region marketing, on-site presentations",
  "Identifying new potential project for our principal & OEMs",
  'Technical and commercial liaison of our principal & OEMs with local clients',
  'Technical evaluation & finalization of all project proposal on-behalf of our principal & OEMs',
  'Defining project specifications, evaluating solutions & developing “Statement of Work”',
  'Contract legal review and local contract & project management',
  'On-site technical & operational field management support for projects'
];
function Principals() {
  return (
    <div className="flex flex-col gap-6 font-inter">
      <div className="w-full h-0.5 bg-gradient-to-r from-white to-black rounded-full mt-10"></div>
      <div className="flex flex-col gap-3">
        {points.map((point, i) => {
          return <div key={i} className="flex gap-2">
            <img src="/circle-check-regular.svg" className="w-5" />
            <span className="text-lg text-white">{point}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Principals;