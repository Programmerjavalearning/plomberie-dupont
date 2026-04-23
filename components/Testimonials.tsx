"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Isabelle Moreau",
    city: "Paris 15e",
    stars: 5,
    text: "Fuite importante un dimanche matin — intervention en moins de 45 minutes ! Le technicien a été rapide, propre et très professionnel. Prix conforme au devis. Je recommande vivement Plomberie Dupont.",
    avatar: "I",
    date: "Mars 2025",
  },
  {
    name: "Thomas Bernard",
    city: "Versailles",
    stars: 5,
    text: "Rénovation complète de notre salle de bain. Résultat magnifique, délais tenus et équipe à l'écoute. Chaque étape a été expliquée clairement. Un grand merci, nous sommes ravis du résultat final !",
    avatar: "T",
    date: "Janvier 2025",
  },
  {
    name: "Sophie Lefebvre",
    city: "Boulogne-Billancourt",
    stars: 5,
    text: "WC bouché en urgence un vendredi soir. Appel à 20h, intervention à 21h, problème réglé en 30 minutes. Tarif honnête même en heure non ouvrable. Service impeccable, à appeler sans hésitation.",
    avatar: "S",
    date: "Février 2025",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 px-4 sm:px-6 bg-[#0a0f1a] relative overflow-hidden">
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
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Témoignages</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Ce que disent nos clients
          </h2>

          {/* Global rating */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10">
            <StarRating count={5} />
            <span className="text-white font-bold text-lg">4,9</span>
            <span className="text-white/40 text-sm">/ 5 — 127 avis vérifiés</span>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="relative flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-accent/20 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="text-5xl text-accent/20 font-serif leading-none mb-2 select-none">&ldquo;</div>

              <StarRating count={t.stars} />

              <p className="mt-4 text-white/65 text-sm leading-relaxed flex-1">{t.text}</p>

              <div className="mt-6 pt-5 border-t border-white/[0.07] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">
                    {t.city} · {t.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
