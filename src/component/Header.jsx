import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed w-full z-40 shadow-sm">
      <nav className="bg-white dark:bg-black transition-colors">
        <div className="max-w-[1440px] mx-auto py-5 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <img
                src="../images/logo.webp"
                alt="Drinkly-AI Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="ml-1 text-xl md:text-2xl font-bold text-[#38bdf8] dark:text-white">
                Drinkly-AI
              </span>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden text-2xl text-gray-800 dark:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* Menu */}
            <ul
              className={`
                md:flex md:items-center md:space-x-6
                absolute md:static left-0 w-full md:w-auto
                bg-white dark:bg-black md:bg-transparent
                transition-all duration-300
                ${menuOpen ? "top-20 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
              `}
            >
              {navItems.map((item) => (
                <li key={item.to} className="p-4 md:p-0">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "transition font-medium",
                        "text-gray-700 dark:text-gray-200 hover:text-sky-500",
                        isActive
                          ? "text-sky-600 dark:text-sky-400"
                          : "",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              {/* Theme Toggle */}
              <li className="p-4 md:p-0">
                <button
                  onClick={() => setDarkMode((v) => !v)}
                  className="text-xl text-sky-500"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
