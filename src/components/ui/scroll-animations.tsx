import { motion, useInView, Variants, useMotionValue } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInLeft" | "slideInRight" | "fadeIn";
  once?: boolean;
  threshold?: number;
}

const animationVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  variant = "fadeInUp",
  once = true,
  threshold = 0.1
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animationVariants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredAnimationProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  variant?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  once?: boolean;
}

export function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
  variant = "fadeInUp",
  once = true
}: StaggeredAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={animationVariants[variant]}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 0.6,
            delay: initialDelay + (index * staggerDelay),
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface NumberCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedNumberCounter({
  value,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = ""
}: NumberCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {prefix}
          <motion.span
            initial={{ textContent: "0" }}
            animate={{ textContent: value.toString() }}
            transition={{
              duration: duration / 1000,
              ease: "easeOut"
            }}
          />
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

// Scroll-triggered text reveal animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: delay + (index * staggerDelay),
            ease: "easeOut"
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxScroll({
  children,
  offset = 50,
  className = ""
}: ParallaxProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: useMotionValue(0)
      }}
      whileInView={{
        y: [-offset, offset]
      }}
      transition={{
        duration: 1,
        ease: "linear"
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect for buttons and cards
interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticHover({
  children,
  strength = 0.3,
  className = ""
}: MagneticProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}

// Loading animation for images
interface ImageLoadProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedImage({
  src,
  alt,
  className = ""
}: ImageLoadProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}

// Page transition wrapper
interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({
  children,
  className = ""
}: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}