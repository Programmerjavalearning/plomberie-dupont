export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060b14] border-t border-white/[0.06] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-2xl">💧</span>
              <span className="font-bold text-lg text-white">
                Plomberie <span className="text-accent">Dupont</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Votre plombier certifié en Île-de-France. Interventions d&apos;urgence, installations, rénovations.
              Disponible 7j/7, même le soir et les jours fériés.
            </p>
            {/* Certifications */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent font-semibold">
                ✓ QUALIBAT RGE
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/50">
                Assurance décennale
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {["Dépannage urgence", "Installation sanitaire", "Débouchage", "Salle de bain complète", "Chauffe-eau"].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-white/40 hover:text-accent text-sm transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+33145678910"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  01 45 67 89 10
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/40">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Île-de-France<br />(75, 92, 93, 94)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/40">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun–Sam 8h–20h<br />Urgences 24h/24</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {currentYear} Plomberie Dupont. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>SIRET : 512 345 678 00042</span>
            <span className="hidden sm:block">·</span>
            <span>Certification QUALIBAT n° 7711</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
