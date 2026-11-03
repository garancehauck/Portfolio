
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Gamepad2,
  Hand,
  Smartphone,
  Activity,
  BarChart3,
  SlidersHorizontal,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "Une orthèse instrumentée",
    text: "Le prototype associe plusieurs types de capteurs — flexion, pression et mouvement — pour recueillir des informations sur la réalisation des exercices.",
  },
  {
    icon: Gamepad2,
    title: "Des exercices sous forme de jeux",
    text: "Une application Android connectée à l’orthèse propose différents jeux de rééducation afin de rendre les exercices plus ludiques et engageants.",
  },
  {
    icon: BrainCircuit,
    title: "Une difficulté qui s’adapte",
    text: "Un agent artificiel ajuste automatiquement le niveau de difficulté des jeux en fonction des performances mesurées, pour proposer un défi adapté à l’utilisateur.",
  },
  {
    icon: BarChart3,
    title: "Des données pour suivre les progrès",
    text: "Les capteurs permettent de recueillir des données objectives sur les exercices. L’ambition est de donner des repères complémentaires pour observer l’évolution des performances.",
  },
];

const steps = [
  {
    number: "01",
    title: "Imaginer une solution",
    text: "Dans le cadre du Master MIASHS, parcours Technologie et Handicap, nous avons travaillé sur une solution associant une orthèse instrumentée et une application de rééducation.",
  },
  {
    number: "02",
    title: "Mesurer le mouvement",
    text: "L’orthèse intègre des capteurs de flexion, de pression et de mouvement afin de recueillir des informations pendant les exercices proposés.",
  },
  {
    number: "03",
    title: "Créer une expérience ludique",
    text: "Nous avons développé une application Android connectée à l’orthèse, avec plusieurs jeux conçus pour accompagner les exercices de la main.",
  },
  {
    number: "04",
    title: "Personnaliser l’entraînement",
    text: "Un agent artificiel adapte le niveau de difficulté en fonction des performances de l’utilisateur, afin de faire évoluer le défi au fil de l’entraînement.",
  },
];

const collaborators = [
  {
    name: "Marie-Ly Manceau",
    url: "https://www.linkedin.com/in/marie-ly-manceau-487b94271/",
  },
  {
    name: "Hocine Kadem",
    url: "https://www.linkedin.com/in/hocine-kadem/",
  },
  {
    name: "Sarah Bussi",
    url: "https://www.linkedin.com/in/sarah-bussi-139063220/",
  },
];

const gallery = [
  {
    image: `${import.meta.env.BASE_URL}assets/images/orthese.png`,
    description: "Vue d’ensemble du prototype d’orthèse",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/images/interface_application.png`,
    description: "Page d’accueil de l’application",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/images/exemple_jeu.png`,
    description: "Exemple de jeu présent dans l’application",
  },
];

