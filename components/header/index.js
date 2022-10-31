import Link from "next/link";
import React from "react";
import Image from "next/image";
import decade from "../../public/vectors/decade.svg";
import logo1 from "../../public/vectors/logo1.svg";
import logo2 from "../../public/vectors/logo2.svg";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const country = [
  {
    name: "brazil",
    url: "vectors/logo2.svg",
  },
];

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    // lg:max-w-5xl lg:m-auto
    <section className="relative   ">
      <div className="bg-white top-0 fixed z-[99] w-full">
        <div className="flex lg:mx-1/80px mx-1/16 items-center my-1/25 ">
          <div className="flex items-center">
            <Link href="/decade">
              <Image src={decade} />
            </Link>
            <Link href="/decade">
              <span className="ml-2 hidden md:block text-zinc-700 font-bold text-lg">
                Dacade
              </span>
            </Link>
          </div>
          <div className="border-gray-200 border h-8 border-solid border-r-2 lg:mx-1/11 mx-1.5"></div>
          <Link href="/near">
            <div>
              <div className="hidden lg:block">
                <Image src={logo1} />
              </div>
              <div className="lg:hidden">
                <Image src={logo2} />
              </div>
            </div>
          </Link>

          <div className="flex text-black font-normal lg:text-lg text-base items-center ml-auto ">
            <button
              onClick={openModal}
              type="button"
              className="hidden lg:block bg-transparent text-default  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border border-none rounded-full px-5 py-3 rounded-4xl "
            >
              Start The Course
            </button>
            <Link href="/wallet">
              <button
                type="button"
                className="ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit  border-solid border rounded-full px-5 py-3 rounded-4xl inline-block"
              >
                Create wallet
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between pb-5">
                      <p className=" font-semibold text-xl tracking-tight">
                        Choose language
                      </p>
                      <span
                        className="my-auto cursor-pointer"
                        onClick={closeModal}
                      >
                        <img src="vectors/logo2.svg" />
                      </span>
                    </div>
                  </Dialog.Title>
                  <div className="border-t pt-5">
                    {country.map((v, i) => {
                      return (
                        <div
                          className="flex justify-between pb-2 border p-2 mb-4 rounded"
                          key={i}
                        >
                          <div className="flex space-x-2 my-auto">
                            <img
                              src={v.url}
                              className="w-5 h-5 "
                              height={14}
                              width={24}
                            />
                            <span>{v.name}</span>
                          </div>
                          <div>
                            <span className="p-2.5 rounded-full bg-gray-200 mx-auto flex items-center">
                              <img
                                src="assets/arrow.svg"
                                width={7}
                                height={14}
                              />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Header;
