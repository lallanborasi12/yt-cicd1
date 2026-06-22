import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Drinkly AI?",
    answer:
      "Drinkly AI is a smart water tracking app that helps you stay hydrated using AI-powered reminders, personalized goals, and real-time tracking based on your lifestyle.",
  },
  {
    question: "How does Drinkly AI calculate my daily water intake?",
    answer:
      "Drinkly AI uses factors like age, weight, activity level, climate, and daily habits to calculate a personalized hydration goal that adapts over time.",
  },
  {
    question: "Does Drinkly AI send reminders?",
    answer:
      "Yes! Drinkly AI sends gentle, timely reminders that fit naturally into your day—so you stay hydrated without feeling interrupted.",
  },
  {
    question: "Is Drinkly AI free to use?",
    answer:
      "Drinkly AI offers a free version with essential tracking features. Premium plans unlock advanced insights, AI personalization, and deeper health analytics.",
  },
  {
    question: "Can I use Drinkly AI during workouts?",
    answer:
      "Absolutely. Drinkly AI adjusts your hydration needs during workouts, runs, or hot weather to help you recover faster and stay energized.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Everything you need to know about Drinkly AI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="text-sky-500 text-2xl leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-6  text-gray-600 dark:text-gray-400"
                  >
                    <span className="pb-5 block">{faq.answer}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
