import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import { AnimatedCounter } from "../../ui/animated-counter";
import { CheckCircle, Cloud, Smartphone, DollarSign, Users, BarChart3, FileText, ArrowRight } from "lucide-react";

interface ZohoBooksPageProps {
  onPageChange: (page: string) => void;
}

export function ZohoBooksPage({ onPageChange }: ZohoBooksPageProps) {
  const features = [
    { icon: Cloud, title: "Cloud-Based", description: "Access your accounts from anywhere, anytime" },
    { icon: Smartphone, title: "Mobile Ready", description: "Full-featured mobile apps for iOS and Android" },
    { icon: DollarSign, title: "GST Compliance", description: "Built-in GST compliance for Indian businesses" },
    { icon: Users, title: "Multi-User", description: "Collaborate with your team and accountant" },
    { icon: BarChart3, title: "Real-time Reports", description: "Get instant insights into your business" },
    { icon: FileText, title: "Invoice Automation", description: "Automated invoicing and payment reminders" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 1200,
      period: "/year",
      description: "Perfect for freelancers and small businesses",
      features: [
        "1 User",
        "1000 Invoices/year",
        "Basic Reports",
        "Email Support",
        "Mobile App Access"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: 2400,
      period: "/year",
      description: "Ideal for growing businesses",
      features: [
        "3 Users",
        "Unlimited Invoices",
        "Advanced Reports",
        "Priority Support",
        "Inventory Management",
        "Project Tracking"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: 4800,
      period: "/year",
      description: "For established businesses",
      features: [
        "10 Users",
        "Unlimited Everything",
        "Custom Reports",
        "Phone Support",
        "Advanced Workflows",
        "API Access",
        "Custom Fields"
      ],
      popular: false
    }
  ];

  const stats = [
    { value: 500000, label: "Active Users", suffix: "+" },
    { value: 150, label: "Countries", suffix: "+" },
    { value: 99.9, label: "Uptime", suffix: "%" },
    { value: 24, label: "Support", suffix: "/7" }
  ];

  const integrations = [
    "Payment Gateways", "Banking", "CRM Systems", "E-commerce", 
    "Inventory Management", "Project Management", "HR Systems", "Tax Software"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/5 to-blue-500/5" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  Cloud Accounting Solution
                </Badge>
                <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                  Zoho Books
                  <span className="block text-[#018136]">Cloud Accounting</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Simple, powerful, and affordable online accounting software designed for 
                  small to medium businesses. Manage your finances with ease from anywhere.
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
                    Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('contact')}
                  className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-3 rounded-full text-lg"
                >
                  View Pricing
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-blue-500/20 rounded-3xl blur-3xl" />
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
              Everything You Need for Smart Accounting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zoho Books simplifies your accounting with powerful features designed for modern businesses
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

      {/* Pricing Plans */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include free setup and migration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
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
                <Card className={`p-8 h-full ${plan.popular ? 'ring-2 ring-[#018136] shadow-2xl' : 'shadow-lg'}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl text-[#018136]">₹{plan.price.toLocaleString()}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
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
                      plan.popular 
                        ? 'bg-[#018136] hover:bg-[#016429] text-white' 
                        : 'border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Integrations */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Zoho Books with your existing business tools for a unified workflow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-[#018136]/5 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-gray-900">{integration}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Support Section */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Expert Support & Training
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our certified Zoho Books consultants provide comprehensive setup, 
                training, and ongoing support to ensure your success.
              </p>
              
              <div className="space-y-4">
                {[
                  "Free data migration from existing systems",
                  "Comprehensive user training programs",
                  "Customization and workflow setup",
                  "Ongoing technical support",
                  "Regular software updates and maintenance"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 bg-white shadow-2xl">
                <h3 className="text-2xl text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses already using Zoho Books to streamline their accounting.
                </p>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-[#018136] hover:bg-[#016429] text-white py-3 rounded-full"
                >
                  Schedule Free Consultation
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
              Transform Your Accounting Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your 30-day free trial and experience the power of cloud accounting with Zoho Books.
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