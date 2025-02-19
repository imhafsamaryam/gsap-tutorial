import { useState } from "react";

export default function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      title: "ERP System Redesign",
      description:
        "Modernized interface for enterprise resource planning software",
      image: "/images/hero1.jpg",
    },
    {
      title: "E-commerce Platform",
      description: "Complete redesign of a high-traffic online store",
      image: "/images/hero1.jpg",
    },
    {
      title: "Mobile Banking App",
      description: "User-friendly interface for financial management",
      image: "/images/hero1.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary text-white shadow-xl"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