export default function Brasvo() {
  return (
    <div className="pb-16">
      <Link
        to="/"
        state={{ scrollTo: "projects" }}
        className="arrow-link mb-8"
      >
        <ArrowLeft size={16} />
        Retour aux projets
      </Link>

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-[#100A45] px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[34px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-[#F23850]/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FF8796]">
            Projet de Master · Rééducation · Technologie
          </p>

          <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Bra(s)vo
          </h1>

          <h2 className="mb-5 text-lg font-bold leading-snug text-white/75 sm:text-xl">
            Une orthèse connectée pour la rééducation de la main
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Et si la rééducation de la main devenait plus motivante, tout en
            permettant de mieux observer les performances réalisées pendant
            les exercices ?
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Capteurs",
              "Application Android",
              "Jeux de rééducation",
              "Adaptation intelligente",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINE DU PROJET */}
      <section className="grid gap-8 py-14 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="section-kicker">À l’origine du projet</p>
          <h2 className="section-title mb-5">
            Associer technologie, jeu et rééducation
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
            <p>
              Réalisé dans le cadre de notre Master MIASHS, parcours Technologie
              et Handicap, Bra(s)vo est un projet de conception d’un prototype
              d’orthèse intelligente destiné à accompagner la rééducation de la main.
            </p>
            <p>
              Nous avons imaginé une solution qui ne se limite pas à proposer
              des exercices : elle cherche aussi à recueillir des informations
              sur leur réalisation et à rendre l’entraînement plus engageant
              grâce à une application sous forme de jeux.
            </p>
          </div>

          <p className="handwritten-note mt-5">
            De la conception à l’expérimentation !
          </p>
        </div>

        <figure className="overflow-hidden rounded-2xl bg-[#F5F5F7] p-3">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/orthese.png`}
            alt="Vue d’ensemble du prototype d’orthèse Bra(s)vo"
            className="max-h-[360px] w-full rounded-xl object-contain"
          />
          <figcaption className="px-2 pb-1 pt-3 text-center text-xs text-black/50">
            Le prototype d’orthèse instrumentée
          </figcaption>
        </figure>
      </section>

      {/* COMPOSANTES */}
      <section className="rounded-3xl bg-[#F5F5F7] px-5 py-9 sm:px-8 sm:py-10">
        <div className="mb-7 max-w-2xl">
          <p className="section-kicker">Les composantes du projet</p>
          <h2 className="section-title">
            Une solution articulée autour de quatre idées
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/60">
            Le prototype combine un dispositif de mesure, une application
            interactive et un mécanisme d’adaptation de la difficulté.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="soft-card p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-xl bg-[#1B00C9]/[0.07] p-2.5 text-main">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-bold text-[#F23850]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mb-2 text-base font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-black/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="grid gap-8 py-14 md:grid-cols-2 md:items-start">
        <div>
          <p className="section-kicker">Fonctionnement imaginé</p>
          <h2 className="section-title mb-5">
            De l’exercice aux données, puis à l’adaptation
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
            <p>
              Pendant les exercices, les capteurs de l’orthèse recueillent des
              données liées à la flexion, à la pression et au mouvement de la main.
              Ces informations sont utilisées par l’application Android.
            </p>
            <p>
              L’utilisateur réalise des activités sous forme de jeux. En fonction
              des performances recueillies, l’agent artificiel ajuste le niveau
              de difficulté pour faire évoluer l’exercice et maintenir un défi
              adapté à ses capacités.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1B00C9]/10 p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-3 text-main">
            <SlidersHorizontal size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Boucle d’adaptation
            </span>
          </div>

          <div className="space-y-2">
            {[
              { icon: Hand, label: "Réalisation d’un exercice" },
              { icon: Activity, label: "Mesure des mouvements et des pressions" },
              { icon: Smartphone, label: "Transmission des données à l’application" },
              { icon: BrainCircuit, label: "Adaptation du niveau de difficulté" },
              { icon: Gamepad2, label: "Proposition d’un nouvel exercice" },
            ].map(({ icon: Icon, label }, index) => (
              <div key={label}>
                <div className="flex items-center gap-3 rounded-xl bg-[#F5F5F7] p-3">
                  <span className="rounded-lg bg-white p-2 text-main">
                    <Icon size={17} />
                  </span>
                  <span className="text-xs font-bold text-black/75 sm:text-sm">
                    {label}
                  </span>
                </div>
                {index < 4 && (
                  <div className="ml-7 h-2.5 w-px bg-[#1B00C9]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉMARCHE */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="section-kicker">Notre démarche</p>
          <h2 className="section-title">De l’idée au prototype</h2>
          <p className="handwritten-note mt-2">Les grandes étapes du projet</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map(({ number, title, text }) => (
            <article
              key={number}
              className="rounded-2xl border border-[#1B00C9]/10 p-5 transition-colors hover:border-[#1B00C9]/30"
            >
              <span className="mb-3 block text-xs font-extrabold tracking-widest text-[#F23850]">
                {number}
              </span>
              <h3 className="mb-2 text-base font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-black/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIE */}
      <section className="mb-14 rounded-3xl bg-[#F5F5F7] px-5 py-9 sm:px-8 sm:py-10">
        <div className="mb-6">
          <p className="section-kicker">En images</p>
          <h2 className="section-title">Le prototype et l’application</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
            Découvrez le prototype de l’orthèse, les capteurs intégrés et quelques
            exemples de l’application développée dans le cadre du projet.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((item) => (
            <figure
              key={item.image}
              className="overflow-hidden rounded-2xl bg-white p-3"
            >
              <img
                 src={item.image}
                alt={item.description}
                className="h-56 w-full rounded-xl object-contain sm:h-64"
              />
              <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-semibold text-black/65">
                {item.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PUBLIC ET ÉQUIPE */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-[#100A45] p-6 text-white sm:p-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#FF8796]">
            Public et usages envisagés
          </p>
          <h2 className="mb-3 text-xl font-extrabold tracking-tight">
            Un outil complémentaire pour la rééducation
          </h2>
          <p className="text-sm leading-relaxed text-white/75">
            La solution a été pensée pour des personnes présentant des troubles
            de la motricité de la main, par exemple à la suite d’un AVC ou dans
            le contexte d’une maladie de Dupuytren. Elle pourrait également
            apporter aux ergothérapeutes des données complémentaires sur la
            réalisation des exercices.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            Ces indications décrivent les publics et usages envisagés dans le
            cadre du projet ; elles ne constituent pas une validation clinique
            du prototype.
          </p>
        </div>

        <div className="rounded-2xl border border-[#1B00C9]/10 p-6 sm:p-7">
          <div className="mb-3 flex items-center gap-2 text-main">
            <Users size={19} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Projet collectif
            </span>
          </div>

          <h2 className="mb-3 text-xl font-extrabold tracking-tight">
            Un travail réalisé en équipe
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-black/65">
            Bra(s)vo a été développé dans le cadre du Master, en collaboration
            avec :
          </p>

          <ul className="space-y-2">
            {collaborators.map(({ name, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-main transition hover:text-[#F23850]"
                >
                  {name}
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
            <li className="text-xs text-black/55">
              Et une quatrième étudiante du Master.
            </li>
          </ul>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="mt-14 rounded-3xl bg-[#1B00C9] px-6 py-9 text-white sm:px-9 sm:py-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/65">
          Ce que ce projet explore
        </p>

        <h2 className="mb-4 max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
          Croiser santé, technologie et expérience utilisateur
        </h2>

        <p className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
          Bra(s)vo illustre une démarche de conception à la croisée de la
          rééducation, des technologies connectées et du jeu vidéo. Le projet
          explore comment des données issues d’un dispositif porté et une
          adaptation intelligente peuvent contribuer à personnaliser une
          expérience d’entraînement.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-main transition hover:-translate-y-0.5"
          >
            <ArrowLeft size={15} />
            Voir les autres projets
          </Link>
        </div>
      </section>
    </div>
  );
}
