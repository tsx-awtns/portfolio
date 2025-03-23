import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Testimonials from "@/components/testimonials"
import BackgroundEffects from "@/components/background-effects"
import Services from "@/components/services"
import Games from "@/components/games"

import "./layout"
import "./globals.css"
export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Games />
      <Testimonials />
      <Contact />
    </main>
  )
}

