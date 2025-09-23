import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import { ReactNode, useState, useRef, useEffect } from "react";

// Touch-friendly swipe carousel for mobile
interface SwipeCarouselProps {
  children: ReactNode[];
  className?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function SwipeCarousel({
  children,
  className = "",
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 3000
}: SwipeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoPlay && !isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % children.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isDragging, children.length]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > 50 || Math.abs(velocity) > 500) {
      if (offset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (offset < 0 && currentIndex < children.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    x.set(0);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
      <motion.div
        className="flex"
        style={{ x }}
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>

      {showDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {children.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#018136]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile-optimized accordion
interface MobileAccordionProps {
  items: {
    title: string;
    content: ReactNode;
    icon?: ReactNode;
  }[];
  className?: string;
  allowMultiple?: boolean;
}

export function MobileAccordion({
  items,
  className = "",
  allowMultiple = false
}: MobileAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
          initial={false}
        >
          <motion.button
            className="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
            onClick={() => toggleItem(index)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="font-medium text-gray-900">{item.title}</span>
            </div>
            <motion.div
              animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.button>
          
          <motion.div
            initial={false}
            animate={{
              height: openItems.includes(index) ? "auto" : 0,
              opacity: openItems.includes(index) ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 bg-gray-50 text-gray-700">
              {item.content}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// Touch-optimized infinite scroll
interface InfiniteScrollProps {
  children: ReactNode[];
  className?: string;
  direction?: "horizontal" | "vertical";
  speed?: number;
  pauseOnHover?: boolean;
}

export function InfiniteScroll({
  children,
  className = "",
  direction = "horizontal",
  speed = 50,
  pauseOnHover = true
}: InfiniteScrollProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"}`}
        animate={{
          [direction === "horizontal" ? "x" : "y"]: [
            "0%",
            direction === "horizontal" ? "-50%" : "-50%"
          ]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {[...children, ...children].map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Mobile-optimized sticky section
interface StickySectionProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function StickySection({
  children,
  className = "",
  offset = 0
}: StickySectionProps) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsSticky(rect.top <= offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <motion.div
      ref={ref}
      className={`transition-all duration-300 ${
        isSticky ? "sticky z-40" : ""
      } ${className}`}
      style={{ top: isSticky ? offset : "auto" }}
      animate={{
        backgroundColor: isSticky ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: isSticky ? "blur(10px)" : "none"
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Pull-to-refresh component
interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void>;
  className?: string;
  threshold?: number;
}

export function PullToRefresh({
  children,
  onRefresh,
  className = "",
  threshold = 80
}: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const y = useMotionValue(0);

  const handleDrag = (event: any, info: PanInfo) => {
    if (info.offset.y > 0 && window.scrollY === 0) {
      setPullDistance(Math.min(info.offset.y, threshold * 1.5));
      y.set(Math.min(info.offset.y * 0.5, threshold));
    }
  };

  const handleDragEnd = async (event: any, info: PanInfo) => {
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
        y.set(0);
      }
    } else {
      setPullDistance(0);
      y.set(0);
    }
  };

  const opacity = useTransform(y, [0, threshold], [0, 1]);
  const scale = useTransform(y, [0, threshold], [0.5, 1]);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ y }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full flex items-center justify-center h-16"
        style={{ opacity, scale }}
      >
        <motion.div
          className="w-8 h-8 border-2 border-[#018136] border-t-transparent rounded-full"
          animate={isRefreshing ? { rotate: 360 } : {}}
          transition={isRefreshing ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
        />
      </motion.div>
      {children}
    </motion.div>
  );
}

// Floating action button with expandable menu
interface FloatingActionButtonProps {
  mainIcon: ReactNode;
  actions: {
    icon: ReactNode;
    label: string;
    onClick: () => void;
  }[];
  className?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export function FloatingActionButton({
  mainIcon,
  actions,
  className = "",
  position = "bottom-right"
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      <motion.div className="relative">
        {/* Action items */}
        <motion.div
          className="absolute bottom-16 right-0 space-y-3"
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.8,
            y: isOpen ? 0 : 20
          }}
          transition={{ duration: 0.2, staggerChildren: 0.05 }}
        >
          {actions.map((action, index) => (
            <motion.button
              key={index}
              className="flex items-center space-x-3 bg-white shadow-lg rounded-full px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => {
                action.onClick();
                setIsOpen(false);
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {action.icon}
              <span className="text-sm whitespace-nowrap">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main button */}
        <motion.button
          className="w-14 h-14 bg-[#018136] text-white rounded-full shadow-lg flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {mainIcon}
        </motion.button>
      </motion.div>
    </div>
  );
}

// Touch-optimized image gallery
interface TouchGalleryProps {
  images: { src: string; alt: string; caption?: string }[];
  className?: string;
}

export function TouchGallery({
  images,
  className = ""
}: TouchGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className={`relative ${className}`}>
        <SwipeCarousel showDots={true}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                  setIsFullscreen(true);
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 rounded-b-lg">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </SwipeCarousel>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsFullscreen(false)}
        >
          <motion.img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsFullscreen(false)}
          >
            ×
          </button>
        </motion.div>
      )}
    </>
  );
}