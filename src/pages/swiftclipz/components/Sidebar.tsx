import SiteLogo from "../../../components/logo/SiteLogo";
import {
  IoSettingsOutline,
  IoFilterOutline,
  IoImageOutline,
  IoAddOutline,
} from "react-icons/io5";
import images from "../../../constants/images";

const Sidebar = () => {
  const nav = [
    { icon: <IoAddOutline />, text: "New Text" },
    { icon: <IoImageOutline />, text: "New Image" },
    { icon: <IoFilterOutline />, text: "Filter" },
    { icon: <IoSettingsOutline />, text: "Settings" },
  ];

  return (
    <div className="w-[50%] min-h-screen flex flex-col items-center gap-10 py-2 text-[#1D1D1D] bg-[#D2D1F4]">
      <div>
        <SiteLogo />
      </div>
      <div className="flex flex-col items-center gap-3">
        <img
          src={images.displayPicture.src}
          alt={images.displayPicture.alt}
          className="w-32"
        />
        <span>YourmixJNR</span>
      </div>
      <div className="space-y-4">
        {nav.map(({ icon, text }, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-2xl text-[#1D1D1D]">{icon}</span>{" "}
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
