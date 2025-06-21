import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="w-20">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-full object-contain"
      />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="flex items-center justify-center gap-10">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
