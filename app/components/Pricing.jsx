// ─── Pricing ──────────────────────────────────────────────────────────────────
"use client";   
import React from "react";


const plans = [
  {
    name: "Basic", price: "$1,200", period: "project",
    desc: "Perfect for landing pages and simple web apps.",
    features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO", "2 revisions", "2-week delivery"],
    cta: "Get Started", highlight: false,
  },
  {
    name: "Standard", price: "$3,500", period: "project",
    desc: "Ideal for MVPs and full-featured web applications.",
    features: ["Full-stack app", "Authentication system", "Database design", "REST/GraphQL API", "Admin dashboard", "5 revisions", "4-week delivery"],
    cta: "Most Popular", highlight: true,
  },
  {
    name: "Premium", price: "$8,000+", period: "project",
    desc: "Enterprise-grade solutions with ongoing support.",
    features: ["Complete product build", "DevOps & CI/CD", "Cloud deployment", "Performance optimization", "Security audit", "Unlimited revisions", "Dedicated support"],
    cta: "Let's Talk", highlight: false,
  },
];
import { motion } from "framer-motion";

export default function Pricing({ t }) {
  return (
    <section id="pricing" style={{ackground: t.bgAlt }}
      className="px-6 pt-10 pb-24 md:px-12 md:pt-32 md:pb-32 lg:p-24 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ marginBottom: 64 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 32, height: 2, background: t.accent }}/>
          <span style={{ color: t.accent, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Pricing</span>
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: t.text, margin: 0,
          letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif",
        }}>Transparent<br/>Pricing.</h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {plans.map((plan, i) => (
          <motion.div key={plan.name}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: plan.highlight ? t.accent : t.bgCard,
              border: `1px solid ${plan.highlight ? t.accent : t.border}`,
              borderRadius: 8, padding: 40,
              position: "relative", overflow: "hidden",
              boxShadow: plan.highlight ? `0 20px 60px ${t.shadow}` : "none",
              transform: plan.highlight ? "scale(1.03)" : "scale(1)",
            }}
          >
            {plan.highlight && (
              <div style={{
                position: "absolute", top: 0, right: 0,
                background: "rgba(255,255,255,0.15)", padding: "6px 16px",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                color: "#fff", borderBottomLeftRadius: 8,
              }}>★ POPULAR</div>
            )}
            <div style={{ color: plan.highlight ? "#fff" : t.muted, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>{plan.name}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
              <span style={{ fontWeight: 900, color: plan.highlight ? "#fff" : t.text, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                className="lg:text-[2.5rem] md:text-[2.5rem] text-[2rem] "
              >{plan.price}</span>
              <span style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : t.muted, fontSize: 13 }}>/ {plan.period}</span>
            </div>
            <p style={{ color: plan.highlight ? "rgba(255,255,255,0.75)" : t.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>{plan.desc}</p>
            <div style={{ marginBottom: 32 }}>
              {plan.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.25)" : `${t.accent}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: plan.highlight ? "#fff" : t.accent }}/>
                  </div>
                  <span style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : t.muted, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <button style={{
              width: "100%", padding: "14px", borderRadius: 4, fontSize: 13, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
              background: plan.highlight ? "#fff" : "transparent",
              color: plan.highlight ? t.accent : t.text,
              border: plan.highlight ? "none" : `1px solid ${t.border}`,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              if (!plan.highlight) { e.target.style.borderColor = t.accent; e.target.style.color = t.accent; }
            }}
            onMouseLeave={e => {
              if (!plan.highlight) { e.target.style.borderColor = t.border; e.target.style.color = t.text; }
            }}
            >{plan.cta}</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}