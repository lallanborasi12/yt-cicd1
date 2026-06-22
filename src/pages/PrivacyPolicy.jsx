import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PrivacyPolicy() {
  const updatedDate = "February 11, 2026";

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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            Last updated: <span className="font-semibold">{updatedDate}</span>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 rounded-3xl bg-slate-50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm overflow-hidden"
        >
          <div className="p-6 md:p-10 space-y-10">
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Overview
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Drinkly-AI.App (“Drinkly-AI.App”, “we”, “us”, “our”) is a water tracking app designed to help
                you monitor hydration habits and build consistent routines. This Privacy Policy explains
                what information we collect, how we use it, how we share it, and the choices you have.
                By using the app, website, and related services (collectively, the “Services”), you agree
                to this Privacy Policy.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Information We Collect
              </h2>
              <div className="mt-4 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    1) Information you provide
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-2">
                    <li>
                      Account details (such as email address) if you create an account or contact us.
                    </li>
                    <li>
                      Support messages and attachments you send to our support team.
                    </li>
                    <li>
                      Optional profile settings (like reminders, units, preferences).
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    2) Hydration & usage data
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-2">
                    <li>
                      Water intake logs, streaks, goals, reminders you set, and interaction patterns
                      inside the app (e.g., which features you use).
                    </li>
                    <li>
                      Device/app diagnostics (crash logs, performance data) to keep the app stable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    3) Device information
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-2">
                    <li>
                      Device type, operating system version, language, and app version.
                    </li>
                    <li>
                      Approximate region (derived from IP address) for security and fraud prevention.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                How We Use Information
              </h2>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>Provide core hydration tracking features (logging, goals, reminders, insights).</li>
                <li>Personalize your experience (units, schedules, preferences, optional widgets).</li>
                <li>Improve the app (debug issues, analyze performance, develop new features).</li>
                <li>Communicate with you (support responses, important updates, policy changes).</li>
                <li>Protect safety and integrity (prevent abuse, fraud, and unauthorized access).</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Sharing & Disclosure
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We do not sell your personal information. We may share limited information only in the
                following cases:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Service providers:</span>{" "}
                  trusted vendors who help operate the Services (e.g., hosting, analytics, crash reporting,
                  customer support tools) under confidentiality obligations.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Legal & safety:</span>{" "}
                  if required by law, or to protect rights, safety, and prevent fraud or abuse.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Business changes:</span>{" "}
                  in a merger, acquisition, or asset sale, information may be transferred, subject to this
                  policy (and you will be notified where required).
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Health Integrations (Optional)
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                If you choose to connect platform health services (such as Apple Health / HealthKit),
                Drinkly-AI.App will read and/or write hydration-related data only as authorized by you in
                your device settings. You can revoke access at any time in your system permissions.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Data Retention
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We keep your information only as long as needed to provide the Services and for legitimate
                business purposes (like compliance, security, and dispute resolution). You can request deletion
                where applicable (see “Your Choices”).
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Your Choices & Rights
              </h2>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Access & update:</span>{" "}
                  you can update certain settings in the app.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Permissions:</span>{" "}
                  you can manage notifications and health integrations in device settings.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Deletion requests:</span>{" "}
                  you can request deletion of your account/data by contacting support.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Opt-out:</span>{" "}
                  if we send non-essential emails, you can opt out using the unsubscribe option (where available).
                </li>
              </ul>

              <div className="mt-5 rounded-2xl bg-white/60 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  To request access, correction, or deletion, email us at{" "}
                  <a
                    href="mailto:support@drinkly-ai.app"
                    className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    support@drinkly-ai.app
                  </a>
                  .
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Security
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We use reasonable administrative, technical, and physical safeguards designed to protect
                information. However, no method of transmission or storage is 100% secure, so we cannot
                guarantee absolute security.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Children’s Privacy
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Drinkly-AI.App is not intended for children under 13 (or the minimum age required in your region).
                We do not knowingly collect personal information from children. If you believe a child has
                provided personal information, contact us and we’ll take appropriate steps.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                International Users
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                If you use the Services from outside the country where our servers or service providers are
                located, your information may be processed across borders. We take steps designed to ensure
                appropriate protections are in place when transferring data internationally.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Changes to This Policy
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will update the “Last updated” date
                above and may provide additional notice if required by law.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Contact Us
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                If you have questions about this Privacy Policy or your information, contact our support team:
              </p>
              <div className="mt-4 rounded-2xl bg-white/60 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-5">
                <p className="text-slate-900 dark:text-white font-semibold">Drinkly-AI.App Support</p>
                <a
                  href="mailto:support@drinkly-ai.app"
                  className="text-sky-600 dark:text-sky-400 hover:underline font-semibold"
                >
                  support@drinkly-ai.app
                </a>
              </div>

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
