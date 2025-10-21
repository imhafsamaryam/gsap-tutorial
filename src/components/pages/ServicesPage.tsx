import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AnimatedSection } from "../ui/animated-section";
import { Code, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const services = [
    {
      id: 'product-development',
      icon: Code,
      title: "Product Development",
      description: "Custom software solutions tailored to your business needs",
      features: [
        "Custom ERP development",
        "Web and mobile applications",
        "API integration services",
        "Database design and optimization"
      ],
      color: "from-blue-500 to-[#018136]"
    },
    {
      id: 'software-support',
      icon: Headphones,
      title: "Software Support",
      description: "Comprehensive technical support for your business systems",
      features: [
        "24/7 technical assistance",
        "System maintenance and updates",
        "Performance optimization",
        "User training programs"
      ],
      color: "from-[#018136] to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/5 to-[#FFDF58]/5" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-[#018136]/10 text-[#018136] border-[#018136]/20 mb-4">
                  Professional Services
                </Badge>
                <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                  Comprehensive IT Services
                  <span className="block text-[#018136]">for Your Business</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  From custom software development to ongoing technical support, Able Software Solution 
                  delivers end-to-end IT services that drive business growth and operational excellence.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => onPageChange(service.id)}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl text-gray-900 mb-4 group-hover:text-[#018136] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-[#018136] hover:bg-[#016429] text-white rounded-full group-hover:shadow-lg transition-all"
                  >
                    <span className="flex items-center justify-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-[#018136] to-[#016429]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with Able Software Solution for expert IT services that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-[#018136] hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-white text-white hover:bg-white hover:text-[#018136] px-8 py-3 rounded-full text-lg"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
