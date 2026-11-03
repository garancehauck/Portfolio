
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import HomePage from "./pages/HomePage";
import BackToTop from "./components/BackToTop";

import GrandOralCitoyen from "./pages/GrandOralCitoyen";
import CeinturesDos from "./pages/CeinturesDos";
import Brasvo from "./pages/Brasvo";
import MemoireCAA from "./pages/MemoireCAA";
import AidEtMoi from "./pages/AidEtMoi";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-background text-black font-main text-base font-medium tracking-normal leading-relaxed">
        <Header />

        <main
          role="main"
          className="mt-24 mx-auto w-full max-w-7xl px-8 flex-grow max-lg:mt-24 max-lg:px-5"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets/grand-oral-citoyen" element={<GrandOralCitoyen />} />
            <Route path="/projets/ceintures-dos" element={<CeinturesDos />} />
            <Route path="/projets/brasvo" element={<Brasvo />} />
            <Route path="/projets/memoire-caa" element={<MemoireCAA />} />
            <Route path="/aid-et-moi" element={<AidEtMoi />} />
          </Routes>
        </main>

        <BackToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
