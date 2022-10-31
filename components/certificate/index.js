import React from "react";
import Image from "next/image";
import image from "../../public/images/image (27).png";

function Certificate() {
  return (
    <section className="grid px-5 justify-items-center mt-16 lg:mt-1/180">
      <div className="text-center mx-auto">
        <h1 className=" text-center text-title font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative">
          Claim NEAR certificate
          <div className="hidden lg:block absolute top-0 -mt-[38%] left-[40%]">
            <svg
              width="164"
              height="132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.511 120.017c1.318 1.354 6.103 10.6 6.633 10.823m0 0c.452.191 3.298-5.156 5.992-10.538M8.144 130.84c-5.012-24.418 17.84-38.27 35.281-47.719C64.522 71.692 82.33 66.933 100.376 59.01c26.494-11.631 59.68-29.574 62.055-57.026"
                stroke="#676767"
                stroke-width="2"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </h1>

        <p className=" font-normal text-lg leading-6 text-center">
          <span className="hidden text-text lg:block">
            {" "}
            Upon course completion, receive the NEAR dev 101
            <br /> certificate as an NFT on your NEAR wallet.
          </span>
          <span className="block text-text lg:hidden">
            Upon course completion, receive the NEAR dev 101 certificate as an
            NFT on your NEAR wallet.
          </span>
        </p>
      </div>
      <div className="lg:w-[644px] h-[186px] lg:h-[362.25px] mt-8 lg:mt-[80px]">
        <Image src={image} />
      </div>
    </section>
  );
}

export default Certificate;
