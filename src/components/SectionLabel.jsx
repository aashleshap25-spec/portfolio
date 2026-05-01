export default function SectionLabel({ num, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-px bg-blue-400" />
      <span className="text-blue-400 font-mono text-sm">{num}</span>
      <span className="text-sm" style={{ color: "var(--text-dim)" }}>/ {label}</span>
    </div>
  );
}
