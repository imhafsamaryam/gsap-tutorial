import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AnimatedSection } from "../ui/animated-section";
import {
  CheckCircle,
  Code,
  Headphones,
  Users,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../CTASection";
import { HeroSection } from "../HeroSection";
import React, { useEffect, useRef } from "react";
import { ERPSolutionsGrid } from "../ERPGrid";

interface ServicesPageProps {
  initialSection?: string;
}

export function ServicesPage({ initialSection }: ServicesPageProps) {
  const navigate = useNavigate();
  const productDevelopmentRef = useRef<HTMLDivElement>(null);
  const softwareSupportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = {
      "product-development": productDevelopmentRef,
      "software-support": softwareSupportRef,
    };

    if (initialSection && refs[initialSection as keyof typeof refs]) {
      refs[initialSection as keyof typeof refs].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [initialSection]);

  const servicesSolutions = [
    {
      id: "product-development",
      name: "Product Development",
      description:
        "Custom software solutions tailored to your business needs with cutting-edge technology and agile development methodologies",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      categoryBadge: "Development",
      features: [
        "Custom ERP Development",
        "Web & Mobile Applications",
        "API Integration Services",
        "Database Design & Optimization",
        "Cloud-Native Solutions",
        "UI/UX Design",
      ],
      benefits: [
        "Tailored to your specific business needs",
        "Scalable and future-proof solutions",
        "Faster time-to-market",
        "Competitive advantage through innovation",
      ],
      imageSrc: "/product3.jpg",
      path: "/product-development",
    },
    {
      id: "software-support",
      name: "Software Support",
      description:
        "Comprehensive technical support and maintenance services to ensure your business systems run smoothly and efficiently",
      icon: Headphones,
      color: "from-green-500 to-emerald-500",
      categoryBadge: "Support",
      features: [
        "24/7 Technical Assistance",
        "System Maintenance & Updates",
        "Performance Optimization",
        "User Training Programs",
        "Security Monitoring",
        "Backup & Disaster Recovery",
      ],
      benefits: [
        "Minimized downtime and disruptions",
        "Enhanced system performance",
        "Proactive issue resolution",
        "Continuous improvement and updates",
      ],
      imageSrc: "/support2.jpg",
      path: "/software-support",
    },
  ];

  const stats = [
    { icon: Code, number: "500+", label: "Projects Delivered" },
    { icon: Users, number: "99.8%", label: "Client Satisfaction" },
    { icon: Shield, number: "24/7", label: "Support Available" },
    { icon: Zap, number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Professional Services"}
        title1="IT Services"
        title2="& Solutions"
        description="From custom software development to comprehensive technical support, Able Software Solution delivers end-to-end IT services that drive business growth and operational excellence."
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
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Solutions */}
      <ERPSolutionsGrid
        solutions={servicesSolutions}
        onLearnMore={(solution) => {
          console.log("Learn more about:", solution.name);
        }}
      />

      <CTASection />
    </div>
  );
}
