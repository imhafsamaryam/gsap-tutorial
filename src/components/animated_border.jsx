import React from "react";
import "../App.css";

const AnimatedBorder = ({ content }) => {
  return (
    <div className={`card-wrapper  h-[50px] w-[100px] text-white `}>
      <div className="card-content  flex items-center justify-center text-sm bg-slate-950">
        <div className="max-w-[60%] text-center">{content}</div>
      </div>
    </div>
  );
};

export default AnimatedBorder;
