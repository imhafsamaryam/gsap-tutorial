import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import { AnimatedCounter } from "../../ui/animated-counter";
import { CheckCircle, Cloud, Shield, Zap, Globe, Database, Monitor, ArrowRight } from "lucide-react";

interface MicrosoftAzurePageProps {
  onPageChange: (page: string) => void;
}

export function MicrosoftAzurePage({ onPageChange }: MicrosoftAzurePageProps) {
  const features = [
    { icon: Cloud, title: "Global Infrastructure", description: "60+ regions worldwide for optimal performance" },
    { icon: Shield, title: "Enterprise Security", description: "Multi-layered security with compliance certifications" },
    { icon: Zap, title: "High Performance", description: "99.9% uptime SLA with auto-scaling capabilities" },
    { icon: Globe, title: "Hybrid Solutions", description: "Seamless integration with on-premises systems" },
    { icon: Database, title: "Data Services", description: "Comprehensive database and analytics services" },
    { icon: Monitor, title: "24/7 Monitoring", description: "Proactive monitoring and automated backup" }
  ];

  const solutions = [
    {
      name: "Azure Virtual Machines",
      description: "Scalable compute resources for your applications",
      features: ["Windows & Linux VMs", "Auto-scaling", "Load balancing", "Disaster recovery"],
      popular: false
    },
    {
      name: "Azure SQL Database",
      description: "Fully managed database service with built-in intelligence",
      features: ["Automated backups", "Built-in security", "Performance tuning", "Global scale"],
      popular: true
    },
    {
      name: "Azure App Service",
      description: "Platform for building and hosting web applications",
      features: ["Auto-scaling", "DevOps integration", "Multiple languages", "SSL certificates"],
      popular: false
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 15000,
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "2 vCPU, 4GB RAM",
        "100GB SSD Storage",
        "Basic Monitoring",
        "Email Support",
        "99.9% Uptime SLA"
      ],
      popular: false
    },
    {
      name: "Business",
      price: 35000,
      period: "/month",
      description: "Ideal for growing businesses with higher demands",
      features: [
        "4 vCPU, 8GB RAM",
        "500GB SSD Storage",
        "Advanced Monitoring",
        "Phone Support",
        "Auto-scaling",
        "Backup & Recovery"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 75000,
      period: "/month",
      description: "For large organizations requiring maximum performance",
      features: [
        "8 vCPU, 16GB RAM",
        "1TB SSD Storage",
        "Premium Monitoring",
        "Dedicated Support",
        "Multi-region deployment",
        "Advanced Security",
        "Custom configurations"
      ],
      popular: false
    }
  ];

  const stats = [
    { value: 200, label: "Global Regions", suffix: "+" },
    { value: 99.9, label: "Uptime SLA", suffix: "%" },
    { value: 95, label: "Fortune 500 companies", suffix: "%" },
    { value: 24, label: "Support Available", suffix: "/7" }
  ];

  const certifications = [
    "ISO 27001", "SOC 2", "HIPAA", "GDPR", "PCI DSS", "FedRAMP"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/5 to-blue-600/5" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  Microsoft Azure Cloud Services
                </Badge>
                <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                  Microsoft Azure
                  <span className="block text-[#018136]">Cloud Hosting</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Enterprise-grade cloud platform with global reach, unmatched security, 
                  and comprehensive services to accelerate your digital transformation.
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
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('contact')}
                  className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-3 rounded-full text-lg"
                >
                  Free Consultation
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-blue-600/20 rounded-3xl blur-3xl" />
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
              Enterprise-Grade Cloud Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microsoft Azure provides the foundation for your digital transformation with unmatched reliability
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
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#018136] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Azure Solutions */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Azure Solutions We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {solution.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-[#018136] text-white px-4 py-1 rounded-full">
                      Popular
                    </Badge>
                  </motion.div>
                )}
                <Card className={`p-6 h-full ${solution.popular ? 'ring-2 ring-[#018136] shadow-xl' : 'shadow-lg'}`}>
                  <h3 className="text-xl text-gray-900 mb-3">{solution.name}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#018136] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business requirements and scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {tier.popular && (
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
                <Card className={`p-8 h-full ${tier.popular ? 'ring-2 ring-[#018136] shadow-2xl' : 'shadow-lg'}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl text-[#018136]">₹{tier.price.toLocaleString()}</span>
                      <span className="text-gray-600 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => onPageChange('contact')}
                    className={`w-full py-3 rounded-full ${
                      tier.popular 
                        ? 'bg-[#018136] hover:bg-[#016429] text-white' 
                        : 'border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white'
                    }`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Compliance & Security */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microsoft Azure meets the highest security standards and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-[#018136]" />
                </div>
                <h3 className="text-gray-900 font-medium">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Support Section */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Expert Azure Support & Migration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our certified Azure experts provide end-to-end support from planning 
                to implementation and ongoing management.
              </p>
              
              <div className="space-y-4">
                {[
                  "Azure architecture assessment and planning",
                  "Seamless migration from on-premises systems",
                  "24/7 monitoring and support services",
                  "Cost optimization and performance tuning",
                  "Security implementation and compliance",
                  "Training and knowledge transfer"
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-blue-600/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 bg-white shadow-2xl">
                <h3 className="text-2xl text-gray-900 mb-4">Ready to Move to Azure?</h3>
                <p className="text-gray-600 mb-6">
                  Get a free Azure readiness assessment and migration roadmap for your business.
                </p>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-[#018136] hover:bg-[#016429] text-white py-3 rounded-full"
                >
                  Schedule Assessment
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-[#018136] to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-6">
              Transform Your Business with Azure
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of organizations worldwide who trust Microsoft Azure for their cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-[#018136] hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
              >
                Start Your Migration
              </Button>
              <Button 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-white text-white hover:bg-white hover:text-[#018136] px-8 py-3 rounded-full text-lg"
              >
                Contact Azure Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}