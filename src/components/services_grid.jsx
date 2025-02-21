import React, { useRef } from "react";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBorder from "./animated_border";
import GradientSubtitle from "./gradient_subtitle";

export default function ServicesGrid() {
  const services = [
    {
      title: "ERP Softwares",
      subtitle: "Sage 200, Sage 300, Busy ERP, ZOHO",
      description:
        "Enhance business efficiency with top-tier ERP solutions tailored to your needs. We offer Sage 200, Sage 300, Busy ERP, and ZOHO to streamline accounting, inventory, and enterprise management.",
      image: "/images/hero1.jpg",
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
      image: "/images/hero1.jpg",
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
      image: "/images/hero1.jpg",
    },
  ];

  return (
    <div className="relative  min-h-screen    ">
      <div>
        <div className="  grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={` px-6 py-12  h-full flex flex-col justify-between items-start  `}
          >
            {" "}
            <GradientSubtitle text={"Our Values"} />
            <h2 className="briefText  tracking-wider leading-12 text-white text-[2.3rem] md:text-[3rem]   font-light">
              Built on Trust,
              <br /> Driven by Values{" "}
            </h2>
          </div>
          <ServiceItem
            spans={"  "}
            title={services[0].title}
            description={services[0].description}
            subtitle={services[0].subtitle}
            image={services[0].image}
          />
          <ServiceItem
            spans={" "}
            title={services[1].title}
            description={services[1].description}
            subtitle={services[1].subtitle}
            image={services[1].image}
          />{" "}
          <ServiceItem
            spans={" "}
            title={services[2].title}
            description={services[2].description}
            subtitle={services[2].subtitle}
            image={services[2].image}
          />
          <ServiceItem
            spans={" "}
            title={services[3].title}
            description={services[3].description}
            subtitle={services[3].subtitle}
            image={services[3].image}
          />
          <ServiceItem
            spans={" "}
            title={services[4].title}
            description={services[4].description}
            subtitle={services[4].subtitle}
            image={services[4].image}
          />
        </div>{" "}
      </div>
    </div>
  );
}

function ServiceItem({ title, subtitle, description, image, spans }) {
  return (
    <div
      className={`${spans} border rounded-xl border-gray-800 bg-gradient-to-b from-slate-950  to-slate-900 hover:scale-105 duration-300   p-6  flex flex-col justify-center items-center  `}
    >
      {" "}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-46 object-cover rounded-br-2xl "
        />
      </div>
      <h2 className="text-lg font-semibold my-2 text-white">{title}</h2>
      <p className="text-gray-400  text-sm text-center">{description}</p>
    </div>
  );
}
