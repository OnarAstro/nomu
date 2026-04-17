const projects = [
  {
    title: "FlowBoard",
    desc: "Real-time Kanban & project management SaaS with team collaboration, notifications, and analytics dashboard.",
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    color: "#f97316",
  },
  {
    title: "NexPay",
    desc: "Cross-border fintech platform handling multi-currency wallets, exchange rates, and compliance workflows.",
    tags: ["Node.js", "React", "Stripe"],
    color: "#3b82f6",
  },
  {
    title: "Orbita",
    desc: "AI-powered e-commerce engine with personalized recommendations, inventory sync, and storefront builder.",
    tags: ["TypeScript", "MongoDB", "AWS"],
    color: "#8b5cf6",
  },
  {
    title: "PulseAPI",
    desc: "Developer-first REST & GraphQL API gateway with rate limiting, analytics, and auto-documentation.",
    tags: ["GraphQL", "Redis", "Docker"],
    color: "#10b981",
  },
  {
    title: "SketchSync",
    desc: "Collaborative whiteboard tool for design teams with version history, exports, and component libraries.",
    tags: ["React", "WebRTC", "Canvas"],
    color: "#f59e0b",
  },
  {
    title: "HealthOS",
    desc: "HIPAA-compliant patient management system with scheduling, telemedicine, and EHR integrations.",
    tags: ["Next.js", "Prisma", "AWS"],
    color: "#ef4444",
  },
];

import { motion } from "framer-motion";
import ProjectCard from "./Projects";

export default function Work({ t }) {
  return (
    <section
      id="work"
      className="px-6 pt-10 pb-24 md:px-12 md:pt-32 md:pb-32 lg:p-24 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: 64 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
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
            Portfolio
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            color: t.text,
            margin: 0,
            letterSpacing: "-0.03em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Selected Work
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} t={t} i={i} />
        ))}
      </div>
    </section>
  );
}
