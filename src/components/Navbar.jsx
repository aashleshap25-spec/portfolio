import { useState, useEffect } from "react";
import { navLinks } from "../data";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? dark
            ? "rgba(10,10,10,0.92)"
            : "rgba(255,255,255,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm select-none">
            &gt;_
          </div>
          <div className="leading-tight">
            <div className="text-theme font-bold text-sm">Aashlesha.dev</div>
            <div className="text-dim text-xs" style={{ color: "var(--text-dim)" }}>
              tech-enthusiast
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ num, label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm transition-colors hover:text-blue-400"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="text-blue-400 font-mono">{num}.</span>{" "}
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* Right side: toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map(({ num, label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm transition-colors hover:text-blue-400"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="text-blue-400 font-mono">{num}.</span> {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
