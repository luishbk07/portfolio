import { useEffect, useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageDetector from "./components/LanguageDetector";
import GoToTop from "./components/GoToTop";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import InstandaFrontendSpecialist from "./pages/InstandaFrontendSpecialist";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    // Listen to popstate for browser back/forward
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  if (path === "/instanda-frontend-specialist") {
    return (
      <LanguageProvider>
        <LanguageDetector>
          <InstandaFrontendSpecialist />
          <GoToTop />
        </LanguageDetector>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <LanguageDetector>
        <Layout>
          <HomePage />
        </Layout>
        <GoToTop />
      </LanguageDetector>
    </LanguageProvider>
  );
}

export default App;
