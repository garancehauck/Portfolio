
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Globe,
  Image as ImageIcon,
  LockKeyhole,
  Monitor,
  Pencil,
  Users,
  CalendarDays,
} from "lucide-react";

const technologies = [
  { name: "HTML", detail: "Structure des pages" },
  { name: "CSS", detail: "Mise en forme et identité visuelle" },
  { name: "JavaScript", detail: "Interactions côté navigateur" },
  { name: "PHP", detail: "Fonctionnalités côté serveur" },
  { name: "MySQL", detail: "Stockage et gestion des données" },
];

const missions = [
  "Échanger avec l’association pour comprendre ses besoins et ses attentes.",
  "Prendre en compte la charte graphique et les contenus souhaités.",
  "Concevoir et développer le front-end du site.",
  "Développer le back-end et l’espace d’administration.",
  "Permettre à l’association de faire évoluer elle-même les contenus du site.",
];

const adminFeatures = [
  {
    icon: LockKeyhole,
    title: "Connexion à l’administration",
    description:
      "Un espace réservé aux personnes autorisées, accessible après connexion.",
  },
  {
    icon: CalendarDays,
    title: "Gestion des événements",
    description:
      "L’association peut ajouter et modifier les événements présentés sur le site.",
  },
  {
    icon: ImageIcon,
    title: "Gestion des photos",
    description:
      "L’association peut ajouter et gérer les photographies publiées sur le site.",
  },
  {
    icon: Pencil,
    title: "Mise à jour des contenus",
    description:
      "Un espace de gestion permet de faire évoluer les contenus sans solliciter systématiquement la développeuse.",
  },
];

const gallery = [
  {
    label: "Page d’accueil",
    image: `${import.meta.env.BASE_URL}assets/images/accueil_GOC.png`,
  },
  {
    label: "Une page intérieure",
    image: `${import.meta.env.BASE_URL}assets/images/page_interieure_GOC.png`,
  },
  {
    label: "Espace de connexion",
    image: `${import.meta.env.BASE_URL}assets/images/connexion_GOC.png`,
  },
  {
    label: "Gestion des événements ou des photos",
    image: `${import.meta.env.BASE_URL}assets/images/ajout_photos_admin.png`,
  },
];

