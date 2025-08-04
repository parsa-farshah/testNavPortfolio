import Image from "next/image";
import React from "react";
import topImg from "../../public/images/top paper.svg";
import bottomImg from "../../public/images/bottom paper white.svg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { IoIosCloudDownload } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";

function ImageMe() {
  return (
    <section className="w-full h-[500px] sm:w-full px-5 mt-3 mx-auto sm:px-3 sm:mt-6 sm:h-[600px]  lg:w-[700px] lg:h-[720px] xl:pt-0 lg:m-0 lg:-translate-x-11 before:content-[] before:w-[110%] before:h-[110%] before:bg-[#dae8c4] before:absolute before:left-[-35px] before:top-[-36px] before:hidden lg:before:flex">
      <div className="bgMe w-full h-full object-cover object-center relative overflow-hidden">
        {/* top image */}
        <div className="w-[200%] h-[200px] sm:-translate-y-9 md:-translate-y-18 object-cover absolute top-0 left-[-50%] ">
          <Image src={topImg} alt="papper" />
        </div>
        {/* botom image */}
        <div className="w-[200%] h-[200px] sm:translate-y-9 md:translate-y-18  object-cover absolute -scale-y-100 bottom-0  left-[-50%] ">
          <Image src={topImg} alt="papper" />
        </div>
        {/* botom image */}
        <div className="w-[200%] h-[200px] sm:translate-y-9 md:translate-y-18  object-cover absolute -scale-y-100 -bottom-5 left-[-50%] ">
          <Image src={bottomImg} alt="papper" />
        </div>

        {/*----------------- center text ----------------*/}
        <div className="absolute left-1/2 top-1/2 xl:top-3/4 -translate-1/2  *:text-center">
          <h5 className="text-[#ffffff] text-4xl font-extrabold">
            Parsa Fresh
          </h5>
          <h3 className="text-[#a1c568]">Front End Developer</h3>
          <ul className="flex justify-around mx-auto w-10/12 mt-4">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#a1c568] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#a1c568] transition-colors duration-300"
              >
                <FaTelegramPlane size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#a1c568] transition-colors duration-300"
              >
                <RiYoutubeLine size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#a1c568] transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-[#a1c568] transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            </li>
          </ul>
        </div>
        {/* -------------------- bottom links -------------------- */}
        <div className="w-full absolute bottom-0 left-0 flex justify-between boeder-t ">
          {/* left */}
          <div className="flex items-center w-1/2 h-16 bg-[#ffffff] justify-center gap-4 group cursor-pointer">
            <a className="text-lg md:text-2xl uppercase " href="">
              Download Cv
            </a>
            <div className="group-hover:text-[#a1c568] group-hover:-translate-y-2 duration-500">
              <IoIosCloudDownload size={25} />
            </div>
          </div>
          {/* right */}
          <div className="flex items-center w-1/2 h-16 bg-[#ffffff] justify-center gap-4 group cursor-pointer">
            <a className="text-lg md:text-2xl uppercase " href="">
              contact me
            </a>
            <div className="group-hover:text-[#a1c568] group-hover:-translate-y-2 duration-500">
              <PiTelegramLogo size={25} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageMe;
