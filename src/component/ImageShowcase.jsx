import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageShowcase({
  title,
  description,
  image,
  reverse = false,
}) {
  const ref = useRef(null);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref}>
      <div
        className={`max-w-7xl mx-auto px-6 grid gap-16 items-center 
        ${reverse ? "md:grid-cols-[1fr_1.2fr] py-0" : "md:grid-cols-[1.2fr_1fr] py-16"}
        `}
      >
        {/* Text */}
        <motion.div className={`${reverse ? "order-1 md:order-2" : "order-2 md:order-1"}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div className={`relative ${reverse ? "order-2 md:order-1" : "order-1 md:order-2"}`}
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
         
        >
          <div className="absolute inset-0 bg-sky-400/20 blur-3xl rounded-full" />
          <img
            src={image}
            alt={title}
            className="relative mx-auto rounded-3xl shadow-2xl max-w-xs"
          />
        </motion.div>
      </div>
    </section>
  );
}
