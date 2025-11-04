import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { AnimatedSection } from "../ui/animated-section";
import { CollapsibleFAQ } from "../ui/collapsible-faq";
import React from "react";

interface ContactPageProps {
  // Remove onPageChange prop since we'll use React Router
}

export function ContactPage({}: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 mb-6">
              CONTACT US
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get Started with Your ERP Transformation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business operations? Our ERP experts are
              here to help you choose the perfect solution and provide ongoing
              support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and our ERP specialists will contact
                  you within 24 hours to discuss your requirements and provide a
                  customized solution.
                </p>
              </div>

              <Card className="p-8 shadow-xl">
                <CardContent className="p-0">
                  <motion.form
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Label
                          htmlFor="firstName"
                          className="text-gray-900 font-medium"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="border-gray-200 focus:border-[#018136] focus:ring-[#018136] transition-all duration-300 min-h-[44px] text-base"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Label
                          htmlFor="lastName"
                          className="text-gray-900 font-medium"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Smith"
                          className="border-gray-200 focus:border-[#018136] focus:ring-[#018136] transition-all duration-300 min-h-[44px] text-base"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label
                        htmlFor="email"
                        className="text-gray-900 font-medium"
                      >
                         Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.smith@company.com"
                        className="border-gray-200 focus:border-[#018136] focus:ring-[#018136] transition-all duration-300 min-h-[44px] text-base"
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Label
                          htmlFor="phone"
                          className="text-gray-900 font-medium"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="border-gray-200 focus:border-[#018136] focus:ring-[#018136] transition-all duration-300 min-h-[44px] text-base"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Label
                          htmlFor="company"
                          className="text-gray-900 font-medium"
                        >
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company Ltd."
                          className="border-gray-200 focus:border-[#018136] focus:ring-[#018136] transition-all duration-300 min-h-[44px] text-base"
                        />
                      </motion.div>
                    </div>

                    

                    

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-gray-900 font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current systems, challenges, and goals..."
                        rows={4}
                        className="border-gray-200 focus:border-[#018136] focus:ring-[#018136]"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 text-[#018136] border-gray-300 rounded focus:ring-[#018136]"
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to receive communications about ERP solutions
                        and services. We respect your privacy and will never
                        share your information.
                      </Label>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-[#018136] hover:bg-[#016429] text-white py-4 rounded-full text-lg font-medium min-h-[52px] relative overflow-hidden group"
                      >
                        <motion.div className="absolute inset-0 bg-[#016429] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="relative z-10">
                          Schedule Free Consultation
                        </span>
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 my-auto">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Multiple ways to reach our team of ERP experts
                </p>
              </div>

              {/* Office Locations */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#018136]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#018136]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">
                        Main Office
                      </h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Hamriyah Free Zone, Sharjah, UAE</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#018136]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#018136]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Phone Number
                      </div>
                      <div className="text-gray-600">+971 585198723</div>
                      <div className="text-sm text-gray-500">
                        Mon-Fri 8:00AM-5:00PM 
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Quick Actions
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/sage300">
                    <Button
                      variant="outline"
                      className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white w-full"
                    >
                      View Products
                    </Button>
                  </Link>
                  <Link to="/ts-plus">
                    <Button
                      variant="outline"
                      className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white w-full"
                    >
                      Cloud Hosting
                    </Button>
                  </Link>
                  <Link to="/laptops">
                    <Button
                      variant="outline"
                      className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white w-full"
                    >
                      Hardware Solutions
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white w-full"
                    >
                      About Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="my-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Find Us On The Map
        </h2>
        <div className="bg-slate-900 rounded-3xl p-2 border border-gray-800 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.1730893573307!2d55.2021!3d25.1107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzM4LjUiTiA1NcKwMTInMDcuNiJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our ERP solutions
            </p>
          </div>

          <CollapsibleFAQ
            faqs={[
              {
                question: "How long does ERP implementation take?",
                answer:
                  "Implementation timelines vary by solution: Busy Accounting (1-3 weeks), Zoho Books (2-4 weeks), Sage 200 (3-6 months), Sage 300 (6-12 months). We provide detailed project timelines during consultation.",
              },
              {
                question: "Do you provide training for our team?",
                answer:
                  "Yes, comprehensive training is included with all implementations. We provide on-site training, online sessions, and ongoing support to ensure your team is confident using the new system.",
              },
              {
                question: "Can you migrate data from our current system?",
                answer:
                  "Absolutely. We handle data migration from most existing systems including QuickBooks, Excel, legacy ERP systems, and custom databases. We ensure data integrity and provide validation throughout the process.",
              },
              {
                question: "What ongoing support do you provide?",
                answer:
                  "We offer 24/7 technical support, regular system updates, ongoing optimization, and annual maintenance contracts. Our support team is always available to help with any issues.",
              },
              {
                question: "How much does ERP implementation cost?",
                answer:
                  "Costs vary based on solution complexity, company size, and customization needs. We provide transparent pricing during consultation with no hidden fees. Most implementations pay for themselves within 12-18 months through efficiency gains.",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
