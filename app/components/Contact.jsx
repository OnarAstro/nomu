import { motion } from "framer-motion";

// ─── Contact ──────────────────────────────────────────────────────────────────
export default function Contact({ t }) {
  const links = [
    { name: "GitHub", link: "https://github.com/OnarAstro" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/omar-atef0" },
    { name: "Twitter", link: "https://twitter.com/nomu_dev" },
    { name: "Instagram", link: "https://www.instagram.com/astro_as3nn/" },
  ];

  return (
    <section
      id="contact"
      style={{
        background: t.bg,
        position: "relative",
        overflow: "hidden",
      }}
      className="px-6 pt-10 pb-24 md:px-12 md:pt-32 md:pb-32 lg:p-24 max-w-7xl mx-auto"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.accent2}15 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          position: "relative",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 32, height: 2, background: t.accent }} />
          <span
            style={{
              color: t.accent,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Contact
          </span>
          <div style={{ width: 32, height: 2, background: t.accent }} />
        </div>
        <h2
          style={{
            fontSize: "clamp(40px, 8vw, 88px)",
            fontWeight: 900,
            color: t.text,
            margin: "0 0 24px",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Let's build
          <br />
          something
          <br />
          <span style={{ color: t.accent }}>great.</span>
        </h2>
        <p
          style={{
            color: t.muted,
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 48,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Have a project in mind? I'm currently taking on new clients. Let's
          talk about how I can help bring your vision to life.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          <a
            href="mailto:zzeze1686@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                padding: "18px 48px",
                background: t.accent,
                color: "#fff",
                border: "none",
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: `0 0 40px ${t.shadow}`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = `0 12px 48px ${t.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "";
                e.target.style.boxShadow = `0 0 40px ${t.shadow}`;
              }}
            >
              hello@nomu.dev
            </button>
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          {links.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              style={{
                color: t.muted,
                fontSize: 13,
                textDecoration: "none",
                letterSpacing: "0.05em",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = t.accent)}
              onMouseLeave={(e) => (e.target.style.color = t.muted)}
            >
              {s.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
