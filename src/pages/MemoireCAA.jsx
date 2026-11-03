
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Eye,
  SlidersHorizontal,
  MessageSquareText,
  ClipboardList,
  Lightbulb,
  FileText,
  ExternalLink,
  Users,
} from "lucide-react";

// Dépose le mémoire PDF dans public/assets/files/
// et adapte ce chemin si nécessaire.
const memoPdf = "/assets/files/Memoire_Garance_Hauck.pdf";

const methodology = [
  {
    icon: Eye,
    title: "Analyse des outils existants",
    text: "Analyse des interfaces numériques de CAA utilisées dans la structure afin d’identifier les possibilités et les limites de personnalisation.",
  },
  {
    icon: MessageSquareText,
    title: "Entretiens avec des orthophonistes",
    text: "Des entretiens semi-directifs ont permis de recueillir les pratiques professionnelles et les difficultés rencontrées lors de l’utilisation et du paramétrage des outils.",
  },
  {
    icon: SlidersHorizontal,
    title: "Conception d’un prototype",
    text: "À partir des résultats, réalisation d’un prototype interactif de guide de personnalisation destiné à accompagner les professionnels.",
  },
  {
    icon: Users,
    title: "Évaluation auprès de professionnels",
    text: "Le prototype a été présenté à des professionnels afin d’explorer l’intérêt de cette approche d’accompagnement à la personnalisation.",
  },
];

const principles = [
  {
    number: "01",
    title: "Partir des besoins fonctionnels",
    text: "Le guide s’appuie sur les besoins fonctionnels de l’utilisateur pour orienter les adaptations possibles.",
  },
  {
    number: "02",
    title: "Proposer des adaptations",
    text: "Des adaptations sont automatiquement associées aux besoins identifiés afin de guider le professionnel dans le paramétrage.",
  },
  {
    number: "03",
    title: "Laisser la main au professionnel",
    text: "Les paramètres proposés restent ajustables manuellement par le professionnel, qui conserve la possibilité d’adapter la configuration.",
  },
];

const keywords = [
  "Communication Alternative et Améliorée",
  "Accessibilité numérique",
  "Déficience visuelle",
  "Technologie du handicap",
  "Personnalisation",
  "Conception centrée utilisateur",
];

