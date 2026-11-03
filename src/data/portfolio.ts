export const portfolioData = {
  name: 'Mohd Irshad',
  title: 'Software Engineer',
  subtitle: 'Backend systems, durable workflows, and coding-agent evaluation',
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
  resume: '',
  profileImage: '/profile.png',

  social: {
    linkedin: 'https://www.linkedin.com/in/mohdirshad1/',
    github: 'https://github.com/siddiqueirshad',
    leetcode: 'https://leetcode.com/u/hydra_19/',
    codeforces: 'https://codeforces.com/profile/irshad',
    codechef: 'https://www.codechef.com/users/irshad',
    geeksforgeeks: 'https://www.geeksforgeeks.org/user/irshad/',
  },

  about: {
    short:
      'Software engineer building durable backend systems and evaluation tooling, with a competitive-programming foundation and production work in Java, Spring Boot, and React.',
    long: "I'm a developer focused on turning complex coordination problems into reliable software. I have a strong algorithms background and work across backend services, full-stack web apps, and native Android. Lately that work has been durable workflow execution and coding-agent evaluation.",
    paragraphs: [
      "I'm a software engineer focused on building scalable, reliable applications with Java, Spring Boot, React, and Android. I like turning messy coordination problems into systems that recover cleanly and stay understandable as they grow.",
      'My background spans backend engineering, full-stack development, and Android. Competitive programming is a real part of how I work: I have solved 600+ DSA problems and keep an active presence on LeetCode, Codeforces, CodeChef, and GeeksforGeeks.',
      "I'm currently expanding that foundation into distributed execution, AI-agent evaluation, and LLM training work at Handshake AI.",
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
      ],
    },
    {
      company: 'CodeAlpha',
      position: 'Android Developer Intern',
      duration: 'April 2024 - June 2024',
      location: 'Lucknow (Remote)',
      points: [
        'Implemented a Vehicle Maintenance App tracking schedules for up to 5 vehicles, improving user convenience by 30%',
        'Reduced app load time by 20% through optimization techniques, ensuring a smoother experience on 90% of devices',
      ],
    },
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
    concepts: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },

  projects: [
    {
      id: 'stepwise',
      title: 'Stepwise',
      kicker: 'Durable workflow orchestration',
      description:
        'A PostgreSQL-backed DAG orchestrator that runs dependent tasks on a worker pool with leases, fencing, retries, and a complete attempt history.',
      image: '/projects/stepwise-architecture.svg',
      images: [
        {
          src: '/projects/stepwise-architecture.svg',
          alt: 'Stepwise architecture diagram showing API, workers, PostgreSQL coordination, and Redis live events',
        },
      ],
      tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
      challenges: [
        'Workers never call the API. Claims, leases, heartbeats, and fencing all go through PostgreSQL with SKIP LOCKED.',
        'Crashed or partitioned workers are recovered by lease expiry instead of split-brain double-applies.',
        'HTTP tasks are allowlisted and DNS-pinned, with stable Idempotency-Key headers because execution is at-least-once.',
      ],
      highlights: [
        'Drafts, server-side DAG validation, immutable published versions, and activation',
        'Bounded concurrency, exponential backoff with jitter, and retryable error categories',
        'Cron schedules, transactional outbox, SSE live events, tenant-scoped queries',
        'React dashboard is implemented in-repo; no public hosted UI was found, so the visual is the real architecture',
      ],
      github: 'https://github.com/siddiqueirshad/Stepwise',
      demo: '',
      featured: true,
    },
    {
      id: 'benchwright',
      title: 'Benchwright',
      kicker: 'Coding-agent evaluation',
      description:
        'A platform for publishing software-engineering benchmarks and scoring agent patches against hidden tests, with experiment comparison instead of a single pass rate.',
      image: '/projects/benchwright-catalogue.png',
      images: [
        {
          src: '/projects/benchwright-catalogue.png',
          alt: 'Benchwright benchmark catalogue listing interval-merge, CSV quote bugfix, and order-validation API',
        },
        {
          src: '/projects/benchwright-benchmark-detail.png',
          alt: 'Benchwright benchmark detail for merge overlapping intervals with published version history',
        },
        {
          src: '/projects/benchwright-runs.png',
          alt: 'Benchwright evaluation runs table with fixture and demo-agent scores',
        },
        {
          src: '/projects/benchwright-run-detail.png',
          alt: 'Benchwright run detail for interval-merge with succeeded timeline and hidden-test counts',
        },
        {
          src: '/projects/benchwright-experiment.png',
          alt: 'Benchwright experiment comparing fixture-correct and fixture-failing arms with confidence intervals',
        },
      ],
      tech: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
      challenges: [
        'Hidden tests never reach the public stage or API responses, so submitters cannot game the rubric.',
        'A zero score is not treated as an unevaluable run. Infrastructure failures stay in a separate bucket.',
        'Experiments compare arms with Wilson intervals rather than a single headline pass rate.',
      ],
      highlights: [
        'Benchmark authoring with immutable published versions pinned by hashes',
        'Evaluation runs with public/hidden counts, timelines, and fixture labelling',
        'Experiment reports with per-arm results and outcome breakdowns',
        'Hosted lite demo simulates evaluations; full stack uses Docker sandboxes and PostgreSQL',
      ],
      github: 'https://github.com/siddiqueirshad/benchwright',
      demo: 'https://benchwright-bice.vercel.app/',
      featured: true,
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Android Application',
      kicker: 'Native Android + Spring Boot',
      description:
        'Native Android shopping app with JWT authentication, cart checkout, and a Dockerized Spring Boot backend.',
      image: '',
      images: [],
      tech: ['Java', 'Android SDK', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
      challenges: [
        'Keeping cart checkout transactional against inventory validation on the backend.',
        'Shipping a native client against a containerized REST API with pagination and search.',
      ],
      highlights: [
        'User authentication with JWT tokens and BCrypt hashing',
        'Product browsing with filtering and search',
        'Shopping cart and checkout with transactional safety',
        'REST APIs with pagination and inventory validation',
      ],
      github: 'https://github.com/siddiqueirshad/ecommerce-app',
      demo: '',
      featured: false,
    },
  ],

  achievements: [
    {
      platform: 'LeetCode',
      rating: '2007+',
      rank: 'Top 3% globally',
      link: 'https://leetcode.com/u/hydra_19/',
    },
    {
      platform: 'GeeksforGeeks',
      rating: '2023+ (5-star)',
      rank: 'Top 0.8% globally',
      link: 'https://www.geeksforgeeks.org/user/irshad/',
    },
    {
      platform: 'Codeforces',
      rating: '1636',
      rank: 'Expert',
      link: 'https://codeforces.com/profile/irshad',
    },
    {
      platform: 'CodeChef',
      rating: '1903+',
      rank: '4-star',
      link: 'https://www.codechef.com/users/irshad',
    },
  ],

  stats: [
    { label: 'DSA problems solved', value: '600+' },
    { label: 'LeetCode', value: 'Top 3%' },
    { label: 'GeeksforGeeks', value: 'Top 0.8%' },
    { label: 'Codeforces', value: 'Expert' },
  ],

  certificates: [
    {
      title: 'Certificate in Artificial Intelligence',
      issuer: 'Infosys Foundation & ICT Academy',
      link: '',
    },
    {
      title: 'Problem Solving',
      issuer: 'HackerRank',
      link: '',
    },
    {
      title: 'Android Development Training',
      issuer: 'PG Tech Solutions',
      link: '',
    },
    {
      title: 'Object-Oriented Programming in Java',
      issuer: 'Great Learning',
      link: '',
    },
  ],
};

export type Project = (typeof portfolioData.projects)[number];
