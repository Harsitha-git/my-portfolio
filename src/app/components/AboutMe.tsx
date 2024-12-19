'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Web Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2020 - Present',
    description: [
      'Led a team of 5 developers in creating responsive web applications',
      'Implemented CI/CD pipelines, reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 'exp2',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: 'Mar 2017 - Dec 2019',
    description: [
      'Developed and maintained multiple client websites using React and Node.js',
      'Optimized database queries, improving application performance by 30%',
      'Collaborated with UX designers to implement intuitive user interfaces'
    ]
  },
  {
    id: 'exp3',
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: 'Jun 2015 - Feb 2017',
    description: [
      'Assisted in the development of a social media management platform',
      'Implemented responsive designs using HTML, CSS, and JavaScript',
      'Participated in daily stand-ups and bi-weekly sprint planning meetings'
    ]
  }
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 to-red-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="w-48 h-48 relative mb-4 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
            I am currently a Product Designer at Brainymed, working on designing and developing a custom Remote Patient Management system. 
            I attended University of Houston - Clear Lake to study Computer Science from 2017 to 2020. 
            I strive to bridge the gap between technology and user needs.
            </p>
            <p className="text-lg">
              Throughout my career, I've had the opportunity to work on diverse projects and collaborate with talented teams. Here's a glimpse into my professional journey:
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap justify-center border-b">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors duration-300 ${
                  activeTab === exp.id
                    ? 'border-b-2 border-red-500 text-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(exp.id)}
                aria-selected={activeTab === exp.id}
                role="tab"
              >
                {exp.title}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={activeTab === exp.id ? 'block' : 'hidden'}
              role="tabpanel"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside">
                {exp.description.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

