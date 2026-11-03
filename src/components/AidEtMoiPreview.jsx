
import { Link } from "react-router-dom";

const AidEtMoiPreview = () => {
  return (
    <section className="my-20 overflow-hidden rounded-3xl bg-white p-8 sm:p-12">
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">

        {/* Texte à gauche */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F23850]">
            Mon activité indépendante
          </p>

          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">
            Aid’& moi
          </h2>

          <p className="mb-6 max-w-3xl text-base leading-relaxed">
            À travers Aid’& moi, je mets mes compétences en ergothérapie,
            handicap et technologies au service de solutions adaptées
            aux besoins de chacun.
          </p>

          <Link
            to="/aid-et-moi"
            className="inline-block rounded-xl bg-[#1B00C9] px-6 py-3 text-white transition hover:bg-[#3320E8]"
          >
            Découvrir Aid’& moi
          </Link>
        </div>

        {/* Image à droite */}
        <div className="flex min-h-56 items-center justify-center rounded-2xl bg-[#F5F5F7] p-5">
          <img
            src="/assets/images/logo_aidetmoi.png"
            alt="Présentation de l'activité Aid’& moi"
            className="max-h-72 w-full rounded-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default AidEtMoiPreview;
