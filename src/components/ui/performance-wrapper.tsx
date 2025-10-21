import { useEffect, useState, createContext, useContext } from "react";
import { motion, useReducedMotion } from "motion/react";
import React from "react";

interface PerformanceContextType {
  isLowPerformance: boolean;
  shouldReduceMotion: boolean;
  isMobile: boolean;
  connectionSpeed: string;
}

const PerformanceContext = createContext<PerformanceContextType>({
  isLowPerformance: false,
  shouldReduceMotion: false,
  isMobile: false,
  connectionSpeed: '4g'
});

export const usePerformance = () => useContext(PerformanceContext);

interface PerformanceWrapperProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PerformanceWrapper({ children, fallback }: PerformanceWrapperProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState('4g');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobileQuery = window.matchMedia('(max-width: 768px)');
      const userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobileQuery.matches || userAgent);
    };

    checkMobile();

    // Check for reduced motion preference
    if (shouldReduceMotion) {
      setIsLowPerformance(true);
      return;
    }

    // Basic performance detection
    const checkPerformance = () => {
      const connection = (navigator as any).connection;
      const memory = (performance as any).memory;

      // Check for slow network
      if (connection && connection.effectiveType) {
        setConnectionSpeed(connection.effectiveType);
        if (['slow-2g', '2g'].includes(connection.effectiveType)) {
          setIsLowPerformance(true);
          return;
        }
      }

      // Check for low memory (if available)
      if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        setIsLowPerformance(true);
        return;
      }

      // Check for mobile device with potentially slower CPU
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;

      if (isMobile && hardwareConcurrency < 4) {
        setIsLowPerformance(true);
      }
    };

    checkPerformance();

    // Listen for network changes
    if ('connection' in navigator) {
      (navigator as any).connection.addEventListener('change', checkPerformance);

      return () => {
        (navigator as any).connection.removeEventListener('change', checkPerformance);
      };
    }
  }, [shouldReduceMotion, isMobile]);

  // Apply performance-based CSS variables
  useEffect(() => {
    const root = document.documentElement;

    if (isLowPerformance || shouldReduceMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--transform-will-change', 'auto');
      root.style.setProperty('--stagger-delay', '0.02s');
      root.classList.add('reduce-motion');
    } else {
      root.style.setProperty('--animation-duration', '0.6s');
      root.style.setProperty('--transition-duration', '0.3s');
      root.style.setProperty('--transform-will-change', 'transform');
      root.style.setProperty('--stagger-delay', '0.1s');
      root.classList.remove('reduce-motion');
    }

    // Mobile optimizations
    if (isMobile) {
      root.classList.add('mobile-device');
      root.style.setProperty('--mobile-stagger', '0.05s');
    } else {
      root.classList.remove('mobile-device');
      root.style.setProperty('--mobile-stagger', '0.1s');
    }

    // Connection-based optimizations
    if (['slow-2g', '2g', '3g'].includes(connectionSpeed)) {
      root.classList.add('slow-connection');
    } else {
      root.classList.remove('slow-connection');
    }
  }, [isLowPerformance, shouldReduceMotion, isMobile, connectionSpeed]);

  const contextValue: PerformanceContextType = {
    isLowPerformance,
    shouldReduceMotion: shouldReduceMotion || false,
    isMobile,
    connectionSpeed
  };

  if (isLowPerformance && fallback) {
    return (
      <PerformanceContext.Provider value={contextValue}>
        {fallback}
      </PerformanceContext.Provider>
    );
  }

  return (
    <PerformanceContext.Provider value={contextValue}>
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: isLowPerformance ? 0.1 : 0.3 }}
        className={`${isLowPerformance ? 'low-performance' : ''} ${isMobile ? 'mobile-device' : ''}`}
        data-performance={isLowPerformance ? 'low' : 'high'}
        data-mobile={isMobile}
        data-connection={connectionSpeed}
      >
        {children}
      </motion.div>
    </PerformanceContext.Provider>
  );
}