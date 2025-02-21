import { motion } from "framer-motion";

export default function ModernHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full -top-48 -left-48 mix-blend-overlay" />
        <div className="absolute w-64 h-64 bg-secondary/20 rounded-full bottom-32 -right-32 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
            Transforming Ideas Into Digital Experiences
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            We create visually stunning interfaces that blend creativity with
            functionality, delivering engaging and user-centric digital
            solutions.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              View Our Work
            </button>
            <button className="border-2 border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">AbleSolutions</h2>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
{
  /* <div
          ref={ctaRef}
          className="space-x-4 flex items-center justify-center"
        >
          <div class="box">
            <sh></sh>
          </div>

          <AnimatedBorder content={<div className=" ">Get Started</div>} />
          <button
            onClick={() => console.log("button clicked")}
            className="bg-white text-blue-600 px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-blue-100 transition duration-300"
          >
            Explore Solutions
          </button>
         
        </div> */
}
