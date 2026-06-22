import { motion } from "framer-motion";
import ImageShowcase from "./ImageShowcase";
import Review from './Review'
import FAQ from './FAQ'
const features = [
  {
    icon: "💧",
    title: "Smart Hydration Goals",
    description:
      "AI-powered recommendations adapt your daily water goals based on activity, weather, and habits.",
  },
  {
    icon: "📊",
    title: "Progress & Insights",
    description:
      "Visual charts and stats help you understand your hydration patterns and stay consistent.",
  },
  {
    icon: "🏆",
    title: "Achievements & Motivation",
    description:
      "Unlock achievements and streaks that keep you motivated to drink more water every day.",
  },
];
export default function HomeComponent() {
  return (
    <div className="pt-24 bg-gradient-to-b from-sky-50 to-white dark:from-black dark:to-black">
      
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Smarter Hydration with{" "}
            <span className="text-sky-500">Drinkly-AI.App </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
           Drinkly-AI.App combines intelligent water tracking, personalized goals, and gentle reminders to help you stay consistently hydrated-without overthinking it. Build a daily routine that feels easy, natural, and sustainable.
          </p>

          <div className="mt-10 flex gap-4">
            <a href="/" className="flex items-center">
              <img src="../images/ios.svg" alt="Drinkly-AI Logo" className="w-40" />
              
            </a>
            <a href="/" className="flex items-center">
              <img src="../images/android.svg" alt="Drinkly-AI Logo" className="w-40" />
              
            </a>
          </div>
        </motion.div>

        {/* Floating Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src="/images/hero.png"
            alt="Drinkly AI App"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="max-w-xs rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

 {/* FEATURES */}
      <section className="bg-gradient-to-b from-white to-white dark:from-black dark:to-black py-20 ">
        <div className="max-w-7xl mx-auto px-6 mb-5">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          >
            Build Better Hydration Habits
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition bg-sky-50"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-3">
            <motion.img className="max-w-[270px] mx-auto w-full"
            src="/images/hydrate.webp"   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }} />

          <motion.img className="max-w-[270px] mx-auto w-full"
            src="/images/activity.webp"   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }} />
          <motion.img className="max-w-[270px] mx-auto w-full"
            src="/images/moscot.webp"   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }} />
          </div>
        </div>
      </section>

      {/* WATCH SECTION */}
      <section className="bg-sky-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold leading-snug">
              Hydrate the Moment You Wake Up
            </h2>
            <p className="mt-4 text-sky-100">
              Start your day right - log your first glass, see your goal, and get a gentle reminder on your phone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-3xl bg-white/20 flex items-center justify-center">
            <img className="max-w-48 w-full" src="../images/apple.png" />
            </div>
          </motion.div>
        </div>
      </section>





      {/* IMAGE SECTIONS */}
      <ImageShowcase
        title="Let’s Start With the Basics"
        description="Choosing a gender helps Drinkly-AI.App estimate a daily hydration goal that better matches your body’s typical needs. This information supports more accurate reminders and progress insights. You can change it anytime in Settings, and you can also choose “Prefer not to say” if you’d rather skip."
        image="/images/feature1.webp"
      />

      <ImageShowcase
        reverse
        title="Log a Drink"
        description="Logging a drink takes just a tap. Choose the amount, select water or another beverage, and Drinkly-AI.App instantly updates your daily progress. The more consistently you log, the smarter your insights become-helping you spot patterns, stay on track, and hit your hydration goal without extra effort."
        image="/images/feature2.webp"
      />

      <ImageShowcase
        title="Your Plan is Ready"
        description="Your hydration plan is ready! Drinkly-AI.App has created a personalized daily water goal based on your details and routine. You’ll get smart reminders at the right times, plus simple progress insights to keep you consistent. You can adjust your goal, schedule, and drink sizes anytime in Settings."
        image="/images/feature3.webp"
      />

      <ImageShowcase
      reverse
        title="Intake According to Weather & Current Streak"
        description="Your Current Streak shows how many days in a row you’ve met your hydration goal. It’s the easiest way to stay motivated and consistent. Each logged drink keeps the streak alive, and reminders help you avoid missed days. Build momentum, beat your best streak, and keep improving.Weather can affect how much water your body needs. Drinkly-AI.App adapts your daily hydration target based on local conditions like heat and humidity, helping you stay balanced on warmer days.View History gives you a clear timeline of everything you’ve logged-amounts, times, and drink types."
        image="/images/feature4.webp"
      />

      <ImageShowcase
        title="Weekly Insights and Intake History"
        description="Stay on top of your hydration with Weekly Insights and Intake History. See how much you drank each day, spot patterns, and track streaks over time. Drinkly-AI.App highlights your best days, missed goals, and average intake so you can make small adjustments that improve consistency."
        image="/images/feature5.webp"
      />

      <ImageShowcase
      reverse
        title="Today’s Log"
        description="Today’s Log keeps your hydration day organized in one place. View every drink you’ve added, including time and amount, and see your progress update instantly. Make quick edits, add a drink in seconds, and stay on track with smart reminders that match your schedule."
        image="/images/feature6.webp"
      />
    <HydrationGuide />
      {/* CTA */}
      <section className="pt-4 pb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Hydration, Powered by AI
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Drink smarter. Feel better. Every day.
        </p>

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

      </section>
      {/* <PackedFeatures /> */}
       {/* <HydrationGuide /> */}
       <Review />
       <FAQ />
      <DrinklyLanding />

    </div>
  );
}
