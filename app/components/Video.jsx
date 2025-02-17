import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <div className=" mb-10">
      <div className="max-w-[970px]  bg-[#232938] h-[460px] video-wrapper overflow-hidden rounded-[40px] flex justify-center items-center  mx-auto">
        <div className="relative video-content">
          <Image
            alt="video"
            src={"/AdTask.ai.png"}
            height={80}
            width={450}
          ></Image>
          <div className="absolute inset-0 w-full flex  justify-center">
            <Image
              alt="youtube logo"
              className=" "
              src={"/youtube.svg"}
              width={96}
              height={65}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
