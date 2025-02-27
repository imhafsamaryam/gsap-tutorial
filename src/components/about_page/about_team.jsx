import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutTeam = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Pin the container when it reaches the top
    // ScrollTrigger.create({
    //   trigger: containerRef.current,
    //   start: "top top",
    //   end: "+=100%", // Adjust based on how long you want it pinned
    //   pin: true,
    //   pinSpacing: true, // Keeps spacing below when unpinning
    //   scrub: 1,
    // });

    gsap.to(leftRef.current, {
      y: "50vh",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 3,
      },
    });
    gsap.to(centerRef.current, {
      y: "-50vh",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top top ",
        end: "bottom center",
        scrub: 3,
      },
    });
    gsap.to(rightRef.current, {
      y: "50vh",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 3,
      },
    });
  });

  return (
    <div ref={containerRef} className="    relative   ">
      <div className="h-screen  flex justify-center gap-20 ">
        <div className="flex flex-col justify-between items-center">
          <img
            ref={leftRef}
            src="/images/collab1.jpg"
            alt="Nazanin Esmaeilian"
            className="rounded-3xl w-[20vw] h-[45vh] object-cover"
          />
          <div className="text-lg h-[45vh] flex flex-col justify-center items-center  text-white font-bold mt-4">
            Sr. Full-Stack Developer
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="text-lg h-[45vh] flex flex-col justify-center items-center  text-white font-bold mt-4">
            Creative Director
          </div>
          <img
            ref={centerRef}
            src="/images/collab2.jpg"
            alt="Amir Mohseni"
            className="rounded-3xl w-[20vw] h-[45vh] object-cover"
          />
        </div>
        <div className="flex flex-col justify-between items-center">
          <img
            ref={rightRef}
            src="/images/collab3.jpg"
            alt="Ilia Mohseni"
            className="rounded-3xl w-[20vw] h-[45vh] object-cover"
          />
          <div className="text-lg h-[45vh] flex flex-col justify-center items-center  text-white font-bold mt-4">
            Sr. Full-Stack Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
