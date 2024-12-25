import Image from 'next/image'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

