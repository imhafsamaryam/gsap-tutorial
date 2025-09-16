import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AnimateText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.textContent;
    textElement.innerHTML = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    const chars = textElement.querySelectorAll("span");

    gsap.from(chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "60% 35%",
        scrub: true,
        pin: containerRef.current,
        toggleActions: "play none none none",
      },
      color: "grey",
      stagger: 0.2,
      duration: 3,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex h-[150vh] items-center justify-center   text-white shadow-none transition-shadow duration-500 ease-in-out"
    >
      <div className="container text-center">
        <p
          ref={textRef}
          className="animate text-center text-4xl font-medium leading-[60px] sm:max-w-[83%] sm:mx-auto sm:text-5xl"
        >
          Our purpose is to enrich the lives of people around the world by
          creating extraordinary moments, which celebrate the power of optimism
          and togetherness.
        </p>
      </div>
    </section>
  );
};

export default AnimateText;
