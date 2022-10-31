import Link from "next/link";
import React from "react";
import instagram from "../../public/vectors/discord.svg";
import facebook from "../../public/vectors/facebook.svg";
import linkedin from "../../public/vectors/linkedin.svg";
import medium from "../../public/vectors/medium.svg";
import telegram from "../../public/vectors/telegram.svg";
import twitter from "../../public/vectors/twitter.svg";
import discord from "../../public/vectors/discord.svg";
import Image from "next/image";
import logo from "../../public/vectors/footer-logo.svg";

const Footer = () => {
  return (
    <section className="w-full relative  bg-white">
      <div className="lg:w-1/71 px-1/23 text-footer  py-24 text-lg mx-auto ">
        <h6 className="text-center">
          Visit{" "}
          <span className="font-bold cursor-pointer">
            <Link href="#">nearbalkans.org</Link>
          </span>{" "}
          and make sure to follow us on our social and community channels!
        </h6>

        <div className="lg:flex  pt-1/39 w-full lg:w-1/540 lg:mx-auto">
          <div className="hidden lg:block">
            <span>
              <Link href="#">
                <Image src={logo} />
              </Link>
            </span>
          </div>

          <div className="border-gray-200  border-solid border-r-2 mx-1/61 hidden lg:block"></div>
          <div className="flex items-center lg:ml-auto justify-between">
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={twitter} />
              </Link>
            </div>
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={discord} />
              </Link>
            </div>
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={telegram} />
              </Link>
            </div>
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={facebook} />
              </Link>
            </div>
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={linkedin} />
              </Link>
            </div>
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={instagram} />
              </Link>
            </div>
            <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
              <Link href="#">
                <Image src={medium} />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex text-footer text-center justify-center gap-10 pt-1/39">
          <div className="">
            {" "}
            <Link className="text-lg cursor-pointer text-Center" href="#">
              NEAR Balkans 2022
            </Link>{" "}
          </div>
          <div>
            <Link className="text-lg cursor-pointer text-Center" href="#">
              info@nearbalkans.org
            </Link>
          </div>
          <div>
            <Link className="text-lg cursor-pointer text-Center" href="#">
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link className="text-lg cursor-pointer text-Center" href="#">
              Cookie Policy
            </Link>
          </div>
          <div>
            <Link className="text-lg cursor-pointer text-Center" href="#">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
        <h6 className="text-footer pt-1/34 text-center">
          NEAR Balkans Hub: Bosnia &amp; Herzegovina, Bulgaria, Croatia,
          Montenegro, North Macedonia, Serbia, and Slovenia
        </h6>
      </div>
    </section>
  );
};

export default Footer;
