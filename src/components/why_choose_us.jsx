import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientSubtitle from "./gradient_subtitle";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 100, label: "Happy Clients", suffix: "+" },
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 50, label: "Successful Projects", suffix: "+" },
  { value: 5, label: "Industry Awards", suffix: "" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const counters = countersRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    counters.forEach((counter, i) => {
      gsap.fromTo(
        counter,
        { textContent: 0 },
        {
          textContent: stats[i].value,
          duration: 2,
          snap: { textContent: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[10vh]   min-h-screen flex flex-col justify-between "
    >
      <div>
        <GradientSubtitle text={"Our Achievements"} />
        <p className=" max-w-[70%] w-[90vw] opacity-100 briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3rem]   font-light transform translate-y-0">
          <span>
            Transform your business with our advanced ERP solutions, reliable
            cloud hosting, top-tier hardware
          </span>
        </p>
      </div>{" "}
      <div className="py-20 w-full flex  justify-between items-start gap-10">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-[9.375em] font-semibold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text  flex">
              <p ref={(el) => (countersRef.current[index] = el)}>
                0{stat.suffix}
              </p>
              <p>+</p>
            </div>

            <p className="text-lg text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
