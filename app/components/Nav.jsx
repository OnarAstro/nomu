import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
// import Logo from "./Logo";

// ─── Nav ──────────────────────────────────────────────────────────────────────
export default function Nav({ theme, t, toggle, Logo }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const container = {
    hidden: { opacity: 0, y: -20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 64,
        background: scrolled
          ? theme === "dark"
            ? "rgba(10,10,10,0.88)"
            : "rgba(248,248,246,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.border}` : "none",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <Logo color={t.accent} />
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["About", "Work", "Pricing", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            style={{
              color: t.muted,
              fontSize: 13,
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = t.accent)}
            onMouseLeave={(e) => (e.target.style.color = t.muted)}
            className="md:flex hidden"
          >
            {s}
          </a>
        ))}

        <button
          onClick={toggle}
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            border: `1px solid ${t.border}`,
            background: t.bgCard,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: t.text,
            fontSize: 16,
            transition: "border-color 0.2s",
          }}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>

        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            border: `1px solid ${t.border}`,
            background: t.bgCard,
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            color: t.text,
            fontSize: 16,
            transition: "border-color 0.2s",
          }}
          className="md:hidden flex"
        >
          <Menu size={16} onClick={() => setOpen(!open)} />
        </button>
      </div>

      <AnimatePresence mode="wait " initial={false}>
        {open && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{
              position: "absolute",
              top: 64,
              left: 0,
              right: 0,
              bottom: 0,
              height: "calc(100vh - 64px)",
              background:
                theme === "dark"
                  ? "rgba(10,10,10,0.88)"
                  : "rgba(248,248,246,0.88)",
              backdropFilter: "blur(18px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
            }}
          >
            {["About", "Work", "Pricing", "Contact"].map((s) => (
              <motion.a
                key={s}
                variants={item}
                href={`#${s.toLowerCase()}`}
                style={{
                  color: t.muted,
                  fontSize: 20,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = t.accent)}
                onMouseLeave={(e) => (e.target.style.color = t.muted)}
              >
                {s}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
