import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LogoItem {
  id: number;
  name: string;
  imageUrl: string;
}

const logos: LogoItem[] = [
  {
    id: 1,
    name: "Sage 300",
    imageUrl: "/sage300logo.webp",
  },
  {
    id: 2,
    name: "Sage 200",
    imageUrl: "/sage200logo.png",
  },
  {
    id: 3,
    name: "Busy ERP",
    imageUrl: "/busyerplogo.webp",
  },
  {
    id: 4,
    name: "Zoho",
    imageUrl: "/zohologo.png",
  },
  {
    id: 5,
    name: "Cloud Hosting",
    imageUrl: "/cloudhostinglogo.webp",
  },
  {
    id: 6,
    name: "Product Development",
    imageUrl: "/developmentlogo.jpg",
  },
  {
    id: 7,
    name: "Hardware & Support",
    imageUrl: "/supportlogo.jpg",
  },
];

export function LogoCarousel() {
  const [rotation, setRotation] = useState(0);
  const totalLogos = logos.length;
  const angleStep = (2 * Math.PI) / totalLogos;

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + angleStep);
    }, 5000); // Increased to 5 seconds

    return () => clearInterval(interval);
  }, [angleStep]);

  // Calculate position on ellipse for each logo
  const getPosition = (index: number) => {
    // Shift angle by π/2 to center the focused logo at the bottom-center
    const angle = rotation + index * angleStep + Math.PI / 2;

    // Ellipse parameters (responsive) - significantly increased for better spacing
    const radiusX =
      typeof window !== "undefined" && window.innerWidth < 640 ? 250 : 320;
    const radiusY =
      typeof window !== "undefined" && window.innerWidth < 640 ? 180 : 210;

    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;

    // Calculate z-index based on y position (higher y = closer to viewer)
    const zIndex = Math.floor((y + radiusY) * 10);

    // Calculate scale - center logo (y at maximum, x near 0) is largest
    // sin(angle) gives us the vertical position: 1 at bottom (front), -1 at top (back)
    const centerScore = Math.sin(angle);
    const scale = 0.4 + centerScore * 0.6; // Scale from 0.4 to 1.0 (more dramatic)

    // Calculate opacity - logos at the back (top) are more transparent
    const opacity = 0.75 + centerScore * 0.85; // Opacity from 0.25 to 1.0

    // Focused logo is at bottom-center (y maximum, sin(angle) close to 1) - stricter threshold
    const isFocused = centerScore > 0.9;

    return { x, y, zIndex, scale, opacity, isFocused };
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
      {/* Logo orbit container */}
      <div className="relative w-full h-full flex items-start justify-center">
        <AnimatePresence mode="sync">
          {logos.map((logo, index) => {
            const pos = getPosition(index);

            return (
              <motion.div
                key={logo.id}
                className="absolute"
                style={{
                  zIndex: pos.zIndex,
                }}
                initial={{ x: 0, y: 0, scale: 0.6, opacity: 0 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                  mass: 1,
                  duration: 1.5,
                }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Logo container with shadow and border */}
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl bg-white
                      ${
                        pos.isFocused
                          ? "shadow-2xl ring-4 ring-[#018136]/20"
                          : "shadow-lg"
                      }
                      transition-shadow duration-300
                    `}
                    style={{
                      width: pos.isFocused ? "210" : "max-content",
                      height: pos.isFocused ? "110px" : "80px",
                    }}
                  >
                    <ImageWithFallback
                      src={logo.imageUrl}
                      alt={logo.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay gradient for focused logo */}
                    {pos.isFocused && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#018136]/20 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Shine effect for focused logo */}
                  {pos.isFocused && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Decorative floating particles */}
      <motion.div
        className="absolute top-10 left-10 w-3 h-3 rounded-full bg-[#FFDF58]/60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-[#018136]/50"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-5 w-2.5 h-2.5 rounded-full bg-[#FFDF58]/70"
        animate={{
          x: [0, 10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
