import { LanguageProvider } from './contexts/LanguageContext'
import LanguageDetector from './components/LanguageDetector'
import GoToTop from './components/GoToTop'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  return (
    <LanguageProvider>
      <LanguageDetector>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Layout>
        <GoToTop />
      </LanguageDetector>
    </LanguageProvider>
  )
}

export default App
