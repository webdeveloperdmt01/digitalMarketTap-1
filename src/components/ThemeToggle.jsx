import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // ✅ Add this line

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setShowPopup(true);
    const timeout = setTimeout(() => setShowPopup(false), 2000);
    return () => clearTimeout(timeout);
  }, [isDark]);

  return (
    <div className="px-5 md:px-10 lg:px-30 py-3 relative flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Theme</span>

      <button
        onClick={() => setIsDark((prev) => !prev)}
        aria-label="Toggle Theme"
        className={`w-14 h-8 rounded-full flex items-center p-1 transition-colors duration-300
          ${isDark ? "bg-gray-700" : "bg-gray-300"} hover:ring-2 hover:ring-offset-1 hover:ring-indigo-400`}
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center
            ${isDark ? "translate-x-6 bg-yellow-400" : "translate-x-0 bg-white"}`}
        >
          {isDark ? <Moon className="w-4 h-4 text-gray-800" /> : <Sun className="w-4 h-4 text-yellow-500" />}
        </div>
      </button>

      {showPopup && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg
          animate-fade-slide z-50 flex items-center gap-2">
          {isDark ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-yellow-400" />}
          {isDark ? "Dark Mode On" : "Light Mode On"}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
