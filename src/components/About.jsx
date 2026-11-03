
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  ArrowDownRight,
  Heart,
  Lightbulb,
  Accessibility,
  Sparkles,
} from "lucide-react";

const About = () => {
  const { t } = useTranslation("homeAbout");

  const themes = [
    {
      number: "01",
      title: "Ergothérapie",
      description:
        "Partir des besoins, des capacités et du quotidien des personnes pour favoriser leur autonomie et leur participation.",
      icon: Heart,
      color: "bg-[#F5F5F7]",
    },
    {
      number: "02",
      title: "Technologie & handicap",
      description:
        "Explorer et adapter les technologies pour les rendre utiles, accessibles et pertinentes dans la vie réelle.",
      icon: Lightbulb,
      color: "bg-[#EEEAFE]",
    },
    {
      number: "03",
      title: "Innovation accessible",
      description:
        "Faire le lien entre les personnes, les professionnels et les outils pour transformer les idées en solutions concrètes.",
      icon: Accessibility,
      color: "bg-[#FDE9EC]",
    },
  ];

  return (
    <section
      id="about-section"
      data-animate="stagger"
      data-animate-lifetime="once"
      className="relative scroll-mt-28 px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Titre de section */}
        <div className="mb-9 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">
              Quelques mots sur moi
            </p>

            <h2 className="section-title">
              {t("about.title")}
              <span className="text-[#F23850]">.</span>
            </h2>

            <p className="handwritten-note mt-3">
              Un parcours, plusieurs facettes !
            </p>
          </div>

          <div className="flex items-center gap-2 md:mb-2">
            <ArrowDownRight
              size={25}
              className="text-[#F23850]"
              aria-hidden="true"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#171717]/65">
              À la croisée de l'humain, du handicap et de la technologie.
            </p>
          </div>
        </div>

        {/* Présentation */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Mon parcours */}
          <div className="relative overflow-hidden rounded-2xl bg-[#F5F5F7] p-6 md:p-8">

            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#1B00C9]">
                  Mon parcours
                </span>

                <span className="handwritten-note -rotate-3">
                  D'où je viens
                </span>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-[#171717]/80 md:text-base">
                {t("about.content")}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-12 h-40 w-40 rounded-full border-[16px] border-[#1B00C9]/10 md:h-48 md:w-48"
            />
          </div>

          {/* Ma démarche */}
          <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl bg-[#1B00C9] p-6 text-white md:p-8">

            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                Ma démarche
              </span>

              <Sparkles
                size={21}
                className="text-[#F23850]"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 my-7">
              <h3 className="mb-3 text-2xl font-bold leading-tight md:text-3xl">
                La technologie au service des personnes.
              </h3>

              <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                L'objectif n'est pas d'ajouter de la technologie partout,
                mais de trouver la solution adaptée aux besoins et aux usages.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2">
              <span className="handwritten text-xl text-white/90">
                Toujours partir du besoin !
              </span>
              <ArrowUpRight size={20} className="text-[#F23850]" />
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/20"
            />
          </div>
        </div>

        {/* Mes trois domaines */}
        <div className="mb-5 mt-12 flex items-center gap-3">
          <h3 className="text-lg font-bold text-[#171717] md:text-xl">
            Ce qui guide mon approche
          </h3>

          <div className="h-px flex-1 bg-[#1B00C9]/15" />

          <span className="handwritten-note hidden sm:block">
            Mes trois piliers
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <article
                key={theme.number}
                className={`soft-card ${theme.color} p-5 md:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#171717]/40">
                    {theme.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="text-[#1B00C9]"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mb-2 text-base font-bold text-[#171717] md:text-lg">
                  {theme.title}
                </h4>

                <p className="text-sm leading-relaxed text-[#171717]/70">
                  {theme.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
