import React from "react";

export default function SubTitle({ text }) {
  return (
    <div className="text-center flex justify-center">
      <h2
        style={{
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          background:
            "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
        }}
        className="px-5 py-2 uppercase rounded-[15px] w-fit text-white text-center h-fit"
      >
        {text}
      </h2>
    </div>
  );
}
