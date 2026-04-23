"use client";

import { motion } from "framer-motion";

// Deterministic particles — no random at render to avoid hydration mismatch
const PARTICLES = [
  { id: 0,  x: "8%",  y: "15%", size: 3,   opacity: 0.07, dur: 7,  delay: 0   },
  { id: 1,  x: "22%", y: "72%", size: 5,   opacity: 0.06, dur: 9,  delay: 1.2 },
  { id: 2,  x: "38%", y: "30%", size: 2,   opacity: 0.09, dur: 6,  delay: 0.5 },
  { id: 3,  x: "55%", y: "82%", size: 4,   opacity: 0.05, dur: 11, delay: 2   },
  { id: 4,  x: "70%", y: "20%", size: 6,   opacity: 0.07, dur: 8,  delay: 0.8 },
  { id: 5,  x: "85%", y: "60%", size: 3,   opacity: 0.06, dur: 10, delay: 1.5 },
  { id: 6,  x: "15%", y: "50%", size: 4,   opacity: 0.08, dur: 7.5,delay: 3   },
  { id: 7,  x: "48%", y: "55%", size: 2,   opacity: 0.05, dur: 12, delay: 0.3 },
  { id: 8,  x: "62%", y: "40%", size: 5,   opacity: 0.06, dur: 9.5,delay: 2.5 },
  { id: 9,  x: "30%", y: "88%", size: 3,   opacity: 0.07, dur: 6.5,delay: 1.8 },
  { id: 10, x: "78%", y: "78%", size: 4,   opacity: 0.05, dur: 8.5,delay: 0.7 },
  { id: 11, x: "92%", y: "35%", size: 2,   opacity: 0.08, dur: 7,  delay: 2.2 },
  { id: 12, x: "5%",  y: "90%", size: 6,   opacity: 0.04, dur: 13, delay: 4   },
  { id: 13, x: "44%", y: "10%", size: 3,   opacity: 0.09, dur: 5.5,delay: 1   },
  { id: 14, x: "96%", y: "92%", size: 4,   opacity: 0.05, dur: 10, delay: 3.5 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px]"
      style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0d1929 50%, #0a0f1a 100%)" }}
    >
      {/* Blue night overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051020]/60 via-transparent to-[#0a0f1a]" />

      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Water particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: "#0EA5E9",
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -18, 4, -12, 0],
              x: [0, 6, -4, 8, 0],
              scale: [1, 1.3, 0.9, 1.15, 1],
              opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.6, p.opacity * 1.4, p.opacity],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Animated SVG waves ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "200px" }}
        >
          {/* Wave 1 — slow, very transparent */}
          <motion.path
            fill="#0EA5E9"
            fillOpacity="0.025"
            animate={{
              d: [
                "M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,200 L0,200 Z",
                "M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z",
                "M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Wave 2 — slightly faster, offset phase */}
          <motion.path
            fill="#38BDF8"
            fillOpacity="0.03"
            animate={{
              d: [
                "M0,140 C360,100 720,170 1080,130 C1260,110 1380,150 1440,140 L1440,200 L0,200 Z",
                "M0,130 C360,160 720,110 1080,150 C1260,170 1380,120 1440,130 L1440,200 L0,200 Z",
                "M0,140 C360,100 720,170 1080,130 C1260,110 1380,150 1440,140 L1440,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          {/* Wave 3 — barely visible, large amplitude */}
          <motion.path
            fill="#0EA5E9"
            fillOpacity="0.018"
            animate={{
              d: [
                "M0,160 C480,120 960,180 1440,160 L1440,200 L0,200 Z",
                "M0,150 C480,185 960,125 1440,155 L1440,200 L0,200 Z",
                "M0,160 C480,120 960,180 1440,160 L1440,200 L0,200 Z",
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </svg>

        {/* Top ripple shimmer */}
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "120px" }}
        >
          <motion.path
            fill="#0EA5E9"
            fillOpacity="0.02"
            animate={{
              d: [
                "M0,40 C360,70 720,20 1080,50 C1260,65 1380,30 1440,40 L1440,0 L0,0 Z",
                "M0,55 C360,25 720,65 1080,35 C1260,20 1380,60 1440,55 L1440,0 L0,0 Z",
                "M0,40 C360,70 720,20 1080,50 C1260,65 1380,30 1440,40 L1440,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Animated water drop icon */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-7xl mb-8 drop-shadow-[0_0_30px_rgba(14,165,233,0.7)]"
        >
          💧
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Disponible 24h/24 — 7j/7
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
        >
          Plombier certifié{" "}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
            Intervention express
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Urgences, installations, rénovations — votre plombier de confiance intervient partout en Île-de-France.
          Devis gratuit, sans engagement, sous 30 minutes.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-white font-bold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-1 active:translate-y-0"
          >
            Demander un devis gratuit
          </a>
          <a
            href="tel:+33145678910"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold text-base transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            01 45 67 89 10
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "+500", label: "clients satisfaits" },
            { value: "< 1h", label: "délai d'intervention" },
            { value: "10 ans", label: "de garantie" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-accent">{stat.value}</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
