import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function DrinklyLanding() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white text-gray-900 dark:from-black dark:to-black">
      
   {/* FOOTER CTA */}
      <section className="py-20 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Drink Smarter. Stay Healthier.
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Drinkly AI turns hydration into a habit you’ll actually keep.
        </p>

        <div className="mt-8">
           <div className="mt-8 flex justify-center gap-4">
          <motion.a
            href="/"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img
              src="../images/ios.svg"
              alt="Apple CTA"
              className="w-40 hover:shadow-xl transition-shadow"
            />
          </motion.a>

          <motion.a
            href="/"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img
              src="../images/android.svg"
              alt="Android CTA"
              className="w-40 hover:shadow-xl transition-shadow"
            />
          </motion.a>
        </div>
        </div>
      </section>
    </div>
  );
}


