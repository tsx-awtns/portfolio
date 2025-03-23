"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Testimonials from "@/components/testimonials"
import BackgroundEffects from "@/components/background-effects"
import Services from "@/components/services"
import Games from "@/components/games"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Build from "@/components/build"

import "./layout"
import "./globals.css"

export default function Home() {
  const preventRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
  };

  return (
    <main className="min-h-screen relative" onContextMenu={preventRightClick}>
      <BackgroundEffects />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Games />
      <Build />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
