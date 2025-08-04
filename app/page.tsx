import ImageMe from "./components/ImageMe";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" bg-cover bg-center w-full h-[100vh] flex justify-center transform-3d">
      <div className="w-full lg:origin-left lg:perspective-midrange lg:rotate-y-[25deg] 2xl:container sm:flex    ">
        <div className="fixed z-50 bg-[#fbfbfb] sm:bg-[#ff343400] lg:perspective-[480px] lg:origin-left  lg:rotate-y-[28deg]">
          <Navbar />
        </div>
        <div className="w-full sm:pl-28 md:pl-40 pt-48 sm:pt-0 z-40 lg:perspective-[480px] lg:origin-left  lg:rotate-y-[28deg]">
          <ImageMe />
        </div>
      </div>
    </div>
  );
}
