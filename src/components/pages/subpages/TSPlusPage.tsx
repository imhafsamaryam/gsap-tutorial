import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import { AnimatedCounter } from "../../ui/animated-counter";
import { CheckCircle, Monitor, Smartphone, Users, Cloud, Shield, Zap, ArrowRight } from "lucide-react";

interface TSPlusPageProps {
  onPageChange: (page: string) => void;
}

export function TSPlusPage({ onPageChange }: TSPlusPageProps) {
  const features = [
    { icon: Monitor, title: "Remote Desktop Access", description: "Access any Windows application remotely" },
    { icon: Smartphone, title: "Multi-Device Support", description: "Works on Windows, Mac, iOS, Android, Linux" },
    { icon: Users, title: "Multi-User Sessions", description: "Multiple users can work simultaneously" },
    { icon: Cloud, title: "Cloud Integration", description: "Deploy on-premises or in the cloud" },
    { icon: Shield, title: "Secure Connections", description: "SSL encryption and advanced security" },
    { icon: Zap, title: "High Performance", description: "Optimized for fast remote connections" }
  ];

  const packages = [
    {
      name: "TS Plus Essentials",
      price: 8000,
      period: "/year",
      description: "Basic remote access for small teams",
      features: [
        "5 Concurrent Users",
        "Basic Web Portal",
        "Standard Security",
        "Email Support",
        "Windows Applications"
      ],
      popular: false
    },
    {
      name: "TS Plus Professional",
      price: 20000,
      period: "/year",
      description: "Complete solution for growing businesses",
      features: [
        "15 Concurrent Users",
        "Advanced Web Portal",
        "Load Balancing",
        "Priority Support",
        "Mobile Apps",
        "Printing Solutions",
        "Advanced Security"
      ],
      popular: true
    },
    {
      name: "TS Plus Enterprise",
      price: 50000,
      period: "/year",
      description: "Full-featured solution for large organizations",
      features: [
        "Unlimited Users",
        "Custom Branding",
        "High Availability",
        "24/7 Support",
        "API Integration",
        "Advanced Analytics",
        "Multi-Server Support",
        "Custom Development"
      ],
      popular: false
    }
  ];

  const useCases = [
    { title: "Remote Work", description: "Enable employees to work from anywhere", icon: Users },
    { title: "Application Hosting", description: "Host legacy applications in the cloud", icon: Monitor },
    { title: "BYOD Support", description: "Allow personal devices to access business apps", icon: Smartphone },
    { title: "Cost Reduction", description: "Reduce hardware and software licensing costs", icon: Cloud }
  ];

  const stats = [
    { value: 50000, label: "Active Installations", suffix: "+" },
    { value: 140, label: "Countries", suffix: "+" },
    { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
    { value: 24, label: "Support Hours", suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/5 to-purple-500/5" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                  Remote Desktop Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                  TS Plus
                  <span className="block text-[#018136]">Remote Access</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Powerful and affordable remote desktop solution that enables secure access 
                  to Windows applications from any device, anywhere in the world.
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
                    Try Free Demo <ArrowRight className="ml-2 w-5 h-5" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-purple-500/20 rounded-3xl blur-3xl" />
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
              Powerful Remote Desktop Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TS Plus provides everything you need for secure and efficient remote access
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
                    className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#018136] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Perfect for Every Business Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TS Plus adapts to various business scenarios and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <motion.div
                    className="w-16 h-16 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#018136] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <useCase.icon className="w-8 h-8 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Packages */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Flexible Hosting Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your remote access needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
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
                <Card className={`p-8 h-full ${pkg.popular ? 'ring-2 ring-[#018136] shadow-2xl' : 'shadow-lg'}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl text-[#018136]">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-gray-600 ml-1">{pkg.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
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
                      pkg.popular 
                        ? 'bg-[#018136] hover:bg-[#016429] text-white' 
                        : 'border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white'
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Implementation Process */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Simple Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your remote desktop solution up and running quickly with our proven process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Analyze your requirements and infrastructure" },
              { step: "02", title: "Setup", description: "Install and configure TS Plus on your servers" },
              { step: "03", title: "Configuration", description: "Customize settings and user permissions" },
              { step: "04", title: "Go-Live", description: "Deploy and provide user training and support" }
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

      {/* Support Section */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Expert Support & Maintenance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our certified TS Plus specialists provide comprehensive support 
                to ensure optimal performance and user experience.
              </p>
              
              <div className="space-y-4">
                {[
                  "Complete installation and configuration",
                  "User training and documentation",
                  "24/7 monitoring and maintenance",
                  "Performance optimization",
                  "Security updates and patches",
                  "Ongoing technical support"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 bg-white shadow-2xl">
                <h3 className="text-2xl text-gray-900 mb-4">Ready to Enable Remote Work?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us for a free consultation and see how TS Plus can transform your business.
                </p>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-[#018136] hover:bg-[#016429] text-white py-3 rounded-full"
                >
                  Schedule Consultation
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-[#018136] to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-6">
              Start Your Remote Desktop Journey
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses worldwide who trust TS Plus for secure remote access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-[#018136] hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-white text-white hover:bg-white hover:text-[#018136] px-8 py-3 rounded-full text-lg"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}