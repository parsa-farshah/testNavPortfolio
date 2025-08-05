import Image from "next/image";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import { FaArrowRight, FaBrain, FaRegLightbulb } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import iconTenP from "../../public/images/icon-10%.png";
import { IoDiamond } from "react-icons/io5";
import { GiChessQueen } from "react-icons/gi";

function AboutUs() {
  return (
    <div className="sm:pl-28 md:pl-40 mt-5">
      {/*----------------------------------- About ME ----------------------------*/}
      <div className="w-[90%]  px-8 mx-auto pb-8">
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
          <div className="w-[90%]   mt-7 mx-auto">
            <div className="w-full flex items-center gap-4 text-[17px] font-extrabold text-[#323232]">
              <div className="colorOne">
                <FaBrain size={30} />
              </div>
              <span>DESIGN</span>
            </div>
            {/* border */}
            <div className="w-full h-[1px] bg-[linear-gradient(to_right,_white_10%,_#7f7d7d_50%,_white_90%)] mt-7"></div>
            {/*------------------- percentAge -------------------*/}
            <div className="w-full flex justify-between gap-y-9 flex-wrap mt-4">
              {/* logo design */}
              <div className="w-[45%] flex flex-col items-center">
                {/* <figure className="w-1/2  flex">
                  <img
                    className="w-[90px] h-[90px]"
                    src="/images/iconthirtyP.png"
                    alt=""
                  />
                </figure> */}
                <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-300 relative before:content-['50%'] before:text-[#323232] before:text-[17px] before:font-medium before:absolute before:top-1/2 before:left1/2 before:translate-x-[60%] before:translate-y-[-40%]">
                  <svg
                    height="100"
                    width="100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-1.5 left-[-4px]"
                  >
                    <circle
                      r="45"
                      cx="50"
                      cy="50"
                      fill="none"
                      strokeWidth="3"
                      stroke="#a1c568"
                      strokeDasharray={`${Math.PI * 45} ${Math.PI * 45}`}
                      strokeDashoffset={`${Math.PI * 45}`}
                      transform="rotate(90 50 50)"
                    />
                  </svg>
                </div>
                <h5 className="font-normal text-[#646464]">Logo Design</h5>
              </div>
              {/* web design */}
              <div className="w-[45%] flex flex-col items-center">
                {/* <figure className="w-1/2  flex">
                  <img
                    className="w-[90px] h-[90px]"
                    src="/images/iconfiftyP.png"
                    alt=""
                  />
                </figure> */}
                <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-300 relative before:content-['50%'] before:text-[#323232] before:text-[17px] before:font-medium before:absolute before:top-1/2 before:left1/2 before:translate-x-[60%] before:translate-y-[-40%]">
                  <svg
                    height="100"
                    width="100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-1.5 left-[-4px]"
                  >
                    <circle
                      r="45"
                      cx="50"
                      cy="50"
                      fill="none"
                      strokeWidth="3"
                      stroke="#a1c568"
                      strokeDasharray={`${Math.PI * 45} ${Math.PI * 45}`}
                      strokeDashoffset={`${Math.PI * 45}`}
                      transform="rotate(90 50 50)"
                    />
                  </svg>
                </div>
                <h5 className="font-normal text-[#646464]">Web Design</h5>
              </div>
              {/* html */}
              <div className="w-[45%] flex flex-col items-center">
                {/* <figure className="w-1/2  flex">
                  <img
                    className="w-[90px] h-[90px]"
                    src="/images/iconTenPercent.png"
                    alt=""
                  />
                </figure> */}
                <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-300 relative before:content-['50%'] before:text-[#323232] before:text-[17px] before:font-medium before:absolute before:top-1/2 before:left1/2 before:translate-x-[60%] before:translate-y-[-40%]">
                  <svg
                    height="100"
                    width="100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-1.5 left-[-4px]"
                  >
                    <circle
                      r="45"
                      cx="50"
                      cy="50"
                      fill="none"
                      strokeWidth="3"
                      stroke="#a1c568"
                      strokeDasharray={`${Math.PI * 45} ${Math.PI * 45}`}
                      strokeDashoffset={`${Math.PI * 45}`}
                      transform="rotate(90 50 50)"
                    />
                  </svg>
                </div>
                <h5 className="font-normal text-[#646464]">Html</h5>
              </div>
              {/* css */}
              <div className="w-[45%] flex flex-col items-center">
                {/* <figure className="w-1/2  flex">
                  <img
                    className="w-[90px] h-[90px]"
                    src="/images/iconEighti.png"
                    alt=""
                  />
                </figure> */}
                <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-300 relative before:content-['50%'] before:text-[#323232] before:text-[17px] before:font-medium before:absolute before:top-1/2 before:left1/2 before:translate-x-[60%] before:translate-y-[-40%]">
                  <svg
                    height="100"
                    width="100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-1.5 left-[-4px]"
                  >
                    <circle
                      r="45"
                      cx="50"
                      cy="50"
                      fill="none"
                      strokeWidth="3"
                      stroke="#a1c568"
                      strokeDasharray={`${Math.PI * 45} ${Math.PI * 45}`}
                      strokeDashoffset={`${Math.PI * 45}`}
                      transform="rotate(90 50 50)"
                    />
                  </svg>
                </div>
                <h5 className="font-normal text-[#646464]">Css</h5>
              </div>
            </div>
            {/*---------------------------Software Skills ---------------------------*/}
            <div className="flex items-center gap-4 mt-10">
              <div className="colorOne">
                <IoDiamond size={30} />
              </div>
              <span className="text-[17px] text-[#323232] font-extrabold">
                Software Skills
              </span>
            </div>
            {/*-------------------------- border -----------------*/}
            <div className="w-full h-[1px] bg-[linear-gradient(to_right,_white_10%,_#7f7d7d_50%,_white_90%)] mt-7"></div>
            {/*---------------------------- percent line ------------------------*/}
            <div className="w-full py-5">
              {/* sketch */}
              <div>
                <span>Sketch</span>
                <div
                  className="w-full h-1 relative bg-gray-300 mt-3 after:content-[] after:w-[20%]
                after:h-full after:bg-[#a1c568] after:absolute after:top-0 after:left-0
                "
                ></div>
              </div>
              {/* sketch */}
              <div className="mt-8">
                <span>Sketch</span>
                <div
                  className="w-full h-1 relative bg-gray-300 mt-3 after:content-[] after:w-[20%]
                after:h-full after:bg-[#a1c568] after:absolute after:top-0 after:left-0
                "
                ></div>
              </div>{" "}
              {/* sketch */}
              <div className="mt-8">
                <span>Sketch</span>
                <div
                  className="w-full h-1 relative bg-gray-300 mt-3 after:content-[] after:w-[20%]
                after:h-full after:bg-[#a1c568] after:absolute after:top-0 after:left-0
                "
                ></div>
              </div>{" "}
              {/* sketch */}
              <div className="mt-8">
                <span>Sketch</span>
                <div
                  className="w-full h-1 relative bg-gray-300 mt-3 after:content-[] after:w-[20%]
                after:h-full after:bg-[#a1c568] after:absolute after:top-0 after:left-0
                "
                ></div>
              </div>
              {/* sketch */}
              <div className="mt-8">
                <span>Sketch</span>
                <div
                  className="w-full h-1 relative bg-gray-300 mt-3 after:content-[] after:w-[20%]
                after:h-full after:bg-[#a1c568] after:absolute after:top-0 after:left-0
                "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------- price --------------------------------*/}
      <div className="w-full px-8 mt-10">
        {/* my service txt */}
        <div className="w-full px-0 mx-auto mb-8">
          <h1 className="text-[#323232] font-extrabold text-xl">
            <span className="colorOne">P</span>ricing
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-7"></div>
          {/* popular */}
          <div className="w-full  flex flex-col items-center mt-10">
            <div className="w-14 h-14 bg-gray-200 rounded-xl flex justify-center items-center">
              <GiChessQueen size={50} color="#A1C568" />
            </div>
            <span className="txtBold mt-3">Popular</span>
            <div className="flex items-center justify-center ml-8 mt-5">
              <span className="mb-4">$</span>
              <span className="txtBold text-[42px] mx-3">22</span>
              <span className="mt-4 ">hour</span>
            </div>
            <ul className="*:text-[#646464] font-normal text-center *:my-2">
              <li>Web Design</li>
              <li>Mobile-First</li>
              <li>Graphic Design</li>
              <li className="line-through">Logo Design</li>
              <li className="line-through">Photography</li>
            </ul>
            <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-7"></div>
            <div className="w-full flex items-center mt-3 justify-center group py-3 cursor-pointer gap-3">
              <a
                className="txtBold group-hover:text-[#A1C568] duration-500"
                href=""
              >
                Order Now
              </a>
              <div className="group-hover:translate-x-2 text-[#323232] group-hover:text-[#A1C568] duration-500">
                <FaArrowRight />
              </div>
            </div>
          </div>
          {/* pro */}
          <div className="w-full  flex flex-col items-center mt-10">
            <div className="w-14 h-14 bg-gray-200 rounded-xl flex justify-center items-center">
              <GiChessQueen size={50} color="#A1C568" />
            </div>
            <span className="txtBold mt-3">Pro</span>
            <div className="flex items-center justify-center ml-8 mt-5">
              <span className="mb-4">$</span>
              <span className="txtBold text-[42px] mx-3">48</span>
              <span className="mt-4 ">hour</span>
            </div>
            <ul className="*:text-[#646464] font-normal text-center *:my-2">
              <li>Web Design</li>
              <li>Mobile-First</li>
              <li>Graphic Design</li>
              <li>Logo Design</li>
              <li>Photography</li>
            </ul>
            <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-white mt-7"></div>
            <div className="w-full flex items-center mt-3 justify-center group py-3 cursor-pointer gap-3">
              <a
                className="txtBold group-hover:text-[#A1C568] duration-500"
                href=""
              >
                Order Now
              </a>
              <div className="group-hover:translate-x-2 text-[#323232] group-hover:text-[#A1C568] duration-500">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
