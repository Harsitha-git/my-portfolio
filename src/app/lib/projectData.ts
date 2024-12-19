export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    shortDescription: string[];
    images: string[];
    technologies: string[];
    features: string[];
    githubUrl: string;
    liveUrl: string;
    startDate: string;
    endDate: string;
  }
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'blinkScribe by BrainyMed',
      description: '',
      longDescription: 'blinkScribe - A mobile application designed to simplify the process of creating detailed SOAP (Subjective, Objective, Assessment, Plan) notes immediately after patient consultations using advanced technology such as voice recognition and AI-assisted documentation.',
      shortDescription: [
        'Took the lead in weekly design reviews with the Tech Lead and the lead engineer on this project. ',
        'Developed research plans and conducted cognitive walkthroughs with the QA tester',
        'Designed end-to-end workflows and went through multiple iterations on designs based on findings and stakeholder feedback.',
        ' During the hand-off phase, provided redline specifications and accessibility guidelines for the engineering team'

      ],
      images: [
        '/a2.png',
        '/a22.png',
        '/a23.png',
        '/a24.png',
      ],
      technologies: ['Figma', 'React', 'Tailwind CSS', 'Express'],
      features: [
        'User authentication and authorization',
        'Real-time data updates',
        'Responsive design for mobile and desktop',
        'Integration with third-party APIs'
      ],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://apps.apple.com/us/app/blinkscribe/id6476747710?platform=iphone',
      startDate: 'Jan 2024',
      endDate: '2023-03-31'
    },
    // Add more projects here...
    {
        id: '2',
        title: 'Patient Check-in Kiosk Screens',
        description: '',
        longDescription: 'A digital kiosk system designed to streamline patient check-ins, appointment scheduling, and payment processing for a medical practice/clinic.',
        shortDescription:[
            'Requirements gathering and analysis',
            'Wireframing and Prototyping',
            'UI/UX Design',
            'Developmemt',
        ],
        images: [
          '/a1.png',
          '/a11.png',
          '/a12.png',
          '/a13.png',
          
        ],
        technologies: ['Figma','React', 'Node.js', 'MongoDB'],
        features: [
          'Responsive Design',
          'Real-time data updates',
          'Responsive design for mobile and desktop',
          'Integration with third-party APIs'
        ],
        githubUrl: 'https://github.com/yourusername/project1',
        liveUrl: 'https://project1-demo.com',
        startDate: '2023-01-01',
        endDate: '2023-03-31'
      },
    {
        id: '3',
        title: 'Brainycare - Patient & Provider Management Application',
        description: '',
        longDescription: 'As part of the CARE redesign project, I collaborated on enhancing the user experience and functionality of an intelligent practice management system integrated with Athena EHR. The redesign focused on optimizing workflows for both patients and healthcare providers, streamlining key processes like patient check-ins, payment collection, and medication refill management.',
        shortDescription:[
            'Requirements Gathering and Analysis',
            'Iterated on designs based on feedback from stakeholders',
            'Conducted usability testing with actual users to ensure smooth navigation and interaction with the kiosk',
        ],
        images: [
          '/a3.png',
          '/bc1.png',
          '/bc2.png',
          
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        features: [
          'Secure, encrypted mobile check-ins',
          'Real-time insurance and medication updates',
          'Automated refill requests tailored to practice protocols',
          'State-of-the-art telehealth platform with AES-256 encryption'
        ],
        githubUrl: 'https://github.com/yourusername/project1',
        liveUrl: 'https://apps.apple.com/us/app/brainy-care/id1635765045',
        startDate: '2023-01-01',
        endDate: '2023-03-31'
      },
      {
        id: '4',
        title: 'Brainymed & blinkScribe Websites',
        description: '',
        longDescription: 'To create a clean, readable layout, consistent use of color and typography to create a cohesive and visually appealing experience. While also ensuring the site is fully responsive and provides a seamless experience across all devices.',
        shortDescription:[
            'Competitive Analysis: Examined other popular technology news websites to identify best practices and innovative features', 
            'Wireframing: Created low-fidelity wireframes to outline the new site structure and layout.',
            'Prototyping: Developed high-fidelity prototypes using Figma, incorporating feedback from initial wireframe reviews.Included interactive elements such as article carousels.',
            'Usebility Testing: Gathered feedback on the new layout, color scheme, typography and overall design. Iterated on the design based on user feedback, focusing on enhancing mobile usability and refining the desktop layout.'
        ],
        images: [
          '/a4.png',
          '/bbc.png',
          '/bbd.png',
          
        ],
        technologies: ['Figma', 'React', 'Tailwind CSS'],
        features: [
          'Responsive Design for mobile and desktop',
          'Real-time data updates',
          
        ],
        githubUrl: 'https://github.com/yourusername/project1',
        liveUrl: 'https://brainymed.com/bmv3/',
        startDate: '2023-01-01',
        endDate: '2023-03-31'
      },
      {
        id: '5',
        title: 'Personal Dashboard',
        description: '',
        longDescription: 'The Personal Dashboard Application is a customizable and interactive platform designed to provide users with a centralized space for their daily activities. The bento box layout features modules for tracking “Currently Reading,” “Listening,” “Watching,” to-do lists, and more.',
        shortDescription:[
            'Research & Planning',
            'Wireframing and prototyping',
            'Outlined ideas for core widgets',
            'Development, API Implementation',
            'Making responsive design'
        ],
        images: [
          '/d1.png',
          
        ],
        technologies: ['React', 'Open Library API', 'React-Grid-Layout', 'Tailwind CSS','Axios'],
        features: [
          'Integration with external APIs for dynamic content',
          'Real-time data updates',
          'Responsive design for mobile and desktop',
          'Integration with third-party APIs'
        ],
        githubUrl: 'https://github.com/Harsitha-git',
        liveUrl: 'https://make-it-your-own.vercel.app/',
        startDate: '2023-01-01',
        endDate: '2023-03-31'
      },
  ]
  
  