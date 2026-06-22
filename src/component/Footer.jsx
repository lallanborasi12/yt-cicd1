import { NavLink } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
export default function Footer() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <footer className="bg-white dark:bg-black text-gray-700 dark:text-gray-300 transition-colors pt-6">
      <div className="max-w-[1440px] mx-auto px-4 py-12">

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "px-4 py-2 text-sm md:text-base font-semibold transition-colors",
                  "hover:text-gray-900 dark:hover:text-white",
                  isActive ? "text-sky-600 dark:text-sky-400" : "",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        {/* <div className="flex justify-center gap-5 mt-8">
          
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
            </svg>
          </a>

          
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.1 1.5A4.5 4.5 0 0016.1 3c-2.6 0-4.6 2.4-4 5a13 13 0 01-9.4-4.8s-4 7.3 5 11a13 13 0 01-7 2c9 5.2 20 0 20-11.5a4.5 4.5 0 00-.1-.8A7.7 7.7 0 0023 3z" />
            </svg>
          </a>

         
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM18 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </a>
        </div> */}

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Drinkly-AI.app. All Rights Reserved.
          </p>
        </div>
      </div>
       <ScrollToTopButton />
    </footer>
  );
}
