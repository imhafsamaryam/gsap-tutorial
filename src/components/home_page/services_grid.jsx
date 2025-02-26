import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
import "../../App.css";
import GradientSubtitle from "../gradient_subtitle";

export default function ServicesGrid() {
  const services = [
    {
      title: "Innovation & Efficiency",
      subtitle: "Sage 200, Sage 300, Busy ERP, ZOHO",
      description:
        "We embrace cutting-edge technology to provide ERP solutions, cloud hosting, and hardware that optimize business processes. Our focus is on delivering smart, scalable, and future-ready solutions tailored to your needs.",
      image: "/icons/innovation.png",
    },
    {
      title: " Customer-Centric Approach",
      subtitle: "TS Plus",
      description:
        "Your success is our priority. We believe in understanding your business challenges and offering customized ERP, hosting, and IT solutions that drive productivity and growth.",
      image: "/icons/experience.png",
    },
    {
      title: " Reliability & Security",
      subtitle: "Software Troubleshooting",
      description:
        "From ERP software to cloud hosting and hardware, we ensure your data and infrastructure are secure, reliable, and high-performing—so you can focus on what matters most.",
      image: "/icons/technology.png",
    },
    {
      title: "End-to-End Support",
      subtitle: "Design, Development, Brand design,Frontend and Backend",
      description:
        "Beyond delivering products, we provide ongoing software support and website development services to keep your business running smoothly. We stand by you every step of the way.",
      image: "/icons/customer-support.png",
    },
  ];
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
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div ref={sectionRef} className="relative min-h-screen">
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="animate-item px-6 py-8 h-full flex flex-col justify-between items-start">
            <GradientSubtitle text={"Our Values"} />
            <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3rem] font-light">
              Built on Trust,
              <br /> Driven by Purpose
            </h2>
          </div>
          {services.map((service, index) => (
            <div className="animate-item">
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                subtitle={service.subtitle}
                image={service.image}
              />
            </div>
          ))}
          <div className="animate-item px-6 py-8 h-full flex flex-col justify-end items-start">
            <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3rem] font-light">
              Rooted in Integrity, <br /> Growing with You
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, key, description, image }) {
  return (
    <div
      key={key}
      className={`   border rounded-xl border-gray-800 bg-gradient-to-b from-slate-950  to-slate-900 hover:scale-105 duration-300   p-6  flex flex-col justify-center items-center  `}
    >
      {" "}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-32 pb-6 object-cover rounded-br-2xl "
        />
      </div>
      <h2 className="text-lg font-semibold my-2 text-white">{title}</h2>
      <p className="text-gray-400  text-sm text-center">{description}</p>
    </div>
  );
}
