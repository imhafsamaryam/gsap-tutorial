import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
import "../App.css";

export default function Footer() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-item");

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <footer
      ref={sectionRef}
      className="bg-slate-900 min-h-[90vh] text-gray-400 md:py-12   flex flex-col justify-between"
    >
      <div className="container  px-8  mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Section - Logo & Copyright */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">
            ese agency<span className="text-gray-400">™</span>
          </h2>
        </div>
        {/* Contact Section */}
        <div>
          <h3 className="text-white text-sm uppercase mb-4">Contact</h3>
          <p>ESE Agency</p>
          <p>Grubenstrasse 54</p>
          <p>8045 Zürich, Schweiz</p>
          <p className="mt-2">info@eseagency.ch</p>
          <p>+41 52 212 30 71</p>
        </div>
        {/* Pages Section */}
        <div>
          <h3 className="text-white text-sm uppercase mb-4">Pages</h3>
          <ul className="space-y-2">
            {["About", "Products", "Services", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Expertise & Links Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-end items-start">
          <div>
            <h3 className="text-white text-sm uppercase mb-4">Expertise</h3>
            <ul className="space-y-2">
              {[
                "ERP Softwares",
                "Cloud Hosting",
                "Software Support",
                "Website Development",
                "Hardware Solutions",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        {/* Bottom Links */}
        <div>
          <h3 className="text-white text-sm uppercase mb-4">Links</h3>
          <ul className="space-y-2">
            {["LinkedIn", "Instagram"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-end text-xs text-gray-500 mt-12 space-x-6">
        <p className="text-sm">
          All rights reserved © {new Date().getFullYear()} Able Software
          Solutions.
        </p>
      </div>
      <div className="marquee animate-item h-[8rem] md:h-[20rem] 2xl:h-[29rem] cursor-pointer ">
        <div className="track">
          <div className="text-content text-[6rem] md:text-[17rem] 2xl:text-[25.4rem] font-semibold bg-slate-700 hover:bg-transparent text-transparent bg-clip-text">
            {Array(15)
              .fill("Contact Us")
              .map((text, index) => (
                <React.Fragment key={index}>&nbsp;{text}</React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
