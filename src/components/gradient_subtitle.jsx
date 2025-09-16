import React from "react";

const GradientSubtitle = ({ text }) => {
  return (
    <div className="line h-[30px] mb-8 font-medium  text-white   tracking-wider  text-[1.2rem]">
      <span className="bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b]  text-transparent bg-clip-text drop-shadow-2xl">
        {text}{" "}
      </span>
    </div>
  );
};

export default GradientSubtitle;
