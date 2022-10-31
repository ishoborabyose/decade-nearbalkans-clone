import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image (24).png";
import image2 from "../../public/images/image (25).png";
import image3 from "../../public/images/image (26).png";
const Caurse = () => {
  return (
    <section className="lg:mt-1/177 lg:px-0 lg:max-w-1/940 mx-auto mt-16 px-1/22 flex gap-x-1/179 lg:flex-row flex-col gap-y-4 items-center">
      <div className="z-50">
        <div className=" z-10 relative lg:w-1/296 lg:h-1/296 w-1/180 h-1/180">
          <svg
            viewBox="0 0 296 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="url(#Target_svg__a)" d="M0 0h296v296H0z"></path>
            <path
              opacity="0.05"
              d="M238 147c0 49.639-40.137 90-89.5 90S59 196.639 59 147c0-49.64 40.137-90 89.5-90S238 97.36 238 147Z"
              fill="#676767"
            ></path>
            <path
              d="M148.5 215c37.279 0 67.5-30.221 67.5-67.5 0-37.279-30.221-67.5-67.5-67.5-37.279 0-67.5 30.221-67.5 67.5 0 37.279 30.221 67.5 67.5 67.5Z"
              fill="#fff"
            ></path>
            <path
              d="M181.866 180.707c18.408-18.435 18.408-48.325 0-66.76-18.408-18.435-48.253-18.435-66.661 0-18.407 18.435-18.407 48.325 0 66.76 18.408 18.436 48.253 18.436 66.661 0Z"
              fill="url(#Target_svg__b)"
            ></path>
            <path
              d="M148.877 173.484c14.419-.181 25.962-12.033 25.781-26.474-.18-14.44-12.015-26-26.433-25.819-14.419.18-25.962 12.033-25.782 26.473.181 14.44 12.015 26 26.434 25.82Z"
              fill="#fff"
            ></path>
            <circle
              opacity="0.2"
              cx="148.5"
              cy="147.5"
              r="12.5"
              fill="#676767"
            ></circle>
            <path
              d="m147.5 148 77.303-90.446"
              stroke="#676767"
              stroke-miterlimit="10"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M146.679 139.207a.5.5 0 0 1 .527.471l.443 7.973 7.973-.442a.5.5 0 0 1 .055.998l-8.472.47a.499.499 0 0 1-.527-.471l-.47-8.472a.5.5 0 0 1 .471-.527Z"
              fill="#676767"
            ></path>
            <path
              d="M203.139 81 224 56.603 211.02 52 189 77.548 203.139 81ZM205 82.561 226.176 58 233 70.049 210.882 96 205 82.561Z"
              fill="#9092FB"
            ></path>
            <defs>
              <linearGradient
                id="Target_svg__a"
                x1="252.652"
                y1="43.348"
                x2="43.348"
                y2="252.652"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FDFEFF"></stop>
                <stop offset="1" stop-color="#F1F7FF"></stop>
              </linearGradient>
              <linearGradient
                id="Target_svg__b"
                x1="115.205"
                y1="113.947"
                x2="139.073"
                y2="189.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7BDDE2"></stop>
                <stop offset="0.479" stop-color="#86B5EF"></stop>
                <stop offset="1" stop-color="#9092FB"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="bg-hero  opacity-[0.3] blur-[6.181rem]  top-[38%] right-[70%] absolute h-1/480 w-1/480 z-0 hidden lg:block"></div>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-title font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative">
          Complete the course
          <div className="absolute top-[0] -mt-1/38 -left-[24%] hidden lg:block">
            <svg
              width="164"
              height="132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M162.489 120.017c-1.318 1.354-6.103 10.6-6.633 10.823m0 0c-.452.191-3.298-5.156-5.992-10.538m5.992 10.538c5.012-24.418-17.84-38.27-35.281-47.719-21.097-11.429-38.904-16.188-56.95-24.111C37.13 47.379 3.943 29.436 1.568 1.984"
                stroke="#676767"
                stroke-width="2"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </h1>
        <p className="text-text text-lg leading-6 mt-6">
          In three simple modules, learn:
        </p>
        <div className=" lg:flex  lg:flex-row  lg:gap-2">
          <div className="flex gap-x-3 gap-y-1/10 lg:items-end items-center lg:flex-row flex-col mt-6">
            <div className="lg:h-8 lg:w-8 h-1/18  w-[18px]">
              <Image src={image1} />
            </div>
          </div>
          <p className="text-text font-normal text-base lg:text-lg lg:leading-6  mt-auto">
            Essential NEAR concepts
          </p>
        </div>

        <div className=" lg:flex  lg:flex-row  lg:gap-2">
          <div className="flex gap-x-3 gap-y-1/10 lg:items-end items-center lg:flex-row flex-col mt-6">
            <div className="lg:h-8 lg:w-8 h-1/18 w-[18px]">
              <Image src={image2} />
            </div>
          </div>
          <p className="text-text font-normal text-base lg:text-lg lg:leading-6 mt-auto ">
            How to write smart contracts on NEAR
          </p>
        </div>

        <div className=" lg:flex  lg:flex-row  lg:gap-2">
          <div className="flex gap-x-3 gap-y-1/10 lg:items-end items-center lg:flex-row flex-col mt-6">
            <div className="lg:h-8 lg:w-8 h-1/18 w-[18px]">
              <Image src={image3} />
            </div>
          </div>
          <p className="text-text font-normal text-base lg:text-lg lg:leading-6 mt-auto">
            How to build dapps on the NEAR blockchain
          </p>
        </div>
      </div>
    </section>
  );
};

export default Caurse;
