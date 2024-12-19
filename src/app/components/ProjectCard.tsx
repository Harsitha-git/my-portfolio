import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../lib/projectData'

interface ProjectCardProps extends Project {}

export default function ProjectCard({ id, title, description, images }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="block group h-full">
      <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
        <Image
          src={images[0]}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  )
}

