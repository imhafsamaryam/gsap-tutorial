import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";
import { useIntersectionObserver } from "./use-intersection-observer";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ 
  from, 
  to, 
  duration = 2, 
  className = "",
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true,
  });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isIntersecting) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isIntersecting, count, to, duration]);

  return (
    <motion.div ref={elementRef} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}