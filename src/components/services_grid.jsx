import React, { useRef } from "react";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="relative  min-h-screen py-8 md:py-12  ">
      <div>
        <div className="  grid  md:grid-cols-2 lg:grid-cols-6 gap-6">
          <ServiceItem
            spans={" col-span-3"}
            title={services[0].title}
            description={services[0].description}
            subtitle={services[0].subtitle}
            image={services[0].image}
          />
          <ServiceItem
            spans={"col-span-3 "}
            title={services[1].title}
            description={services[1].description}
            subtitle={services[1].subtitle}
            image={services[1].image}
          />
        </div>{" "}
        <div className="py-6">
          <ServiceItem
            spans={" "}
            title={services[2].title}
            description={services[2].description}
            subtitle={services[2].subtitle}
            image={services[2].image}
          />
        </div>
        <div className=" grid  md:grid-cols-2 lg:grid-cols-6 gap-6">
          {" "}
          <ServiceItem
            spans={"col-span-3"}
            title={services[3].title}
            description={services[3].description}
            subtitle={services[3].subtitle}
            image={services[3].image}
          />
          <ServiceItem
            spans={" col-span-3"}
            title={services[4].title}
            description={services[4].description}
            subtitle={services[4].subtitle}
            image={services[4].image}
          />
        </div>{" "}
      </div>
      {/* <img
        src={"/images/bgshadow1x.png"}
        alt={"bg-shadow"}
        className=" absolute bottom-0 left-1/2 w-full h-full object-cover  "
      /> */}
    </div>
  );
}

function ServiceItem({ title, subtitle, description, image, spans }) {
  return (
    <div
      className={`${spans} border rounded-xl border-gray-700 bg-gray-900 hover:bg-gray-950 hover:scale-105 duration-300   flex justify-between items-end  `}
    >
      <div className=" p-6 max-w-[60%] h-full flex flex-col justify-between items-start space-y-12 ">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
          <p className="text-gray-300 mt-4 text-sm">{description}</p>
        </div>
        <button className="mt-4 bg-white text-sm text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
          Discover
        </button>
      </div>
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-br-2xl "
        />
      </div>
    </div>
  );
}
