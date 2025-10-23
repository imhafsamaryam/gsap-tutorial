import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cpu,
  ArrowRight,
  Search,
  PenTool,
  Server,
  Settings,
  Zap,
  Shield,
  Users,
  Target,
  Clock,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";

interface ProductDevelopmentPageProps {
  onPageChange: (page: string) => void;
}

export function ProductDevelopmentPage({
  onPageChange,
}: ProductDevelopmentPageProps) {
  const services = [
    {
      title: "Website Development",
      description:
        "Professional, responsive websites that showcase your brand and drive business growth with optimal user experience",
      image: "/websitedev.jpg",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading Speed"],
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms with seamless user experiences",
      image: "/product3.jpg",
      features: ["Native Performance", "Cross-platform", "Offline Capability"],
    },
    {
      title: "Web Application Development",
      description:
        "Scalable, responsive web applications using modern frameworks and technologies for complex business needs",
      image: "/webappdev.jpg",
      features: ["Progressive Web Apps", "Cloud-ready", "SEO Optimized"],
    },
    {
      title: "API Development & Integration",
      description:
        "RESTful and GraphQL APIs with seamless third-party system integrations for connected digital ecosystems",
      image: "/api.jpg",
      features: ["REST & GraphQL", "WebSocket Support", "Third-party Integration"],
    },
    {
      title: "CMS Development",
      description:
        "Custom content management systems that empower your team to manage content efficiently without technical expertise",
      image: "/cms.jpg",
      features: ["User-friendly Admin", "Custom Content Types", "Multi-user Roles"],
    },
    {
      title: "User Interface Design",
      description:
        "Beautiful, intuitive user interfaces that enhance user experience and drive engagement across all platforms",
      image: "/product.jpg",
      features: ["User-centered Design", "Interactive Prototypes", "Design Systems"],
    },
  ];

  const process = [
    {
      step: "01",
      icon: "/analysis.png",
      title: "Discovery & Analysis",
      description:
        "We analyze your business requirements, workflows, and objectives to create a comprehensive project roadmap",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      icon: "/web-design.png",
      title: "Design & Planning",
      description:
        "Our team develops detailed technical specifications, architecture designs, and project timelines",
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      icon: "/web-development.png",
      title: "Development",
      description:
        "Agile development process with regular sprints, code reviews, and quality assurance testing",
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      icon: "/rocket.png",
      title: "Deployment & Support",
      description:
        "Smooth deployment to production with comprehensive training and ongoing technical support",
      color: "from-orange-500 to-red-500",
    },
  ];

  const technologies = [
    { name: "React", icon: Zap, category: "Frontend" },
    { name: "Node.js", icon: Cpu, category: "Backend" },
    { name: "Python", icon: Code, category: "Backend" },
    { name: "Firebase", icon: Cloud, category: "Database" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
  ];

  const stats = [
    { icon: Users, number: "150+", label: "Projects Delivered" },
    { icon: Clock, number: "50k+", label: "Development Hours" },
    { icon: Award, number: "98%", label: "Client Satisfaction" },
    { icon: Shield, number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Custom Software Development"}
        title1="Product Development"
        title2="Services"
        description="Transform your business ideas into robust, scalable software solutions. Able Software Solution delivers custom development services that align perfectly with your unique business requirements and strategic goals."
        onPageChange={onPageChange}
        imgSrc={"/product1.jpg"}
      />

      {/* Stats Section */}
      <AnimatedSection className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#018136]" />
                </div>
                {/* <motion.div
                  className="w-16 h-16 mx-auto flex items-center justify-center mb-4 bg-[#018136]/10 rounded-full flex items-center justify-center p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-full h-full rounded-xl"
                  />
                </motion.div> */}
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                Our Expertise

              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our Development Services
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive software development solutions powered by
                cutting-edge technologies and industry best practices
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-0 rounded-3xl">
                  {/* <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      fallbackSrc="/placeholder-service.jpg"
                    /> 
                  

                  </div> */}
                  <motion.div
                    className=" rounded-3xl-top overflow-hidden"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-60 object-cover rounded-3xl-top"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-[#018136] " />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Development Process */}
      <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                How We Work

              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our Development Process
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures on-time delivery, quality code,
                and successful project outcomes
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 group">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      {/* <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div> */}
                      <div
                        className=" overflow-hidden"
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-20 object-cover "
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies */}
      <AnimatedSection className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                Our Stack

              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Technologies We Work With
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern technology stack for building robust, scalable, and secure
                applications
              </p>
            </motion.div>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#018136]/5 to-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#018136] transition-colors duration-300 shadow-sm">
                  <tech.icon className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-gray-900 font-medium text-sm">{tech.name}</h3>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs bg-white/50">
                    {tech.category}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection onPageChange={onPageChange} />
    </div>
  );
}

// Add missing icon components
function Coffee(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function Container(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-.9.9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  );
}