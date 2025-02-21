import React from "react";
import "../App.css";

const AnimatedBorder = ({ content }) => {
  return (
    <div className={`card-wrapper  h-full w-full text-white `}>
      <div className="card-content p-6 text-sm bg-slate-950">{content}</div>
    </div>
  );
};

export default AnimatedBorder;
