"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🚨",
    title: "Dépannage urgence",
    description:
      "Fuite, canalisation bouchée, dégât des eaux — nous intervenons en moins d'une heure, 24h/24 et 7j/7, week-ends et jours fériés inclus.",
    badge: "Disponible 24h/24",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    icon: "🔧",
    title: "Installation sanitaire",
    description:
      "Pose de WC, lavabo, baignoire, douche, chauffe-eau. Travail soigné, matériaux de qualité, respect des normes en vigueur.",
    badge: "Certifié QUALIBAT",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
  },
  {
    icon: "🪣",
    title: "Débouchage",
    description:
      "Évier, WC, douche, colonne montante — débouchage par hydrocurage haute pression ou furet motorisé, efficace dès la première intervention.",
    badge: "Résultat garanti",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: "🛁",
    title: "Salle de bain complète",
    description:
      "Conception, fourniture et pose. De la démolition à la finition, nous gérons l'intégralité de votre projet de salle de bain clé en main.",
    badge: "Devis gratuit",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Nos prestations</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Tous vos besoins en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              plomberie
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Intervention rapide, travail de qualité, prix transparents.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-4 ${service.badgeColor}`}
                >
                  {service.badge}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
