
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Lightbulb,
  HeartHandshake,
  Wrench,
  Layers3,
  Activity,
  FlaskConical,
  Image as ImageIcon,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Partir d’un besoin réel",
    text: "Le projet prend naissance à la suite d’une sciatalgie aiguë touchant un proche. À distance, les échanges se multiplient pour comprendre la situation et rechercher des pistes après l’essai de plusieurs appareils du commerce et différents traitements.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Formuler une hypothèse",
    text: "Une piste de réflexion émerge : explorer l’effet mécanique d’un dispositif externe qui accompagnerait l’ouverture de la courbure lombaire, dans l’objectif de modifier les contraintes exercées au niveau des espaces intervertébraux.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Prototyper et ajuster",
    text: "Plusieurs week-ends sont consacrés à la réalisation et aux essais d’une série de prototypes. Les premières versions sont fabriquées de façon artisanale, avec des moyens limités, puis ajustées au fil des observations.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Observer et poursuivre",
    text: "Dans ce premier cas, la personne concernée rapporte une amélioration. Ce retour constitue une observation encourageante, mais ne permet pas à lui seul de conclure à l’efficacité du dispositif. D’autres essais et une évaluation plus approfondie ont été et sont encore nécessaires.",
    icon: Activity,
  },
];

const placeholders = [
  "Photo du premier prototype",
  "Détail de la conception / impression 3D",
  "Évolution des différentes versions",
];

const visuals = [
  {
    label: "Premier prototype",
    image: `${import.meta.env.BASE_URL}assets/images/proto_1_lombaire.png`,
  },

  {
    label: "Deuxième prototype",
    image: `${import.meta.env.BASE_URL}assets/images/proto_2_lombaire.png`,
  },

  {
    label: "Version actuelle",
    image: `${import.meta.env.BASE_URL}assets/images/proto_final_lombaire.png`,
  },
];

export default function CeinturesDos() {
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
            Conception · Prototypage · Impression 3D
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Ceinture lombaire
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Explorer une piste de conception à partir d’un besoin concret :
            imaginer, fabriquer et faire évoluer un dispositif expérimental
            avec des moyens artisanaux.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Projet familial", "Prototypage", "Fabrication artisanale"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ORIGINE DU PROJET */}
      <section className="grid gap-8 py-14 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="section-kicker">À l’origine du projet</p>

          <h2 className="section-title mb-5">
            Une situation personnelle devenue point de départ d’une recherche
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
            <p>
              L’idée de cet appareil est née à la suite d’une sciatalgie aiguë
              chez l’un de mes proches. Lui en Bretagne, moi en région parisienne :
              les échanges téléphoniques se sont multipliés pour comprendre la
              situation et chercher des solutions.
            </p>

            <p>
              Après l’achat et l’essai de plusieurs dispositifs commerciaux,
              ainsi que différents traitements, nous avons choisi d’explorer
              une autre piste. J’ai passé plusieurs week-ends auprès de lui
              pour participer à la conception et aux essais d’un appareil
              original.
            </p>
          </div>

          <p className="handwritten-note mt-5">
            Une idée née du terrain !
          </p>
        </div>

        <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-[#F5F5F7] p-5">
          <div className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#1B00C9]/20 px-5 text-center">
            <p className="text-sm font-bold text-black/75">
              Visuel principal du dispositif
            </p>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/proto_final_lombaire.png`}
              alt="Photo de la ceinture lombaire"
              className="max-h-[420px] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* DÉMARCHE */}
      <section className="rounded-3xl bg-[#F5F5F7] px-5 py-9 sm:px-8 sm:py-10">
        <div className="mb-7 max-w-3xl">
          <p className="section-kicker">La démarche</p>

          <h2 className="section-title">
            De l’hypothèse aux premiers prototypes
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-black/65">
            Le projet s’est construit progressivement, en alternant réflexion,
            fabrication et essais. L’objectif était de matérialiser une hypothèse
            mécanique et d’observer le comportement du dispositif.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {stages.map(({ number, title, text, icon: Icon }) => (
            <article
              key={number}
              className="soft-card p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-widest text-[#F23850]">
                  {number}
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

      {/* HYPOTHÈSE */}
      <section className="grid gap-8 py-14 md:grid-cols-2 md:items-start">
        <div>
          <p className="section-kicker">L’hypothèse explorée</p>

          <h2 className="section-title mb-5">
            Agir sur la courbure lombaire
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-black/70 sm:text-base">
            <p>
              La réflexion de départ consiste à explorer si un dispositif externe
              pourrait accompagner une modification de la courbure lombaire,
              parfois décrite comme une ouverture de l’arc lombaire. L’hypothèse
              est que ce mouvement pourrait modifier les contraintes mécaniques
              autour des disques intervertébraux.
            </p>

            <p>
              Cette piste a guidé les formes et les ajustements des prototypes.
              Elle reste une hypothèse de conception : les observations d’un cas
              isolé ne permettent pas de démontrer un effet de décompression ni
              une efficacité thérapeutique.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1B00C9]/10 p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3 text-main">
            <FlaskConical size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Statut du projet
            </span>
          </div>

          <h3 className="mb-3 text-lg font-extrabold tracking-tight">
            Un prototype expérimental
          </h3>

          <p className="text-sm leading-relaxed text-black/65">
            Un premier retour positif a été rapporté par la personne pour
            laquelle le dispositif a été conçu. Il s’agit d’une observation
            individuelle, qui devra être mise en perspective avec d’autres
            essais et une évaluation indépendante.
          </p>

          <div className="mt-5 rounded-xl bg-[#F5F5F7] p-4 text-xs leading-relaxed text-black/65">
            Le dispositif ne constitue pas un traitement médical validé et ne
            remplace ni un diagnostic ni l’accompagnement d’un professionnel
            de santé.
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="section-kicker">En images</p>

          <h2 className="section-title">Prototypes et évolutions</h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
            Les visuels permettront de montrer les différentes étapes de
            fabrication, les ajustements et l’évolution des prototypes.
          </p>
        </div>


<div className="grid gap-3 sm:grid-cols-3">
  {visuals.map((visual) => (
    <div
      key={visual.image}
      className="overflow-hidden rounded-2xl border border-[#1B00C9]/10 bg-white"
    >
      <img
        src={visual.image}
        alt={visual.label}
        className="aspect-[4/3] w-full object-contain"
      />

      <p className="p-3 text-center text-xs font-bold text-black/60">
        {visual.label}
      </p>
    </div>
  ))}
</div>

      </section>

      {/* SUITE DU PROJET */}
      <section className="rounded-3xl bg-[#1B00C9] px-6 py-9 text-white sm:px-9 sm:py-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/65">
          Et après ?
        </p>

        <h2 className="mb-4 max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
          Poursuivre les essais et faire évoluer la conception
        </h2>

        <p className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
          La suite du projet pourrait consister à tester le dispositif dans
          d’autres situations, à documenter plus précisément les réglages et
          les ressentis, puis à améliorer sa fabrication et sa reproductibilité.
          L’ambition était de passer d’une réalisation artisanale à un prototype
          mieux abouti, sans anticiper les résultats de futures évaluations.
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
