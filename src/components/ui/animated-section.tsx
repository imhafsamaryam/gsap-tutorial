import { motion } from "motion/react";
import { useIntersectionObserver } from "./use-intersection-observer";
import React from "react";

interface AnimatedSectionProps {
  children?: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'staggeredGrid';
  delay?: number;
  duration?: number;
}

const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  staggeredGrid: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

export function AnimatedSection({
  children = React.ReactNode,
  className = "",
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const selectedAnimation = animations[animation];

  return (
    <motion.section
      ref={elementRef}
      initial={selectedAnimation.initial}
      animate={isIntersecting ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}