
const skillGroups = [
  {
    number: "01",
    title: "Ergothérapie & accompagnement",
    description:
      "Une approche centrée sur la personne, ses capacités, ses habitudes de vie et son environnement.",
    skills: [
      "Analyse des besoins et des capacités",
      "Évaluation des situations de handicap",
      "Accompagnement vers l’autonomie",
      "Préconisation d’aides techniques",
      "Adaptation de l’environnement",
      "Approche centrée sur la personne",
    ],
  },
  {
    number: "02",
    title: "Technologies du handicap & accessibilité",
    description:
      "Explorer les possibilités offertes par les outils numériques et les technologies d’assistance.",
    skills: [
      "Accessibilité numérique",
      "Communication alternative et améliorée (CAA)",
      "Technologies d’assistance",
      "Domotique et contrôle de l’environnement",
      "Adaptation des outils numériques",
    ],
  },
  {
    number: "03",
    title: "Conception & prototypage",
    description:
      "Imaginer, modéliser et tester des réponses techniques à partir d’un besoin identifié.",
    skills: [
      "Figma",
      "Fusion 360",
      "Modélisation 3D",
      "Impression 3D",
      "Conception de maquettes et de prototypes",
      "Recherche de solutions techniques",
    ],
    level: "Bonne aisance",
  },
  {
    number: "04",
    title: "Développement informatique",
    description:
      "Des compétences en développement mobilisées dans le cadre de projets web et applicatifs.",
    skills: [
      "HTML / CSS",
      "JavaScript",
      "PHP / MySQL",
      "Java / Android",
      "Python",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills-section"
      data-animate="stagger"
      data-animate-lifetime="once"
      className="relative scroll-mt-28 px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-10 md:mb-12">
          <p className="section-kicker">Ce que je mobilise</p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">
              Mes compétences<span className="text-[#F23850]">.</span>
            </h2>

            <p className="handwritten-note hidden sm:block">
              Des compétences complémentaires !
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#171717]/65 md:text-base">
            Mon parcours associe l’ergothérapie, les technologies du handicap
            et la conception de solutions. Je mobilise ces compétences en
            fonction des personnes, des usages et des projets.
          </p>
        </div>

        {/* Cartes de compétences */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="rounded-2xl border border-[#1B00C9]/[0.09] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,0,201,0.07)] md:p-6"
            >
              {/* Titre de la carte */}
              <div className="mb-5 flex items-start gap-3">
                <span className="mt-1 text-xs font-bold tracking-wider text-[#F23850]">
                  {group.number}
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-snug text-[#171717] md:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#171717]/60">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Liste des compétences */}
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-[#F5F5F7] px-3 py-2 text-xs font-medium leading-relaxed text-[#171717]/75 transition-colors hover:bg-[#EEEAFE] md:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Niveau de pratique : conception */}
              {group.number === "03" && (
                <div className="mt-5 flex items-center gap-2 border-t border-[#171717]/[0.08] pt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F23850]" />
                  <p className="text-xs text-[#171717]/60">
                    Outils pratiqués avec <span className="font-semibold text-[#1B00C9]">{group.level.toLowerCase()}</span>
                  </p>
                </div>
              )}

              {/* Niveau de pratique : développement */}
              {group.number === "04" && (
                <div className="mt-5 border-t border-[#171717]/[0.08] pt-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#171717]/45">
                    Niveau de pratique
                  </p>

                  <div className="space-y-2 text-sm">
                    <p className="text-[#171717]/70">
                      HTML / CSS, JavaScript, PHP / MySQL et Java / Android
                      <span className="font-semibold text-[#1B00C9]">
                        {" "}· Bonne aisance
                      </span>
                    </p>

                    <p className="text-[#171717]/70">
                      Python
                      <span className="font-semibold text-[#1B00C9]">
                        {" "}· Premières notions
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Petite phrase de conclusion */}
        <div className="mt-8 flex items-center justify-end gap-3">
          <span className="handwritten-note text-base">
            Et surtout, apprendre en faisant !
          </span>
          <span className="text-[#F23850]">↗</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
