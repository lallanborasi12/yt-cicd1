import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -18 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRightStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const tile = {
  hidden: { opacity: 0, x: 18, y: 10, scale: 0.985 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ImageTile({ src, label }) {
  return (
    <motion.div
      variants={tile}
      whileHover={{ y: -6, scale: 1.01 }}
      className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-black/5"
    >
      <img src={src} alt={label || "Hydration"} className="h-full w-full object-cover" loading="lazy" />
      {label ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
      ) : null}
      {label ? (
        <p className="absolute bottom-4 left-4 text-sm font-semibold text-white drop-shadow">
          {label}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function HydrationGuide() {
  return (
    <section className="bg-white dark:bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase">
              Ultimate Guide
            </p>

            <h3 className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Hydration Guide
            </h3>

            <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              Ultimate Guide to Restore, Rejuvenate and Refine Your Body
            </p>

            <p className="mt-6 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              We help people stay hydrated with the Drinkly AI App. Now you can learn
              everything you need to know about water and your health, how to stay hydrated,
              and much more with our new hydration book!
            </p>

            

           
          </motion.div>

          {/* Right collage */}
          <motion.div
            variants={fadeRightStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Left column (2 stacked) */}
            <div className="flex flex-col gap-6">
              <ImageTile src="../images/hydration.webp" label="HYDRATION GUIDE" />
              <ImageTile src="../images/inspiring.webp" label="INSPIRING HYDRATION DRINKS" />
            </div>

            {/* Right column (2 stacked) */}
            <div className="flex flex-col gap-6">
              <ImageTile src="../images/water.webp" label="WATER & HEALTH" />
              <ImageTile src="../images/tip.webp" label="TIPS FOR STAYING HYDRATED" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
