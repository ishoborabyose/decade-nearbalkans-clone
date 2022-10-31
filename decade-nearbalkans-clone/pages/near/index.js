import React from "react";
import Link from "next/link";

const Near = () => {
  return (
    <>
      <div className="pt-24 font-medium text-[36px]  bg-clip-text text-transparent bg-gradient-to-b from-[#9092fb] via-[#86b5ef] to-[#7bdde2] mx-auto text-center leading-10">
        PAGE 2
      </div>

      <div className="text-title mx-auto font-medium text-[36px] text-center ">
        <Link href="/">Back Home</Link>
      </div>
    </>
  );
};

export default Near;
