import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="w-full flex flex-wrap sm:flex-col relative sm:pt-7 sm:ml-5 md:ml-12 before:w-[80px] before:h-[480px] before:content-[] before:hidden lg:before:flex before:border before:border-[#A1C568] before:absolute before:top-9 before:-left-6 before:z-40 before:rounded-sm">
        <div className="w-full p-4 flex justify-between  items-center border-b-[0.5px]  border-b-gray-700 rounded-md sm:border-0 sm:items-center sm:w-[80px] sm:p-0  z-50  ">
          {/* name and my job */}
          <div className="sm:hidden">
            <h4 className="text-[#323232] text-[15px]">
              Parsa Dehghna Pour Farashah
            </h4>
            <h2 className="text-[#A1C568] text-[12px]">Front End Developer</h2>
          </div>
          {/*---------------------- icons top ----------------------------------*/}
          <div className="flex flex-row-reverse sm:flex-col sm:w-full sm:items-center gap-6 items-center  sm:shadow-2xl sm:bg-[#f3f3f3] sm:py-5 sm:rounded-md">
            {/* menu bar icon */}
            <div className="w-8 h-8 rotate-90  flex justify-center items-center group/menu cursor-pointer">
              <span className=" h-1/2 text-2xl sm:text-xl text-[#323232] group-hover/menu:text-[#A1C568] bg group-hover/menu:h-full sm:group-hover/menu:h-[85%] duration-500 ">
                |
              </span>
              <span className="text-2xl sm:text-xl text-[#323232] group-hover/menu:text-[#A1C568]">
                |
              </span>
              <span className="text-2xl sm:text-xl text-[#323232] h-1/2  group-hover/menu:text-[#A1C568] bg group-hover/menu:h-full sm:group-hover/menu:h-[85%] duration-500">
                |
              </span>
            </div>
            {/* moon icon */}
            <div className="group cursor-pointer w-10 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#323232"
                className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
            {/* shopping cart icon */}
            <div className="group cursor-pointer w-10 flex justify-center relative after:content-['0'] after:flex after:justify-center after:items-center after:text-white after:w-4 after:h-4 after:bg-[#A1C568] after:rounded-full after:absolute after:right-0 after:-top-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#323232"
                className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/*--------------------- icons bottom ----------------------------------*/}
        <div className="py-7 w-full  flex justify-around gap-[18%] px-7 overflow-x-scroll sm:shadow-2xl sm:flex-col sm:justify-between sm:items-center  sm:w-[80px] sm:h-[300px] sm:overflow-visible sm:gap-0 sm:rounded-md sm:bg-[#f3f3f3] mt-3 z-50">
          {/* about icon */}
          <div className="group  cursor-pointer w-10 flex  justify-center relative after:content-['About'] uppercase after:opacity-0 after:pointer-events-none  hover:after:opacity-100 after:justify-center after:items-center after:text-white after:w-auto after:px-2.5 after:py-1 after:h-auto after:bg-[#A1C568] after:rounded-sm after:absolute after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          {/* resume icon */}
          <div className="group cursor-pointer w-10  flex justify-center relative after:content-['Resume'] uppercase  after:opacity-0 after:pointer-events-none  hover:after:opacity-100 after:justify-center after:items-center after:text-white after:w-auto after:px-2.5 after:py-1 after:h-auto after:bg-[#A1C568] after:rounded-sm after:absolute after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>{" "}
          {/* works icon */}
          <div className="group cursor-pointer w-10  flex justify-center relative after:content-['works'] uppercase  after:opacity-0 after:pointer-events-none  hover:after:opacity-100 after:justify-center after:items-center after:text-white after:w-auto after:px-2.5 after:py-1 after:h-auto after:bg-[#A1C568] after:rounded-sm after:absolute after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
              />
            </svg>
          </div>{" "}
          {/* blog icon */}
          <div className="group cursor-pointer w-10  flex justify-center relative after:content-['blog'] uppercase  after:opacity-0 after:pointer-events-none  hover:after:opacity-100 after:justify-center after:items-center after:text-white after:w-auto after:px-2.5 after:py-1 after:h-auto after:bg-[#A1C568] after:rounded-sm after:absolute after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>{" "}
          {/* contact icon */}
          <div className="group cursor-pointer w-10  flex justify-center relative after:content-['contact'] uppercase  after:opacity-0 after:pointer-events-none  hover:after:opacity-100 after:justify-center after:items-center after:text-white after:w-auto after:px-2.5 after:py-1 after:h-auto after:bg-[#A1C568] after:rounded-sm after:absolute after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>{" "}
          {/* play icon */}
          <div className="group cursor-pointer w-10  flex justify-center relative after:content-['play'] uppercase  after:opacity-0 after:pointer-events-none  hover:after:opacity-100 after:justify-center after:items-center after:text-white after:w-auto after:px-2.5 after:py-1 after:h-auto after:bg-[#A1C568] after:rounded-sm after:absolute after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="size-6 sm:size-5 group-hover:stroke-[#A1C568] duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>{" "}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
