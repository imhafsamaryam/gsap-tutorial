import React from "react";
import GradientSubtitle from "./gradient_subtitle";
import AnimatedBorder from "./animated_border";
import "../App.css";

const GetInTouch = () => {
  return (
    <div className="min-h-screen py-28 flex flex-col justify-center items-center text-center">
      <GradientSubtitle text={"Get in Touch"} />
      <h1 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light">
        The First Step?
        <br /> A Simple Conversation.{" "}
      </h1>{" "}
      <p className="text-lg my-8 md:w-[25vw] opacity-100 text-white transform translate-y-0">
        Got an idea? A project? Or just some questions? Let’s connect and
        explore how we can make it happen. Book a free consultation today!
      </p>
      <div className="card-wrapper text-white ">
        <div className="card-content   text-sm font-semibold flex items-center">
          <div>Book a Call</div>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
