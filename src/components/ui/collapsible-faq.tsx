import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "./card";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
}

function FAQItem({ question, answer, isOpen, onToggle, delay = 0 }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <motion.button
            className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#018136] focus:ring-offset-2 rounded-lg"
            onClick={onToggle}
            whileHover={{ backgroundColor: "rgba(1, 129, 54, 0.02)" }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 pr-4">{question}</h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <svg className="w-5 h-5 text-[#018136]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface CollapsibleFAQProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function CollapsibleFAQ({ faqs }: CollapsibleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}