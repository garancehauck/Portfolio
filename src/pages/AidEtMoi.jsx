
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  GraduationCap,
  Wrench,
  Printer,
  Accessibility,
  Lightbulb,
  Handshake,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Aménagement du domicile et du quotidien",
    description:
      "Réfléchir à des aménagements pour faciliter les activités de la vie quotidienne, favoriser l’autonomie et rendre l’environnement plus adapté aux besoins de chacun.",
    examples: [
      "Conseils en aménagement du domicile",
      "Adaptation de l’environnement et des espaces",
      "Réflexion autour des gestes et activités du quotidien",
      "Recherche de solutions pour faciliter l’autonomie",
    ],
  },
  {
    icon: GraduationCap,
    title: "Accompagnement et adaptation de formations",
    description:
      "Accompagner les organismes de formation et les professionnels dans l’adaptation de leurs contenus et de leurs modalités pédagogiques aux besoins des apprenants.",
    examples: [
      "Identification des besoins des personnes",
      "Adaptation des supports pédagogiques",
      "Aménagement des modalités de formation",
      "Conseils en accessibilité et pédagogie inclusive",
    ],
  },
  {
    icon: Wrench,
    title: "Recherche d’aides techniques",
    description:
      "Identifier des solutions existantes permettant de répondre à une difficulté rencontrée dans le quotidien, les activités ou l’environnement.",
    examples: [
      "Recherche d’aides techniques adaptées",
      "Comparaison de matériels et de solutions",
      "Veille sur les innovations et technologies d’assistance",
      "Conseils dans le choix de solutions existantes",
    ],
  },
  {
    icon: Printer,
    title: "Conception et impression 3D",
    description:
      "Imaginer et concevoir de petites aides techniques personnalisées lorsque les solutions existantes ne répondent pas suffisamment au besoin identifié.",
    examples: [
      "Recherche d’idées et conception de solutions",
      "Modélisation 3D",
      "Création de prototypes",
      "Personnalisation et impression 3D",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibilité numérique",
    description:
      "Contribuer à rendre les contenus et les outils numériques plus accessibles et plus faciles à utiliser.",
    examples: [
      "Analyse de l’accessibilité de supports numériques",
      "Conseils pour améliorer l’accessibilité des documents",
      "Adaptation de contenus et de supports",
      "Sensibilisation à l’accessibilité numérique",
    ],
  },
  {
    icon: Lightbulb,
    title: "Technologies et solutions innovantes",
    description:
      "Explorer les possibilités offertes par les technologies pour répondre à des besoins spécifiques et imaginer de nouvelles solutions.",
    examples: [
      "Recherche de solutions technologiques adaptées",
      "Réflexion autour de la domotique",
      "Découverte et adaptation d’outils numériques",
      "Prototypage et expérimentation",
    ],
  },
];

const projects = [
  {
    title: "Adaptation de formations",
    category: "Accompagnement professionnel",
    description:
      "Collaboration avec RHésonnance pour réfléchir à l’adaptation de formations aux besoins spécifiques des apprenants en situation de handicap.",
    status: "Collaboration professionnelle",
  },
  {
    title: "Conception de petites aides techniques",
    category: "Conception et impression 3D",
    description:
      "Exploration de solutions personnalisées et réalisation de prototypes pour répondre à des besoins concrets.",
    status: "Projet en développement",
  },
];