export default function MemoireCAA() {
  return (
    <div className="pb-16">
      {/* RETOUR */}
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

        <div className="relative max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FF8796]">
            Mémoire de Master · Accessibilité numérique · CAA
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Accessibilité des outils numériques de Communication Alternative
            et Améliorée
          </h1>

          <p className="mb-5 max-w-3xl text-base font-bold leading-relaxed text-white/70 sm:text-lg">
            Pour les personnes présentant une déficience visuelle : analyse
            des pratiques professionnelles et piste de conception
          </p>

          <div className="mb-6 max-w-3xl border-l-2 border-[#F23850] pl-4">
            <p className="text-sm leading-relaxed text-white/85 sm:text-base">
              Comment accompagner les professionnels dans la personnalisation
              des outils numériques de CAA auprès de personnes présentant une
              déficience visuelle ?
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Communication Alternative et Améliorée",
              "Déficience visuelle",
              "Accessibilité numérique",
              "Personnalisation",
              "Conception centrée utilisateur",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/assets/files/MemoireCAA.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#100A45] transition hover:-translate-y-0.5"
          >
            <BookOpen size={16} />
            Lire le mémoire (PDF)
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="grid gap-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <p className="section-kicker">Contexte et problématique</p>

          <h2 className="section-title mb-5">
            Mieux accompagner la personnalisation des outils de CAA
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
            <p>
              La Communication Alternative et Améliorée (CAA) constitue un
              moyen essentiel de soutien à la communication pour les personnes
              présentant des difficultés d’expression orale. Les outils
              numériques de CAA se développent et offrent de nombreuses
              possibilités de personnalisation.
            </p>

            <p>
              Pourtant, leur mise en place peut rester complexe pour les
              professionnels, notamment lorsqu’ils accompagnent des personnes
              présentant des profils associant plusieurs troubles.
            </p>

            <p>
              Ce mémoire s’intéresse à l’accompagnement des professionnels
              dans la mise en place des outils numériques de CAA auprès de
              personnes présentant une déficience visuelle. La réflexion est
              née d’une problématique rencontrée au sein de l’Institut
              d’Éducation Motrice (IEM) de mon lieu d’alternance.
            </p>

            <p>
              Des difficultés initialement attribuées à la déficience visuelle
              ont amené à élargir la réflexion aux limites de personnalisation
              des outils existants.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl bg-[#F5F5F7] p-5 sm:p-6">
          <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-main">
            <Lightbulb size={22} />
          </div>

          <p className="section-kicker">Question au cœur du mémoire</p>

          <h3 className="text-lg font-extrabold leading-relaxed tracking-tight text-[#100A45] sm:text-xl">
            Comment faciliter la personnalisation des outils numériques de
            CAA pour mieux prendre en compte les besoins des personnes
            présentant une déficience visuelle ?
          </h3>

          <p className="handwritten-note mt-5">
            Partir des besoins pour adapter les outils !
          </p>
        </aside>
      </section>

      {/* MÉTHODOLOGIE */}
      <section className="rounded-3xl bg-[#F5F5F7] px-5 py-9 sm:px-8 sm:py-10">
        <div className="mb-7 max-w-3xl">
          <p className="section-kicker">Démarche méthodologique</p>

          <h2 className="section-title">
            Une démarche en quatre temps
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-black/65">
            L’étude associe l’analyse des outils utilisés sur le terrain,
            le recueil des pratiques professionnelles et l’exploration
            d’une piste de conception.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {methodology.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="soft-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-widest text-[#F23850]">
                  0{index + 1}
                </span>

                <span className="rounded-xl bg-[#1B00C9]/[0.07] p-2.5 text-main">
                  <Icon size={20} />
                </span>
              </div>

              <h3 className="mb-2 text-base font-extrabold tracking-tight">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-black/65">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PISTE DE CONCEPTION */}
      <section className="grid gap-8 py-14 md:grid-cols-2 md:items-start">
        <div>
          <p className="section-kicker">Piste de conception</p>

          <h2 className="section-title mb-5">
            Un guide de personnalisation guidée
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
            <p>
              À partir des résultats obtenus, un prototype interactif a été
              réalisé pour explorer une nouvelle approche de personnalisation
              des outils numériques de CAA.
            </p>

            <p>
              Destiné aux professionnels, ce guide associe automatiquement
              des adaptations aux besoins fonctionnels de l’utilisateur.
              Le professionnel peut ensuite ajuster manuellement les
              paramètres proposés.
            </p>

            <p>
              L’objectif est de proposer un accompagnement à la configuration,
              sans remplacer l’expertise ni le jugement du professionnel.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1B00C9]/10 p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-3 text-main">
            <SlidersHorizontal size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Principe du guide
            </span>
          </div>

          <div className="space-y-5">
            {principles.map(({ number, title, text }) => (
              <div key={number} className="flex gap-3">
                <span className="pt-0.5 text-xs font-extrabold tracking-widest text-[#F23850]">
                  {number}
                </span>

                <div>
                  <h3 className="mb-1 text-sm font-extrabold">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-black/60">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSULTATS ET PERSPECTIVES */}
      <section className="mb-14 rounded-3xl bg-[#100A45] px-6 py-9 text-white sm:px-9 sm:py-10">
        <p className="section-kicker !text-[#FF8796]">
          Résultats et perspectives
        </p>

        <h2 className="mb-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          Vers des assistants de configuration intégrés aux outils de CAA
        </h2>

        <p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          L’évaluation du prototype auprès de professionnels met en évidence
          l’intérêt d’un accompagnement à la personnalisation des outils de
          CAA. Cette piste ouvre des perspectives de développement vers des
          assistants de configuration qui pourraient être intégrés directement
          aux solutions existantes.
        </p>
      </section>

      {/* MOTS-CLÉS ET PDF */}
      <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[#1B00C9]/10 p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3 text-main">
            <ClipboardList size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Mots-clés
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {keywords.map((word) => (
              <span
                key={word}
                className="rounded-full bg-[#F5F5F7] px-3 py-2 text-xs font-semibold text-[#100A45]"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#F5F5F7] p-5 sm:p-6">
          <div className="mb-3 inline-flex rounded-xl bg-white p-3 text-main">
            <FileText size={21} />
          </div>

          <h2 className="mb-2 text-lg font-extrabold tracking-tight">
            Consulter le mémoire
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-black/60">
            Retrouvez le document complet au format PDF.
          </p>

          <a
            href="/assets/files/MemoireCAA.pdf"
            target="_blank"
            rel="noreferrer"
            className="arrow-link"
          >
            <BookOpen size={16} />
            Ouvrir le mémoire
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* RETOUR */}
      <div className="mt-10 border-t border-black/10 pt-6">
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="arrow-link"
        >
          <ArrowLeft size={16} />
          Voir les autres projets
        </Link>
      </div>
    </div>
  );
}
