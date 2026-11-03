
import { useState } from "react";
import Carousel from "./global/Carousel";
import { Github, Linkedin, ExternalLink, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");
  const [isMore, setIsMore] = useState(false);

  const translatedProjects = t("projects", { returnObjects: true });
  const projects = Array.isArray(translatedProjects)
    ? translatedProjects
    : [];

  const getLinkIcon = (link = "") => {
    if (link.includes("github.com")) return Github;
    if (link.includes("linkedin.com")) return Linkedin;
    return ExternalLink;
  };

  const getLinkLabel = (link = "") => {
    if (link.includes("github.com")) return t("git_label");
    if (link.includes("linkedin.com")) return t("linkedin_label");
    return t("web_label");
  };

  const priorityProjects = projects.filter((project) => project.priority);
  const otherProjects = projects.filter((project) => !project.priority);

  return (
    <section
      id="projects-section"
      data-animate="stagger"
      data-animate-lifetime="once"
      className="relative scroll-mt-28 px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-10 md:mb-12">
          <p className="section-kicker">
            Du concret, des idées, des usages
          </p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">
              {t("title")}
              <span className="text-[#F23850]">.</span>
            </h2>

            <p className="handwritten-note hidden sm:block">
              Place à la créativité !
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#171717]/65 md:text-base">
            Des projets à la croisée de l'ergothérapie, de l'innovation
            et de l'accessibilité. Autant d'occasions d'explorer,
            de concevoir et d'expérimenter.
          </p>
        </div>

        {/* Projets principaux */}
        {priorityProjects.length > 0 && (
          <div className="relative z-10 overflow-hidden rounded-2xl bg-[#F5F5F7] p-3 sm:p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3 px-2 pt-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F23850]">
                  À la une
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#171717] md:text-xl">
                  Projets à découvrir
                </h3>
              </div>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1B00C9]">
                Sélection
              </span>
            </div>

            <Carousel projects={priorityProjects} />
          </div>
        )}

        {/* Bouton afficher plus */}
        {otherProjects.length > 0 && (
          <div className="mt-8 flex justify-center md:justify-start">
            <button
              type="button"
              aria-expanded={isMore}
              onClick={() => setIsMore(!isMore)}
              className="inline-flex items-center gap-2 rounded-full bg-[#1B00C9] px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#3320E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B00C9]"
            >
              {isMore ? t("seeLess") : t("seeMore")}
              <ArrowUpRight
                size={17}
                className={`transition-transform duration-300 ${
                  isMore ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Autres projets */}
        <AnimatePresence initial={false}>
          {isMore && otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="grid gap-4 pt-7 sm:grid-cols-2 xl:grid-cols-3">
                {otherProjects.map((project, index) => {
                  const Icon = getLinkIcon(project.link);

                  return (
                    <article
                      key={`${project.name}-${index}`}
                      className="group overflow-hidden rounded-2xl border border-[#1B00C9]/[0.09] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,0,201,0.07)]"
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden bg-[#F5F5F7]">
                        <img
                          src={
                              project.image
                                ? `${import.meta.env.BASE_URL}assets/images/${project.image}`
                                : project.path
                                  ? `${import.meta.env.BASE_URL}assets/images/${project.path}`
                                  : undefined
                            }
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />

                        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#1B00C9]">
                          Projet {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Contenu */}
                      <div className="flex min-h-40 flex-col p-5">
                        <h3 className="mb-3 text-lg font-bold leading-snug text-[#171717]">
                          {project.name}
                        </h3>

                        {project.tech && (
                          <p className="mb-5 text-sm leading-relaxed text-[#171717]/60">
                            <span className="font-semibold text-[#1B00C9]">
                              Outils :{" "}
                            </span>
                            {project.tech}
                          </p>
                        )}

                        <div className="mt-auto flex justify-end">
                          {project.link &&
                            project.link !== "#" &&
                            /^https?:\/\//i.test(project.link) && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={getLinkLabel(project.link)}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B00C9] transition-colors hover:text-[#F23850] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B00C9]"
                              >
                                Découvrir
                                <Icon size={16} />
                              </a>
                            )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Conclusion */}
        <div className="mt-12 flex items-start gap-4 border-t border-[#171717]/10 pt-7 md:mt-14">
          <span className="mt-0.5 text-xl text-[#F23850]">↗</span>

          <div>
            <p className="text-sm leading-relaxed text-[#171717]/75 md:text-base">
              Chaque projet est une occasion de questionner les usages,
              d'expérimenter et de chercher des solutions adaptées aux besoins.
            </p>
            <p className="handwritten-note mt-2 text-base">
              Toujours partir du besoin !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
