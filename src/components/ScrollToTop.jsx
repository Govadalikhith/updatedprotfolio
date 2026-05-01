import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-slate-200/50 bg-white/80 p-3 text-slate-900 shadow-soft transition hover:-translate-y-1 hover:border-indigo-200 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollToTop;
