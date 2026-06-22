import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "James",
    role: "Fitness Enthusiast",
    message:
      "Drinkly AI completely changed my hydration habits. The reminders feel natural, not annoying, and I finally hit my daily water goals.",
    avatar: "../images/james.jpg",
  },
  {
    name: "Linda",
    role: "Working Professional",
    message:
      "I used to forget drinking water during work hours. Drinkly AI keeps me on track without interrupting my flow. Super helpful!",
    avatar: "../images/linda.jpg",
  },
  {
    name: "Jessica",
    role: "Runner",
    message:
      "The smart tracking and clean design make Drinkly AI my favorite health app. It feels premium and actually works.",
    avatar: "../images/jessica.jpg",
  },
];

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  }),
};

export default function Review() {
  const [[current, direction], setCurrent] = useState([0, 1]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + reviews.length) % reviews.length,
      newDirection,
    ]);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-sky-50 dark:bg-black transition-colors overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Loved by Drinkly AI Users
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Real stories from people staying hydrated every day
        </p>

        {/* Animated Card */}
        <div className="mt-12 relative h-[340px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl w-full absolute"
            >
              <img
                src={reviews[current].avatar}
                alt={reviews[current].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                “{reviews[current].message}”
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {reviews[current].name}
                </h4>
                <span className="text-sm text-sky-500">
                  {reviews[current].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrent([index, index > current ? 1 : -1])
              }
              className={`h-2.5 rounded-full transition-all ${
                current === index
                  ? "bg-sky-500 w-6"
                  : "bg-gray-300 dark:bg-gray-600 w-2.5"
              }`}
              aria-label="Change review"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
