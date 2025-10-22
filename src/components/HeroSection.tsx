import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AnimatedSection } from "./ui/animated-section";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";

interface HeroSectionProps {
  onPageChange: (page: string) => void;
  badge: string;
  title1: string;
  title2: string;
  description: string;
  imgSrc: string;
}
export function HeroSection({
  onPageChange,
  badge,
  title1,
  title2,
  description,
  imgSrc,
}: HeroSectionProps) {
  return (
    <AnimatedSection className="px-4 py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#018136]/5"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#FFDF58]/10"></div>

      <div className="relative max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
              {badge}{" "}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title1} <span className="  text-[#018136]">{title2} </span>
            </h1>
            <p className="text-[20px] text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onPageChange("contact")}
                  className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-3 rounded-full font-medium min-h-[44px]"
                >
                  Request Demo
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onPageChange("products")}
                  variant="outline"
                  className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-3 rounded-full font-medium min-h-[44px]"
                >
                  Compare Products
                </Button>
              </motion.div>
            </div> */}
          </motion.div>

          <AnimatedSection>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute  inset-0   rounded-3xl blur-3xl" />
              <div className="  rounded-3xl  shadow-2xl">
                <ImageWithFallback
                  src={imgSrc}
                  alt={title2}
                  className="w-full h-full rounded-xl"
                />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
