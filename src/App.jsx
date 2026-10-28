import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Course from './components/Course'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { useLandingAnimations } from './animations/useLandingAnimations'

export default function App() {
  const scope = useRef(null)
  useLandingAnimations(scope)

  return (
    <div ref={scope}>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Course />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
