import React, { useRef } from "react";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesGrid from "../components/services_grid";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const HomePage = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ellipseRef = useRef(null);
  const heroSectionRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 200,
      duration: 1,
      delay: 1.5,
      ease: "power3.out",
    });

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1.5,
      delay: 2,
      ease: "power3.out",
    });

    // Set initial state
    gsap.utils.toArray(".heroSection").forEach((heroSection) => {
      gsap.to(heroSection, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: heroSection,
          start: "top 20%",
          end: "bottom 0%",
          scrub: true,
        },
      });
    });

    // Ensure elements are in their initial state
    gsap.set(ellipseRef.current, { opacity: 1, scale: 1 });

    // Ellipse Section Scroll Animation (Triggering on heroSection for better detection)
    gsap.to(ellipseRef.current, {
      opacity: 0,
      ease: "power3.in",
      scrollTrigger: {
        trigger: heroSectionRef.current, // Triggering on hero section
        start: "top 20%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    // Set initial state
    gsap.from(".line span", {
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
      duration: 1.8,
      scrollTrigger: {
        trigger: headlineRef.current, // Triggering on hero section
        start: "top 30%",
        end: "bottom 10%",
      },
    });
  });

  return (
    <div className="min-h-screen  bg-slate-950">
      <div className=" sticky top-0">
        <section className="relative h-screen z-50  flex items-center justify-center  overflow-hidden">
          <div
            ref={ellipseRef}
            className="ellipse-animate absolute top-[20vh]  bg-transparent   h-full md:h-[170vw] lg:h-[130vw] w-[250vw] md:w-[170vw] lg:w-[120vw] place-self-center rounded-t-full "
            style={{
              boxShadow: "0px -11px 42.6px -13px #FEDE58",
            }}
          ></div>

          <div
            ref={heroSectionRef}
            className="heroSection  pt-[20vh] text-center"
          >
            <h1
              ref={titleRef}
              className="tracking-tighter  text-[2.3rem] md:text-[4rem]  lg:text-[4.5rem] text-white font-semibold "
            >
              Transform your Business with <br />
              {/* Empowering Businesses with <br /> */}
              <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                Modern ERP Solutions {/* Smart IT Solutions{" "} */}
              </span>
            </h1>
            <p
              ref={descriptionRef}
              className="text-xl mb-8 opacity-100 text-gray-400 transform translate-y-0"
            >
              We deliver cutting-edge technology solutions tailored to your
              needs.
            </p>
          </div>
        </section>
      </div>
      <div ref={headlineRef} className="container max-w-7xl mx-auto   ">
        <div className=" flex items-center justify-between   ">
          <div className=" briefText w-[90vw] md:w-[40vw] tracking-wider leading-12 text-white text-5xl font-medium">
            {" "}
            {/* Transform your business with our advanced ERP solutions, reliable
          cloud hosting, and top-tier hardware. Plus, our expert website
          development and software support ensure seamless operations. */}
            Empowering businesses with advanced ERP, secure cloud hosting, and
            expert web solutions for seamless operations.
          </div>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Get Started
          </button>{" "}
        </div>{" "}
        <div className="  pt-[20vh]  container max-w-7xl mx-auto    ">
          <div className="  text-white tracking-wide leading-12  text-5xl font-medium ">
            <div class="line">
              <span>What We Do</span>
            </div>
          </div>
          <ServicesGrid />
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
