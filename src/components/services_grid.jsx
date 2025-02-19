import React, { useRef } from "react";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesGrid() {
  const services = [
    {
      title: "UI UX Design",
      subtitle: "Web, App, Product Design",
      description:
        "At DevSed we're all about making your user’s lives easier. We tailor user challenges in detail to create designs that are not just intuitive, aesthetically pleasing, but downright functional.",
      image: "/images/ui-ux.png",
    },
    {
      title: "Development",
      subtitle: "Web, App, Ecommerce, Frontend, Backend",
      description:
        "We're about creating, programming, and launching websites and apps that are responsive and downright awesome! We've got the programming skills for every SaaS solution.",
      image: "/images/dev.png",
    },
    {
      title: "Marketing",
      subtitle: "Social Media, Ads Campaign",
      description:
        "We fully tap into the current market. From targeted campaigns to engaging content, we'll help you cut through the noise and connect with your audience in meaningful ways.",
      image: "/images/marketing.png",
    },
    {
      title: "Graphic Design",
      subtitle: "Marketing Assets, Social Media posts.",
      description:
        "That extra effort, that polished touch, that eye-catching visual to draw in your audience. We’re all about creating designs that make your brand unforgettable.",
      image: "/images/graphic-design.png",
    },
    {
      title: "Branding Design",
      subtitle: "Marketing Assets, Social Media posts.",
      description:
        "We balance our creativity with the brand’s values, personality, and image. We help brands cut through the noise and position their identity as one of a kind.",
      image: "/images/branding.png",
    },
  ];

  return (
    <div className="relative  min-h-screen py-12  ">
      <div>
        <div className="  grid  md:grid-cols-2 lg:grid-cols-6 gap-6">
          <ServiceItem
            spans={" col-span-3"}
            title={"ERP Softwares"}
            description={
              "Enhance business efficiency with top-tier ERP solutions tailored to your needs. We offer Sage 200, Sage 300, Busy ERP, and ZOHO to streamline accounting, inventory, and enterprise management."
            }
            subtitle={"Sage 200, Sage 300, Busy ERP, ZOHO"}
            image={"/images/hero1.jpg"}
          />
          <ServiceItem
            spans={"col-span-3 "}
            title={"Cloud Hosting"}
            description={
              "Access your applications and data securely from anywhere with TS Plus – the leading remote access solution."
            }
            subtitle={"TS Plus"}
            image={"/images/hero1.jpg"}
          />
        </div>{" "}
        <div className="py-6">
          <ServiceItem
            spans={" "}
            title={"Software Support"}
            description={
              "Ensure your business software runs smoothly with our dedicated support team. We handle troubleshooting, updates, and performance optimization to keep you up and running."
            }
            subtitle={"Software Troubleshooting"}
            image={"/images/hero1.jpg"}
          />
        </div>
        <div className=" grid  md:grid-cols-2 lg:grid-cols-6 gap-6">
          {" "}
          <ServiceItem
            spans={"col-span-3"}
            title={"Website Development"}
            description={
              "We design and develop high-performance websites tailored to your business needs. From corporate sites to eCommerce platforms, we bring your vision to life."
            }
            subtitle={"Design, Develop, Brand design"}
            image={"/images/hero1.jpg"}
          />
          <ServiceItem
            spans={" col-span-3"}
            title={"Hardware Solutions"}
            description={
              "Power your business with high-performance servers, laptops, and desktops designed for seamless productivity."
            }
            subtitle={"Servers, Laptops, Desktops"}
            image={"/images/hero1.jpg"}
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
