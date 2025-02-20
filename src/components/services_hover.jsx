import { useLayoutEffect } from "react";
import gsap from "gsap";
import "../App.css";

const sections = [
  {
    title: "ERP Softwares",
    subtitle: "Sage 200, Sage 300, Busy ERP, ZOHO",
    description:
      "Enhance business efficiency with top-tier ERP solutions tailored to your needs. We offer Sage 200, Sage 300, Busy ERP, and ZOHO to streamline accounting, inventory, and enterprise management.",
    image: "vite.svg",
  },
  {
    title: "Cloud Hosting",
    subtitle: "TS Plus",
    description:
      "Access your applications and data securely from anywhere with TS Plus – the leading remote access solution.",
    image: "/images/hero1.jpg",
  },
  {
    title: "Software Support",
    subtitle: "Software Troubleshooting",
    description:
      "Ensure your business software runs smoothly with our dedicated support team. We handle troubleshooting, updates, and performance optimization to keep you up and running.",
    image: "vite.svg",
  },
  {
    title: "Website Development",
    subtitle: "Design, Development, Brand design,Frontend and Backend",
    description:
      "We design and develop high-performance websites tailored to your business needs. From corporate sites to eCommerce platforms, we bring your vision to life.",
    image: "/images/hero1.jpg",
  },
  {
    title: "Hardware Solutions",
    subtitle: "Servers, Laptops, Desktops",
    description:
      "Power your business with high-performance servers, laptops, and desktops designed for seamless productivity.",
    image: "vite.svg",
  },
];

export default function ServicesHover() {
  useLayoutEffect(() => {
    gsap.set(".textCard img.swipeimage", {
      yPercent: -50,
      xPercent: -50,
      position: "absolute",
      pointerEvents: "none",
    });

    const textCards = gsap.utils.toArray(".textCard");

    textCards.forEach((el) => {
      const image = el.querySelector("img.swipeimage");
      if (!image) return; // Ensure the image exists

      const setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px");

      const align = (e) => {
        setX(e.clientX);
        setY(e.clientY);
      };

      const startFollow = () => document.addEventListener("mousemove", align);
      const stopFollow = () => document.removeEventListener("mousemove", align);

      const fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        onReverseComplete: stopFollow,
      });

      el.addEventListener("mouseenter", (e) => {
        fade.play();
        startFollow();
        align(e);
      });

      el.addEventListener("mouseleave", () => {
        fade.reverse();
      });

      // Cleanup event listeners when component unmounts
      return () => {
        el.removeEventListener("mouseenter", () => fade.play());
        el.removeEventListener("mouseleave", () => fade.reverse());
      };
    });
  }, []);

  return (
    <div>
      <div className="textCard relative">
        <img
          className="swipeimage opacity-0"
          src="/images/hero1.jpg"
          alt="hover"
        />

        <div className="text">
          <h1>Text 1</h1>
        </div>
      </div>

      <div className="textCard relative">
        <img className="swipeimage opacity-0" src="/vite.svg" alt="hover" />

        <div className="text">
          <h1>Text 2</h1>
        </div>
      </div>
    </div>
  );
}
