'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { projects, Project } from '../../lib/projectData'

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id) as Project
  const [selectedImage, setSelectedImage] = useState(project.images[0])

  if (!project) {
    return <div className="text-center py-12">Project not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {project.images.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-video cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Project Details</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> {project.startDate} to {project.endDate}</p>
          <div className="flex space-x-2 mb-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
            >
              GitHub
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Live Demo
            </a>
          </div>
          <h3 className="font-semibold mb-1">Technologies:</h3>
          <ul className="list-disc list-inside mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
        <p className="text-lg mb-4">{project.longDescription}</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside">
          {project.features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

