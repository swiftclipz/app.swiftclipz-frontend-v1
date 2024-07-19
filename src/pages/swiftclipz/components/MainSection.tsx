import { useState } from "react";

import {
  IoSearchOutline,
  IoArrowUpOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import SiteLogo from "../../../components/logo/SiteLogo";

const MainSection = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 px-10 py-10 bg-[#D2D1F4]">
      <div className="min-h-96 flex flex-col justify-between">
        <div className="flex items-center gap-4">

          {/* custom search div */}
          <div className="w-full rounded-full relative flex items-center shadow-custom-black-25">
            <span className="absolute left-0 ms-4">
              <IoSearchOutline className="text-2xl text-[#8f8f8f]" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-12 pl-12 pr-4 text-[#202020] bg-white rounded-full outline-none"
            />
          </div>
          <span>
            <PiDotsThreeOutlineVertical className="text-4xl text-[#4e4e56]" />
          </span>
        </div>

        {/* logo with text */}
        <div className="flex flex-col items-center">
          <SiteLogo />
          <h4 className="text-xl text-[#1D1D1D]">
            What are you sharing today?
          </h4>
        </div>

        {/* upload - type / upload - send */}
        <div className="w-full relative flex items-center rounded-full border border-[#F9F9F9] shadow-custom-black-25">
          {/* upload with input filed of file */}
          <span className="w-10 h-10 aspect-square absolute left-0 flex justify-center items-center ms-3 rounded-full bg-[#F3F0F0] z-50">
            <span className="relative flex justify-center items-center">
              <IoCloudUploadOutline className="text-2xl text-[#202020]" />
              <input type="file" className="w-12 h-12 absolute opacity-0" />
            </span>
          </span>
          {/* custom place holder */}
          <span
            className={`absolute left-1/2 transform -translate-x-1/2 isolate z-0 ${
              text ? "hidden" : "block"
            }`}
          >
            Type / Upload
          </span>
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            className="w-full h-12 px-16 text-[#202020] bg-transparent rounded-full outline-none z-10"
          />
          {/* send  */}
          <span className="w-10 h-10 aspect-square absolute right-0 flex justify-center items-center me-3 rounded-full bg-[#F3F0F0] z-50">
            <IoArrowUpOutline className="text-2xl text-[#202020]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
