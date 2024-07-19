import images from "../../../constants/images";

const History = () => {
  interface DataType {
    date: string;
    agent: string;
    image: string;
    text: string;
  }

  const data: DataType[] = [
    {
      date: "Monday",
      agent: "M",
      image: "",
      text: "Swiftclip is an efficient web application that enables users to clip and save important content from the web seamlessly....",
    },
    {
      date: "Tuesday",
      agent: "M",
      image: images.uploadedImage.src,
      text: "Swiftclip is an efficient web application that enables users toclip and save important content from the web seamlessly....",
    },
    {
      date: "28 January 2024",
      agent: "PC",
      image: "",
      text: "https://www.google.com/catphotos",
    },
  ];

  const isUrl = (text: string): boolean => {
    const urlRegex =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return urlRegex.test(text);
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 px-5 py-2 text-[#1D1D1D] bg-[#DBDAF6]">
      <h4 className="text-2xl pb-4 border-b-[1px] border-[#D2D1F4]">History</h4>
      {data.map(({ date, agent, image, text }, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="text-center">{date}</span>
          <div className="flex gap-2">
            <div className="relative inline-flex">
              <div className="w-12 h-12 aspect-square flex items-center justify-center rounded-full bg-[#E8F1F9]">
                <span className="">{agent}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                {text && (
                  <div className="p-2 rounded-lg bg-[#D2D1F4] shadow-custom-black-25">
                    {isUrl(text) ? (
                      <a
                        href={text}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </div>
                )}
              </div>
              <span>
                {image && (
                  <div className="w-fit relative flex flex-col items-center gap-4 rounded-lg shadow-custom-black-25">
                    <img src={image} className="" />
                    <span className="absolute top-[80%] py-2 px-7 font-bold rounded-lg bg-[#D2D1F4]">
                      my-wallpaper.jpg
                    </span>
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
