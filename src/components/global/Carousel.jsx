
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Carousel = ({ projects = [] }) => {
  const { t } = useTranslation("projects");
  const [current, setCurrent] = useState(0);

  if (projects.length === 0) return null;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[current];

  return (
    <div className="relative mx-auto my-8 w-full max-w-5xl px-2 sm:px-12">
      <article
        className="overflow-hidden rounded-[2rem] border border-[#171717]/10 bg-white shadow-sm"
        aria-live="polite"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#F5F5F7] p-6 md:min-h-[350px]">
            {project.path ? (
              <img
                src={`/assets/images/${project.path}`}
                alt=""
                className="h-full max-h-[350px] w-full object-contain"
              />
            ) : (
              <img
                src={`/assets/images/${project.image}`}
                alt={`Illustration du projet ${project.name}`}
                className="h-full max-h-[350px] w-full rounded-2xl object-contain"
              />
            )}

            <span className="absolute left-5 top-5 rounded-full bg-[#1B00C9] px-4 py-2 text-xs font-bold text-white">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#F23850]">
              Projet
            </p>

            <h3 className="mb-5 text-2xl font-bold leading-tight text-[#171717] md:text-3xl">
              {project.name}
            </h3>

            {project.tech && (
              <div className="mb-7">
                <p className="mb-2 text-sm font-bold text-[#1B00C9]">
                  Technologies et compétences
                </p>
                <p className="text-base leading-relaxed text-[#171717]/70">
                  {project.tech}
                </p>
              </div>
            )}

            {project.link && (
              <Link
                to={project.link}
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1B00C9] px-5 py-3 font-semibold text-white transition hover:bg-[#3320E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B00C9]"
              >
                Découvrir le projet
                <ArrowUpRight size={19} />
              </Link>
            )}
          </div>
        </div>
      </article>

      {projects.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label={t("previous")}
            className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#1B00C9]/20 bg-white text-[#1B00C9] shadow-md transition hover:bg-[#1B00C9] hover:text-white"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label={t("next")}
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#1B00C9]/20 bg-white text-[#1B00C9] shadow-md transition hover:bg-[#1B00C9] hover:text-white"
          >
            <ChevronRight size={25} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Projet ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-[#1B00C9]"
                    : "w-2.5 bg-[#171717]/20 hover:bg-[#F23850]"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
