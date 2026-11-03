
import { useState, useRef, useEffect } from "react";
import {
  Linkedin,
  Instagram,
  ContactRound,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import { emailJSConfig } from "../utils/testEmailJS";

const Contact = () => {
  const { t } = useTranslation("contact");
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailJSConfig();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const name = form.current?.user_name?.value?.trim();
    const email = form.current?.user_email?.value?.trim();
    const message = form.current?.user_msg?.value?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};

    if (!name) newErrors.user_name = t("form.name_required");

    if (!email) {
      newErrors.user_email = t("form.email_required");
    } else if (!emailRegex.test(email)) {
      newErrors.user_email = t("form.email_invalid");
    }

    if (!message) newErrors.user_msg = t("form.msg_required");

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      const first = Object.keys(newErrors)[0];
      form.current?.[first]?.focus?.();
      setSubmitStatus("missing");
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#171717]/15 bg-[#F5F5F7] px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-[#171717]/35 focus:border-[#1B00C9] focus:ring-2 focus:ring-[#1B00C9]/10";

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/garance-hauck-50498124b?",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aidetmoi?dlrf=Njlyc3VyOG1qYTBw&utm_source=qr",
      icon: Instagram,
    },
    {
      label: "Ma carte de visite",
      href: "https://drive.google.com/file/d/1NeZbOoxipQ5PksI7RPc6vjo4jwzGazpS/view?usp=share_link",
      icon: ContactRound,
    },
  ];

  return (
    <section
      id="contact-section"
      data-animate="stagger"
      data-animate-lifetime="once"
      className="scroll-mt-28 px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-10 md:mb-12">
          <p className="section-kicker">
            Une question, une idée, un projet ?
          </p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">
              {t("title", { defaultValue: "Contact" })}
              <span className="text-[#F23850]">.</span>
            </h2>

            <p className="handwritten-note hidden sm:block">
              Faisons connaissance !
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#171717]/65 md:text-base">
            {t("content", {
              defaultValue:
                "N’hésitez pas à me contacter pour échanger autour d’un projet, d’une idée ou d’une collaboration.",
            })}
          </p>
        </div>

        {/* Contenu */}
        <div className="grid items-stretch gap-5 md:grid-cols-[0.8fr_1.2fr] md:gap-7">
          {/* Coordonnées et réseaux */}
          <aside className="flex flex-col justify-between rounded-2xl bg-[#1B00C9] p-6 text-white md:p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/65">
                Restons en contact
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
                Construisons des solutions utiles et accessibles.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Ergothérapie, technologie et innovation : je suis toujours
                partante pour découvrir de nouvelles idées et échanger autour
                de nouveaux projets.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={19} />
                    {label}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>

            <p className="handwritten mt-7 text-right text-xl text-white/80">
              Au plaisir d'échanger !
            </p>
          </aside>

          {/* Formulaire */}
          <div className="rounded-2xl border border-[#1B00C9]/[0.09] bg-white p-5 md:p-7">
            <div className="mb-7">
              <h3 className="text-xl font-bold text-[#171717] md:text-2xl">
                {t("form.title", {
                  defaultValue: "M’envoyer un message",
                })}
              </h3>

              <p className="mt-2 text-sm text-[#171717]/55">
                Les champs marqués d’un * sont obligatoires.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} noValidate>
              {/* Messages de retour */}
              {submitStatus === "success" && (
                <div
                  role="alert"
                  className="mb-5 flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 p-3 text-sm text-green-800"
                >
                  <CheckCircle size={19} />
                  <span>{t("form.success")}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="mb-5 flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-800"
                >
                  <AlertCircle size={19} />
                  <span>{t("form.error")}</span>
                </div>
              )}

              {submitStatus === "missing" && (
                <div
                  role="alert"
                  className="mb-5 flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-800"
                >
                  <AlertCircle size={19} />
                  <span>
                    {errors.user_name ||
                      errors.user_email ||
                      errors.user_msg}
                  </span>
                </div>
              )}

              {/* Nom */}
              <div className="mb-5">
                <label
                  htmlFor="user_name"
                  className="text-sm font-semibold text-[#171717]"
                >
                  {t("form.name_field")} *
                </label>

                <input
                  required
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="name"
                  placeholder="Votre nom"
                  aria-invalid={Boolean(errors.user_name)}
                  aria-describedby={
                    errors.user_name ? "name-error" : undefined
                  }
                  onChange={() => clearError("user_name")}
                  className={`${inputClass} ${
                    errors.user_name ? "border-red-500" : ""
                  }`}
                />

                {errors.user_name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.user_name}
                  </p>
                )}
              </div>

              {/* E-mail */}
              <div className="mb-5">
                <label
                  htmlFor="user_email"
                  className="text-sm font-semibold text-[#171717]"
                >
                  E-mail *
                </label>

                <input
                  required
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="email"
                  placeholder="vous@exemple.fr"
                  aria-invalid={Boolean(errors.user_email)}
                  aria-describedby={
                    errors.user_email ? "email-error" : undefined
                  }
                  onChange={() => clearError("user_email")}
                  className={`${inputClass} ${
                    errors.user_email ? "border-red-500" : ""
                  }`}
                />

                {errors.user_email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.user_email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-7">
                <label
                  htmlFor="user_msg"
                  className="text-sm font-semibold text-[#171717]"
                >
                  Message *
                </label>

                <textarea
                  required
                  name="user_msg"
                  id="user_msg"
                  rows={5}
                  placeholder={t("form.msg_placeholder")}
                  aria-invalid={Boolean(errors.user_msg)}
                  aria-describedby={
                    errors.user_msg ? "message-error" : undefined
                  }
                  onChange={() => clearError("user_msg")}
                  className={`${inputClass} min-h-32 resize-y ${
                    errors.user_msg ? "border-red-500" : ""
                  }`}
                />

                {errors.user_msg && (
                  <p id="message-error" className="mt-1 text-xs text-red-600">
                    {errors.user_msg}
                  </p>
                )}
              </div>

              {/* Boutons */}
              <div className="flex flex-wrap justify-end gap-3">
                <button
                  type="reset"
                  disabled={isSubmitting}
                  onClick={() => {
                    setErrors({});
                    setSubmitStatus(null);
                  }}
                  className="rounded-full border border-[#171717]/20 px-5 py-2.5 text-sm font-semibold text-[#171717] transition hover:bg-[#F5F5F7] disabled:opacity-50"
                >
                  {t("form.reset_btn", { defaultValue: "Effacer" })}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F23850] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#D92740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F23850] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting
                    ? t("form.sending", {
                        defaultValue: "Envoi en cours...",
                      })
                    : t("form.submit_btn", {
                        defaultValue: "Envoyer le message",
                      })}

                  <ArrowUpRight size={17} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
