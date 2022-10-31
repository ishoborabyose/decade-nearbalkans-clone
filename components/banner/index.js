import Link from "next/link";
import React from "react";
import Image from "next/image";
import image from "../../public/vectors/circle.svg";

const Banner = () => {
  return (
    <section classNameName="bg-white min-h-screen pt-44 overflow-hidden">
      <div className="bg-white px-[23px] lg:px-0  relative lg:pt-32 pt-12 h-[600px] lg:h-[500px] w-full">
        <div className="bg-hero  absolute lg:-top-[550px] -top-[420px] opacity-[0.4] left-0 lg:-left-48 h-[100%] w-[50%] z-50"></div>
        <div class="bg-hero  absolute lg:-top-[550px] -top-[420px] opacity-[0.4] right-0 lg:right-0 h-[100%] w-[40%] z-50"></div>

        <div className=" pt-24 text-center lg:w-[910px] mx-auto">
          <h1 className="lg:text-[72px] lg:w-full w-[200px] text-title mx-auto font-medium text-[36px] ">
            Get{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#9092fb] via-[#86b5ef] to-[#7bdde2]">
              NEAR
            </span>{" "}
            Certified!
          </h1>
          <p className=" pt-5 pb-24 lg:text-[22px] text-lg text-text leading-[28px]">
            We, in NEAR Balkans, know how important it is to have regional and
            local support. Now you can become NEAR certified in a regional
            language of preference and connect with our team to support your
            further growth within the NEAR ecosystem.
          </p>
          <div className="mx-auto text-center  ">
            <a href="#nears">
              <Image className="mx-auto text-center " src={image} />
            </a>
          </div>
        </div>
      </div>

      <div
        id="nears"
        className="grid mt-16 justify-items-center text-title font-primary text-center text-dark-100 font-medium text-[32px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em]"
      >
        Making your NEAR <br />
        learning easy.
      </div>
    </section>
  );
};

export default Banner;
