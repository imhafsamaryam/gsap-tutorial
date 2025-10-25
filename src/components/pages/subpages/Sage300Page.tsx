import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import { CTASection } from "../../CTASection";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { HeroSection } from "../../HeroSection";
import React from "react";

interface Sage300PageProps {
  onPageChange: (page: string) => void;
}

export function Sage300Page({ onPageChange }: Sage300PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        badge={"ENTERPRISE SOLUTION"}
        title1="Sage 300"
        title2="Formerly Sage AccPac"
        description="Comprehensive business management software enabling key finance, operations, sales, and service departmental processes for organizations of all sizes."
        onPageChange={onPageChange}
        imgSrc={"/sage300.jpg"}
      />

      {/* Overview Section */}
      <AnimatedSection className="py-20  " animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden h-[450px]">
                <motion.img
                  src="/sage300cloud_modules.png"
                  alt="sage300"
                  className="w-full h-full object-cover"

                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Advanced Business Management Solution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sage 300 is an award-winning, web-based accounting system built on world-class,
                object-oriented, multi-tiered architecture. Designed as the foundation for an
                integrated suite of end-to-end business management applications, it provides
                the flexibility to grow with your business needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With high performance, advanced functionality, and unmatched freedom of choice,
                you can select the applications, technology, and deployment options that fit
                your requirements, and easily customize your system as your business evolves.
              </p>
            </motion.div>


          </div>
        </div>
      </AnimatedSection>

      {/* Key Benefits */}
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
              Streamline Your Business Operations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Simplify complexity in financial management and gain accurate, real-time
              understanding of your business position
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Collaboration",
                description: "Increase cross-departmental cooperation with our integrated management platform that connects all business areas.",
                icon: "/collab.png",
              },
              {
                title: "Global Business Management",
                description: "Effortlessly manage multiple companies with unlimited currency support and consolidated reporting capabilities.",
                icon: "/global.png",
              },
              {
                title: "Real-Time Performance Metrics",
                description: "Automate financial management and gain immediate visibility into corporate finances and operational performance.",
                icon: "/overview.png",
              },
              {
                title: "",
                description: "",
                icon: "",
              },
              {
                title: "Flexible Technology Options",
                description: "Support for multiple technologies and databases with customizable functionality and deployment methods.",
                icon: "/analytics.png",
              },
              {
                title: "",
                description: "",
                icon: "",
              },
            ].map((feature, index) => (
              feature.title == "" ? <div></div> : <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full border border-gray-100 bg-white">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start space-y-2 space-x-4">


                      <motion.div
                        className="w-16 h-16 bg-[#018136]/10 rounded-xl flex items-center justify-center  mb-4"
                      >
                        <motion.img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-12 h-12 text-[#018136]"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Key Modules */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-green-50 to-white" animation="slideInLeft">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Modules
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive suite of modules designed to handle all aspects of your business operations
            </p>
          </motion.div>

          <div className="flex flex-col space-y-8 md:flex-row justify-between items-center">
            <motion.div
              className=" w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "General Ledger",
                      "AP / AR Accounting",
                      "Bank Reconciliation",
                      "Order Entry",
                      "Purchasing",
                      "Inventory Management",
                      "Cash Management",
                      "Job Costing"
                    ].map((module, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900 text-sm">
                          {module}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>


              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 max-w-3xl rounded-3xl "
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div  >
                <motion.img
                  src="/sage300erp.jpg"
                  alt="sage300"
                  className="w-120 h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Deployment Options */}
      <AnimatedSection className="py-20 bg-white" animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 ">
          <div className="pb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Deployment Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the deployment method that best suits your business needs and technology preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <div className="space-y-6">
                <Card className="p-6 border-2 border-green-200">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start space-y-2 space-x-4">
                      <Badge className="bg-[#018136] text-white">On-Premise</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Sage 300</h4>
                        <p className="text-gray-600 text-sm">
                          Traditional purchased license for on-premise installation with full control over your infrastructure and data.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-2 border-blue-200">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start space-y-2 space-x-4">
                      <Badge className="bg-[#018136] text-white">Cloud-Enabled</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Sage 300c</h4>
                        <p className="text-gray-600 text-sm">
                          Subscription-based version with web browser access, deployable on internal servers or through hosted solutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Expandable Capabilities</h5>
                  <p className="text-gray-600 text-sm">
                    Enhance your system with additional modules for Service Management, Fixed Assets,
                    Warehousing, Manufacturing, Projects, and hundreds of industry-specific solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-xl">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-gray-900 mb-6 text-center">
                    Implementation Approach
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Needs Assessment</h5>
                        <p className="text-sm text-gray-600">
                          Comprehensive analysis of your business requirements and processes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">System Configuration</h5>
                        <p className="text-sm text-gray-600">
                          Tailored setup and customization based on your specific needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Training & Testing</h5>
                        <p className="text-sm text-gray-600">
                          Comprehensive user training and system validation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Deployment & Support</h5>
                        <p className="text-sm text-gray-600">
                          Smooth go-live transition and ongoing technical support
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection onPageChange={onPageChange} />

    </div>
  );
}