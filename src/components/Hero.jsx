import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 font-mono text-sm">01 / Home</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2" style={{ color: "var(--text)" }}>
          Hi, I'm Aashlesha.
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8" style={{ color: "var(--text-dim)" }}>
          <TypeAnimation
            sequence={[
              "Full Stack Developer.",
              2000,
              "AI/ML Enthusiast.",
              2000,
              "Problem Solver.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Results-driven developer with experience in the MERN stack, building
          scalable applications, REST APIs, and real-time systems. Proficient in
          Java, Python, and JavaScript.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleScroll("#projects")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="font-medium px-6 py-3 rounded-lg transition-colors border"
            style={{
              borderColor: "var(--border-hover)",
              color: "var(--text)",
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Stats row removed */}
      </motion.div>
    </section>
  );
}
