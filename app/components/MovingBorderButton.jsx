"use client";
import { motion } from "motion/react";

export default function MovingBorderButton({ text = "Start Free Trial" }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative ">
        <button className="px-8 btn-wrapper pt-3 pb-2  relative overflow-hidden z-10 bg-[#7687B54A] rounded-[40px] ">
          <span className="btn-content"></span>
          <span className="absolute inset-0 bg-repeat-x bg-[url('/blink.gif')] opacity-50 animate-pulse"></span>
          <span className="absolute inset-0 bg-repeat-x bg-[url('/blink.gif')] rotate-180 animate-pulse"></span>
          <span className="absolute  -bottom-2 left-1/2 -translate-x-1/2 h-[11px] w-[71px] bg-white blur-md border-[#7687b594] "></span>
          <span className="relative z-10  ">Start Free Trial</span>
        </button>
        {/* border */}
      </div>
    </div>
  );
}
