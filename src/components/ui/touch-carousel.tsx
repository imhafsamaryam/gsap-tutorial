import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { Card, CardContent } from "./card";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  onClick?: () => void;
}

interface TouchCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function TouchCarousel({ 
  items, 
  autoPlay = false, 
  autoPlayInterval = 5000,
  className = ""
}: TouchCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold && currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -threshold && currentIndex < items.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="relative h-64 sm:h-80 overflow-hidden rounded-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
          >
            <Card 
              className="h-full p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={items[currentIndex]?.onClick}
            >
              <CardContent className="p-0 h-full flex flex-col justify-center">
                {items[currentIndex]?.badge && (
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      items[currentIndex].badgeColor || "bg-[#018136]/10 text-[#018136]"
                    }`}>
                      {items[currentIndex].badge}
                    </span>
                  </motion.div>
                )}
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#018136] transition-colors duration-300">
                  {items[currentIndex]?.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {items[currentIndex]?.description}
                </p>
                
                <motion.div 
                  className="mt-6 text-[#018136] font-medium flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More 
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-[#018136] scale-110" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Desktop) */}
      <div className="hidden sm:block">
        {currentIndex > 0 && (
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#018136] hover:bg-white transition-all duration-300"
            onClick={() => goToSlide(currentIndex - 1)}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        )}
        
        {currentIndex < items.length - 1 && (
          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#018136] hover:bg-white transition-all duration-300"
            onClick={() => goToSlide(currentIndex + 1)}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        )}
      </div>

      {/* Swipe Hint (Mobile) */}
      {items.length > 1 && (
        <motion.div 
          className="sm:hidden text-center mt-4 text-sm text-gray-500"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Swipe to navigate
        </motion.div>
      )}
    </div>
  );
}