import Image from "next/image";
import React from "react";

export default function Tools() {
  return (
    <div className="relative flex flex-wrap justify-center items-center gap-8 lg:container mx-auto">
      <div className="relative p-[2px] rounded-[16px]">
        {/* Gradient Border Layer */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #333B4F, #7687B5)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Content Layer */}
        <div
          className="relative flex items-center justify-center size-28 rounded-[14px] p-6"
          style={{
            background: "rgba(120, 129, 153, 0.21)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Image
            alt="tools"
            width={45}
            height={45}
            src="/Tools/a.svg"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="relative p-[2px] rounded-[16px]">
        {/* Gradient Border Layer */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #333B4F, #7687B5)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Content Layer */}
        <div
          className="relative flex items-center justify-center size-28 rounded-[14px] p-6"
          style={{
            background: "rgba(120, 129, 153, 0.21)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Image
            alt="tools"
            width={45}
            height={45}
            src="/Tools/tiktok.svg"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="relative p-[2px] rounded-[16px]">
        {/* Gradient Border Layer */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #333B4F, #7687B5)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Content Layer */}
        <div
          className="relative flex items-center justify-center size-28 rounded-[14px] p-6"
          style={{
            background: "rgba(120, 129, 153, 0.21)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Image
            alt="tools"
            width={45}
            height={45}
            src="/Tools/meta.svg"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="relative p-[2px] rounded-[16px]">
        {/* Gradient Border Layer */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #333B4F, #7687B5)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Content Layer */}
        <div
          className="relative flex items-center justify-center size-28 rounded-[14px] p-6"
          style={{
            background: "rgba(120, 129, 153, 0.21)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Image
            alt="tools"
            width={45}
            height={45}
            src="/Tools/linkedin.svg"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="relative p-[2px] rounded-[16px]">
        {/* Gradient Border Layer */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #333B4F, #7687B5)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Content Layer */}
        <div
          className="relative flex items-center justify-center size-28 rounded-[14px] p-6"
          style={{
            background: "rgba(120, 129, 153, 0.21)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Image
            alt="tools"
            width={45}
            height={45}
            src="/Tools/amazon.svg"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="relative p-[2px] rounded-[16px]">
        {/* Gradient Border Layer */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #333B4F, #7687B5)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Content Layer */}
        <div
          className="relative flex items-center justify-center size-28 rounded-[14px] p-6"
          style={{
            background: "rgba(120, 129, 153, 0.21)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Image
            alt="tools"
            width={45}
            height={45}
            src="/Tools/x.svg"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}
