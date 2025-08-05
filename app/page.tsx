import AboutUs from "./components/AboutUs";
import ImageMe from "./components/ImageMe";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex justify-center transform-3d flex-col bgWhite lg:relative lg:overflow-hidden lg:flex-row">
      <div className="w-full lg:origin-left lg:perspective-midrange lg:rotate-y-[25deg] 2xl:container sm:flex ">
        <div className="fixed z-50 bg-[#fbfbfb] sm:bg-[#ff343400] lg:perspective-[480px] lg:origin-left lg:translate-y-9 lg:rotate-y-[28deg]">
          <Navbar />
        </div>
        <div className="w-full sm:pl-28 md:pl-40 pt-48 sm:pt-0 z-40 lg:perspective-[480px] lg:origin-left  lg:rotate-y-[28deg]">
          <ImageMe />
        </div>
      </div>
      <div className="lg:absolute top-[70px] lg:right-[24px] lg:w-[50%] overflow-y-scroll">
        <AboutUs />
      </div>
    </div>
  );
}
