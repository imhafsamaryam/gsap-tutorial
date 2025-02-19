export default function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing interfaces that enhance user experience",
      icon: "🎨",
    },
    {
      title: "Product Design",
      description:
        "Developing innovative product solutions that solve real-world problems",
      icon: "📱",
    },
    {
      title: "Digital Strategy",
      description:
        "Creating comprehensive digital roadmaps for business growth",
      icon: "📈",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
