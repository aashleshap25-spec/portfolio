import { motion } from "framer-motion";
import { education } from "../data";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel num="05" label="Education" />

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-1" style={{ color: "var(--text)" }}>
        Learning, always
      </h2>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12" style={{ color: "var(--text-dim)" }}>
        on repeat.
      </h2>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl p-6 md:p-8 border transition-colors"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center text-2xl shrink-0">
                {edu.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm" style={{ color: "var(--text-dim)" }}>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {edu.type}
                  </span>
                </div>

                <h3 className="font-bold text-lg md:text-xl mb-1" style={{ color: "var(--text)" }}>
                  {edu.degree}
                </h3>
                <p className="text-blue-400 text-sm mb-3">{edu.institution}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {edu.description}
                </p>

                {edu.areas.length > 0 && (
                  <div
                    className="mt-6 rounded-xl p-5 border"
                    style={{
                      backgroundColor: "var(--bg-input)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="text-blue-400 font-mono text-xs mb-3">// Focus</div>
                    <div className="font-semibold mb-4" style={{ color: "var(--text)" }}>
                      Areas of Study
                    </div>
                    <ul className="space-y-2">
                      {edu.areas.map((area) => (
                        <li key={area} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                          <span className="text-blue-400 font-mono text-xs">&gt;</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs mt-6 font-mono" style={{ color: "var(--text-faint)" }}>
                      {edu.status}
                    </p>
                  </div>
                )}

                {edu.areas.length === 0 && (
                  <p className="text-xs mt-4 font-mono" style={{ color: "var(--text-faint)" }}>
                    {edu.status}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
