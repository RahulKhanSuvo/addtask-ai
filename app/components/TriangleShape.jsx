import React from "react";

export default function TriangleShape() {
  return (
    <div className="relative container mx-auto w-full h-[530px] overflow-hidden flex justify-center items-center ">
      {/* Background Grid */}
      <div
        style={{
          backgroundSize: "70px 70px",
          backgroundImage: `
            linear-gradient(to right, grey 1px, transparent 1px),
            linear-gradient(to bottom, grey 1px, transparent 1px)
          `,
        }}
        className="absolute inset-0 opacity-10"
      ></div>

      {/* Gradient Overlay for Glow Effect */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,6,1) 0%, rgba(203,76,144,0) 50%, rgba(5,5,6,1) 100%)",
        }}
        className="absolute inset-0"
      ></div>

      {/* Glowing Triangle */}
      <div
        style={{
          filter: "drop-shadow(0 0 20px rgba(173, 216, 255, 0.9)) blur(40px)",
        }}
        className="relative"
      >
        <div
          className="w-0 h-0 
            border-l-[270px] border-l-transparent 
            border-r-[270px] border-r-transparent 
            border-b-[530px] opacity-40"
          style={{ borderBottomColor: "rgba(118, 135, 181, 0.6)" }}
        ></div>
      </div>
    </div>
  );
}
