import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const supportEmail = "support@drinkly-ai.app";

  return (
    <section className="bg-white dark:bg-black pt-28 pb-16">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase">
            Drinkly-AI.App
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            About Drinkly-AI.App
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            A smart water tracking app to help you build hydration habits—simple, consistent, and effective.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 rounded-3xl bg-slate-50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm overflow-hidden"
        >
          <div className="p-6 md:p-10 space-y-10">
            {/* Mission */}
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Drinkly-AI.App is built to make hydration easier. Whether you’re busy at work, training, traveling,
                or just trying to feel better day-to-day, we help you track water intake, stay consistent, and
                build long-term habits through reminders, goals, and simple insights.
              </p>
            </motion.div>

            {/* What it does */}
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                What Drinkly-AI.App Does
              </h2>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <FeatureBox title="Track Intake Fast" icon="💧">
                  Log water in seconds with quick add actions and smart presets.
                </FeatureBox>

                <FeatureBox title="Personal Goals" icon="🎯">
                  Set daily hydration targets based on your routine and preferences.
                </FeatureBox>

                <FeatureBox title="Reminders That Work" icon="⏰">
                  Gentle nudges to help you drink consistently throughout the day.
                </FeatureBox>

                <FeatureBox title="Progress & Streaks" icon="📈">
                  See trends, streaks, and your consistency over time.
                </FeatureBox>
              </div>
            </motion.div>

            {/* Why it matters */}
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Why Hydration Matters
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Hydration supports energy, focus, recovery, and overall wellness. Drinkly-AI.App is designed to
                keep the process simple—so you can focus on your day while the app supports your habit.
              </p>

              <div className="mt-5 rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Note:</span>{" "}
                  Drinkly-AI.App is a wellness tracking tool and is not a medical device. If you have medical
                  concerns, consult a healthcare professional.
                </p>
              </div>
            </motion.div>

            {/* Privacy */}
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Privacy First
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We aim to collect only what’s necessary to run and improve the app. You stay in control of
                your settings, permissions, and optional integrations.
              </p>
            </motion.div>

            {/* Support */}
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Need Help?
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                If you have questions, feedback, or issues, contact us at:
              </p>

              <div className="mt-4 rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Drinkly-AI.App Support</p>
                  <a
                    href={`mailto:${supportEmail}`}
                    className="text-sky-600 dark:text-sky-400 hover:underline font-semibold"
                  >
                    {supportEmail}
                  </a>
                </div>

                <a
                  href={`mailto:${supportEmail}?subject=${encodeURIComponent("Drinkly-AI.App Support")}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600 transition"
                >
                  Email Support
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureBox({ title, icon, children }) {
  return (
    <div className="rounded-3xl bg-white/70 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 grid place-items-center">
          <span className="text-lg">{icon}</span>
        </div>
        <p className="font-bold text-slate-900 dark:text-white">{title}</p>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
