const sections = [
  {
    title: "ERP Softwares",
    subtitle: "Sage 200, Sage 300, Busy ERP, ZOHO",
    description:
      "Enhance business efficiency with top-tier ERP solutions tailored to your needs. We offer Sage 200, Sage 300, Busy ERP, and ZOHO to streamline accounting, inventory, and enterprise management.",
    image: "/images/erp.webp",
  },
  {
    title: "Cloud Hosting",
    subtitle: "TS Plus",
    description:
      "Access your applications and data securely from anywhere with TS Plus – the leading remote access solution.",
    image: "/images/cloud_hosting.webp",
  },
  {
    title: "Software Support",
    subtitle: "Software Troubleshooting",
    description:
      "Ensure your business software runs smoothly with our dedicated support team. We handle troubleshooting, updates, and performance optimization to keep you up and running.",
    image: "/images/software_support.webp",
  },
  {
    title: "Website Development",
    subtitle: "Design, Development, Brand design,Frontend and Backend",
    description:
      "We design and develop high-performance websites tailored to your business needs. From corporate sites to eCommerce platforms, we bring your vision to life.",
    image: "/images/web_development.webp",
  },
  {
    title: "Hardware Solutions",
    subtitle: "Servers, Laptops, Desktops",
    description:
      "Power your business with high-performance servers, laptops, and desktops designed for seamless productivity.",
    image: "/images/hardware_solutions.webp",
  },
];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function ServicesHover() {
  const mainContainer = useRef(null);
  const sharedImgRef = useRef(null);
  const prevMouseX = useRef(0);
  const rotation = useRef(0);
  useGSAP(() => {
    gsap.from(".textCard", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".py-28",
        start: "top 80%",
        once: true,
      },
    });

    // gsap.set(" img.swipeimage", {
    //   opacity: 0,
    //   position: "absolute",
    //   pointerEvents: "none",
    // });

    const sharedImg = sharedImgRef.current;
    const container = mainContainer.current;

    let hideTimeout;
    const updateImagePosition = (e) => {
      if (!container || !sharedImg) return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate horizontal movement
      const deltaX = e.clientX - prevMouseX.current;
      prevMouseX.current = e.clientX;

      // Calculate rotation based on movement direction and speed
      rotation.current = gsap.utils.clamp(
        -2,
        2,
        rotation.current + deltaX * 0.15
      );

      // Apply smooth movement and rotation
      gsap.to(sharedImg, {
        x: mouseX - sharedImg.offsetWidth / 2,
        y: mouseY - sharedImg.offsetHeight,
        rotation: rotation.current,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    const resetRotation = () => {
      gsap.to(sharedImg, {
        rotation: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
      rotation.current = 0;
    };
    const textCards = gsap.utils.toArray(".hoverFn");
    let currentSectionIndex = -1;

    textCards.forEach((el, index) => {
      const section = sections[index];
      const backgroundOverlay = el.querySelector(".background-overlay");
      const bgTween = gsap.to(backgroundOverlay, {
        scaleY: 1,
        duration: 0.5,
        ease: "power2.out",
        paused: true,
      });

      el.addEventListener("mouseenter", () => {
        currentSectionIndex = index;
        sharedImg.src = section.image;
        bgTween.play();
        gsap.to(sharedImg, { opacity: 1, duration: 0.2 });
        el.addEventListener("mousemove", updateImagePosition);
      });

      el.addEventListener("mouseleave", () => {
        bgTween.reverse();
        resetRotation();
        el.removeEventListener("mousemove", updateImagePosition);
        setTimeout(() => {
          if (currentSectionIndex === index) {
            gsap.to(sharedImg, { opacity: 0, duration: 0.2 });
          }
        }, 50);
      });
    });
  });

  return (
    <div className="py-28 relative">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative hoverFn cursor-pointer"
          ref={mainContainer}
        >
          <div className="textCard relative p-8  flex items-start justify-between overflow-hidden">
            <div className="background-overlay absolute inset-0 w-full h-full bg-indigo-900 opacity-10 origin-bottom scale-y-0" />
            {/* <div
              className="text-transparent text-6xl font-bold"
              style={{ WebkitTextStroke: "2px #B9CDE9" }}
            >
              {`0${index + 1}`}
            </div> */}
            <div
              className=" text-3xl text-[#B9CDE9] font-light "
              // style={{ WebkitTextStroke: "1px #B9CDE9" }}
            >
              {`0${index + 1}.`}
            </div>
            <div className="w-[50%] flex items-end justify-between">
              <h1 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light">
                {section.title}
              </h1>
              <p className="text-sm text-gray-400">view more</p>
            </div>
          </div>
          <img
            ref={sharedImgRef}
            className="shared-image h-[35vh] w-[40vh] object-cover absolute shadow-[2px_2px_25px_#578340] pointer-events-none opacity-0 transform-gpu"
            alt="Service"
          />
        </div>
      ))}
    </div>
  );
}
