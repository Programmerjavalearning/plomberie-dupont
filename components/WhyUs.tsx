"use client";

import { motion } from "framer-motion";

const arguments_ = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Intervention sous 1h",
    description:
      "Nos techniciens sont mobiles en permanence sur l'Île-de-France. Pour toute urgence, nous garantissons une arrivée dans l'heure suivant votre appel.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Devis gratuit",
    description:
      "Aucun frais de déplacement pour l'établissement du devis. Nous vous remettons un chiffrage détaillé et transparent, sans surprise ni engagement de votre part.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garantie décennale",
    description:
      "Tous nos travaux sont couverts par notre garantie décennale. Certifiés QUALIBAT, nous sommes assurés et responsables de la qualité de chaque chantier.",
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0f1a 0%, #060c17 100%)" }}>

      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Pourquoi nous choisir</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            L&apos;excellence à votre service
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Plus de 10 ans d&apos;expérience, des centaines de clients satisfaits en Île-de-France.
          </p>
        </motion.div>

        {/* Arguments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arguments_.map((arg, index) => (
            <motion.div
              key={arg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-accent/30">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                {arg.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{arg.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{arg.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-accent/20 bg-accent/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-bold text-xl">Une urgence en ce moment ?</p>
            <p className="text-white/50 text-sm mt-1">Appelez-nous directement, nous décrochers en moins de 2 sonneries.</p>
          </div>
          <a
            href="tel:+33145678910"
            className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-dark text-white font-bold transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            01 45 67 89 10
          </a>
        </motion.div>
      </div>
    </section>
  );
}
