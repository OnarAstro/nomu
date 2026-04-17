// ─── Hero ─────────────────────────────────────────────────────────────────────
import { motion } from "framer-motion";

export default function Hero({ t }) {
  return (
    <section
      id="hero"
      // style={{
      //   minHeight: "100vh",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   padding: "120px 60px 80px",
      //   position: "relative",
      //   overflow: "hidden",
      // }}

      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `linear-gradient(${t.text} 1px, transparent 1px), linear-gradient(90deg, ${t.text} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Accent blob */}
      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.accent}22 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 900 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 48, height: 2, background: t.accent }} />
          <span
            style={{
              color: t.accent,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            // fontSize: "clamp(56px, 10vw, 128px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: t.text,
            margin: 0,
            fontFamily: "'Syne', sans-serif",
          }}
          className=" text-6xl md:text-7xl lg:text-[10vw]"
        >
          I build
          <br />
          <span style={{ color: t.accent }} >digital</span>
          <br />
          <span className=" text-3xl md:text-7xl lg:text-[8vw]">
            
            experiences.
            </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{
            color: t.muted,
            fontSize: 18,
            maxWidth: 480,
            marginTop: 32,
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Hi, I'm <strong style={{ color: t.text }}>nomu</strong> — I craft
          performant, elegant full-stack applications that turn complex problems
          into seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}
        >
          <a href="#contact">
            <button
              style={{
                padding: "16px 40px",
                background: t.accent,
                color: "#fff",
                border: "none",
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: `0 0 30px ${t.shadow}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 8px 40px ${t.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "";
                e.target.style.boxShadow = `0 0 30px ${t.shadow}`;
              }}
            >
              Hire Me
            </button>
          </a>
          <a href="#work">
            <button
              style={{
                padding: "16px 40px",
                background: "transparent",
                color: t.text,
                border: `1px solid ${t.border}`,
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = t.accent;
                e.target.style.color = t.accent;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = t.border;
                e.target.style.color = t.text;
              }}
            >
              View My Work
            </button>
          </a>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: 1, height: 40, background: t.accent }}
        />
        <span
          style={{
            color: t.muted,
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}