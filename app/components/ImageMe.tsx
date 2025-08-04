
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

function ImageMe() {
  return (
    <section className="w-[480px] h-[500px] sm:w-full px-5 mt-3 mx-auto sm:px-3 sm:mt-6 sm:h-[600px]  lg:w-[700px] lg:h-[720px] xl:pt-0 lg:m-0 lg:-translate-x-11">
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
        <div className="absolute left-1/2 top-1/2 -translate-1/2  *:text-center">
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
      </div>
    </section>
  );
}

export default ImageMe;
