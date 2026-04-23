"use client";

import { motion } from "framer-motion";

const realisations = [
  {
    title: "Rénovation salle de bain",
    location: "Paris 16e",
    description: "Refonte complète : nouvelle douche à l'italienne, double vasque, faïence contemporaine et plomberie entièrement reprise.",
    gradient: "from-[#0a2540] via-[#0d1f35] to-[#0a0f1a]",
    accent: "#0EA5E9",
    duration: "5 jours",
    tag: "Rénovation",
  },
  {
    title: "Remplacement chaudière",
    location: "Versailles",
    description: "Dépose ancienne chaudière, installation chaudière à condensation haute efficacité, mise aux normes et réglage complet.",
    gradient: "from-[#071e34] via-[#0b1e30] to-[#0a0f1a]",
    accent: "#38BDF8",
    duration: "1 jour",
    tag: "Installation",
  },
  {
    title: "Débouchage urgent",
    location: "Boulogne-Billancourt",
    description: "Intervention d'urgence le soir même — colonne montante obstruée dans un immeuble de 6 étages, débouchage par hydrocurage.",
    gradient: "from-[#0c1f3a] via-[#0d1c30] to-[#0a0f1a]",
    accent: "#0EA5E9",
    duration: "2 heures",
    tag: "Urgence",
  },
  {
    title: "Installation WC suspendu",
    location: "Neuilly-sur-Seine",
    description: "Dépose WC classique, installation WC suspendu encastré dans cloison technique, carrelage et finitions inclus.",
    gradient: "from-[#071829] via-[#0a1a2e] to-[#0a0f1a]",
    accent: "#7DD3FC",
    duration: "2 jours",
    tag: "Installation",
  },
  {
    title: "Fuite réparée en urgence",
    location: "Saint-Cloud",
    description: "Détection et réparation d'une fuite sous dalle au rez-de-chaussée. Intervention propre, sans casse inutile, résultat garanti.",
    gradient: "from-[#0a2235] via-[#0c1e32] to-[#0a0f1a]",
    accent: "#0EA5E9",
    duration: "1 jour",
    tag: "Dépannage",
  },
  {
    title: "Salle de bain neuve",
    location: "Vincennes",
    description: "Création salle de bain dans pièce vide : tirage des gaines, pose baignoire îlot, double vasque, meuble colonne et éclairage LED.",
    gradient: "from-[#061828] via-[#091c30] to-[#0a0f1a]",
    accent: "#38BDF8",
    duration: "7 jours",
    tag: "Création",
  },
];

const tagColors: Record<string, string> = {
  "Rénovation": "bg-accent/15 text-accent border-accent/25",
  "Installation": "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  "Urgence": "bg-red-500/15 text-red-400 border-red-500/25",
  "Dépannage": "bg-amber-500/15 text-amber-400 border-amber-500/25",
  "Création": "bg-purple-500/15 text-purple-400 border-purple-500/25",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    } as const,
  },
} as const;

export default function Realisations() {
  return (
    <section
      id="realisations"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0f1a 0%, #060c17 50%, #0a0f1a 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              réalisations
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Chaque chantier est une référence. Découvrez quelques-unes de nos interventions récentes.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {realisations.map((item) => (
            <motion.div
              key={item.title + item.location}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.07] cursor-default h-[220px]"
              style={{ background: `linear-gradient(135deg, ${item.gradient.replace("from-", "").replace("via-", "").replace("to-", "")})` }}
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(${item.accent}55 1px, transparent 1px), linear-gradient(90deg, ${item.accent}55 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Hover overlay — bleu avec checkmark */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-all duration-400 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-accent/0 group-hover:bg-accent/90 border-2 border-accent/0 group-hover:border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl shadow-accent/40">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Zoom wrapper */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                {/* Glow accent corner */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[50px] opacity-30"
                  style={{ background: item.accent }}
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagColors[item.tag] ?? "bg-white/10 text-white/60 border-white/10"}`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs text-white/30 font-medium">{item.duration}</span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-accent-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-1 flex items-center gap-1.5">
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.location}
                  </p>
                  <p className="text-white/50 text-xs mt-3 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/10 text-sm font-semibold transition-all duration-200"
          >
            Votre projet mérite le même soin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
