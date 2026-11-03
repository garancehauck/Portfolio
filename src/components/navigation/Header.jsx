
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navigation");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigation = (sectionId) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const navItems = [
    { label: t("header.home"), id: "home-section" },
    { label: t("header.about"), id: "about-section" },
    { label: "Aid’& moi", path: "/aid-et-moi" },
    { label: t("header.skills"), id: "skills-section" },
    { label: t("header.projects"), id: "projects-section" },
    { label: "Contact", id: "contact-section" },
  ];

  return (
    <header
      role="banner"
      className={`fixed z-50 mx-5 my-4 w-[97%] rounded-2xl bg-[#1B00C9] px-5 py-3 text-white shadow-small max-lg:mx-0 max-lg:my-0 max-lg:w-full max-lg:rounded-none ${
        isOpen ? "max-lg:h-screen" : "max-lg:h-fit"
      }`}
    >
      {/* BARRE PRINCIPALE */}
      <div className="flex items-center justify-between gap-4">

        {/* IDENTITÉ AID'& MOI */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Accueil - Garance Hauck"
        >
          <span className="text-3xl leading-none text-[#F23850] transition-transform duration-300 group-hover:rotate-12">
            ✿
          </span>

          <span className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight">
              Aid’& moi
            </span>
            <span className="handwritten -mt-1 text-sm text-[#FF9AA6]">
              avec Garance
            </span>
          </span>
        </Link>

        {/* BOUTON MENU MOBILE */}
        <button
          type="button"
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/15 focus:bg-white/15 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} strokeWidth={2.5} />
          ) : (
            <Menu size={28} strokeWidth={2.5} />
          )}
        </button>

        {/* NAVIGATION DESKTOP */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-1 text-xs font-bold xl:gap-2 xl:text-sm">
            {navItems.map((item) => (
              <li
                key={item.path || item.id}
                className="rounded-lg transition-colors duration-200 hover:bg-white/15"
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block px-3 py-2.5"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    className="cursor-pointer px-3 py-2.5"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* NAVIGATION MOBILE */}
      {isOpen && (
        <nav
          aria-label="Navigation mobile"
          className="mt-8 max-h-[calc(100vh-100px)] overflow-y-auto lg:hidden"
        >
          <ul className="flex flex-col items-center text-base font-bold">
            {navItems.map((item) => (
              <li
                key={item.path || item.id}
                className="w-full border-b border-white/10 text-center last:border-0"
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    className="w-full cursor-pointer px-3 py-4 transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* PETIT SOULIGNEMENT DÉCORATIF */}
      <div className="absolute bottom-0 left-8 h-[2px] w-16 rounded-full bg-[#F23850] max-lg:hidden" />
      
    </header>
  );
};

export default Header;
