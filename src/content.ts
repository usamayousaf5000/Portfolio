export const site = {
  name: 'Usama Yousaf',
  title: 'Full Stack Engineer',
  location: 'Lahore, Punjab, Pakistan',
  email: 'osamayousaf29@gmail.com',
  phone: '+92 311 4300568',
  linkedin: 'https://www.linkedin.com/in/usama-yousaf--/',
  github: 'https://github.com/usamayousaf5000',
  siteUrl: 'https://example.com',
  avatar: '/src/assets/1000386953.jpg',
} as const

/**
 * Your public Fiverr profile URL. Replace the placeholder with your real link
 * (e.g. https://www.fiverr.com/yourname) so “Hire on Fiverr” buttons work.
 * Leave empty ('') to hide Fiverr CTAs until you are ready.
 */
export const fiverrProfileUrl = 'https://www.fiverr.com/REPLACE_WITH_YOUR_USERNAME' as const

export const fiverrResponsePledge =
  'I treat every conversation like a project kickoff: clear questions, honest timelines, and no radio silence. Expect a first reply on Fiverr (or below) well within 24h on most business days.'

export const siteTagline =
  "You get production minded full stack work, not throwaway tutorial code. I build the screens people use, the APIs and data behind them, and a deploy path so the product still runs after launch. If you are buying on Fiverr, you get someone who can own a feature end to end."

export const clientHeadline =
  'I help businesses and founders ship web apps, APIs, and internal tools on MERN and MEAN stacks, using the same standards I use in my day job.'

export const brandTagline = 'Full stack, for hire on Fiverr and direct'

export const availability = 'New projects and Fiverr orders, message for scope'

/** Lead paragraph: who you are professionally */
export const about =
  'Full stack developer with hands-on experience building scalable web applications using the MERN and MEAN stacks. Strong on the front end with React and Angular, and on the back end with Node.js, Express, and NestJS. I design RESTful APIs, work with MongoDB, PostgreSQL, and MySQL, and I have also shipped Python backends with Flask. I care about clean, efficient, and maintainable code in fast-paced teams.'

/** How you work with others and own delivery */
export const aboutFocus =
  'I collaborate with product and design, own features end to end, and help keep deploys safe with tests, reviews, and observability. Comfortable across greenfield builds and maturing codebases.'

/** Deeper background and motivation */
export const aboutBackground =
  'My focus is on systems that last: clear module boundaries, predictable APIs, and UIs that stay fast as data grows. I have shipped features across auth, real time comms, billing style flows, and third party automation, with security, logging, and real production failure cases in mind. I pick up new stacks when the problem needs it, from small ML pipelines to CSS at scale.'

export const expertiseHighlights = [
  'Scalable UIs: React, Angular, Next.js',
  'APIs & services: Node, Nest, Express',
  'Data & cloud: SQL/NoSQL, AWS, CI/CD',
] as const

/** Short principles for the "Approach" strip */
export const principles = [
  {
    title: 'Clarity first',
    text: 'Names, contracts, and error messages that still make sense months later, not only on the day you write them.',
  },
  {
    title: 'Ship in slices',
    text: 'Smaller releasable chunks, early feedback, and less risk per deploy, which matters most when other teams depend on your API.',
  },
  {
    title: 'Respect the runtime',
    text: 'Performance, accessibility, and security are not polish at the end; they are constraints while building.',
  },
  {
    title: 'Own the full path',
    text: 'I care about the path from database to API to UI, and what that path looks like in logs and alerts when things break.',
  },
] as const

export const workProcess = [
  {
    step: '1',
    title: 'Discover & shape',
    detail:
      'Clarify users, constraints, and success criteria. Map unknowns, risks, and data flows before committing to a stack or schema.',
  },
  {
    step: '2',
    title: 'Design contracts',
    detail:
      'Define API shapes, auth boundaries, and failure modes. Align with design on states, empty views, and loading so the build matches what product expects.',
  },
  {
    step: '3',
    title: 'Build & integrate',
    detail:
      'Implement in vertical slices: persistence, services, and UI together where possible. Integrate third parties with explicit timeouts, retries, and idempotency where it matters.',
  },
  {
    step: '4',
    title: 'Verify & harden',
    detail:
      'Test critical paths, fix edge cases, and add structure for debugging: structured logs, metrics hooks, and sensible error surfaces for both users and operators.',
  },
  {
    step: '5',
    title: 'Release & learn',
    detail:
      'Ship with CI/CD, monitor after deploy, and feed learnings back into the backlog. Document decisions that the next person will need.',
  },
] as const