export default function AidEtMoi() {
  return (
    <div className="pb-16">
      {/* Retour à l'accueil */}
      <Link
        to="/"
        className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1B00C9] transition-all hover:gap-3"
      >
        <ArrowLeft size={16} />
        Retour à l’accueil
      </Link>

      {/* Présentation */}
      <section className="relative overflow-hidden rounded-2xl bg-[#100A45] px-6 py-10 text-white md:px-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker !text-[#FF8796]">
              Mon activité indépendante
            </p>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Aid’& moi<span className="text-[#F23850]">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              À travers Aid’& moi, je mets mes compétences en ergothérapie,
              handicap et technologies au service de solutions adaptées
              aux besoins de chacun.
            </p>

            <p className="handwritten mt-5 text-2xl text-white/80">
              Des idées aux usages !
            </p>
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-white p-5 md:p-7">
            <img
              src="/assets/images/logo_aidetmoi.png"
              alt="Logo Aid’& moi"
              className="max-h-56 w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="grid gap-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-16">
        <div>
          <p className="section-kicker">Pourquoi Aid’& moi ?</p>

          <h2 className="section-title max-w-xl">
            Faire le lien entre les besoins et les solutions.
          </h2>

          <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-[#171717]/70 md:text-base">
            <p>
              Ergothérapeute de formation et diplômée d'un Master MIASHS,
              parcours Technologie et Handicap, j’ai créé Aid’& moi pour
              mettre mes compétences au service de projets autour du handicap,
              de l’autonomie et de l’accessibilité.
            </p>

            <p>
              Mon approche repose sur l’analyse des besoins, la compréhension
              des usages et la recherche de solutions concrètes. Qu’il s’agisse
              d’adapter un environnement, de trouver une aide technique ou
              d’imaginer un nouvel outil, l’objectif est de partir de la
              situation réelle de chaque personne.
            </p>

            <p>
              J’associe ainsi mon regard d’ergothérapeute à mes compétences
              en technologies, conception et accessibilité numérique.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F5F5F7] p-6 md:p-7">
          <div className="mb-5 inline-flex rounded-xl bg-white p-3 text-[#1B00C9]">
            <Handshake size={24} />
          </div>

          <h3 className="text-xl font-bold text-[#171717]">
            Une approche collaborative
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#171717]/65">
            Chaque projet commence par un échange pour comprendre les besoins,
            les contraintes et les objectifs. Les solutions sont ensuite
            réfléchies et proposées en fonction de la situation.
          </p>

          <p className="handwritten mt-5 text-xl text-[#F23850]">
            Construire ensemble !
          </p>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="scroll-mt-28 py-8 md:py-10">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Ce que je peux proposer</p>

          <h2 className="section-title">
            Mes domaines d’intervention
            <span className="text-[#F23850]">.</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#171717]/65 md:text-base">
            Des prestations complémentaires pour accompagner les personnes,
            les professionnels et les structures dans leurs projets.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, examples }, index) => (
            <article
              key={title}
              className="group rounded-2xl border border-[#1B00C9]/[0.09] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,0,201,0.07)] md:p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex rounded-xl bg-[#F5F5F7] p-3 text-[#1B00C9] transition-colors group-hover:bg-[#EEEAFE]">
                  <Icon size={22} />
                </div>

                <span className="text-xs font-bold tracking-widest text-[#F23850]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold leading-snug text-[#171717]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#171717]/65">
                {description}
              </p>

              <ul className="mt-5 space-y-2">
                {examples.map((example) => (
                  <li
                    key={example}
                    className="flex gap-2 text-sm leading-relaxed text-[#171717]/70"
                  >
                    <span className="shrink-0 font-bold text-[#F23850]">
                      →
                    </span>
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Projets */}
      <section className="py-14 md:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Du concret</p>

          <h2 className="section-title">
            Quelques projets professionnels
            <span className="text-[#F23850]">.</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#171717]/65 md:text-base">
            Des collaborations et des réalisations qui illustrent les
            différentes facettes de mon activité.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[#1B00C9]/[0.09] bg-[#F5F5F7] p-5 md:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#F23850]">
                  {project.category}
                </p>

                <span className="text-xs font-bold text-[#171717]/35">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#171717]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#171717]/65">
                {project.description}
              </p>

              <span className="mt-5 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1B00C9]">
                {project.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl bg-[#1B00C9] px-6 py-9 text-white md:px-9 md:py-11">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex rounded-xl bg-white/10 p-3">
            <MessageCircle size={23} />
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-white/65">
            Une idée, un besoin, un projet ?
          </p>

          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Échangeons ensemble !
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            Vous souhaitez échanger autour d’une situation, d’un besoin
            d’adaptation ou d’un projet ? N’hésitez pas à me contacter pour
            en discuter.
          </p>

          <a
            href="mailto:hauck.garance@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1B00C9] transition hover:-translate-y-0.5 hover:bg-[#F5F5F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Me contacter
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}
