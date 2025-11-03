import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { AnimatedSection } from "../ui/animated-section";
import { AnimatedCounter } from "../ui/animated-counter";
import { CTASection } from "../CTASection";
import React from "react";
import FeaturesUpClose from "../featurecard";

interface HomePageProps {
  // Remove onPageChange prop since we'll use React Router
}

export function HomePage({}: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] bg-gradient-to-br from-green-50 to-white overflow-hidden">
        {/* Background geometric shapes */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#018136]/30 to-[#FFDF58]/20 transform translate-x-1/3 -translate-y-1/4"></div>
          </motion.div>
          <motion.div
            className="absolute top-20 right-20 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] opacity-30"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#018136]/40 to-transparent"></div>
          </motion.div>
          <motion.div
            className="absolute top-40 right-40 w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] opacity-40"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFDF58]/60 to-transparent"></div>
          </motion.div>
        </motion.div>

        <div className="px-4 relative z-10 max-w-6xl mx-auto py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-sm text-[#018136] font-medium tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                SINCE 2020
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering UAE Businesses <br />
                with{" "}
                <motion.span
                  className="text-[#018136]"
                  animate={{
                    color: ["#018136", "#FFDF58", "#018136"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Integrated{" "}
                </motion.span>
                Technology{" "}
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From Sage ERP implementations and Zoho CRM to custom software,
                hardware, and ongoing support we're your single source for
                technology that drives growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">
                    <Button className="bg-[#FFDF58] hover:bg-[#e6c84d] text-gray-900 px-8 py-3 rounded-full font-medium relative overflow-hidden group min-h-[44px]">
                      <motion.div className="absolute inset-0 bg-[#e6c84d] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      <span className="relative z-10">Get Free Demo</span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/sage300">
                    <Button
                      variant="outline"
                      className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px]"
                    >
                      View Products
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-[300px] sm:h-[400px]">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-60 sm:w-80 h-60 sm:h-80 rounded-full border-8 border-[#018136]/20 flex items-center justify-center">
                    <motion.div
                      className="w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-gradient-to-br from-[#018136]/10 to-[#FFDF58]/10"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-10 left-10 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#FFDF58]/40"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-10 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#018136]/30"
                  animate={{
                    x: [0, 15, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-0 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#FFDF58]/60"
                  animate={{
                    y: [0, 25, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <AnimatedSection className="py-20 bg-white" animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our ERP Solutions?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive business management tools designed to scale with
              your growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "w-6 h-6 rounded-full bg-[#018136]",
                bgColor: "bg-[#018136]/10",
                borderColor: "border-[#018136]/10",
                title: "All-in-One Business Management",
                description:
                  "Integrate finance, inventory, CRM, and HR in a single platform for seamless operations.",
              },
              {
                icon: "w-6 h-6 rounded-full bg-[#FFDF58]",
                bgColor: "bg-[#FFDF58]/20",
                borderColor: "border-[#FFDF58]/20",
                title: "Custom ERP Implementation",
                description:
                  "Tailored solutions designed to fit your specific industry needs and business processes.",
              },
              {
                icon: "w-6 h-6 rounded-full bg-[#018136]",
                bgColor: "bg-[#018136]/10",
                borderColor: "border-[#018136]/10",
                title: "24/7 Expert Support & Optimization",
                description:
                  "Round-the-clock technical support with continuous system optimization and updates.",
              },
              {
                icon: "w-6 h-6 rounded-full bg-[#FFDF58]",
                bgColor: "bg-[#FFDF58]/20",
                borderColor: "border-[#FFDF58]/20",
                title: "Industry-Specific Solutions",
                description:
                  "Pre-configured modules for manufacturing, retail, healthcare, and 50+ other industries.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className={`p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer ${feature.borderColor} h-full`}
                >
                  <CardContent className="p-0">
                    <motion.div
                      className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={feature.icon}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#018136] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection
        className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10"
        animation="fadeIn"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: 50,
                suffix: "+",
                label: "Industries Served",
                description:
                  "From manufacturing to healthcare, we've got your industry covered",
              },
              {
                value: 1000,
                suffix: "+",
                label: "Satisfied Clients",
                description: "Businesses worldwide trust our ERP solutions",
              },
              {
                value: 24,
                suffix: "/7",
                label: "Expert Support",
                description: "Round-the-clock assistance whenever you need it",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="mb-4">
                  <AnimatedCounter
                    from={0}
                    to={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                    className="text-3xl sm:text-4xl font-bold text-[#018136] group-hover:text-[#016429] transition-colors duration-300"
                  />
                </div>
                <motion.div
                  className="text-gray-600 font-medium mb-2"
                  whileHover={{ color: "#018136" }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.label}
                </motion.div>
                <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Update FeaturesUpClose component to remove onPageChange prop if it exists */}
      <FeaturesUpClose />

      {/* Product Showcase */}
      <AnimatedSection className="py-20 bg-white" animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our ERP Product Suite
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of proven ERP solutions, each designed for
              different business scales and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                page: "/sage300",
                badge: {
                  text: "Enterprise",
                  className: "bg-[#018136]/10 text-[#018136]",
                },
                title: "Sage 300",
                description:
                  "Comprehensive enterprise solution for large organizations with complex requirements.",
              },
              {
                page: "/sage200",
                badge: {
                  text: "Mid-Market",
                  className: "bg-[#FFDF58]/20 text-gray-800",
                },
                title: "Sage 200",
                description:
                  "Perfect for growing businesses that need robust functionality without enterprise complexity.",
              },
              {
                page: "/zoho",
                badge: {
                  text: "Cloud-Based",
                  className: "bg-[#018136]/10 text-[#018136]",
                },
                title: "Zoho Books",
                description:
                  "An integrated suite of web-based applications. From CRM and email to projects and finance, run your entire business from one ecosystem.",
              },
              {
                page: "/busy-erp",
                badge: {
                  text: "SME Focused",
                  className: "bg-[#FFDF58]/20 text-gray-800",
                },
                title: "Busy Accounting",
                description:
                  "User-friendly solution designed specifically for small and medium enterprises.",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={product.page}>
                  <Card className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full border-gray-100">
                    <CardContent className="p-0 flex flex-col h-full">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge className={`${product.badge.className} mb-4`}>
                          {product.badge.text}
                        </Badge>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#018136] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                        {product.description}
                      </p>
                      <motion.div
                        className="text-sm text-[#018136] font-medium group-hover:text-[#016429] transition-colors duration-300 flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More
                        <motion.span
                          className="ml-1"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Update CTASection to remove onPageChange prop */}
      <CTASection />
    </div>
  );
}
