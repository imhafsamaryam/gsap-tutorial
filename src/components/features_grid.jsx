export default function FeaturesGrid() {
  const features = [
    {
      //   icon: ChartBarIcon,
      title: "ERP Solutions",
      description:
        "Comprehensive business management systems tailored to your industry needs",
    },
    {
      //   icon: CloudIcon,
      title: "Cloud Services",
      description:
        "Secure cloud infrastructure with scalable resources and 24/7 support",
    },
    {
      //   icon: ShieldCheckIcon,
      title: "Security Systems",
      description:
        "Enterprise-grade security solutions for complete business protection",
    },
    {
      //   icon: CurrencyDollarIcon,
      title: "Cost Efficiency",
      description:
        "Maximize ROI with our affordable implementation and maintenance plans",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Comprehensive Business Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* <feature.icon className="h-12 w-12 text-primary mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
