import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full border border-theme transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      style={{
        backgroundColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        borderColor: "var(--border)",
      }}
    >
      {/* Track icons */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        {/* Sun */}
        <svg
          className="w-3.5 h-3.5 text-yellow-400 transition-opacity duration-300"
          style={{ opacity: dark ? 0.3 : 1 }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm8-8a1 1 0 110 2h-1a1 1 0 110-2h1zM4 12a1 1 0 110 2H3a1 1 0 110-2h1zm13.657-5.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.05 16.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.636 6.343a1 1 0 011.414 0l.707.707A1 1 0 016.343 8.464l-.707-.707a1 1 0 010-1.414zM12 7a5 5 0 110 10A5 5 0 0112 7z" />
        </svg>
        {/* Moon */}
        <svg
          className="w-3.5 h-3.5 text-blue-300 transition-opacity duration-300"
          style={{ opacity: dark ? 1 : 0.3 }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      </span>

      {/* Thumb */}
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300"
        style={{
          left: dark ? "calc(100% - 1.625rem)" : "0.125rem",
          backgroundColor: dark ? "#3b82f6" : "#f59e0b",
        }}
      />
    </button>
  );
}
