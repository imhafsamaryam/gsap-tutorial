import { Card, CardContent } from "../ui/card";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CTASection } from "../CTASection";
import { HeroSection } from "../HeroSection";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { AnimatedSection } from "../ui/animated-section";

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white ">
      <AnimatedSection className=" bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1  gap-16 items-end">
            <motion.div
              className="space-y-6 flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                ABOUT US
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
                Leading ERP Solutions Provider  <span className="  text-[#018136]">Since 2015 </span>
              </h1>
              <p className="text-[20px] text-gray-600 leading-relaxed text-center max-w-3xl ">
                We've been helping businesses optimize their operations through cutting-edge technology solutions, transforming how companies manage their resources and drive growth.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* <HeroSection
        badge={" ABOUT US "}
        title1=" Leading ERP Solutions Provider "
        title2="Since 2015"
        description=" We've been helping businesses optimize their operations through
                cutting-edge technology solutions, transforming how companies
                manage their resources and drive growth."
        onPageChange={onPageChange}
        imgSrc={"/aboutus.jpg"}
      /> */}

      {/* Enhanced Mission Section */}
      <AnimatedSection
        className="py-20 relative overflow-hidden"
        animation="fadeIn"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#018136]/5"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#FFDF58]/10"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto relative px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <motion.img
                  src="/collab3.jpg"
                  alt="Client Meeting"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                  OUR MISSION
                </Badge>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-black pt-6 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Driving Business Transformation
              </motion.h2>

              <div className="space-y-4">
                {[
                  "At Able Software Solutions, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe that the right software can transform how businesses operate, making them more agile, productive, and competitive in today's fast-paced market.",
                  "We're committed to understanding each client's unique challenges and goals, allowing us to recommend and implement solutions that deliver real value. Our approach is collaborative and client-focused, ensuring that the technology we provide aligns perfectly with your business objectives.",
                  "Beyond just providing software, we aim to be a trusted technology partner for our clients, offering ongoing support, training, and consultation to help them maximize their investment and adapt to changing business needs."
                ].map((text, index) => (
                  <motion.p
                    key={index} style={{ textAlign: "justify" }}
                    className="text-md leading-relaxed text-gray-600  "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Vision Section */}
      <AnimatedSection
        className="py-20 bg-white relative overflow-hidden"
        animation="fadeInUp"
      >
        <div className="max-w-6xl mx-auto relative px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                  OUR VISION
                </Badge>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 pt-6 pb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Shaping the Future of Business Technology
              </motion.h2>

              <div className="space-y-4">
                {[
                  "Our vision is to be the most trusted and innovative ERP solutions provider, recognized for our ability to transform businesses through technology that not only meets today's needs but also anticipates tomorrow's challenges.",
                  "We envision a future where every business, regardless of size, has access to enterprise-level technology that drives efficiency, fosters innovation, and creates sustainable competitive advantages in an increasingly digital world.",
                  "Through continuous innovation and unwavering commitment to our clients' success, we aim to set new standards in the ERP industry while maintaining the personal touch and deep partnerships that have defined our journey since 2015."
                ].map((text, index) => (
                  <motion.p
                    key={index} style={{ textAlign: "justify" }}
                    className="text-md leading-relaxed text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden h-[450px]">
                <motion.img
                  src="/collab1.jpg"
                  alt="Client Meeting"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Values Section */}
      <AnimatedSection
        className="py-20 relative overflow-hidden"
        animation="zoomIn"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 right-20 w-20 h-20 rounded-full bg-[#018136]/5"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                OUR VALUES
              </Badge>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold text-black pt-6 pb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Principles That Guide Us
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our core values are the foundation of everything we do
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "",
                title: "Built on Trust,",
                description: " Driven by Purpose"
              },
              {
                icon: "/innovation.png",
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to provide our clients with cutting-edge solutions that keep them ahead in today's competitive business environment."
              },
              {
                icon: "/experience.png",
                title: "Client Focus",
                description: "We put our clients at the center of everything we do, taking the time to understand their unique needs and challenges to deliver tailored solutions that drive real business value."
              },
              {
                icon: "/technology.png",
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from the quality of our software implementations to the level of support we provide, ensuring that we exceed client expectations."
              },
              {
                icon: "/quality-assurance.png",
                title: "Reliability",
                description: "We are committed to being a dependable partner for our clients, delivering on our promises and providing consistent, high-quality service they can count on."
              },
              {
                icon: "",
                title: " Rooted in Integrity, ",
                description: " Growing with You"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {value.icon !== "" ? <Card className="p-6 text-center hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <motion.div
                      className="w-16 h-16 mx-auto flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={value.icon}
                        alt={value.title}
                        className="w-full h-full rounded-xl"
                      />
                    </motion.div>

                    <h3 className="text-md font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {value.description}
                    </p>
                  </CardContent>
                </Card> :
                  <div className="p-6 text-left    h-full">
                    <div style={{ "justify-content": "end" }} className="p-0 flex flex-col items-end justify-end h-full">


                      <h3 className="text-3xl   lg:text-4xl  text-gray-900 leading-tight text-left">
                        {value.title} <span className="  text-[#018136]">{value.description} </span>
                      </h3>

                    </div>
                  </div>}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection
        className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden"
        animation="fadeIn"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Expert Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet the professionals who make your ERP implementation successful
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                color: "bg-[#018136]/10",
                dotColor: "bg-[#018136]",
                title: "ERP Specialists",
                description: "Certified professionals with deep expertise in various ERP platforms and implementation methodologies.",
                badge: "25+ Specialists",
                badgeColor: "bg-[#018136]/10 text-[#018136]"
              },
              {
                color: "bg-[#FFDF58]/20",
                dotColor: "bg-[#FFDF58]",
                title: "Implementation Experts",
                description: "Project managers and technical consultants who ensure smooth deployment and user adoption.",
                badge: "15+ Experts",
                badgeColor: "bg-[#FFDF58]/20 text-gray-800"
              },
              {
                color: "bg-[#018136]/10",
                dotColor: "bg-[#018136]",
                title: "Support Staff",
                description: "Dedicated support team providing 24/7 assistance and ongoing system maintenance.",
                badge: "20+ Staff",
                badgeColor: "bg-[#018136]/10 text-[#018136]"
              }
            ].map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-full ${team.color} mx-auto mb-4 flex items-center justify-center`}>
                      <div className={`w-8 h-8 rounded-full ${team.dotColor}`}></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {team.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {team.description}
                    </p>
                    <Badge className={team.badgeColor}>
                      {team.badge}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements */}
      <AnimatedSection
        className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10 relative overflow-hidden"
        animation="fadeInUp"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#018136]/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recognition & Achievements
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Industry recognition for our commitment to excellence
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2023",
                badgeColor: "bg-[#FFDF58]/20 text-gray-800",
                title: "ERP Partner of the Year",
                description: "Recognized by Sage for outstanding implementation success and customer satisfaction"
              },
              {
                year: "2023",
                badgeColor: "bg-[#018136]/10 text-[#018136]",
                title: "ISO 27001 Certified",
                description: "Information security management certification ensuring data protection"
              },
              {
                year: "2022",
                badgeColor: "bg-[#FFDF58]/20 text-gray-800",
                title: "Best Customer Support",
                description: "Industry award for exceptional 24/7 customer support and service quality"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-0">
                    <Badge className={`${achievement.badgeColor} mb-4`}>
                      {achievement.year}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection onPageChange={onPageChange} />
    </div>
  );
}