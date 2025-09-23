import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import { AnimatedCounter } from "../../ui/animated-counter";
import { CheckCircle, Users, BarChart3, Shield, Cloud, Cog, Database, ArrowRight } from "lucide-react";

interface Sage200PageProps {
  onPageChange: (page: string) => void;
}

export function Sage200Page({ onPageChange }: Sage200PageProps) {
  const features = [
    { icon: Users, title: "Multi-Company Management", description: "Manage multiple companies from a single system" },
    { icon: BarChart3, title: "Advanced Reporting", description: "Comprehensive business intelligence and analytics" },
    { icon: Shield, title: "Role-Based Security", description: "Granular user permissions and data security" },
    { icon: Cloud, title: "Cloud Ready", description: "Deploy on-premise or in the cloud" },
    { icon: Database, title: "Data Integration", description: "Connect with other business systems seamlessly" },
    { icon: Cog, title: "Workflow Automation", description: "Automate routine business processes" }
  ];

  const modules = [
    { name: "Financial Management", description: "Complete accounting and financial control", included: true },
    { name: "Sales Order Processing", description: "From quotation to delivery management", included: true },
    { name: "Purchase Order Processing", description: "Procurement and supplier management", included: true },
    { name: "Inventory Management", description: "Stock control and warehouse management", included: true },
    { name: "Manufacturing", description: "Production planning and shop floor control", included: false },
    { name: "CRM Integration", description: "Customer relationship management", included: false },
    { name: "Business Intelligence", description: "Advanced reporting and analytics", included: false },
    { name: "Payroll", description: "Employee payroll processing", included: false }
  ];

  const stats = [
    { value: 25, label: "Years of Experience", suffix: "+" },
    { value: 500, label: "Sage 200 Implementations", suffix: "+" },
    { value: 98, label: "Customer Satisfaction", suffix: "%" },
    { value: 24, label: "Support Available", suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-[#018136]/10 text-[#018136] border-[#018136]/20 mb-4">
                  Sage 200 ERP Solution
                </Badge>
                <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                  Sage 200
                  <span className="block text-[#018136]">Business Solution</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive ERP software designed for growing businesses. Manage finances, 
                  operations, and customer relationships from a single, integrated platform.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-3 rounded-full text-lg group overflow-hidden relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#016429] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                  <span className="relative z-10 flex items-center">
                    Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('contact')}
                  className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-3 rounded-full text-lg"
                >
                  Get Quote
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-[#FFDF58]/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="text-3xl text-[#018136] mb-2">
                          <AnimatedCounter 
                            value={stat.value} 
                            suffix={stat.suffix}
                            duration={2000}
                          />
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Powerful Features for Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sage 200 provides everything you need to manage your business operations efficiently
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
                  <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Modules & Pricing */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Comprehensive Business Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core modules included with additional options for complete business management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl text-gray-900 mb-6">Core Modules</h3>
              <div className="space-y-4">
                {modules.filter(module => module.included).map((module, index) => (
                  <motion.div
                    key={module.name}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#018136] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900">{module.name}</h4>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl text-gray-900 mb-6">Optional Add-ons</h3>
              <div className="space-y-4">
                {modules.filter(module => !module.included).map((module, index) => (
                  <motion.div
                    key={module.name}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 border-2 border-[#018136] rounded-full mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900">{module.name}</h4>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Implementation Process */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Proven Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful Sage 200 deployment with minimal disruption
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analysis", description: "Business requirement analysis and system design" },
              { step: "02", title: "Configuration", description: "System setup and customization for your needs" },
              { step: "03", title: "Training", description: "Comprehensive user training and documentation" },
              { step: "04", title: "Go-Live", description: "Deployment support and ongoing maintenance" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-[#018136] text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {phase.step}
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using Sage 200 to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-[#018136] hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-white text-white hover:bg-white hover:text-[#018136] px-8 py-3 rounded-full text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}