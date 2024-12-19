import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

import ProjectsBentoBox from './components/ProjectsBentoBox'
import Contact from './components/Contact'


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutMe />
      
      <ProjectsBentoBox />
      <Contact />
      
      
      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; Designed and Developed by Harsiths Anubhukta. All rights reserved.</p>
      </footer>
    </main>
  )
}

