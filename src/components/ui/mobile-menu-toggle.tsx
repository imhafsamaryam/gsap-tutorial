import { motion } from "motion/react";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <motion.button
      className="lg:hidden p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#018136] focus:ring-offset-2 touch-manipulation"
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col justify-center items-center w-6 h-6 relative"
      >
        {/* Top line */}
        <motion.span
          className="absolute block h-0.5 w-6 bg-gray-700 rounded-full"
          variants={{
            closed: { 
              rotate: 0, 
              y: -6,
              opacity: 1 
            },
            open: { 
              rotate: 45, 
              y: 0,
              opacity: 1 
            }
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
        
        {/* Middle line */}
        <motion.span
          className="absolute block h-0.5 w-6 bg-gray-700 rounded-full"
          variants={{
            closed: { 
              opacity: 1,
              x: 0
            },
            open: { 
              opacity: 0,
              x: -10
            }
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
        
        {/* Bottom line */}
        <motion.span
          className="absolute block h-0.5 w-6 bg-gray-700 rounded-full"
          variants={{
            closed: { 
              rotate: 0, 
              y: 6,
              opacity: 1 
            },
            open: { 
              rotate: -45, 
              y: 0,
              opacity: 1 
            }
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.button>
  );
}