export const engineeringPractices = [
  'Code review with constructive feedback; shared ownership of quality',
  'Git flow with feature branches, meaningful commits, and traceable changes',
  'Defensive API design: validation, consistent error models, and versioning awareness',
  'Habit of writing for the next reader: README notes and short comments when they save the next person an hour',
] as const

export const professionalInterests = [
  'Developer experience and build pipelines',
  'Resilient integrations (webhooks, SMS/voice, CRM-style tools)',
  'SSR/SSG and SEO-aware front ends where discovery matters',
] as const

export const heroStats = [
  { label: 'For buyers', value: 'Fiverr + direct' },
  { label: 'Code quality', value: 'Production' },
  { label: 'Also building', value: 'Recurso Labs' },
] as const

/** What clients care about before they click “Order” */
export const buyerTrustPoints = [
  {
    title: 'You get clarity',
    text: 'I ask the right questions up front, confirm scope, and use milestones so you always know what is in progress, with no vague phases.',
  },
  {
    title: 'You get a full stack mind',
    text: 'Front end, API, database, and deployment thinking in one place. Fewer “that needs another person” handoffs for typical web work.',
  },
  {
    title: 'You get handoff you can use',
    text: 'Sensible structure, comments where it matters, and a short handover note so you or your next dev are not left guessing.',
  },
  {
    title: 'You get professionalism',
    text: 'I respect Fiverr’s process: revisions, deadlines, and communication. Your review matters, and I also want work I can stand behind in this portfolio.',
  },
] as const

/** Fiverr-style “what I can do for you” in buyer language */
export const fiverrOfferings = [
  'End-to-end web features: new pages, forms, dashboards, and admin tools',
  'REST APIs, auth, and data modeling with Node, Nest, or Express + Mongo/Postgres',
  'Integration work: webhooks, third-party APIs, and Twilio-style communication flows',
  'Performance and fix-it passes: slow pages, confusing bugs, or refactors in React / Angular / Next',
  'Deployment and CI help so your build is not only “on my machine”',
] as const

/**
 * Add real quotes as you collect them on Fiverr (replace the placeholders).
 * Empty quote text can be removed from the list.
 */
export const fiverrTestimonialPlaceholders = [
  {
    quote:
      "Replace with your first Fiverr 5 star review. One sentence about speed, quality, or communication is enough to build trust.",
    name: 'Your buyer, via Fiverr',
    project: 'Web, API, or full stack (name the project when you have a real one)',
  },
  {
    quote:
      "Second review slot: e.g. delivered on time, explained tradeoffs, code we could extend.",
    name: 'Founder or PM, Fiverr',
    project: 'Milestone you delivered',
  },
] as const

export const fiverrGuaranteeNote =
  'I follow your agreed scope and Fiverr’s rules. If something is unclear, we align in writing first. That protects both sides and keeps the project on track for a strong outcome.'

export const services = [
  {
    title: 'Product engineering',
    description:
      'End-to-end feature work: from discovery and scoping to implementation, review, and production rollout with your team’s cadence.',
    points: [
      'Break work into shippable increments with clear acceptance criteria',
      'Work across the stack: UI, services, and persistence with consistent models',
      'Pair with product/design on edge cases, permissions, and analytics needs',
    ],
  },
  {
    title: 'Front-end & UX',
    description:
      'Fast, accessible experiences with modern frameworks, with a structure that still holds up as routes, state, and data dependencies grow.',
    points: [
      'React, Angular, Next.js, with performance budgets and lazy loading where it pays off',
      'Component patterns, shared tokens, and predictable state to reduce regressions',
      'Accessibility and responsive layouts as baseline requirements, not add-ons',
    ],
  },
  {
    title: 'Back-end & integrations',
    description:
      'REST and service oriented back ends, auth, and third party systems, with clear handling for failure and recovery.',
    points: [
      'Node, Nest, and Express: modular services, DTOs, and validation at boundaries',
      'JWT sessions, role checks, and safe handling of PII and secrets',
      'Twilio, Airtable, and other APIs: retries, idempotency, and observability',
    ],
  },
  {
    title: 'Data, cloud & delivery',
    description:
      'Schema design, query performance, and deployable infrastructure, plus pipelines that make releases boring in a good way.',
    points: [
      'MongoDB, PostgreSQL, and MySQL, chosen and modeled for access patterns and growth',
      'AWS building blocks: compute, storage, and managed data where they fit the problem',
      'CI/CD in GitHub/GitLab: build, test, and deploy with environments that match reality',
    ],
  },
] as const

