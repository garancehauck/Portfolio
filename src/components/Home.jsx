
import { useTranslation } from "react-i18next";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
} from "lucide-react";

const Home = () => {
  const { t } = useTranslation("homeAbout");

  const cvFile = `${import.meta.env.BASE_URL}assets/files/CV_Garance_Hauck.pdf`

  return (
    <section
      id="home-section"
      className="relative scroll-mt-24 px-4 pb-5 pt-20 md:px-8 md:pt-20"
    >


{/* Bandeau portfolio en construction */}
<div className="mx-auto mb-5 flex w-fit max-w-[95%] items-center gap-3 rounded-full border border-[#F23850]/20 bg-[#FFF0F2] px-4 py-2.5 text-[#1B00C9] shadow-sm">
  <span className="text-lg text-[#F23850]">✿</span>
  <p className="text-center text-xs font-medium leading-relaxed">
    <span className="font-bold">Site web en construction !</span>{" "}
    Le site évolue progressivement, certains contenus seront bientôt complétés.
  </p>
</div>

      
      <div className="relative mx-auto min-h-[440px] max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#1B00C9] text-white md:min-h-[470px]">

        {/* Décorations graphiques */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/20 md:h-80 md:w-80"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/20 md:h-60 md:w-60"
        />

        <Plus
          aria-hidden="true"
          className="absolute right-8 top-16 h-6 w-6 text-white/70 md:right-16 md:top-24"
        />

        <span className="handwritten absolute right-8 top-28 rotate-6 text-lg text-white/80 md:right-20 md:top-36 md:text-xl">
          Bienvenue !
        </span>
        

        <div className="relative z-10 grid min-h-[440px] items-center gap-6 px-6 py-9 md:min-h-[470px] md:grid-cols-[1.3fr_0.7fr] md:px-12 md:py-10 lg:px-16">

          {/* Texte de présentation */}
          <div className="max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Ergothérapie · Technologie · Handicap
            </p>

            <p className="mb-2 text-sm text-white/85 md:text-base">
              {t("home.1")}
            </p>

            <h1 className="mb-4 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Garance
              <br />
              <span className="text-[#F23850]">Hauck.</span>
            </h1>

            <p className="mb-5 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
              Ergothérapeute de formation et diplômée d'un Master
              Technologie et Handicap, je m'intéresse aux solutions
              qui favorisent l'autonomie et rendent la technologie
              accessible à tous.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">

              <a
                href="#about-section"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1B00C9] transition hover:bg-[#F5F5F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Découvrir mon parcours
                <ArrowDownRight size={16} />
              </a>

              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Consulter mon CV
                <ArrowUpRight size={16} />
              </a>

            </div>

            {/* Petite annotation */}
            <div className="mt-4 flex items-center gap-2">
              <ArrowDownLeft
                aria-hidden="true"
                size={21}
                className="text-[#F23850]"
              />
              <p className="handwritten text-lg text-white/90 md:text-xl">
                Et si on faisait connaissance ?
              </p>
            </div>
          </div>

          {/* Visuel */}
          <div className="relative mx-auto flex w-full max-w-[240px] items-center justify-center md:max-w-xs">

            <div
              aria-hidden="true"
              className="absolute h-52 w-52 rotate-12 rounded-[2rem] border border-white/50 md:h-64 md:w-64"
            />

            <div className="relative flex aspect-square w-44 items-center justify-center rounded-[1.5rem] bg-white p-4 text-[#1B00C9] shadow-xl md:w-60">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.25rem] border border-[#1B00C9]/15">
                <span className="text-6xl font-bold tracking-tight md:text-7xl">
                  GH
                </span>

                <span className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.15em] md:text-xs">
                  Innovation & accessibilité
                </span>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-2 rounded-xl bg-[#F23850] px-3 py-2 text-xs font-bold text-white shadow-lg md:-right-4 md:text-sm">
              Des idées aux usages
            </div>

          </div>
        </div>
      </div>

      {/* Accès rapide aux projets */}
      <div className="mx-auto mt-3 flex max-w-7xl flex-col items-start justify-between gap-2 px-2 sm:flex-row sm:items-center">

        <p className="text-xs font-medium text-[#171717]/65 md:text-sm">
          Explorer mes projets et réalisations
        </p>

        <a
          href="#projects-section"
          className="arrow-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Voir les projets
          <ArrowDownRight size={16} />
        </a>

      </div>
    </section>
  );
};

export default Home;
