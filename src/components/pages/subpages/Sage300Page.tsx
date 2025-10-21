import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import { CTASection } from "../../CTASection";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { HeroSection } from "../../HeroSection";

interface Sage300PageProps {
  onPageChange: (page: string) => void;
}

export function Sage300Page({ onPageChange }: Sage300PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        badge={"ENTERPRISE SOLUTION"}
        title1="Sage 300"
        title2="   Enterprise-level ERP"
        description="  Comprehensive enterprise-level ERP solution designed for large
                organizations with complex business requirements, multi-company
                operations, and global reach."
        onPageChange={onPageChange}
        imgSrc={"/images/sage300.jpg"}
      />

      {/* Key Features */}
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
              Enterprise-Grade Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful capabilities designed to handle the most complex business
              requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Company Management",
                description:
                  "Manage multiple companies and subsidiaries with consolidated reporting and inter-company transactions.",
                icon: "🏢",
              },
              {
                title: "Advanced Manufacturing",
                description:
                  "Complete manufacturing resource planning with bill of materials, routing, and shop floor control.",
                icon: "⚙️",
              },
              {
                title: "Multi-Currency Operations",
                description:
                  "Full multi-currency support with real-time exchange rates and currency gain/loss tracking.",
                icon: "💱",
              },
              {
                title: "Distribution Management",
                description:
                  "Comprehensive distribution capabilities including purchase orders, sales orders, and inventory control.",
                icon: "📦",
              },
              {
                title: "Financial Management",
                description:
                  "Complete financial suite with GL, AP, AR, payroll and comprehensive reporting capabilities.",
                icon: "💰",
              },
              {
                title: "Business Intelligence",
                description:
                  "Advanced reporting and analytics with customizable dashboards and KPI monitoring.",
                icon: "📊",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

      {/* Technical Specifications */}
      <AnimatedSection
        className="py-20 bg-gradient-to-br from-green-50 to-white"
        animation="slideInLeft"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h2>
                <p className="text-lg text-gray-600">
                  Built on Microsoft .NET framework with SQL Server database for
                  maximum performance and scalability.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Database Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Microsoft SQL Server with advanced security and backup
                      capabilities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalability</h4>
                    <p className="text-gray-600 text-sm">
                      Supports 500+ concurrent users with high-performance
                      architecture
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Integration</h4>
                    <p className="text-gray-600 text-sm">
                      RESTful APIs and web services for seamless third-party
                      integration
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#018136] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Security</h4>
                    <p className="text-gray-600 text-sm">
                      Role-based security with audit trails and data encryption
                    </p>
                  </div>
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
                  <h3 className="font-semibold text-gray-900 mb-6">
                    Implementation Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Phase 1: Planning
                        </h5>
                        <p className="text-sm text-gray-600">
                          Requirements & Design
                        </p>
                      </div>
                      <Badge className="bg-[#018136]/10 text-[#018136]">
                        4-6 weeks
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Phase 2: Development
                        </h5>
                        <p className="text-sm text-gray-600">
                          Configuration & Customization
                        </p>
                      </div>
                      <Badge className="bg-[#FFDF58]/20 text-gray-800">
                        12-16 weeks
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Phase 3: Testing
                        </h5>
                        <p className="text-sm text-gray-600">UAT & Training</p>
                      </div>
                      <Badge className="bg-[#018136]/10 text-[#018136]">
                        4-6 weeks
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Phase 4: Go-Live
                        </h5>
                        <p className="text-sm text-gray-600">
                          Deployment & Support
                        </p>
                      </div>
                      <Badge className="bg-[#FFDF58]/20 text-gray-800">
                        2-4 weeks
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#018136] mb-1">
                        6-12 Months
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Implementation Time
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      {/* <AnimatedSection className="py-20 bg-white" animation="zoomIn">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Schedule a personalized demo to see how Sage 300 can streamline your complex business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium min-h-[52px]"
                >
                  Schedule Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => onPageChange('products')}
                  variant="outline" 
                  className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium min-h-[52px]"
                >
                  Compare All Products
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
       */}
      <CTASection onPageChange={onPageChange} />
    </div>
  );
}
