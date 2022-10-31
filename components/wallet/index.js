import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/images/image (23).png";

const Wallet = () => {
  return (
    <section className="lg:mt-1/182 mt-16 gap-y-4 px-1/22 lg:px-0 lg:max-w-1/940 mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center">
      <div className=" font-bold text-center lg:text-left">
        <h1 className="text-title font-medium text-2xl text-center lg:text-left lg:text-4xl leading-1/44 tracking-[-0.02em]">
          Open NEAR wallet
        </h1>
        <p className="font-normal text-base lg:text-lg lg:leading-6 pt-1/6">
          <span className="hidden lg:block text-text">
            Opening a NEAR wallet is the first step and
            <br /> essential part of joining the NEAR community
            <br /> as well as starting this course.
          </span>
          <span className="block lg:hidden text-text">
            Opening a NEAR wallet is the first step and an essential part of
            joining the NEAR community as well as starting this course.
          </span>
        </p>
        <Link className="cursor-pointer" href="#">
          <button
            type="button"
            className="font-normal text-title text-base  mt-8  border-title border   focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid  rounded-full px-5 py-3 rounded-4xl inline-block"
          >
            Create wallet
          </button>
        </Link>
      </div>
      <div className="relative">
        <div class="bg-hero h-1/480 w-full opacity-[0.5] blur-[6.181rem] max-w-1/480 absolute -top-2/3 z-0 left-[20%] hidden lg:block"></div>
        <div className="lg:w-1/296 lg:h-1/296 w-1/180 h-1/180">
          <Image src={image} />
        </div>
      </div>
    </section>
  );
};

export default Wallet;
