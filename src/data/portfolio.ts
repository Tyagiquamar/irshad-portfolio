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

  openSourceStats: {
    merged: 45,
    verifiedOn: '2026-11-03',
  },

  openSource: [
    {
      title: 'Unwrap LowCardinality in ConvertEmptyStringComparisonToFunctionPass',
      description:
        'Unwrap LowCardinality before empty-string comparison rewrites so the pass applies on ClickHouse LowCardinality columns.',
      repo: 'ClickHouse/ClickHouse',
      pr: 128092,
      href: 'https://github.com/ClickHouse/ClickHouse/pull/128092',
      status: 'MERGED',
      date: '2026-11-01',
    },
    {
      title: 'Register findDistinct on the D1 SQLite adapter',
      description:
        'Wire findDistinct through sqliteD1Adapter so distinct queries work on Cloudflare D1.',
      repo: 'payloadcms/payload',
      pr: 19128,
      href: 'https://github.com/payloadcms/payload/pull/19128',
      status: 'MERGED',
      date: '2026-10-27',
    },
    {
      title: 'Return ErrDataNotFound when Copy source is missing',
      description:
        'lakeFS block Copy now reports a missing source object instead of a generic failure.',
      repo: 'treeverse/lakeFS',
      pr: 10535,
      href: 'https://github.com/treeverse/lakeFS/pull/10535',
      status: 'MERGED',
      date: '2026-10-29',
    },
    {
      title: 'Clear deps and refs before deleting relationship objects',
      description:
        'pgModeler Relationship::destroyObjects now drops deps and refs first so deleted objects do not leave dangling pointers.',
      repo: 'nullptrlabs/pgmodeler',
      pr: 2095,
      href: 'https://github.com/nullptrlabs/pgmodeler/pull/2095',
      status: 'MERGED',
      date: '2026-10-28',
    },
    {
      title: 'Retry ID-token validation after OIDC refresh',
      description:
        'Retry token validation after an OIDC refresh so ToolHive sessions survive expired ID tokens.',
      repo: 'stacklok/toolhive',
      pr: 6559,
      href: 'https://github.com/stacklok/toolhive/pull/6559',
      status: 'MERGED',
      date: '2026-09-14',
    },
    {
      title: 'Recognize cert-manager Secrets in unused-resource audit',
      description:
        'Treat cert-manager Secrets as in-use so Radar does not flag them as unused.',
      repo: 'skyhook-io/radar',
      pr: 1710,
      href: 'https://github.com/skyhook-io/radar/pull/1710',
      status: 'MERGED',
      date: '2026-09-13',
    },
    {
      title: 'Reconstruct Copilot transcripts from GenAI spans',
      description:
        'Rebuild Copilot session transcripts from GenAI spans instead of dropping the conversation.',
      repo: 'tobilg/ai-observer',
      pr: 10,
      href: 'https://github.com/tobilg/ai-observer/pull/10',
      status: 'MERGED',
      date: '2026-09-15',
    },
    {
      title: 'Honor page filters and first non-empty UTM attribution',
      description:
        'Goal conversion now respects page filters and uses the first non-empty UTM values.',
      repo: 'rybbit-io/rybbit',
      pr: 1177,
      href: 'https://github.com/rybbit-io/rybbit/pull/1177',
      status: 'MERGED',
      date: '2026-09-12',
    },
    {
      title: 'Force C numeric locale on POSIX curl timeouts',
      description:
        'Agent-hook curl timeouts parse correctly on POSIX locales that use commas as decimals.',
      repo: 'stablyai/orca',
      pr: 19600,
      href: 'https://github.com/stablyai/orca/pull/19600',
      status: 'MERGED',
      date: '2026-10-24',
    },
    {
      title: 'Handle EOF and invalid email in metrics CLI',
      description:
        'HelixDB CLI metrics prompt no longer crashes on EOF or a bad email address.',
      repo: 'HelixDB/helix-db',
      pr: 1085,
      href: 'https://github.com/HelixDB/helix-db/pull/1085',
      status: 'MERGED',
      date: '2026-09-19',
    },
    {
      title: 'Suppress aborted network errors in promise rejection toasts',
      description:
        'Match both cancel spellings and hide aborted-request toasts in the Twenty frontend.',
      repo: 'twentyhq/twenty',
      pr: 28664,
      href: 'https://github.com/twentyhq/twenty/pull/28664',
      status: 'MERGED',
      date: '2026-10-27',
    },
    {
      title: 'Pad single-digit decimal remainder in response size KB',
      description:
        'Bruno response-size display pads a single-digit remainder so KB values stay aligned.',
      repo: 'usebruno/bruno',
      pr: 9673,
      href: 'https://github.com/usebruno/bruno/pull/9673',
      status: 'MERGED',
      date: '2026-11-03',
    },
    {
      title: 'Skip GitHub site pages when discovering repositories',
      description:
        'Stop treating github.io site pages as source repositories during OSS company discovery.',
      repo: 'yc-oss/open-source-companies',
      pr: 19,
      href: 'https://github.com/yc-oss/open-source-companies/pull/19',
      status: 'MERGED',
      date: '2026-09-22',
    },
    {
      title: 'Add missing @Test on JunctionTests.testEvent',
      description:
        'JUnit now runs JunctionTests.testEvent in Apache Commons VFS.',
      repo: 'apache/commons-vfs',
      pr: 803,
      href: 'https://github.com/apache/commons-vfs/pull/803',
      status: 'MERGED',
      date: '2026-10-30',
    },
  ],

  authoredRepos: [
    {
      title: 'Stepwise',
      status: 'Public',
      date: '2026',
      repo: 'siddiqueirshad/Stepwise',
      href: 'https://github.com/siddiqueirshad/Stepwise',
      description:
        'PostgreSQL-backed DAG orchestrator. Workers claim work through SKIP LOCKED leases, fencing, retries, and a complete attempt history.',
    },
    {
      title: 'Benchwright',
      status: 'Public',
      date: '2026',
      repo: 'siddiqueirshad/benchwright',
      href: 'https://github.com/siddiqueirshad/benchwright',
      description:
        'Platform for publishing software-engineering benchmarks and scoring agent patches against hidden tests, with experiment comparison instead of a single pass rate.',
    },
    {
      title: 'E-Commerce Android Application',
      status: 'Public',
      date: '2024',
      repo: 'siddiqueirshad/ecommerce-app',
      href: 'https://github.com/siddiqueirshad/ecommerce-app',
      description:
        'Native Android shopping client with JWT auth, cart checkout, and a Dockerized Spring Boot API with inventory validation.',
    },
  ],

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
      image: '/projects/benchwright-runs.png',
      images: [
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
        {
          src: '/projects/benchwright-benchmark-detail.png',
          alt: 'Benchwright benchmark detail for merge overlapping intervals with published version history',
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
    { label: 'Merged OSS PRs', value: '45' },
    { label: 'DSA problems solved', value: '600+' },
    { label: 'LeetCode', value: 'Top 3%' },
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
