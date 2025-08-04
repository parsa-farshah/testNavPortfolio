import React from "react";

function AboutUs() {
  return (
    <div className="sm:pl-28 md:pl-40 mt-5">
      <div className="w-[90%] border-b mb-16 px-8 mx-auto pb-8">
        <h1 className="text-[#323232] font-extrabold text-xl">
          <span className="colorOne">A</span>bout Me
        </h1>
      </div>
      <div className="px-8 py-2 mb-8">
        <p className="text-[16px] font-normal text-[#646464]">
          Hello! I’m Tyrone Ryan. Designer & Photographer from USA, California.
          I have rich experience in web site design and photography. I love to
          talk with you about our unique.
        </p>
        <div>
          <div className="w-full flex items-center justify-between">
            <span className="bgOne py-1 px-3 text-sm font-normal">Age:</span>
            <span>22</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
