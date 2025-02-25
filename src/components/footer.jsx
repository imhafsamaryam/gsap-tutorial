import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Footer() {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    gsap.to(marqueeRef.current, {
      x: "-50%", // Moves half of the duplicated text width
      duration: 10, // Adjust speed
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <footer className="bg-slate-900 min-h-[90vh] text-gray-400  px-8 md:px-16   flex flex-col justify-between">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
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
        </div>{" "}
        {/* Bottom Links */}
        <div className="container mx-auto flex justify-end text-xs text-gray-500 mt-12 space-x-6">
          <p className="text-sm">
            All rights reserved © {new Date().getFullYear()} Able Software
            Solutions.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap   py-4  ">
        <div
          ref={marqueeRef}
          className="flex space-x-10   text-[6rem] md:text-[7rem] 2xl:text-[15.4rem] font-semibold bg-slate-500 hover:bg-slate-600 text-transparent bg-clip-text"
        >
          <span>Get in Touch &nbsp; Get in Touch &nbsp; Get in Touch</span>
          <span>Get in Touch &nbsp; Get in Touch &nbsp; Get in Touch</span>{" "}
          {/* Duplicate for infinite effect */}
        </div>
      </div>
    </footer>
  );
}
