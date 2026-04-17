import { AnimatePresence , motion } from "framer-motion";
import { useEffect } from "react";

// ─── Intro Panels ─────────────────────────────────────────────────────────────
export default function IntroPanels({ t, done, setDone }) {
  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(id);
  }, []);

  const panels = [
    { initial: { x: "-100%" }, animate: { x: "0%" }, exit: { x: "-100%" } },
    { initial: { x: "100%" }, animate: { x: "0%" }, exit: { x: "100%" } },
    { initial: { y: "-100%" }, animate: { y: "0%" }, exit: { y: "-100%" } },
    { initial: { y: "100%" }, animate: { y: "0%" }, exit: { y: "100%" } },
  ];

  return (
    <AnimatePresence>
      {!done && panels.map((p, i) => (
        <motion.div key={i}
          initial={p.initial} animate={p.animate} exit={p.exit}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: i % 2 === 0 ? t.accent : t.bg,
            pointerEvents: "none",
          }}
        />
      ))}
    </AnimatePresence>
  );
}
