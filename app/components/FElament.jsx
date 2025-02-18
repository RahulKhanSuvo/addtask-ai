"use client";
import React from "react";
import { motion } from "motion/react";

export default function FElement() {
  return (
    <div className="relative overflow-hidden">
      <div
        style={{
          border: "1px solid #7687B5",
          background: "linear-gradient(158deg, #0B0B0B 5.17%, #1D2333 98.61%)",
        }}
        className="w-[350px] relative rounded-2xl  overflow-hidden h-[590px]"
      >
        <div
          style={{
            borderRadius: "395.321px",
            border: " 1px solid #5C73AE",
            opacity: " 0.28",
          }}
          className="size-[395px] flex items-center justify-center mt-16 absolute -left-6 "
        >
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className=" absolute top-20 right-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V22.5C0 23.325 0.675 24 1.5 24H22.5C23.325 24 24 23.325 24 22.5V21C24 17.01 16.005 15 12 15Z"
              fill="#788199"
            />
          </motion.svg>
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className=" absolute  left-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V22.5C0 23.325 0.675 24 1.5 24H22.5C23.325 24 24 23.325 24 22.5V21C24 17.01 16.005 15 12 15Z"
              fill="#788199"
            />
          </motion.svg>
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className=" absolute bottom-36 right-16"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V22.5C0 23.325 0.675 24 1.5 24H22.5C23.325 24 24 23.325 24 22.5V21C24 17.01 16.005 15 12 15Z"
              fill="#788199"
            />
          </motion.svg>
          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 3, repeat: Infinity, ease: "linear" },
              }}
              style={{
                width: "300px",
                height: "300px",
                background:
                  "conic-gradient(from 58deg at 50% 50%, #DF215F00 7%, #7687B5DB 7%, #7687B5DB 9%, #DF215F00 9%, #DF215F00 22%),conic-gradient(from 22deg at 50% 50%, #333B4FAD 17%, #DF215F00 18%, #DF215F00 19%, #DF215F00 21%, #DF215F00 23%)",
                borderRadius: "50%",
              }}
              className="size-[120px]"
            ></motion.div>
            <div className="bg-[#e6edff6b] size-[12px] absolute rounded-full"></div>
            <motion.div
              animate={{
                scale: [1, 90],
                backgroundColor: ["#e6edff15"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-[#e6edff15] absolute   rounded-full size-[12px]"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 100],
                backgroundColor: ["#e6edff15"],
                outlineWidth: [0, 2, 0],
                outlineColor: ["transparent", "#e6edff60", "transparent"],
              }}
              transition={{
                delay: 1,
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full size-[12px]"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
