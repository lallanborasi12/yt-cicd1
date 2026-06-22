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

export default function TermsOfService() {
  const updatedDate = "February 11, 2026";
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
            Terms of Service
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            Last updated: <span className="font-semibold">{updatedDate}</span>
          </p>
        </motion.div>

        {/* Content */}
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
                Agreement to Terms
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                These Terms of Service (“Terms”) govern your access to and use of Drinkly-AI.App’s
                app, website, and related services (collectively, the “Services”). By using the
                Services, you agree to these Terms. If you do not agree, do not use the Services.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Who We Are
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Drinkly-AI.App is a water tracking app designed to help you log hydration and build
                habits. Support inquiries can be sent to{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  {supportEmail}
                </a>
                .
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Eligibility
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                You must be at least 13 years old (or the minimum age required in your region) to use
                the Services. If you are using the Services on behalf of an organization, you represent
                that you have authority to bind that organization to these Terms.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Accounts & App Settings
              </h2>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  You are responsible for maintaining the confidentiality of your account (if any) and
                  for activity under your account.
                </li>
                <li>
                  You agree to provide accurate information and keep it updated (where applicable).
                </li>
                <li>
                  You can manage permissions (notifications, health integrations) in your device settings.
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Acceptable Use
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                You agree not to misuse the Services. For example, you will not:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>Break the law or violate others’ rights.</li>
                <li>Attempt to hack, disrupt, or reverse engineer the Services.</li>
                <li>Upload malware or use the Services to harm others.</li>
                <li>Scrape, copy, or resell the Services or content without permission.</li>
                <li>Abuse support channels or submit fraudulent reports.</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Health & Medical Disclaimer
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Drinkly-AI.App provides general wellness and hydration tracking tools and is not a medical
                device. The Services do not provide medical advice, diagnosis, or treatment. Always seek
                advice from a qualified healthcare professional for medical questions. Do not disregard
                professional advice because of information from the Services.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Optional Third-Party Integrations
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                The Services may support integrations (such as Apple Health / HealthKit, widgets, shortcuts,
                and device features). Your use of third-party services is governed by their terms and policies.
                You can enable/disable integrations in your device settings.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Subscriptions, Purchases & Payments (If Applicable)
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Some features may be offered via in-app purchases or subscriptions. Prices and billing terms
                will be shown at purchase. If you purchase through an app store, your payment, renewals,
                cancellations, and refunds are handled by that store under its policies. We do not control
                app store billing decisions.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Intellectual Property
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                The Services, including app design, logos, trademarks, and content, are owned by Drinkly-AI.App
                or its licensors and are protected by intellectual property laws. You receive a limited,
                non-exclusive, non-transferable license to use the Services for personal, non-commercial use,
                subject to these Terms.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                User Content (If You Submit Any)
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                If you submit feedback, reviews, or support messages (“User Content”), you grant us permission
                to use it to operate, improve, and support the Services. You confirm you have rights to share
                your User Content and it does not violate any law or third-party rights.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Termination
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We may suspend or terminate your access to the Services if you violate these Terms, misuse the
                Services, or if required for security or legal reasons. You may stop using the Services at any time.
                If you want account deletion (where applicable), contact support.
              </p>

              <div className="mt-5 rounded-2xl bg-white/60 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Support:{" "}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    {supportEmail}
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Disclaimers
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                The Services are provided “as is” and “as available.” To the maximum extent permitted by law,
                we disclaim all warranties, express or implied, including implied warranties of merchantability,
                fitness for a particular purpose, and non-infringement. We do not guarantee that the Services
                will be uninterrupted, error-free, or completely secure.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Limitation of Liability
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                To the maximum extent permitted by law, Drinkly-AI.App and its affiliates, officers, employees,
                agents, and partners will not be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits or data, arising out of or related to your use of
                the Services.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Changes to the Services or Terms
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                We may update the Services and these Terms from time to time. We will update the “Last updated”
                date above and may provide additional notice where required by law. Continued use of the Services
                after changes means you accept the updated Terms.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Contact
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                Questions about these Terms? Contact us at{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  {supportEmail}
                </a>
                .
              </p>

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
