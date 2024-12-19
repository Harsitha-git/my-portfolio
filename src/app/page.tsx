import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectsBentoBox from './components/ProjectsBentoBox'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsBentoBox />
      <Contact />
      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </main>
  )
}

