import { useState } from "react";
import { motion } from "framer-motion";

// ─── Work / Projects ──────────────────────────────────────────────────────────


export default function ProjectCard({ p, t, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: t.bgCard, border: `1px solid ${hovered ? p.color : t.border}`,
        borderRadius: 8, overflow: "hidden", cursor: "pointer",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 20px 60px ${p.color}22` : "none",
      }}
    >
      {/* Project image placeholder */}
      <div style={{
        height: 200, background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        borderBottom: `1px solid ${t.border}`,
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: `${p.color}33`, border: `2px solid ${p.color}55`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28, fontWeight: 900, color: p.color,
          fontFamily: "'Syne', sans-serif",
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}>
          {p.title[0]}
        </div>
        <div style={{
          position: "absolute", top: 16, right: 16,
          width: 8, height: 8, borderRadius: "50%", background: p.color,
          opacity: hovered ? 1 : 0.4, transition: "opacity 0.3s",
        }}/>
      </div>
      <div style={{ padding: 28 }}>
        <h3 style={{ color: t.text, fontSize: 20, fontWeight: 800, margin: "0 0 10px", fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>{p.title}</h3>
        <p style={{ color: t.muted, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              padding: "4px 10px", background: `${p.color}15`, borderRadius: 4,
              fontSize: 11, color: p.color, fontWeight: 600, letterSpacing: "0.05em",
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}