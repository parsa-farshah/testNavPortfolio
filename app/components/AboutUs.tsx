import React from "react";
import { CgWebsite } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import { FaBrain, FaRegLightbulb } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";

function AboutUs() {
  return (
    <div className="sm:pl-28 md:pl-40 mt-5">
      {/*----------------------------------- About ME ----------------------------*/}
      <div className="w-[90%]   px-8 mx-auto pb-8">
        <h1 className="text-[#323232] font-extrabold text-xl">
          <span className="colorOne">A</span>bout Me
        </h1>
      </div>
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-gray-300 to-white mx-auto"></div>

      <div className="px-8 py-2 mb-8">
        <p className="text-[16px] font-normal text-[#646464]">
          Hello! I’m Tyrone Ryan. Designer & Photographer from USA, California.
          I have rich experience in web site design and photography. I love to
          talk with you about our unique.
        </p>
        <div className="w-full">
          {/*-------------------------------- age -------------------------*/}
          <div className="w-full flex items-center justify-between mt-3 pb-2 ">
            <span className="bgOne py-1 px-3 text-sm font-normal rounded-sm text-white">
              Age:
            </span>
            <span className="text-[16px] font-normal text-[#646464]">22</span>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white"></div>
          {/*-------------------------------- Residence -------------------------*/}
          <div className="w-full flex items-center justify-between mt-3 pb-2 ">
            <span className="bgOne py-1 px-3 text-sm font-normal rounded-sm text-white">
              Residence:
            </span>
            <span className="text-[16px] font-normal text-[#646464]">USA</span>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white"></div>
          {/*-------------------------------- Freelance -------------------------*/}
          <div className="w-full flex items-center justify-between mt-3 pb-2 ">
            <span className="bgOne py-1 px-3 text-sm font-normal rounded-sm text-white">
              Freelance:
            </span>
            <span className="text-[16px] font-normal text-[#646464]">
              Available
            </span>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white"></div>
          {/*-------------------------------- Address -------------------------*/}
          <div className="w-full flex items-center justify-between mt-3 pb-2 ">
            <span className="bgOne py-1 px-3 text-sm font-normal rounded-sm text-white">
              Address:
            </span>
            <span className="text-[16px] font-normal text-[#646464]">
              California, USA
            </span>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white"></div>
        </div>
      </div>
      {/*----------------------------------- my services -------------------------*/}
      <div className="w-full px-8">
        {/* my service txt */}
        <div className="w-full   px-0 mx-auto ">
          <h1 className="text-[#323232] font-extrabold text-xl">
            <span className="colorOne">M</span>y Services
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-12"></div>
        </div>
        {/* logo design */}
        <div className="w-full flex flex-col items-center justify-center py-10">
          <div className="colorOne mb-3">
            <FaRegLightbulb size={35} />
          </div>
          <span className="text-[16px] text-[#323232] font-extrabold mb-3">
            Logo Design
          </span>
          <p className="text-center font-normal text-[#646464]">
            Basic categories of logo styles are: word, letter, brand,
            combination marks and emblems.
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-12"></div>
        {/* Web Design
         */}
        <div className="w-full flex flex-col items-center justify-center py-10">
          <div className="colorOne mb-3">
            <CgWebsite size={35} />
          </div>
          <span className="text-[16px] text-[#323232] font-extrabold mb-3">
            Web Design
          </span>
          <p className="text-center font-normal text-[#646464]">
            Web designers craft the overall vision and plan for a website
            layouts, mobile first, posters, branding.
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-12"></div>
        {/* Business Card
         */}
        <div className="w-full flex flex-col items-center justify-center py-10">
          <div className="colorOne mb-3">
            <TiBusinessCard size={35} />
          </div>
          <span className="text-[16px] text-[#323232] font-extrabold mb-3">
            Business Card
          </span>
          <p className="text-center font-normal text-[#646464]">
            Every business card should include your name, the company name,
            skills, cases and contacts.
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-12"></div>
        {/* Mobile App Design
         */}
        <div className="w-full flex flex-col items-center justify-center py-10">
          <div className="colorOne mb-3">
            <CiMobile3 size={35} />
          </div>
          <span className="text-[16px] text-[#323232] font-extrabold mb-3">
            Mobile App Design
          </span>
          <p className="text-center font-normal text-[#646464]">
            Create an animated app prototype and ask people to test it and
            provide feedback.
          </p>
        </div>
      </div>
      {/*----------------------------------- skills --------------------------------*/}
      <div className="w-full px-8 mt-10">
        {/* my service txt */}
        <div className="w-full px-0 mx-auto mb-8">
          <h1 className="text-[#323232] font-extrabold text-xl">
            <span className="colorOne">S</span>kills
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-7"></div>
          {/* design */}
          <div className="w-[90%]  h-7 mt-7 mx-auto">
            <div className="w-full flex items-center gap-4 text-[17px] font-extrabold text-[#323232]">
              <div className="colorOne">
                <FaBrain size={30} />
              </div>
              <span>DESIGN</span>
            </div>
            <div className="w-full h-[1px] bg-[linear-gradient(to_right,_white_10%,_#334155_50%,_white_90%)] mt-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
