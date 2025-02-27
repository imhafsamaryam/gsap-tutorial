import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetInTouch from "../components/get_in_touch";
import AboutTeam from "../components/about_page/about_team";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(".sticky", {
      opacity: 0,
      y: 50, // Slightly move down for entrance effect
      duration: 1,
      ease: "power3.out",
    });

    gsap.fromTo(
      imageRef.current,
      { scale: 1.2 },
      {
        scale: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "bottom 70%",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  return (
    <div className="min-h-screen relative rounded-b-4xl bg-slate-950">
      <section className="sticky top-0 left-0 right-0  min-h-[90vh]  flex flex-col items-center justify-center overflow-hidden">
        <div ref={titleRef} className="text-center ">
          <h1 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light">
            Transform your Business with
          </h1>
        </div>
      </section>
      <img
        ref={imageRef}
        src="images/collab3.jpg"
        alt="title"
        className=" mx-auto w-[80vw] md:w-[60vw] h-[70vh] object-cover rounded-[4rem] z-20"
      />
      <div
        ref={descriptionRef}
        className="text-center min-h-[60vh] flex flex-col items-center justify-center"
      >
        <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
          Transform your Business with <br />
          <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
            Modern ERP Solutions
          </span>
        </h1>
      </div>
      <AboutTeam />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;
