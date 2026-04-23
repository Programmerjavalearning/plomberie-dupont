"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060c17 0%, #0a0f1a 100%)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Contactez-nous</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Demandez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              devis gratuit
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Réponse garantie sous 30 minutes en heure ouvrable. Urgences traitées immédiatement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Phone card */}
            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Urgence 24h/24</p>
                  <a href="tel:+33145678910" className="text-accent font-bold text-lg hover:text-accent-light transition-colors">
                    01 45 67 89 10
                  </a>
                </div>
              </div>
              <p className="text-white/40 text-xs">Disponible le soir, week-ends et jours fériés</p>
            </div>

            {/* Info items */}
            {[
              { icon: "📍", label: "Zone d'intervention", value: "Île-de-France (75, 92, 93, 94)" },
              { icon: "🕐", label: "Horaires", value: "Lun–Sam 8h–20h\nUrgences 24h/24" },
              { icon: "✅", label: "Certifications", value: "QUALIBAT RGE\nAssurance décennale" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.025] border border-white/[0.07]">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl">
                  ✓
                </div>
                <h3 className="text-white font-bold text-xl">Demande envoyée !</h3>
                <p className="text-white/50 text-sm max-w-xs">
                  Nous vous recontactons dans les 30 minutes (en heure ouvrable) ou dès que possible pour les urgences.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5">
                    Description du problème
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre problème ou votre projet…"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </button>

                <p className="text-center text-white/30 text-xs">
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
