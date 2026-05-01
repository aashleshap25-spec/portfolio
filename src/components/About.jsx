import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const skills = [
  "Java", "Python", "JavaScript",
  "HTML", "CSS", "React",
  "Node.js", "Express.js",
  "MongoDB", "REST APIs", "JWT", "Socket.io", "ML", "Git",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel num="02" label="About" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-1" style={{ color: "var(--text)" }}>
            Building things
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8" style={{ color: "var(--text-dim)" }}>
            that matter.
          </h2>

          <p className="leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            I'm Aashlesha Rani — a Full Stack Developer and first-year B.Tech
            CSE (AI/ML) student at Polaris School of Technology. I love turning
            ideas into real, working products.
          </p>
          <p className="leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            My experience spans the MERN stack, REST APIs, real-time systems
            with Socket.io, and ML-integrated applications. I care deeply about
            clean code, performance, and intuitive user experiences.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
            When I'm not coding, I'm exploring new algorithms, contributing to
            open-source, or thinking about scalable system design.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[
              { icon: "✉", label: "aashlesharani@gmail.com", href: "mailto:aashlesharani@gmail.com" },
              { icon: "⌥", label: "github.com/aashleshap25-spec", href: "https://github.com/aashleshap25-spec" },
              { icon: "in", label: "linkedin.com/in/aashlesha-rani", href: "https://linkedin.com/in/aashlesha-rani-4a5b91375" },
              { icon: "☎", label: "+91 8709773309", href: "tel:+918709773309" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-blue-400"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="text-blue-400 w-4 text-center">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="rounded-2xl p-8 border"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <div className="text-blue-400 font-mono text-sm mb-4">// Technical Skills</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{
                    backgroundColor: "var(--bg-input)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {[
                { label: "Languages", val: "Java, Python, JavaScript" },
                { label: "Frontend", val: "HTML, CSS, React" },
                { label: "Backend", val: "Node.js, Express.js" },
                { label: "Database", val: "MongoDB" },
                { label: "Tools", val: "REST APIs, JWT, Socket.io, ML, Git" },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <span className="w-24 shrink-0" style={{ color: "var(--text-dim)" }}>{label}</span>
                  <span style={{ color: "var(--text-muted)" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
