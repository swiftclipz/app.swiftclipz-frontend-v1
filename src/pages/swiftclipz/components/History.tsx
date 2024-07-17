import React from "react";

const History = () => {
  const data = [
    {
      date: "Monday",
      agent: "M",
      image: "",
      text: " Swiftclip is an efficient web application that enables users to clip and save important content from the web seamlessly....",
    },
    {
      date: "Tuesday",
      agent: "PC",
      image: "",
      text: "Hi Josh",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-10 px-10 py-10 text-[#1D1D1D] bg-[#DBDAF6]">
      <h4 className="text-2xl pb-4 border-b-[1px] border-[#D2D1F4]">History</h4>
      {data.map(({ date, agent, image, text }, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <span className="text-center">{date}</span>
          <div className="flex gap-2">
            <div className="relative inline-flex">
              <div className="w-12 h-12 aspect-square flex items-center justify-center rounded-full bg-[#E8F1F9]">
                <span className="">{agent}</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-[#D2D1F4] shadow-custom-black-25">
              <span>{image && ""}</span>
              <span>{text}</span>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="flex flex-col items-center gap-4">
        <span>Yesterday</span>
        <div className="flex gap-2">
          <div className="relative inline-flex">
            <div className="w-12 h-12 aspect-square flex items-center justify-center rounded-full bg-[#E8F1F9]">
              <span className="">M</span>
            </div>
          </div>

          <div>
            <img src="" alt="" />
            <div className="p-2 rounded-lg bg-[#D2D1F4] shadow-custom-black-25">
              Swiftclip is an efficient web application that enables users to
              clip and save important content from the web seamlessly....
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default History;