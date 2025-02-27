import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AnimatedText = () => {
  useGSAP(() => {
    const textElements = document.querySelectorAll(".animate");

    textElements.forEach((textElement) => {
      const text = textElement.textContent;
      textElement.innerHTML = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

      const chars = textElement.querySelectorAll("span");

      gsap.from(chars, {
        scrollTrigger: {
          trigger: ".next-section",
          start: "center center",
          end: "60% 35%",
          scrub: true,
          pin: ".ourpurposet",
          toggleActions: "play none none none",
        },
        color: "grey",
        stagger: 0.2,
        duration: 3,
      });
    });
  });

  return (
    <section class="next-section">
      <div class="container ourpurposet">
        <p class="description animate py-40  briefText w-[80vw]   tracking-wider leading-12 text-white text-[2.3rem] md:text-[4rem]  lg:text-[4.5rem] font-light">
          Our purpose is to enrich the lives of people around the World, by
          creating extraordinary moments, which celebrate the power of optimism
          and togetherness.
        </p>
      </div>
    </section>
  );
};

export default AnimatedText;
