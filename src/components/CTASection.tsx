import { Button } from "./ui/button";
import { motion } from "motion/react";
import { AnimatedSection } from "./ui/animated-section";
import { Link } from "react-router-dom";
import React from "react";

interface CTASectionProps {
  // Remove onPageChange prop since we'll use React Router
}

export function CTASection({}: CTASectionProps) {
  return (
    <AnimatedSection
      className="py-20 bg-gradient-to-br from-[#018136]/5 via-white to-[#FFDF58]/10 relative overflow-hidden"
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
          className="absolute top-10 right-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-[#018136]/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-[#FFDF58]/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Business Operations?
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands of businesses that have streamlined their operations
            with our ERP solutions. Get started with a free consultation today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-4 rounded-full text-lg font-medium relative overflow-hidden group min-h-[52px]">
                  <motion.div className="absolute inset-0 bg-[#016429] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">
                    Schedule Free Consultation
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 min-h-[52px] hover:shadow-lg"
                >
                  Compare Solutions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
