// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer({ t, Logo }) {
  return (
    <footer style={{
       borderTop: `1px solid ${t.border}`,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: t.bg,
    }}
     className="px-6 py-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Logo color={t.accent} />
        <span style={{ color: t.muted, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>nomu</span>
      </div>
      <span style={{ color: t.muted, fontSize: 12, letterSpacing: "0.05em" }}>
        © {new Date().getFullYear()} nomu. Built with precision.
      </span>
    </footer>
  );
}