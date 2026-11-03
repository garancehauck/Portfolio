
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import AidEtMoiPreview from "../components/AidEtMoiPreview";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AcademicWork from "../components/AcademicWork";
import Contact from "../components/Contact";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) return;

    const timer = setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Efface l'instruction de défilement après son utilisation
      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, location.state, navigate]);

  return (
    <>
      <Home />
      <About />
      <AidEtMoiPreview />
      <Projects />
      <Skills />
      <AcademicWork />
      <Contact />
    </>
  );
};

export default HomePage;
