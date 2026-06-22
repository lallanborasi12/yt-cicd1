import { motion } from "framer-motion";
// import {
//   CloudSun,
//   LayoutGrid,
//   HeartPulse,
//   Palette,
//   Users,
//   PawPrint,
//   History,
//   Watch,
//   SlidersHorizontal,
//   CircleDashed,
//   CupSoda,
//   BellRing,
//   Zap,
//   Sparkles,
// } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// function FeatureCard({ title, Icon, iconClass, images = [], variant = "phone" }) {
function FeatureCard({ title, iconClass, images = [], variant = "phone" }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="
        rounded-[28px] bg-white/20 backdrop-blur-md
        ring-1 ring-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        overflow-hidden
      "
    >
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-xl grid place-items-center ${iconClass}`}>
            {/* <Icon className="h-5 w-5" /> */}
          </div>
          <p className="text-sm font-semibold text-white/90">{title}</p>
        </div>

        <div className="mt-4">
          {variant === "double" ? (
            <div className="grid grid-cols-2 gap-3">
              {images.slice(0, 2).map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-black/20 ring-1 ring-white/15 overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`${title} ${idx + 1}`}
                    className="h-36 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 overflow-hidden">
              <img
                src={images?.[0]}
                alt={title}
                className={[
                  "w-full object-cover",
                  variant === "wide" ? "h-40 md:h-44" : "h-64 md:h-72",
                ].join(" ")}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PackedFeatures() {
  // 3-column “masonry-ish” layout on lg+, grid on small screens
  const columns = [
    [
      {
        title: "Adjust Water Goal to Weather",
        // Icon: CloudSun,
        iconClass: "bg-amber-400 text-white",
        images: ["/images/features/weather.webp"],
        variant: "phone",
      },
      {
        title: "Blue theme",
        // Icon: Palette,
        iconClass: "bg-sky-300 text-slate-900",
        images: ["/images/features/blue-theme.webp"],
        variant: "phone",
      },
      {
        title: "History Log",
        // Icon: History,
        iconClass: "bg-rose-400 text-white",
        images: ["/images/features/history.webp"],
        variant: "phone",
      },
      {
        title: "Progress Ring Layout",
        // Icon: CircleDashed,
        iconClass: "bg-indigo-300 text-slate-900",
        images: ["/images/features/progress-ring.webp"],
        variant: "phone",
      },
    ],
    [
      {
        title: "Hydration Widgets",
        // Icon: LayoutGrid,
        iconClass: "bg-orange-500 text-white",
        images: ["/images/features/widgets.webp"],
        variant: "wide",
      },
      {
        title: "Siri Shortcuts",
        // Icon: Sparkles,
        iconClass: "bg-fuchsia-500 text-white",
        images: ["/images/features/siri.webp"],
        variant: "wide",
      },
      {
        title: "Colorful characters",
        // Icon: Users,
        iconClass: "bg-rose-300 text-slate-900",
        images: ["/images/features/colorful-characters.webp"],
        variant: "phone",
      },
      {
        title: "Water Complications",
        // Icon: Watch,
        iconClass: "bg-cyan-300 text-slate-900",
        images: ["/images/features/complications.webp"],
        variant: "wide",
      },
      {
        title: "Hydration Streaks",
        // Icon: Sparkles,
        iconClass: "bg-amber-300 text-slate-900",
        images: ["/images/features/streaks.webp"],
        variant: "wide",
      },
      {
        title: "Custom Other Drink Types",
        // Icon: CupSoda,
        iconClass: "bg-lime-400 text-slate-900",
        images: ["/images/features/other-drinks.webp"],
        variant: "phone",
      },
    ],
    [
      {
        title: "HealthKit Integration",
        // Icon: HeartPulse,
        iconClass: "bg-rose-500 text-white",
        images: ["/images/features/healthkit.webp"],
        variant: "phone",
      },
      {
        title: "Animal characters",
        // Icon: PawPrint,
        iconClass: "bg-violet-500 text-white",
        images: ["/images/features/animal-characters.webp"],
        variant: "phone",
      },
      {
        title: "Full Personalization",
        // Icon: SlidersHorizontal,
        iconClass: "bg-purple-500 text-white",
        images: ["/images/features/personalization.webp"],
        variant: "phone",
      },
      {
        title: "Custom Sounds",
        // Icon: BellRing,
        iconClass: "bg-pink-500 text-white",
        images: ["/images/features/sounds.webp"],
        variant: "wide",
      },
      {
        title: "Quick App Actions",
        // Icon: Zap,
        iconClass: "bg-orange-400 text-white",
        images: ["/images/features/quick-actions-1.webp", "/images/features/quick-actions-2.webp"],
        variant: "double",
      },
    ],
  ];

  // Flatten for small-screen grid
  const allFeatures = columns.flat();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-600 via-sky-500 to-sky-400 py-20">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-20 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            App is Packed With Features
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/80">
            other great features that will help you meet your daily hydration goal.
          </p>
          <p className="text-sm md:text-base text-white/80">The best water tracker app!</p>
        </motion.div>

        {/* Small screens: grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden"
        >
          {allFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </motion.div>

        {/* Large screens: 3 columns */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 hidden lg:flex gap-6"
        >
          {columns.map((col, idx) => (
            <div key={idx} className="flex-1 flex flex-col gap-6">
              {col.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
