"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

// ─── About ────────────────────────────────────────────────────────────────────
export default function About({ t }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Redis",
    "Prisma",
  ];

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="about"
      ref={ref}

      className="flex flex-col md:flex-row items-center gap-24 md:gap-24 px-6 py-24 md:px-12 md:py-32 lg:p-24 max-w-7xl mx-auto"
    >
      {/* Avatar column */}
      <motion.div style={{ y, position: "relative" }} className="flex-1 max-w-full">
        <div
          style={{
            width: "100%",
            aspectRatio: "3/4",
            maxWidth: 420,
            background: `linear-gradient(135deg, ${t.bgCard}, ${t.bg})`,
            borderRadius: 8,
            border: `1px solid ${t.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Abstract avatar */}
          {/* <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="av" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={t.accent}/>
                <stop offset="100%" stopColor={t.accent2}/>
              </linearGradient>
            </defs>
            <circle cx="100" cy="75" r="40" fill="url(#av)" opacity="0.9"/>
            <ellipse cx="100" cy="175" rx="65" ry="40" fill="url(#av)" opacity="0.7"/>
          </svg> */}

          <motion.img
            src="./avatar.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              scale,
            }}
          />
          {/* Decorative corner */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 60,
              height: 60,
              border: `2px solid ${t.accent}`,
              borderRadius: 4,
              opacity: 0.4,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              width: 40,
              height: 40,
              background: t.accent,
              borderRadius: 2,
              opacity: 0.15,
            }}
          />
        </div>
        {/* Floating badge */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            right: -20,
            background: t.accent,
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            boxShadow: `0 8px 32px ${t.shadow}`,
          }}
        >
          3+ Years Exp.
        </div>
      </motion.div>

      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 max-w-full"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
            About Me
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900,
            color: t.text,
            margin: "0 0 24px",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Code that
          <br />
          <span style={{ color: t.accent2 }}>scales.</span> Design
          <br />
          that <span style={{ color: t.accent }}>converts.</span>
        </h2>
        <p
          style={{
            color: t.muted,
            lineHeight: 1.8,
            marginBottom: 16,
            fontSize: 16,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          I'm a full-stack developer passionate about building products that
          live at the intersection of engineering excellence and beautiful
          design. From pixel-perfect UIs to bulletproof APIs.
        </p>
        <p
          style={{
            color: t.muted,
            lineHeight: 1.8,
            marginBottom: 40,
            fontSize: 16,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Based anywhere, working everywhere — I collaborate with startups and
          established companies globally to ship products that matter.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {skills.map((s) => (
            <span
              key={s}
              style={{
                padding: "6px 14px",
                border: `1px solid ${t.border}`,
                borderRadius: 4,
                fontSize: 12,
                color: t.muted,
                fontFamily: "monospace",
                letterSpacing: "0.05em",
                transition: "border-color 0.2s, color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = t.accent;
                e.target.style.color = t.accent;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = t.border;
                e.target.style.color = t.muted;
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
