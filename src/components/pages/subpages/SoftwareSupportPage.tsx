import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Clock,
  Shield,
  Users,
  Wrench,
  Zap,
  ArrowRight,
  HeadphonesIcon,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";
import { Link } from "react-router-dom";

export function SoftwareSupportPage() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Technical Support",
      description:
        "Round-the-clock assistance ensuring your systems run smoothly without interruption",
    },
    {
      icon: Shield,
      title: "Proactive Monitoring",
      description:
        "Continuous system monitoring to identify and resolve issues before they impact your business",
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description:
        "Regular updates, patches, and maintenance to keep your software secure and optimized",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Ongoing tuning and optimization to ensure peak performance and efficiency",
    },
    {
      icon: Users,
      title: "User Training",
      description:
        "Comprehensive training programs to maximize user adoption and productivity",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support Team",
      description:
        "Assigned account managers and technical specialists for personalized assistance",
    },
  ];

  const supportPlans = [
    {
      name: "Essential Support",
      description: "Perfect for small businesses",
      features: [
        "Business hours support (9 AM - 6 PM)",
        "Email and phone support",
        "Response time: 24 hours",
        "Monthly system health checks",
        "Quarterly software updates",
        "Remote assistance",
      ],
      popular: false,
    },
    {
      name: "Professional Support",
      description: "Ideal for growing businesses",
      features: [
        "Extended support (7 AM - 10 PM)",
        "Priority email, phone & chat",
        "Response time: 4 hours",
        "Weekly system monitoring",
        "Monthly software updates",
        "Remote + on-site support",
        "Dedicated account manager",
      ],
      popular: true,
    },
    {
      name: "Enterprise Support",
      description: "For mission-critical operations",
      features: [
        "24/7 support availability",
        "All communication channels",
        "Response time: 1 hour",
        "Real-time monitoring",
        "Continuous updates",
        "On-demand on-site support",
        "Dedicated support team",
        "Custom SLA agreements",
      ],
      popular: false,
    },
  ];

  const benefits = [
    "Minimize system downtime and business disruption",
    "Reduce IT costs with preventive maintenance",
    "Ensure compliance with security standards",
    "Improve system performance and reliability",
    "Access to expert technical knowledge",
    "Peace of mind with ongoing support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={" Technical Support Services"}
        title1=" Comprehensive Software"
        title2="Support Services"
        description="Keep your business systems running at peak performance with
                  Able Software Solution's comprehensive support services. Our
                  expert team provides proactive maintenance, rapid issue
                  resolution, and continuous optimization."
        imgSrc={"/support2.jpg"}
      />

      {/* Features */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Complete Support Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to keep your business systems secure, updated,
              and performing optimally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <motion.div
                    className="w-12 h-12 bg-[#018136]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#018136] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Support Plans */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Flexible Support Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support plan that matches your business needs and
              budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-[#018136] text-white px-4 py-1 rounded-full">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                <Card
                  className={`p-8 h-full ${
                    plan.popular
                      ? "ring-2 ring-[#018136] shadow-2xl"
                      : "shadow-lg"
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-3 rounded-full ${
                      plan.popular
                        ? "bg-[#018136] hover:bg-[#016429] text-white"
                        : "border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Why Choose Our Support Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Partnering with Able Software Solution for support means you get
                more than just technical assistance— you get a dedicated team
                committed to your success.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-[#FFDF58]/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 bg-white shadow-2xl">
                <h3 className="text-2xl text-gray-900 mb-4">
                  Need Immediate Support?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our support team is ready to assist you. Contact us now for
                  immediate help with your systems.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-[#018136] hover:bg-[#016429] text-white py-3 rounded-full">
                    Contact Support Team
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
