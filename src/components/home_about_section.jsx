import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../App.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const textContent = [
  {
    image: "/images/hero1.jpg",
    title: "Beauty brand, e-commerce",
    subtitle: "Branding, Website, Design, Development",
    bgColor: "#f8d7da",
  },
  {
    image: "/images/hero1.jpg",
    title: "Furniture brand, e-commerce",
    subtitle: "Branding, Website, Design, Development",
    bgColor: "#dbeafe",
  },
  {
    image: "/images/hero1.jpg",
    title: "Tech brand, e-commerce",
    subtitle: "Branding, Website, Design, Development",
    bgColor: "#e0f2f1",
  },
];

export default function HomeAboutSection() {
  useGSAP(() => {
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(image, { height: 0 });
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    var texts = gsap.utils.toArray(".panel-text");

    texts.forEach((text, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
      );
    });

    ScrollTrigger.create({
      trigger: "section.black",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
      invalidateOnRefresh: true,
    });
  });
  return (
    <div className="min-h-screen bg-slate-950">
      {/* {textContent.map((content, index) => {
        return (
          <div
            key={index}
            className={`sticky top-0 h-screen flex items-center justify-center rounded-[4rem]  p-6`}
            style={{ backgroundColor: content.bgColor }}
          >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                  {content.title}
                </h1>
                <p className="text-gray-700 mt-4">{content.subtitle} </p>
                <button className="mt-6 px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition">
                  View moore
                </button>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="relative bg-pink-200 p-8 rounded-3xl shadow-lg max-w-sm md:max-w-md">
                  <img
                    src={content.image}
                    alt="Beauty & Cosmetic Products"
                    className="rounded-4xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
      <section class="black">
        <div class="text-wrap">
          <div class="panel-text blue-text">Blue</div>
          <div class="panel-text red-text">Red</div>
          <div class="panel-text orange-text">Orange</div>
          <div class="panel-text purple-text">Purple</div>
        </div>

        <div class="p-wrap">
          <div class="panel blue"></div>
          <div class="panel red"></div>
          <div class="panel orange"></div>
          <div class="panel purple"></div>
        </div>
      </section>
    </div>
  );
}
