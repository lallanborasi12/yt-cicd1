import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
const [open, setOpen] = useState(true);
const supportEmail = "support@drinkly-ai.app";
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const phoneRegex = useMemo(() => /^[0-9+\-\s()]{7,20}$/, []);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!emailRegex.test(form.email.trim())) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };



  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    
    const subject = `Drinkly AI Support Request - ${form.name.trim()}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

  // optional: close + reset
    setOpen(false);
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

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
            Contact
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            Need help with hydration reminders, subscriptions, or bugs? We’re here.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid m-auto max-w-xl w-full">
         

        {/* Modal Form */}
        <AnimatePresence>
          {open && (
            <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-slate-50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm p-6"
          >
                <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                        Contact Support
                      </h2>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        Fill the form and we’ll prepare an email to{" "}
                        <span className="font-semibold">{supportEmail}</span>.
                      </p>
                    </div>

                    
                  </div>

                  

                  {/* Form */}
                  <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field
                        label="Name"
                        value={form.name}
                        onChange={onChange("name")}
                        error={errors.name}
                        placeholder="Your full name"
                      />
                      <Field
                        label="Email"
                        value={form.email}
                        onChange={onChange("email")}
                        error={errors.email}
                        placeholder="your@email.com"
                        type="email"
                      />
                    </div>

                   

                    <Field
                      label="Message"
                      value={form.message}
                      onChange={onChange("message")}
                      error={errors.message}
                      placeholder="Tell us what’s happening (steps to reproduce, screenshots, etc.)"
                      textarea
                    />

                    <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-64 w-full m-auto">
                      <button
                        type="submit"
                        className="sm:flex-1 inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600 transition"
                      >
                        Send to Support
                      </button>
                     
                    </div>

                    
                  </form>
                
              </motion.div>
          )}
        </AnimatePresence>
          

         
          
        </div>

       
      </div>
    </section>
  );
}

function Field({ label, value, onChange, error, placeholder, type = "text", textarea }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 dark:text-white">
        {label}
      </label>

      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className={[
            "mt-2 w-full rounded-2xl px-4 py-3 text-sm outline-none transition",
            "bg-white dark:bg-white/5 ring-1",
            error
              ? "ring-rose-500 focus:ring-rose-500"
              : "ring-black/10 dark:ring-white/10 focus:ring-sky-500",
            "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
          ].join(" ")}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={[
            "mt-2 w-full rounded-2xl px-4 py-3 text-sm outline-none transition",
            "bg-white dark:bg-white/5 ring-1",
            error
              ? "ring-rose-500 focus:ring-rose-500"
              : "ring-black/10 dark:ring-white/10 focus:ring-sky-500",
            "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
          ].join(" ")}
        />
      )}

      {error ? (
        <p className="mt-2 text-xs font-semibold text-rose-500">{error}</p>
      ) : null}
    </div>
  );
}
