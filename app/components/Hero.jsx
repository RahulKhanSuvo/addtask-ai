import React from "react";
import TriangleShape from "./TriangleShape";
import MovingBorderButton from "./MovingBorderButton";

function Hero() {
  return (
    <div>
      <div className="relative">
        <TriangleShape></TriangleShape>
        <div className="absolute inset-0 w-full flex-col flex justify-center items-center">
          <div
            style={{
              background:
                "linear-gradient(90.00deg, rgba(142, 141, 141, 0.15),rgba(40, 40, 40, 0.15) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
            className="flex text-sm items-center border px-3 py-3 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.26045 0C6.92918 2.75561 8.29889 5.16613 12.5876 6.13864C8.40532 7.25586 7.15818 8.82341 6.39161 12.2145C5.45196 8.75358 4.56928 6.86625 0 6.13763C3.9242 5.10238 5.47668 2.94485 6.26045 0ZM16.2398 8.83859C15.1066 12.8237 12.7273 15.5713 8.21718 16.2048C13.5971 17.0143 15.3711 20.2071 16.2398 24C16.9655 19.5402 19.7092 17.1429 24 16.3272C19.8328 15.2646 17.0246 12.849 16.2398 8.83859Z"
                fill="#D9D9D9"
              />
            </svg>
            <h5 className="font-medium uppercase text-white">
              {" "}
              Transform Your Digital Presence with AI Agents
            </h5>
          </div>
          <h2 className="text-8xl font-medium my-9 relative group">
            <span className="glow">adTask.ai</span>
          </h2>
          <div className="text-center">
            <p className="text-[#E2E8F8] mb-10">
              {" "}
              Stop struggling with marketing decisions. Our AI assistant
              analyzes your business, creates <br /> personalized strategies,
              and helps you execute them - all in real-time.
            </p>
            <MovingBorderButton></MovingBorderButton>
            <p className="text-xs mt-6 text-[#C5CDE3]">
              Try AdTask AI free for 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
