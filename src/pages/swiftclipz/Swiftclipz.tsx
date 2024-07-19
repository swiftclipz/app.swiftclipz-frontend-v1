import History from "./components/History";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

const Swiftclipz = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <History />
      <MainSection />
    </div>
  );
};

export default Swiftclipz;
