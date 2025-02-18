import React from "react";
import SubTitle from "./SubTitle";
import FElament from "./FElament";

export default function Feature() {
  return (
    <div className="mt-64 container mx-auto">
      <SubTitle text={"features"}></SubTitle>
      <div className="flex justify-center items-center gap-10">
        <div className="w-[218px] h-[1px] bg-gradient-to-r from-[#0D111A] to-[#5C73AE]"></div>
        <h3 className="text-center mt-6 text-4xl">
          Feature packed to make <br />{" "}
          <span className="text-transparent bg-clip-text font-medium bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] ">
            Digital marketing easier and affordable.
          </span>
        </h3>
        <div className="w-[218px] h-[1px] bg-gradient-to-r from-[#5C73AE] to-[#0D111A]"></div>
      </div>
      <p className="text-center text-sm text-[#E2E8F8] mt-8">
        Experience Intelligent Features to optimize your marketing efforts.
      </p>
      <FElament></FElament>
    </div>
  );
}
