import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetInTouch from "../components/get_in_touch";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50, // Slightly move down for entrance effect
      duration: 1,
      ease: "power3.out",
    });

    gsap.fromTo(
      imageRef.current,
      { scale: 1.2, y: "20vh" }, // Starts a bit lower
      {
        scale: 0.7, // Shrinks smoothly
        y: "-40vh", // Moves up slightly
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative min-h-[150vh] bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
        {/* Title positioned properly in center */}
        <div
          ref={titleRef}
          className="sticky top-[35%] left-0 right-0 text-center translate-y-[-50%] z-10"
        >
          <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
            Transform your Business with <br />
            <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
              Modern ERP Solutions
            </span>
          </h1>
        </div>

        {/* Image positioned better */}
        <img
          ref={imageRef}
          src="images/hero1.jpg"
          alt="title"
          className="absolute top-[50%] w-[60vw] h-[50vh] object-cover rounded-br-2xl z-20"
        />
      </section>

      <GetInTouch />
    </div>
  );
};

export default AboutPage;
