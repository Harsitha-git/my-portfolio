import ProjectCard from './ProjectCard'
import { projects } from '../lib/projectData'

export default function ProjectsBentoBox() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          let sizeClass = ""; // Default size

          // Assign different sizes based on index
          if (index === 0) {
            sizeClass = "md:col-span-2 md:row-span-2"; // Largest box
          } else if (index === 1 || index === 2) {
            sizeClass = "md:col-span-1 md:row-span-2"; // Tall boxes
          } else if (index === 3 || index === 4) {
            sizeClass = "md:col-span-2 lg:col-span-1"; // Wide boxes on medium screens
          }

          return (
            <div key={project.id} className={sizeClass}>
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  )
}

