export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
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
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping experience with real-time inventory management, user authentication, and secure payment processing.',
      longDescription: 'This e-commerce platform provides a seamless shopping experience for users and a powerful management system for administrators. It features real-time inventory tracking, user authentication, and integration with popular payment gateways.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      features: [
        'User authentication and authorization',
        'Real-time inventory management',
        'Secure payment processing',
        'Admin dashboard for order and product management',
        'Responsive design for mobile and desktop',
      ],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform-demo.com',
      startDate: '2023-01-01',
      endDate: '2023-04-30'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management tool for teams with real-time updates, task assignment, and progress tracking.',
      longDescription: 'This task management application allows teams to collaborate efficiently by providing real-time updates, task assignment, and progress tracking. It integrates with popular productivity tools to streamline workflow.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
      features: [
        'Real-time task updates',
        'Team collaboration tools',
        'Task assignment and tracking',
        'Integration with productivity apps',
        'Mobile app for iOS and Android',
      ],
      githubUrl: 'https://github.com/yourusername/task-management-app',
      liveUrl: 'https://task-app-demo.com',
      startDate: '2023-05-01',
      endDate: '2023-07-31'
    },
    {
      id: '3',
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with personalized workout plans, nutrition advice, and progress analytics.',
      longDescription: 'This fitness tracker helps users achieve their health goals by providing personalized workout plans, nutrition tracking, and progress analytics. It integrates with popular fitness devices for accurate data collection.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      technologies: ['React Native', 'GraphQL', 'Apollo Client', 'Node.js'],
      features: [
        'Personalized workout plans',
        'Nutrition tracking and meal planning',
        'Integration with fitness wearables',
        'Progress analytics and goal setting',
        'Community features for motivation',
      ],
      githubUrl: 'https://github.com/yourusername/fitness-tracker',
      liveUrl: 'https://fitness-tracker-demo.com',
      startDate: '2023-08-01',
      endDate: '2023-11-30'
    },
    {
      id: '4',
      title: 'AI-powered Chatbot',
      description: 'An intelligent chatbot for customer support, powered by natural language processing and machine learning.',
      longDescription: 'This AI-powered chatbot uses advanced natural language processing to provide efficient customer support. It integrates with popular messaging platforms and can handle complex queries, reducing the workload on human support staff.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      technologies: ['Python', 'TensorFlow', 'Flask', 'Docker'],
      features: [
        'Natural language understanding',
        'Integration with messaging platforms',
        'Automated ticket creation and routing',
        'Continuous learning from interactions',
        'Analytics dashboard for support metrics',
      ],
      githubUrl: 'https://github.com/yourusername/ai-chatbot',
      liveUrl: 'https://ai-chatbot-demo.com',
      startDate: '2023-12-01',
      endDate: '2024-02-29'
    },
    {
      id: '5',
      title: 'Smart Home Dashboard',
      description: 'A centralized dashboard for managing and monitoring smart home devices with automation features.',
      longDescription: 'This smart home dashboard provides a unified interface for controlling and monitoring various smart home devices. It supports multiple protocols and offers automation features for enhanced home management.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MQTT'],
      features: [
        'Unified control for multiple smart home devices',
        'Real-time monitoring and alerts',
        'Custom automation rules',
        'Energy usage tracking',
        'Voice control integration',
      ],
      githubUrl: 'https://github.com/yourusername/smart-home-dashboard',
      liveUrl: 'https://smart-home-demo.com',
      startDate: '2024-03-01',
      endDate: '2024-06-30'
    },
    {
      id: '6',
      title: 'Social Media Analytics Tool',
      description: 'A comprehensive analytics tool for tracking and optimizing social media performance across multiple platforms.',
      longDescription: 'This social media analytics tool helps businesses track their performance across multiple platforms, providing insights on engagement, reach, and audience demographics. It offers custom report generation and competitor analysis features.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      features: [
        'Multi-platform social media tracking',
        'Custom report generation',
        'Competitor analysis',
        'Audience insights and demographics',
        'Automated posting and scheduling',
      ],
      githubUrl: 'https://github.com/yourusername/social-media-analytics',
      liveUrl: 'https://social-analytics-demo.com',
      startDate: '2024-07-01',
      endDate: '2024-10-31'
    },
  ]
  
  