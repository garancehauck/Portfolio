

const academicWorks = [
  {
    type: "Diplôme d’État d’ergothérapeute",
    title:
      "La participation occupationnelle de l’enfant présentant des troubles du spectre autistique sévères dans ses activités de vie quotidienne à domicile",
    description:
      "Un travail de recherche autour de la participation de l’enfant dans ses activités de vie quotidienne et dans son environnement à domicile.",
    accent: "Ergothérapie",
    file: `${import.meta.env.BASE_URL}assets/files/MemoireErgotherapie.pdf`,
  },
  {
    type: "Master MIASHS — Technologie et Handicap",
    title:
      "Accessibilité des outils numériques de communication alternative et améliorée (CAA)",
    description:
      "Un travail de recherche consacré à l’accessibilité des outils numériques de CAA pour des jeunes présentant une déficience visuelle, dans des contextes d’accompagnement en IEM et en MAS.",
    accent: "Accessibilité numérique",
    file: `${import.meta.env.BASE_URL}assets/files/MemoireCAA.pdf`,
  },
];

const AcademicWork = () => {
  return (
    <section
      id="academic-work-section"
      data-animate="stagger"
      data-animate-lifetime="once"
      className="scroll-mt-28 px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-10 md:mb-12">
          <p className="section-kicker">
            Recherche & formation
          </p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">
              Travaux académiques
              <span className="text-[#F23850]">.</span>
            </h2>

            <p className="handwritten-note hidden sm:block">
              Deux étapes de mon parcours !
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#171717]/65 md:text-base">
            Deux travaux qui témoignent du fil conducteur de mon parcours :
            comprendre les besoins des personnes et réfléchir aux conditions
            qui favorisent leur participation et leur autonomie.
          </p>
        </div>

        {/* Travaux */}
        <div className="grid gap-5 md:grid-cols-2">
          {academicWorks.map((work, index) => (
            <article
              key={work.type}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1B00C9]/[0.09] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,0,201,0.07)] md:p-7"
            >
              {/* Petit repère graphique */}
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#F5F5F7] px-3 py-1.5 text-xs font-semibold text-[#1B00C9]">
                  {work.accent}
                </span>

                <span className="text-xs font-bold tracking-widest text-[#F23850]">
                  0{index + 1}
                </span>
              </div>

              {/* Diplôme */}
              <p className="mb-3 text-xs font-bold uppercase leading-relaxed tracking-wider text-[#F23850]">
                {work.type}
              </p>

              {/* Intitulé */}
              <h3 className="text-lg font-bold leading-snug text-[#171717] md:text-xl">
                {work.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-[#171717]/65">
                {work.description}
              </p>

             {/* Lien vers le mémoire PDF */}
              <div className="mt-auto flex justify-end pt-6">
                <a
                  href={work.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lire le mémoire : ${work.type}`}
                  className="text-xl text-[#1B00C9] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicWork;