export const experience = [
  {
    company: 'Recurso Labs',
    location: 'Remote / hybrid (product delivery)',
    role: 'Full Stack Developer',
    period: 'Jun 2025 to present',
    summary:
      'Product-focused engineering across Angular, React, and Next front ends, Nest/Node services, and AWS-backed infrastructure. Heavy emphasis on integrations, cloud ops, and reliable release pipelines.',
    focusAreas: [
      'Multi-app front ends and shared patterns for scale',
      'Communications and workflow integrations (Twilio, Airtable, custom APIs)',
      'AWS operations: EC2, ECS, S3, RDS, and health of production paths',
    ],
    items: [
      'Architected and shipped scalable front ends with Angular, React, and Next.js, focusing on performance and UX.',
      'Built secure, modular back ends and REST APIs with NestJS and Node.js.',
      'Led cloud work on AWS (EC2, ECS, S3, RDS) for availability and scale.',
      'Implemented Twilio flows: SMS, voice, call routing, and automation.',
      'Integrated Airtable and third-party APIs with auth, sync, and error handling.',
      'Maintained GitHub and GitLab CI/CD for build, test, and deploy.',
      'Worked with SQL and NoSQL, including PostgreSQL and other stores.',
    ],
  },
  {
    company: 'SEEBIZ PVT LTD',
    location: 'Lahore, Pakistan',
    role: 'Trainee MEAN Stack Developer',
    period: 'Aug 2024 to Jan 2025',
    summary:
      'Structured training and hands-on work across the full MEAN stack, from UI fundamentals to API design and MongoDB data modeling, with a focus on real CRUD and REST patterns.',
    focusAreas: [
      'Angular feature modules and data-bound components',
      'Node/Express service layer and API routes',
      'MongoDB documents and simple relational thinking in a document store',
    ],
    items: [
      'MEAN stack training: HTML, CSS, JavaScript through Angular, Node, Express, and MongoDB.',
      'Dynamic front ends with Angular; REST APIs and services with Node.js and Express.',
      'MongoDB for data modeling; RESTful design, clean code, and version control with Git.',
    ],
  },
] as const

