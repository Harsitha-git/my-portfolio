import { IconType } from 'react-icons'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiGraphql, SiDocker } from 'react-icons/si'

interface Skill {
  name: string
  icon: IconType
  color: string
}

const skills: Skill[] = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Databases', icon: FaDatabase, color: 'text-indigo-500' },
]

export default function Skills() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

