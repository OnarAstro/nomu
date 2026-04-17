"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import IntroPanels from "./components/IntroPanels";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ─── Theme ────────────────────────────────────────────────────────────────────
const themes = {
  dark: {
    bg: "#0a0a0a",
    bgAlt: "#111111",
    bgCard: "#161616",
    border: "#222222",
    text: "#f0f0f0",
    muted: "#888",
    accent: "#f97316",
    accent2: "#3b82f6",
    shadow: "rgba(249,115,22,0.15)",
  },
  light: {
    bg: "#f8f8f6",
    bgAlt: "#efefed",
    bgCard: "#ffffff",
    border: "#e2e2e0",
    text: "#0a0a0a",
    muted: "#777",
    accent: "#ea6c10",
    accent2: "#2563eb",
    shadow: "rgba(234,108,16,0.12)",
  },
};

// ─── Logo SVG ─────────────────────────────────────────────────────────────────
function Logo({ color }) {
  return (
    // <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    //   <path d="M6 30V6L18 24L30 6V30" stroke={color} strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter"/>
    //   <rect x="0.5" y="0.5" width="35" height="35" rx="5.5" stroke={color} strokeOpacity="0.25"/>
    // </svg>
    <svg
      width="42"
      height="42"
      viewBox="0 0 52 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.06048 44.3984C1.64229 20.5627 3.20521 -18.6513 12.8024 15.1782C22.3997 49.0077 40.2279 22.0383 47.9423 4.32493M47.9423 4.32493L39.134 7.95621M47.9423 4.32493L49.24 13.7636"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      //{" "}
      <rect
        x="0.5"
        y="0.5"
        width="42"
        height="36"
        rx="5.5"
        stroke={color}
        strokeOpacity="0.25"
      />
    </svg>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [panelsDone, setPanelsDone] = useState(false);
  const t = themes[theme];
  const toggle = () => setTheme((th) => (th === "dark" ? "light" : "dark"));

  // Load fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      style={{
        background: t.bg,
        color: t.text,
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      <IntroPanels t={t} done={panelsDone} setDone={setPanelsDone} />
      <Nav theme={theme} t={t} toggle={toggle} Logo={Logo} />
      <Hero t={t} />
      <About t={t} />
      <Work t={t} />
      <Pricing t={t} />
      <Contact t={t} />
      <Footer t={t} Logo={Logo} />
    </div>
  );
}