/** Project case studies: keep copy concrete; stack is comma separated for display tags. */
export const projects = [
  {
    name: 'Social App',
    kind: 'Full stack (MEAN)' as const,
    stack: 'MongoDB, Express, Angular, Node',
    context:
      'A self contained social app for profiles, content, and interactions like likes, comments, and friend requests. Good practice in auth, data modeling, and API design end to end.',
    problem:
      'Users need secure accounts, clear permissions, and feeds that stay consistent as posts and relationships grow, without messy internal IDs or vague API responses.',
    approach:
      'JWT based sessions, REST resources for users and posts, and MongoDB collections laid out for the query paths you actually need. Angular on the client with services aligned to the same API contract.',
    outcomes: [
      'Sign up, login, and session flows with JWT and protected routes',
      'Posts, media uploads, likes, comments, and friend requests with validation',
      'Consistent error handling and data shapes the UI can rely on',
    ] as const,
    techHighlights: ['JWT', 'REST', 'Mongoose style data', 'Angular services'],
  },
  {
    name: 'POS (Point of Sale) System',
    kind: 'Business / ops software' as const,
    stack: 'Angular, Node.js, Express, MongoDB',
    context:
      'A POS style system for inventory, suppliers, staff, and sales, in the same spirit as internal tools with role based access and reporting.',
    problem:
      'Ops teams need correct stock, auditable changes, and dashboards that match one source of truth, even when many people use the system at once.',
    approach:
      'Role based access on sensitive routes, near real time views where it helped, and MongoDB models that split catalog, movement, and sales for clearer reporting.',
    outcomes: [
      'CRUD for employees, suppliers, inventory, and sales with access control',
      'Dashboards for sales and stock for day to day calls',
      'Custom pieces matched to how the business actually works',
    ] as const,
    techHighlights: ['RBAC', 'Angular forms and routing', 'Aggregations', 'High volume CRUD'],
  },
  {
    name: 'Online Tutoring (Think Hub Tutors)',
    kind: 'Web platform' as const,
    stack: 'Next.js, React, routing, SSR',
    context:
      'A marketing and lead site for a tutoring business. SEO, first paint, and clear paths for student inquiry and tutor info mattered as much as the UI.',
    problem:
      'Tutoring sites need trust quickly: fast pages, clear calls to action, and a structure marketing can extend without breaking routes or content.',
    approach:
      'Next.js for SSR and file based routing, reusable components for forms and cards, and page sections you can update without a full rewrite.',
    outcomes: [
      'Better performance and structure than a client only SPA on key pages',
      'Flows for inquiries, tutor info, and service copy with code that is easy to extend',
      'A layout that is ready for more content and SEO tweaks over time',
    ] as const,
    techHighlights: ['App Router or Pages', 'SSR and SEO', 'UI composition'],
  },
  {
    name: 'FYP: Sign Language Recognition',
    kind: 'ML / research' as const,
    stack: 'Python, OpenCV, CNN',
    context:
      'Final year work: a gesture classification pipeline to support communication, from camera frames to a model you can actually evaluate.',
    problem:
      'Sign and gesture data is noisy, lighting dependent, and often imbalanced. The pipeline had to preprocess in a stable way and avoid fooling yourself with train only numbers.',
    approach:
      'OpenCV for frames and regions of interest, a CNN for classification, and a clean split between training and validation with more than one metric when it mattered.',
    outcomes: [
      'Repeatable image preprocessing into the model',
      'A trained classifier with notes on what fails and what data would help next',
      'A base in CV and ML that still shapes how I think about data in app work',
    ] as const,
    techHighlights: ['OpenCV', 'CNN', 'Model evaluation', 'Data hygiene'],
  },
] as const

export const skillGroups = [
  { label: 'Front end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Next.js'] },
  { label: 'Back end', items: ['Node.js', 'Express.js', 'NestJS', 'Flask'] },
  { label: 'Data & ops', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL', 'Git', 'GitHub', 'GitLab', 'CI/CD', 'AWS'] },
  { label: 'Practices', items: ['REST APIs', 'Code review', 'CI/CD', 'System design (feature-level)', 'Communication', 'Time management'] },
] as const

export const education = {
  school: "Bahria University, Lahore Campus",
  degree: "Bachelor of Computer Science",
  period: 'Feb 2019 to Jan 2024',
  highlights:
    "Degree work covered software engineering fundamentals, data structures, databases, and systems, which is the base I build on for full stack and applied ML style projects.",
} as const

export const relevantCoursework = [
  'Data structures & algorithms',
  'Database systems (relational modeling & SQL)',
  'Web technologies and software engineering',
  'Operating systems & networking (foundational for distributed thinking)',
] as const

export const certificate = {
  name: 'Trainee MEAN Stack Developer',
  org: 'SEEBIZ PVT LTD',
  period: '2024 to 2025' as const,
} as const

export const additionalCertificates = [
  { name: 'Intensive MERN/MEAN stack and production practices (via training)', issuer: 'SEEBIZ, hands-on' },
] as const

export const languages = [
  { name: 'English', level: 'Intermediate' },
  { name: 'Urdu', level: 'Fluent' },
  { name: 'German', level: 'Basics' },
] as const

export const hobbies = [
  'Building side projects',
  'Contributing to open source',
  'Learning new programming languages',
  'Solving coding challenges',
] as const

export const contactIntro =
  'For scoped work with milestones, start on Fiverr (link below) with your idea, deadline, and budget range. For NDA or custom terms after we align, email is fine. I usually respond within 1 to 2 business days on email. On Fiverr, often within 24h on business days.'

export const contactFiverrCta =
  "If you already know what you need, ordering through Fiverr is often the fastest way. I will see your full brief there and we can add a call or more detail on the order."

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'clients', label: 'Clients' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
