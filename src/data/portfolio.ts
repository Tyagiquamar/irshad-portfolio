export const portfolioData = {
  name: 'Mohd Irshad',
  title: 'Full-Stack Developer & Competitive Programmer',
  subtitle: 'Building high-performance systems with strong algorithmic thinking',
  roles: [
    'Software Engineer',
    'Backend Engineer',
    'Full-Stack Developer',
    'Competitive Programmer',
    'Android Developer',
  ],
  email: 'mohdirshad1306@gmail.com',
  phone: '+91 9721962102',
  location: 'Pune, India',
  resume: '/resume.pdf',
  profileImage: '/profile.png',

  social: {
    linkedin: 'https://www.linkedin.com/in/mohdirshad1/',
    github: 'https://github.com/siddiqueirshad',
    leetcode: 'https://leetcode.com/u/hydra_19/',
    codeforces: 'https://codeforces.com/profile/irshad',
    codechef: 'https://codechef.com/users/irshad',
    geeksforgeeks: 'https://geeksforgeeks.org/user/irshad',
  },

  about: {
    short: 'Full-stack developer with expertise in Android development, Spring Boot, and React. Strong competitive programmer ranking in top 3% on LeetCode and top 0.8% on GeeksforGeeks. Currently building AI agent evaluation systems at Handshake AI.',
    long: 'I\'m a passionate developer focused on solving complex problems through thoughtful architecture and clean code. With a strong foundation in competitive programming (600+ DSA problems), I bring algorithmic thinking to every project. My experience spans from native Android development to full-stack web applications with Docker containerization. I\'m currently exploring AI systems and LLM evaluation.',
    paragraphs: [
      'I\'m a Software Engineer focused on building scalable and reliable applications using Java, Spring Boot, React, and Android. I enjoy turning complex problems into clean, maintainable solutions and designing systems that perform well as they grow.',
      'My experience spans backend engineering, full-stack development, and Android development. I also have a strong foundation in data structures and algorithms, with 600+ problems solved on coding platforms. I\'m currently expanding my expertise in distributed systems, AI-powered applications, and LLM evaluation.',
    ],
  },

  experience: [
    {
      company: 'Handshake AI',
      position: 'LLM Trainer & AI Agent Evaluator',
      duration: 'July 2026 - Present',
      location: 'Remote',
      points: [
        'Designing and developing challenging command-line tasks and multi-step problems to evaluate AI agent capabilities',
        'Creating realistic scenarios involving software engineering, algorithms, system design, and debugging',
        'Developing robust test cases and validation frameworks to assess AI agent performance and reasoning',
      ]
    },
    {
      company: 'CodeAlpha',
      position: 'Android Developer Intern',
      duration: 'April 2024 - June 2024',
      location: 'Lucknow (Remote)',
      points: [
        'Implemented a Vehicle Maintenance App tracking schedules for up to 5 vehicles, improving user convenience by 30%',
        'Reduced app load time by 20% through optimization techniques, ensuring smooth experience on 90% of devices',
      ]
    }
  ],

  education: {
    school: 'I. K. Gujral Punjab Technical University',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    degreeShort: 'B.Tech — Computer Science & Engineering',
    duration: 'Sep 2021 - May 2025',
    cgpa: '8.15/10',
  },

  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'C++', 'Python', 'HTML/CSS'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Android SDK'],
    backend: ['Spring Boot', 'REST APIs', 'JWT Authentication', 'Hibernate'],
    databases: ['MySQL', 'PostgreSQL', 'Redis', 'JDBC'],
    devops: ['Docker', 'Git', 'GitHub', 'Maven', 'Postman'],
    concepts: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },

  projects: [
    {
      id: 1,
      title: 'E-Commerce Android Application',
      description: 'Full-featured native Android app with secure payment integration and real-time inventory management',
      image: '/projects/ecommerce.jpg',
      tech: ['Java', 'Android SDK', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
      highlights: [
        'User authentication with JWT tokens and BCrypt hashing',
        'Product browsing with advanced filtering and search',
        'Shopping cart and checkout with transactional safety',
        'Order history and tracking',
        'REST APIs with pagination and inventory validation',
        'Docker containerized backend',
      ],
      github: 'https://github.com/siddiqueirshad/ecommerce-app',
      demo: 'https://github.com/siddiqueirshad/ecommerce-app',
    },
    {
      id: 2,
      title: 'Distributed Job Queue System',
      description: 'Full-stack system for asynchronous job processing with real-time monitoring and metrics',
      image: '/projects/jobqueue.jpg',
      tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'WebSockets'],
      highlights: [
        'Asynchronous job processing with Redis queue management',
        'Real-time monitoring with WebSockets (STOMP)',
        'Persistent storage with PostgreSQL',
        'Prometheus metrics and monitoring',
        'JWT-based authentication',
        'Docker Compose deployment',
        'Scalable backend architecture',
      ],
      github: 'https://github.com/siddiqueirshad/distributed-job-queue',
      demo: 'https://github.com/siddiqueirshad/distributed-job-queue',
    },
  ],

  achievements: [
    {
      platform: 'LeetCode',
      rating: '2007+',
      rank: 'Top 3% globally',
      badge: '🏆',
      link: 'https://leetcode.com/u/hydra_19/',
    },
    {
      platform: 'GeeksforGeeks',
      rating: '2023+ (5-star)',
      rank: 'Top 0.8% globally',
      badge: '⭐',
      link: 'https://geeksforgeeks.org/user/irshad',
    },
    {
      platform: 'Codeforces',
      rating: '1636',
      rank: 'Expert',
      badge: '🎯',
      link: 'https://codeforces.com/profile/irshad',
    },
    {
      platform: 'CodeChef',
      rating: '1903+',
      rank: '4-star',
      badge: '⭐',
      link: 'https://codechef.com/users/irshad',
    },
  ],

  stats: [
    { label: 'DSA Problems Solved', value: '600+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Years of Experience', value: '3+' },
    { label: 'LeetCode Rank', value: 'Top 3%' },
  ],

  testimonials: [
    {
      text: 'Mohd is an exceptional developer with strong problem-solving skills. His contributions to the codebase were immediately impactful.',
      author: 'Project Lead',
      company: 'CodeAlpha',
    },
    {
      text: 'Impressed by the quality of system design and code organization. A rare combination of competitive programming skills and practical engineering.',
      author: 'Tech Mentor',
      company: 'Independent',
    },
  ],

  certificates: [
    {
      title: 'Certificate in Artificial Intelligence',
      issuer: 'Infosys Foundation & ICT Academy',
      link: '#',
    },
    {
      title: 'Problem Solving',
      issuer: 'HackerRank',
      link: '#',
    },
    {
      title: 'Android Development Training',
      issuer: 'PG Tech Solutions',
      link: '#',
    },
    {
      title: 'Object-Oriented Programming in Java',
      issuer: 'Great Learning',
      link: '#',
    },
  ],
};
