'use client'



import { useState } from 'react'

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
    title: 'Product Designer',
    company: 'BrainyMed LLC',
    period: 'Jan 2023 - Present',
    description: [
      'Designed intuitive user interfaces and experiences for blinkScribe, a mobile and web application, enhancing usability for healthcare professionals during patient consultations',
      'Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups',
      'Ensured the application was fully responsive, providing a consistent experience across mobile and web platforms',
      'Developed features to streamline the creation of SOAP (Subjective, Objective, Assessment, Plan) notes, enabling users to document patient interactions efficiently and accurately',
      'Partnered closely with the development team to implement designs using React JS, ensuring seamless integration of user experience with technical functionality'
    ]
  },
  {
    id: 'exp2',
    title: 'Digital Transformation Analyst',
    company: 'eBiz Solutions',
    period: 'Nov 2020 - Dec 2022',
    description: [
      'Conducted in-depth analysis of digital processes, identifying areas for improvement and efficiency gains',
      'Conducted user research and usability testing for new implementations to CRM system',
      'Provided end-user training and support, ensuring smooth transitions to updated digital platforms and created user journeys and site maps',
      'Helped build an Employee onboarding site on Microsoft 365 Intranet with the help of SharePoint onboarding templates'
    ]
  },
  {
    id: 'exp3',
    title: 'UX/UI Designer',
    company: 'enCloud',
    period: 'Jan 2023 - Nov 2024',
    description: [
      'Assisted in the designing and development company website',
      'Implemented responsive designs using HTML, CSS, and React to create various modules',
      'Participated in daily stand-ups and bi-weekly sprint planning meetings'
    ]
  }
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="mb-6">
          <p className="text-lg mb-4">
          I am currently a Product Designer at Brainymed, working on designing and developing a custom Remote Patient Management system. 
          I attended University of Houston - Clear Lake to study Computer Science from 2017 to 2020. 
          I strive to bridge the gap between technology and user needs.
          </p>
          <p className="text-lg">
            Throughout my career, I have had the opportunity to work on diverse projects and collaborate with talented teams. Here's a glimpse into my professional journey:
          </p>
        </div>
        <div className="mb-4">
          <div className="flex border-b">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                  activeTab === exp.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
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
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {experiences.map(
            (exp) =>
              activeTab === exp.id && (
                <div key={exp.id} role="tabpanel">
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
              )
          )}
        </div>
       
      </div>
    </section>
  )
}

