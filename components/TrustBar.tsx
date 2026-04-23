"use client";

const items = [
  "⚡ Intervention sous 1h",
  "📋 Devis gratuit",
  "✅ Certifié QUALIBAT",
  "🕐 Disponible 7j/7 · 24h/24",
  "🛡️ Garantie décennale",
  "📍 Île-de-France",
];

// Duplicate for seamless loop
const tickerItems = [...items, ...items, ...items];

export default function TrustBar() {
  return (
    <div
      className="fixed top-16 left-0 right-0 z-40 h-9 overflow-hidden"
      style={{ background: "linear-gradient(90deg, #061628 0%, #0a1f36 50%, #061628 100%)", borderBottom: "1px solid rgba(14,165,233,0.15)" }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #061628 0%, transparent 100%)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #061628 0%, transparent 100%)" }} />

      <div
        className="flex items-center h-full gap-0 whitespace-nowrap"
        style={{
          animation: "ticker 30s linear infinite",
          willChange: "transform",
        }}
      >
        {tickerItems.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8 text-xs font-semibold text-white/70">
            {item}
            <span className="text-accent/40">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
