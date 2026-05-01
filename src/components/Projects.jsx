import { motion } from "framer-motion";
import { projects } from "../data";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <SectionLabel num="04" label="Projects" />
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "var(--text)" }}>
            Things I've
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "var(--text-dim)" }}>
            shipped.
          </h2>
        </div>
        <a
          href="https://github.com/aashleshap25-spec"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-1 text-sm transition-colors hover:text-blue-400"
          style={{ color: "var(--text-muted)" }}
        >
          View all on GitHub <span className="text-base">↗</span>
        </a>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden border transition-colors"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            {/* Project image */}
            <div className="relative h-52 md:h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-75 transition-transform duration-500 hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-5 flex gap-2">
                <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                  {project.year}
                </span>
                {project.featured && (
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded border"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Project content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-400 font-mono text-sm">{project.category}</span>
                <span className="font-mono text-sm" style={{ color: "var(--text-dim)" }}>
                  {project.num}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "var(--text)" }}>
                {project.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>
                {project.subtitle}
              </p>

              <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>
                {project.detail}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded border"
                    style={{
                      backgroundColor: "var(--bg-input)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-blue-400"
                  style={{ color: "var(--text-muted)" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Source
                </a>
                <span style={{ color: "var(--text-faint)" }}>/</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm transition-colors hover:text-blue-400"
                  style={{ color: "var(--text-muted)" }}
                >
                  Learn more <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 md:hidden text-center">
        <a
          href="https://github.com/aashleshap25-spec"
          target="_blank"
          rel="noreferrer"
          className="text-sm transition-colors hover:text-blue-400"
          style={{ color: "var(--text-muted)" }}
        >
          View all on GitHub ↗
        </a>
      </div>
    </section>
  );
}