const GrandOralCitoyen = () => {
  return (
    <article
      id="grand-oral-citoyen"
      className="mx-auto max-w-6xl py-6 md:py-10"
    >
      <Link to="/" state={{ scrollTo: "projects" }} className="arrow-link mb-8">
        <ArrowLeft size={16} />
        Retour aux projets
      </Link>

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-[#1B00C9] text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[34px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#F23850]/20 blur-3xl" />

        <div className="relative grid gap-7 p-6 sm:p-9 md:grid-cols-[1fr_0.85fr] md:items-center md:p-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#F7A9B3]">
              Projet réalisé dans le cadre du Master
            </p>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Le Grand Oral Citoyen
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Conception et développement d’un site web accessible et
              administrable, en collaboration avec une association.
            </p>

            <a
              href="https://legrandoralcitoyen.fr/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#1B00C9] transition hover:-translate-y-0.5 hover:bg-[#F5F5F7]"
            >
              Visiter le site
              <ArrowUpRight size={15} />
            </a>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/accueil_GOC.png`}
              alt="Capture d’écran de la page d’accueil du site Grand Oral Citoyen"
              className="w-full rounded-xl object-contain"
            />
            <figcaption className="px-2 pb-1 pt-3 text-center text-xs text-white/60">
              Aperçu de la page d’accueil
            </figcaption>
          </figure>
        </div>
      </header>

      {/* REPÈRES RAPIDES */}
      <section className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, label: "Collaboration", value: "Avec une association" },
          { icon: Code2, label: "Réalisation", value: "Développement seule" },
          { icon: Monitor, label: "Développement", value: "Front-end & back-end" },
          { icon: LockKeyhole, label: "Administration", value: "Contenus modifiables" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="soft-card p-4"
          >
            <Icon size={20} className="mb-3 text-main" />
            <p className="text-[11px] font-bold uppercase tracking-wider text-black/45">
              {label}
            </p>
            <p className="mt-1 text-sm font-bold text-black">{value}</p>
          </div>
        ))}
      </section>

      {/* CONTEXTE */}
      <section className="grid gap-6 py-12 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
        <div>
          <p className="section-kicker">01 · Le contexte</p>
          <h2 className="section-title">
            Répondre aux besoins d’une association
          </h2>
          <p className="handwritten-note mt-4">Partir du besoin concret !</p>
        </div>

        <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
          <p>
            Dans le cadre de mon Master MIASHS, parcours Technologie et
            Handicap, j’ai collaboré avec une association souhaitant disposer
            de son propre site web.
          </p>
          <p>
            L’association nous a transmis sa charte graphique, ses attentes et
            les contenus qu’elle souhaitait retrouver sur le site. À partir de
            ces éléments, l’objectif était de concevoir une plateforme qui
            réponde à ses besoins et qu’elle puisse ensuite faire évoluer de
            manière autonome.
          </p>
        </div>
      </section>

      {/* CONTRIBUTION */}
      <section className="rounded-3xl bg-[#F5F5F7] px-5 py-8 sm:px-8 sm:py-9">
        <div className="mb-6 max-w-3xl">
          <p className="section-kicker">02 · Ma contribution</p>
          <h2 className="section-title">
            Un développement réalisé de A à Z
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/65">
            J’ai travaillé seule sur le développement du site, en m’appuyant
            sur les échanges avec l’association pour traduire ses demandes en
            éléments concrets.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {missions.map((mission, index) => (
            <div
              key={mission}
              className="flex items-start gap-3 rounded-xl bg-white p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B00C9] text-[11px] font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-black/75">
                {mission}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-12">
        <div className="mb-6 max-w-3xl">
          <p className="section-kicker">03 · Environnement technique</p>
          <h2 className="section-title">Les technologies utilisées</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/65">
            Le site repose sur des technologies web utilisées pour développer
            l’interface, les fonctionnalités côté serveur et la gestion des
            données.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className="soft-card p-4"
            >
              <Code2 size={20} className="mb-4 text-main" />
              <h3 className="text-base font-extrabold text-black">
                {technology.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-black/55">
                {technology.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ADMINISTRATION */}
      <section className="overflow-hidden rounded-3xl bg-[#100A45] px-5 py-8 text-white sm:px-8 sm:py-9">
        <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker !text-[#FF8796]">
              04 · Autonomie de l’association
            </p>
            <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Un espace d’administration dédié
            </h2>
            <p className="text-sm leading-relaxed text-white/75">
              Le site comprend une partie administrateur avec un système de
              connexion. Les membres autorisés peuvent ainsi gérer certains
              contenus directement, sans devoir faire appel à la développeuse
              pour chaque mise à jour.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {adminFeatures.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/15 bg-white/10 p-4"
              >
                <Icon size={20} className="mb-3 text-[#FF8796]" />
                <h3 className="mb-2 text-sm font-extrabold">{title}</h3>
                <p className="text-xs leading-relaxed text-white/65">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <figure className="mt-7 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/accueil_admin_GOC.png`}
            alt="Capture d’écran de la page d’accueil de la partie administrateur du site Grand Oral Citoyen"
            className="max-h-[420px] w-full rounded-xl object-contain"
          />
          <figcaption className="pt-3 text-center text-xs text-white/60">
            Page d’accueil de l’espace administrateur
          </figcaption>
        </figure>
      </section>

      {/* GALERIE */}
      <section className="py-12">
        <div className="mb-6 max-w-3xl">
          <p className="section-kicker">05 · Aperçu du résultat</p>
          <h2 className="section-title">Le site en images</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/65">
            Quelques captures permettent de montrer concrètement le résultat
            du travail réalisé, côté visiteurs comme côté administration.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((item) => (
            <figure
              key={item.label}
              className="soft-card overflow-hidden p-3"
            >
              <img
                src={`/assets/images/${item.image}`}
                alt={`Capture d’écran : ${item.label} du site Grand Oral Citoyen`}
                className="h-52 w-full rounded-xl bg-[#F5F5F7] object-contain sm:h-60"
              />
              <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-bold text-black/70">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BILAN */}
      <section className="rounded-3xl bg-[#FDE9EC] px-5 py-8 sm:px-8 sm:py-9">
        <p className="section-kicker !text-[#C52B45]">06 · Bilan</p>
        <h2 className="section-title !text-black">
          Ce que ce projet m’a apporté
        </h2>

        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-black/75 sm:text-base">
          Ce projet m’a permis de mobiliser mes compétences en développement
          web sur un besoin concret, de mener seule la réalisation technique
          d’un site complet et de travailler en collaboration avec une
          association. Il m’a également amenée à penser le site au-delà de sa
          mise en ligne, en intégrant dès sa conception la possibilité pour ses
          futurs utilisateurs de gérer leurs contenus en autonomie.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Développement fullstack",
            "HTML / CSS / JavaScript",
            "PHP / MySQL",
            "Analyse des besoins",
            "Gestion de projet",
            "Collaboration client",
            "Accessibilité numérique",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1B00C9]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="arrow-link"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>

        <a
          href="https://legrandoralcitoyen.fr/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-link"
        >
          Visiter le site
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </article>
  );
};

export default GrandOralCitoyen;
