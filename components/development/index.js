import React from "react";
import Image from "next/image";
import image from "../../public/images/__next_static_media_nearGrey.ff4971b0.png";
const Development = () => {
  return (
    <section className="w-full bg-white ">
      <div className="lg:mx-1/148  flex lg:flex-row flex-col-reverse justify-between items-center mt-1/168  lg:bg-gradient-to-l  from-[#E9FAFB] via-[#effcfc] to-[#ffffff]">
        <div className="relative lg:px-[50px]  text-center lg:text-left">
          <h1 className="text-title relative z-10  font-medium text-2xl lg:text-4xl leading-1/44 tracking-[-0.02em]">
            NEAR Development 101
          </h1>
          <button
            type="button"
            className="font-normal relative z-10 text-title text-base leading-1/17 mt-4  border-title   focus:outline-none cursor-pointer transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block"
          >
            Start The Course
          </button>
        </div>

        <div className="lg:w-1/400 relative lg:h-1/400 w-1/180 h-1/180">
          <Image src={image} />
        </div>
      </div>
    </section>
  );
};

export default Development;
