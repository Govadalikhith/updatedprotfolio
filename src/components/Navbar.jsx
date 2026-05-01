import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, personalInfo } from "../data/data";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinkClasses = (id) =>
    `text-sm font-medium transition ${
      activeSection === id
        ? "text-indigo-600 dark:text-indigo-300"
        : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition ${
        isScrolled
          ? "border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          {personalInfo.name}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={navLinkClasses(item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200/60 bg-white/95 px-6 py-4 shadow-soft backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/95 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={navLinkClasses(item.id)}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
