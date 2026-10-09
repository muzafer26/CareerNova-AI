import type { TechCareer } from "./types";

export const TECH_CAREERS: TechCareer[] = [
  {
    id: "tech-1",
    title: "Frontend Developer",
    slug: "frontend-developer",
    field: "Technology",
    subfield: "Web Development",
    category: "software",
    description:
      "Build user-facing interfaces of modern web applications. Frontend developers engineer responsive layouts, state flows, and interaction physics using HTML, CSS, JavaScript, React, and TypeScript.",
    shortDescription:
      "Build visual interfaces, web applications, and interactive user experiences.",
    avgSalaryIndia: "Entry: ₹4–7 LPA | Mid: ₹8–15 LPA | Sr: ₹16–25+ LPA",
    avgSalaryGlobal: "Entry: $50K–$75K | Mid: $80K–$120K | Sr: $130K–$160K+",
    demandTrend: "rising",
    tags: ["react", "typescript", "javascript", "nextjs", "css", "tailwind", "ui", "web"],
    aliases: [
      "react developer",
      "ui engineer",
      "web developer",
      "nextjs developer",
      "frontend engineer",
    ],
    icon: "Layout",
    roadmapShUrl: "https://roadmap.sh/frontend",
    overview:
      "Frontend development centers on human-computer interfaces. Engineers program client interfaces, maintain responsive layout engines, and translate design blueprints into resilient web apps.",
    whatItDoes:
      "Constructs accessible component hierarchies, optimizes client bundle performance, connects REST/GraphQL APIs, and maintains test suites.",
    timeToJobReady: "6–9 months",
    skillsRequired: [
      "HTML5",
      "CSS3 / Tailwind",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Git / GitHub",
    ],
    stages: [
      {
        id: "fe-1",
        title: "Semantic HTML & The Web Engine",
        description:
          "Master document hierarchy, accessibility standards, and how browsers parse HTTP requests.",
        duration: "3 weeks",
        skills: ["HTML5", "WAI-ARIA", "HTTP Protocols", "DNS & Client-Server"],
        milestones: [
          "Build a semantic, screen-reader accessible page without div-soup",
          "Analyze network request lifecycles in DevTools",
        ],
        order: 1,
        whyExists: "Every client app sits on semantic HTML and HTTP networking fundamentals.",
        realWorldUsage:
          "Production SEO rankings, accessibility compliance, and initial page rendering speed rely on semantic HTML.",
        suggestedProjects: [
          "Accessible Government Form Skeleton",
          "Documentation Outline with ARIA Landmarks",
        ],
        commonMistakes: [
          "Using non-semantic <div> tags for interactive elements",
          "Omitting label associations on form inputs",
        ],
      },
      {
        id: "fe-2",
        title: "Modern Layouts & Styling (CSS & Tailwind)",
        description:
          "Master CSS Grid, Flexbox, custom properties, responsive breakpoints, and utility systems.",
        duration: "4 weeks",
        skills: ["Flexbox", "CSS Grid", "Tailwind CSS", "Responsive Design", "Transitions"],
        milestones: [
          "Construct a complex responsive dashboard grid without horizontal overflow",
          "Implement light/dark tokenized styling",
        ],
        order: 2,
        whyExists: "Modern users access apps across phone, tablet, and ultra-wide screens.",
        realWorldUsage:
          "Design system execution, cross-browser visual fidelity, and fluid layout responsiveness.",
        suggestedProjects: ["Responsive Analytics Grid", "Bauhaus Minimalist Magazine Layout"],
        commonMistakes: [
          "Overusing absolute positioning for responsive layouts",
          "Ignoring mobile-first viewport constraints",
        ],
      },
      {
        id: "fe-3",
        title: "Deep JavaScript & Async Programming",
        description:
          "Understand the Event Loop, asynchronous Promises, DOM manipulation, closures, and ES modules.",
        duration: "6 weeks",
        skills: [
          "JavaScript ES6+",
          "Event Loop",
          "Promises & Async/Await",
          "DOM APIs",
          "Fetch / REST",
        ],
        milestones: [
          "Build an interactive SPA using raw vanilla JS and the Fetch API",
          "Write custom debounce and throttling handlers",
        ],
        order: 3,
        whyExists: "Frameworks come and go, but JavaScript fundamentals govern client execution.",
        realWorldUsage:
          "Data transformations, client state reconciliation, and browser cache management.",
        suggestedProjects: [
          "Real-time Crypto Price Tracker with WebSockets",
          "Interactive KanBan Board",
        ],
        commonMistakes: [
          "Mutating objects directly leading to state bugs",
          "Failing to handle network rejection errors gracefully",
        ],
      },
      {
        id: "fe-4",
        title: "React, State Architecture & TypeScript",
        description:
          "Component lifecycles, hooks, TanStack Query, typed props, and deterministic state flows.",
        duration: "8 weeks",
        skills: [
          "React 19",
          "TypeScript",
          "Custom Hooks",
          "Zustand / Redux",
          "TanStack Router / Query",
        ],
        milestones: [
          "Ship a fully typed CRUD application with optimistic updates and caching",
          "Implement unit tests for hooks",
        ],
        order: 4,
        whyExists:
          "TypeScript eliminates entire classes of runtime defects and React dominates the job market.",
        realWorldUsage: "Enterprise web platforms at scale with multi-developer codebases.",
        suggestedProjects: [
          "E-commerce Storefront with Filter State & Cart Cache",
          "Project Management Dashboard",
        ],
        commonMistakes: [
          "Creating dependency array infinite loops in useEffect",
          "Typing everything with 'any' instead of strict generics",
        ],
      },
      {
        id: "fe-5",
        title: "Production Optimization, Next.js & Portfolio",
        description:
          "Server-side rendering, code splitting, Core Web Vitals, and portfolio launch.",
        duration: "4 weeks",
        skills: [
          "Next.js / SSR",
          "Web Vitals",
          "Lighthouse",
          "Vercel / Cloudflare Deploy",
          "Git Workflows",
        ],
        milestones: [
          "Score 95+ on Lighthouse Performance, Accessibility, and Best Practices",
          "Deploy two production-grade apps on custom domains",
        ],
        order: 5,
        whyExists:
          "Companies evaluate engineers on their ability to ship fast, reliable, deployable software.",
        realWorldUsage:
          "Continuous integration pipelines, CDN edge caching, and real-user monitoring.",
        suggestedProjects: [
          "Developer Portfolio with Case Studies & Live Demos",
          "Full-stack SaaS Boilerplate",
        ],
        commonMistakes: [
          "Showing unfinished tutorial clones without original architecture",
          "Ignoring bundle size analysis",
        ],
      },
    ],
  },
  {
    id: "tech-2",
    title: "Backend Developer",
    slug: "backend-developer",
    field: "Technology",
    subfield: "Server Systems",
    category: "software",
    description:
      "Design server architectures, database schemas, secure authentication pipelines, and distributed APIs that power modern software applications.",
    shortDescription: "Architect servers, databases, business logic, and scalable APIs.",
    avgSalaryIndia: "Entry: ₹5–8 LPA | Mid: ₹10–18 LPA | Sr: ₹20–35+ LPA",
    avgSalaryGlobal: "Entry: $60K–$85K | Mid: $90K–$135K | Sr: $140K–$180K+",
    demandTrend: "high",
    tags: ["nodejs", "python", "databases", "sql", "postgresql", "docker", "apis", "redis"],
    aliases: [
      "api engineer",
      "server engineer",
      "nodejs developer",
      "python developer",
      "backend engineer",
    ],
    icon: "Server",
    roadmapShUrl: "https://roadmap.sh/backend",
    overview:
      "Backend engineering is the foundation of digital products. Engineers craft business logic, query optimization, data security, and resilience mechanisms.",
    whatItDoes:
      "Builds REST/GraphQL microservices, normalizes database schemas, configures Redis caching, handles authentication tokens, and manages server workloads.",
    timeToJobReady: "6–9 months",
    skillsRequired: [
      "Node.js / Python / Go",
      "PostgreSQL / MySQL",
      "REST & GraphQL",
      "Redis Caching",
      "Docker",
      "Authentication (JWT/OAuth)",
    ],
    stages: [
      {
        id: "be-1",
        title: "Server Runtimes & HTTP Core",
        description:
          "Deep dive into Node.js/Python runtimes, HTTP headers, status codes, and server sockets.",
        duration: "4 weeks",
        skills: [
          "Node.js or Python",
          "HTTP Specification",
          "Express or FastAPI",
          "Middleware Architecture",
        ],
        milestones: [
          "Build a RESTful API with validation, route guards, and error middleware",
          "Implement rate limiting from scratch",
        ],
        order: 1,
        whyExists:
          "Understanding request-response lifecycles is foundational before touching complex frameworks.",
        realWorldUsage: "Microservices routing, gateway authorization, and webhook consumption.",
        suggestedProjects: [
          "File Storage API with Streaming",
          "Webhook Listener with Signature Verification",
        ],
        commonMistakes: [
          "Failing to handle async uncaught exceptions, causing server crashes",
          "Misconfiguring CORS headers",
        ],
      },
      {
        id: "be-2",
        title: "Relational Databases & SQL Optimization",
        description:
          "Relational schema design, indexes, transactions (ACID), foreign keys, and query plans.",
        duration: "5 weeks",
        skills: [
          "PostgreSQL",
          "SQL Dialect",
          "Indexing & EXPLAIN",
          "Prisma / Drizzle ORM",
          "Migrations",
        ],
        milestones: [
          "Design a normalized multi-tenant relational schema with foreign keys",
          "Optimize a slow query using composite indexes",
        ],
        order: 2,
        whyExists:
          "Data persistence is the most critical asset of any organization; bad schemas cost millions.",
        realWorldUsage:
          "Transactional billing records, user access controls, and analytics queries.",
        suggestedProjects: [
          "E-commerce Order & Inventory Database with Concurrency Locks",
          "Multi-tenant SaaS Schema",
        ],
        commonMistakes: [
          "N+1 query problems in loops",
          "Not adding indexes on foreign keys and search columns",
        ],
      },
      {
        id: "be-3",
        title: "Authentication, Security & Session Management",
        description:
          "Password hashing, JWT expiration, refresh token rotations, OAuth 2.0 flows, and RBAC.",
        duration: "4 weeks",
        skills: [
          "OAuth 2.0",
          "JWT & Refresh Tokens",
          "bcrypt / Argon2",
          "Role-Based Access Control",
          "OWASP Top 10",
        ],
        milestones: [
          "Build an enterprise auth service with password resets and refresh token rotation",
          "Implement SQL injection and XSS defenses",
        ],
        order: 3,
        whyExists: "Security flaws lead to credential leaks and catastrophic compliance failures.",
        realWorldUsage:
          "Enterprise SSO, HIPAA/GDPR privacy compliance, and multi-user privilege boundaries.",
        suggestedProjects: [
          "Production Auth Service with 2FA TOTP",
          "Role-Based Organization Management API",
        ],
        commonMistakes: [
          "Storing plain-text passwords or secret keys in source control",
          "Storing sensitive tokens in localStorage",
        ],
      },
      {
        id: "be-4",
        title: "Caching, Queues & Distributed Workflows",
        description:
          "Redis caching layers, asynchronous background job queues (BullMQ/Celery), and event publishing.",
        duration: "5 weeks",
        skills: ["Redis", "Message Queues", "Background Workers", "WebSockets", "Pub/Sub"],
        milestones: [
          "Set up a Redis cache-aside pattern with TTL invalidation",
          "Implement an async email/report generator queue",
        ],
        order: 4,
        whyExists:
          "Synchronous HTTP cannot handle expensive tasks like video processing, PDF export, or mass notifications.",
        realWorldUsage: "High-throughput APIs handling thousands of requests per second.",
        suggestedProjects: [
          "Distributed Task Queue Worker with Retry Backoff",
          "Real-time Notification Service",
        ],
        commonMistakes: [
          "Cache stampedes due to missing mutex locks",
          "Not setting TTL on volatile cache keys",
        ],
      },
      {
        id: "be-5",
        title: "Docker, Cloud Deployment & Monitoring",
        description:
          "Containerization with Docker, CI/CD deployment pipelines, logging (Pino/Winston), and health telemetry.",
        duration: "4 weeks",
        skills: [
          "Docker",
          "Docker Compose",
          "CI/CD Actions",
          "Prometheus / Grafana basics",
          "Cloud Hosting",
        ],
        milestones: [
          "Containerize a multi-container stack (App + PostgreSQL + Redis)",
          "Deploy live with automated migration execution",
        ],
        order: 5,
        whyExists:
          "Code that only runs on local machines has zero business value; automation enables continuous delivery.",
        realWorldUsage: "Production clusters, staging environments, and immutable deployments.",
        suggestedProjects: [
          "Production-Ready Microservice Template",
          "Automated GitHub Actions CI/CD Pipeline",
        ],
        commonMistakes: [
          "Running Docker containers as root user in production",
          "Hardcoding database secrets inside Dockerfiles",
        ],
      },
    ],
  },
  {
    id: "tech-3",
    title: "AI Engineer",
    slug: "ai-engineer",
    field: "Technology",
    subfield: "Applied Intelligence",
    category: "data-ai",
    description:
      "Build generative AI systems, RAG pipelines, autonomous agents, and fine-tuned LLM workflows that integrate with enterprise software products.",
    shortDescription: "Build LLM applications, RAG pipelines, and autonomous AI agents.",
    avgSalaryIndia: "Entry: ₹7–12 LPA | Mid: ₹15–28 LPA | Sr: ₹30–50+ LPA",
    avgSalaryGlobal: "Entry: $85K–$120K | Mid: $130K–$180K | Sr: $190K–$260K+",
    demandTrend: "rising",
    tags: ["python", "genai", "llm", "rag", "vector-db", "langchain", "gemini", "openai"],
    aliases: [
      "llm engineer",
      "prompt engineer",
      "genai developer",
      "rag specialist",
      "ai application engineer",
    ],
    icon: "Bot",
    roadmapShUrl: "https://roadmap.sh/ai-data-scientist",
    overview:
      "AI Engineering bridges modern foundation models with software products. AI engineers design prompt chains, vector embeddings, semantic retrieval, and agent tool execution.",
    whatItDoes:
      "Builds production RAG systems, benchmarks model output hallucination rates, constructs vector search pipelines, and deploys tool-calling agents.",
    timeToJobReady: "6–10 months",
    skillsRequired: [
      "Python",
      "OpenAI / Gemini SDKs",
      "Vector Databases (Pinecone/pgvector)",
      "LangChain / LlamaIndex",
      "Evaluation & Guardrails",
      "Embeddings & RAG",
    ],
    stages: [
      {
        id: "ai-1",
        title: "Python Foundations & Mathematical Intuition",
        description:
          "Python data structures, NumPy arrays, linear algebra concepts (vectors, dot products, cosine similarity).",
        duration: "4 weeks",
        skills: ["Python 3.12", "NumPy", "Pandas", "Cosine Similarity", "Tokenization"],
        milestones: [
          "Implement semantic cosine similarity from scratch",
          "Tokenize and chunk large text documents cleanly",
        ],
        order: 1,
        whyExists:
          "All embeddings, attention mechanisms, and vector databases operate on multidimensional array math.",
        realWorldUsage: "Data preparation, token counting, and vector distance comparisons.",
        suggestedProjects: ["Vector Distance Math Calculator", "Document Chunking Benchmarker"],
        commonMistakes: [
          "Confusing character length with token count",
          "Inefficient iteration over NumPy arrays",
        ],
      },
      {
        id: "ai-2",
        title: "Foundation Models, Prompt Engineering & Function Calling",
        description:
          "System prompts, few-shot examples, structured outputs (JSON Schema), and model tool calling.",
        duration: "4 weeks",
        skills: [
          "Gemini / OpenAI API",
          "Prompt Engineering",
          "JSON Mode",
          "Tool / Function Calling",
        ],
        milestones: [
          "Build an AI assistant that reliably generates validated JSON conforming to a Pydantic schema",
          "Implement tool calling for live weather/DB queries",
        ],
        order: 2,
        whyExists:
          "Enterprise software demands deterministic, structured outputs rather than unpredictable markdown text.",
        realWorldUsage:
          "Autonomous customer triage, automated database extraction, and workflow execution.",
        suggestedProjects: ["Structured Resume Extractor to JSON", "Multi-Tool Research Assistant"],
        commonMistakes: [
          "Trusting model outputs without strict JSON validation",
          "Stuffing too many irrelevant instructions in system prompts",
        ],
      },
      {
        id: "ai-3",
        title: "Embeddings, Vector Databases & Production RAG",
        description:
          "Text embedding models, vector indexing (HNSW, IVFFlat), hybrid search, and semantic retrieval.",
        duration: "6 weeks",
        skills: [
          "Embeddings",
          "pgvector / Pinecone / Qdrant",
          "Chunking Strategies",
          "Hybrid Search",
          "Reranking",
        ],
        milestones: [
          "Build a retrieval-augmented generation pipeline over a 500-page enterprise PDF manual",
          "Implement cross-encoder reranking",
        ],
        order: 3,
        whyExists:
          "LLMs hallucinate and have static training cutoffs; RAG grounds them in real private enterprise data.",
        realWorldUsage:
          "Internal enterprise search, legal discovery, and customer support deflection.",
        suggestedProjects: [
          "Full-Stack Enterprise Document Q&A Portal",
          "Semantic Codebase Search Engine",
        ],
        commonMistakes: [
          "Using arbitrary fixed-size chunking that splits sentences in half",
          "Ignoring metadata filtering during vector queries",
        ],
      },
      {
        id: "ai-4",
        title: "Autonomous Agents & Multi-Turn Workflows",
        description:
          "Agent architectures (ReAct, plan-and-solve), memory mechanisms, human-in-the-loop validation.",
        duration: "5 weeks",
        skills: ["LangGraph / CrewAI", "ReAct Framework", "Session Memory", "Guardrails & Safety"],
        milestones: [
          "Build an autonomous multi-step agent that browses web pages, validates results, and writes a synthesis report",
          "Implement hallucination guardrails",
        ],
        order: 4,
        whyExists:
          "Single-turn prompts cannot solve complex multi-step objectives that require iteration and error recovery.",
        realWorldUsage: "Automated deep research, code generation, and complex logistics planning.",
        suggestedProjects: [
          "Autonomous Competitive Intelligence Agent",
          "Automated Pull Request Reviewer Bot",
        ],
        commonMistakes: [
          "Creating unbounded agent loops that consume infinite API tokens",
          "Not having timeout fallbacks",
        ],
      },
      {
        id: "ai-5",
        title: "Evaluation, Fine-Tuning & MLOps",
        description:
          "RAG evaluation (Ragas, TruLens), latency optimization, semantic caching, and model fine-tuning.",
        duration: "5 weeks",
        skills: [
          "RAGAS / Evaluation",
          "Semantic Caching (Redis)",
          "LoRA Fine-tuning",
          "vLLM / Inference",
        ],
        milestones: [
          "Create an automated evaluation test suite measuring faithfulness and answer relevance",
          "Deploy an open-source model endpoint",
        ],
        order: 5,
        whyExists:
          "You cannot improve what you cannot measure; AI apps must have quantifiable quality metrics.",
        realWorldUsage: "Production monitoring, model regression testing, and cloud cost control.",
        suggestedProjects: [
          "Automated LLM Benchmark & Regression Testing Suite",
          "Cost-Optimized Semantic Caching Gateway",
        ],
        commonMistakes: [
          "Evaluating AI quality subjectively by eye rather than with structured ground-truth datasets",
          "Overpaying for frontier models when smaller models suffice",
        ],
      },
    ],
  },
  {
    id: "tech-4",
    title: "DevOps Engineer",
    slug: "devops-engineer",
    field: "Technology",
    subfield: "Infrastructure & Platform",
    category: "cloud-devops",
    description:
      "Automate build, deployment, and infrastructure delivery pipelines. DevOps engineers guarantee 99.99% uptime, manage Kubernetes clusters, and write Infrastructure as Code.",
    shortDescription: "Automate infrastructure, CI/CD pipelines, and cloud platform operations.",
    avgSalaryIndia: "Entry: ₹5–9 LPA | Mid: ₹12–22 LPA | Sr: ₹24–40+ LPA",
    avgSalaryGlobal: "Entry: $70K–$95K | Mid: $105K–$150K | Sr: $155K–$200K+",
    demandTrend: "high",
    tags: ["linux", "docker", "kubernetes", "terraform", "aws", "ci-cd", "bash", "monitoring"],
    aliases: [
      "platform engineer",
      "sre",
      "site reliability engineer",
      "cloud infrastructure engineer",
    ],
    icon: "Cpu",
    roadmapShUrl: "https://roadmap.sh/devops",
    overview:
      "DevOps unites software development and cloud operations. Platform engineers automate provisioning, enforce security posture, and eliminate manual operations.",
    whatItDoes:
      "Configures CI/CD pipelines, provisions cloud networks via Terraform, manages Kubernetes pods, monitors server telemetry, and resolves incident alerts.",
    timeToJobReady: "7–10 months",
    skillsRequired: [
      "Linux Shell & Bash",
      "Docker & Containers",
      "Kubernetes",
      "Terraform / IaC",
      "GitHub Actions / GitLab CI",
      "AWS / GCP",
      "Prometheus & Grafana",
    ],
    stages: [
      {
        id: "do-1",
        title: "Linux Systems, Bash & Networking",
        description:
          "Master Linux terminal operations, systemd processes, file permissions, SSH keys, DNS, and IP routing.",
        duration: "5 weeks",
        skills: [
          "Linux (Ubuntu/Debian)",
          "Bash Scripting",
          "Networking (TCP/IP, DNS, Subnets)",
          "SSH & Security",
        ],
        milestones: [
          "Write a Bash automation script for log rotation and server backup",
          "Configure a secure Nginx reverse proxy with SSL termination",
        ],
        order: 1,
        whyExists:
          "Over 90% of cloud servers and containers run on Linux; sysadmin skills are non-negotiable.",
        realWorldUsage: "Remote server debugging, process management, and platform bootstrapping.",
        suggestedProjects: [
          "Automated Linux Server Hardening Script",
          "Multi-site Reverse Proxy Configuration",
        ],
        commonMistakes: [
          "Running scripts with sudo without understanding permission boundaries",
          "Leaving open SSH ports with password authentication",
        ],
      },
      {
        id: "do-2",
        title: "Containerization with Docker",
        description:
          "Docker architecture, multi-stage builds, volume mounts, network bridges, and container security.",
        duration: "4 weeks",
        skills: ["Docker", "Dockerfile Best Practices", "Multi-stage Builds", "Docker Compose"],
        milestones: [
          "Optimize a bloated 1GB application Docker image down to <80MB using Alpine/Distroless",
          "Compose a multi-tier microservice environment",
        ],
        order: 2,
        whyExists:
          "Containers ensure 'it worked on my machine' works identically in cloud production.",
        realWorldUsage:
          "Packaging software artifacts, local development parity, and reproducible deployments.",
        suggestedProjects: [
          "Ultra-lean Production Multi-stage Docker Template",
          "Local Microservices Testing Suite",
        ],
        commonMistakes: [
          "Installing unnecessary development packages in production images",
          "Hardcoding secret keys into Docker layers",
        ],
      },
      {
        id: "do-3",
        title: "CI/CD Pipeline Engineering",
        description:
          "Continuous integration workflows, linting, automated testing, semantic versioning, and canary deployment.",
        duration: "5 weeks",
        skills: [
          "GitHub Actions",
          "GitLab CI",
          "Automated Testing",
          "Artifact Registry",
          "Release Automation",
        ],
        milestones: [
          "Build an end-to-end CI/CD pipeline that runs tests, builds Docker images, and pushes to a container registry",
          "Implement automated rollback on failure",
        ],
        order: 3,
        whyExists: "Manual deployments cause human errors, downtime, and slow developer velocity.",
        realWorldUsage: "Shipping hundreds of safe code commits to production daily.",
        suggestedProjects: [
          "Enterprise GitHub Actions CI/CD Pipeline with Matrix Testing",
          "Slack Notification Incident Bot",
        ],
        commonMistakes: [
          "Failing to cache build dependencies, causing 30-minute CI runs",
          "Deploying without automated test validation",
        ],
      },
      {
        id: "do-4",
        title: "Infrastructure as Code (Terraform)",
        description:
          "Declarative infrastructure provisioning, state file management, module reuse, and cloud resources.",
        duration: "6 weeks",
        skills: [
          "Terraform / OpenTofu",
          "AWS / GCP Foundations",
          "VPC & Subnets",
          "IAM Security",
          "State Management",
        ],
        milestones: [
          "Provision a complete cloud VPC, public/private subnets, and database using modular Terraform code",
          "Implement remote state locking with S3 and DynamoDB",
        ],
        order: 4,
        whyExists:
          "Clicking through web consoles is unrepeatable, unversioned, and prone to catastrophic drift.",
        realWorldUsage:
          "Spinning up identical staging and production environments across regions in minutes.",
        suggestedProjects: [
          "Reusable Terraform Multi-tier Cloud VPC Module",
          "Automated Disaster Recovery Script",
        ],
        commonMistakes: [
          "Committing terraform.tfstate containing plaintext secrets to git",
          "Not locking state files against concurrent runs",
        ],
      },
      {
        id: "do-5",
        title: "Kubernetes Orchestration & Observability",
        description:
          "Kubernetes architecture (Pods, Deployments, Services, Ingress), Helm packages, Prometheus, and Grafana.",
        duration: "6 weeks",
        skills: [
          "Kubernetes (k8s)",
          "Helm Charts",
          "Prometheus",
          "Grafana",
          "Log Aggregation (Loki/ELK)",
        ],
        milestones: [
          "Deploy and autoscale a stateful application on a Kubernetes cluster with zero downtime",
          "Build a Grafana dashboard monitoring CPU, memory, and error rates",
        ],
        order: 5,
        whyExists:
          "Distributed cloud microservices require automated healing, load distribution, and observability.",
        realWorldUsage:
          "Enterprise platforms handling millions of users across hybrid cloud clusters.",
        suggestedProjects: [
          "Production-Ready Kubernetes Helm Chart Deployment",
          "Real-Time Observability & Alerting Dashboard",
        ],
        commonMistakes: [
          "Setting unbounded resource requests causing node starvation",
          "Failing to define liveness and readiness probes",
        ],
      },
    ],
  },
  {
    id: "tech-5",
    title: "Full Stack Developer",
    slug: "full-stack-developer",
    field: "Technology",
    subfield: "End-to-End Engineering",
    category: "software",
    description:
      "Master both client interfaces and server infrastructure. Full stack engineers build complete digital products from UI wireframes down to database schemas and deployment.",
    shortDescription: "Build entire applications end-to-end: UI, servers, databases, and APIs.",
    avgSalaryIndia: "Entry: ₹5–8 LPA | Mid: ₹10–18 LPA | Sr: ₹18–30+ LPA",
    avgSalaryGlobal: "Entry: $60K–$85K | Mid: $95K–$135K | Sr: $140K–$175K+",
    demandTrend: "high",
    tags: [
      "fullstack",
      "react",
      "nodejs",
      "typescript",
      "postgresql",
      "tailwind",
      "nextjs",
      "rest",
    ],
    aliases: [
      "software engineer",
      "web engineer",
      "mern stack developer",
      "product engineer",
      "full stack engineer",
    ],
    icon: "Layers",
    roadmapShUrl: "https://roadmap.sh/full-stack",
    overview:
      "Full stack engineering provides universal software agency. You possess the architectural vision to conceptualize a feature, write its UI, program its backend APIs, model its database, and deploy it to users.",
    whatItDoes:
      "Builds modern SPAs/MPAs, connects serverless backend functions, defines relational data models, and integrates payment processors.",
    timeToJobReady: "8–12 months",
    skillsRequired: [
      "TypeScript",
      "React & Next.js",
      "Node.js / Express",
      "PostgreSQL / Prisma",
      "Tailwind CSS",
      "REST / GraphQL",
      "Git & Docker",
    ],
    stages: [
      {
        id: "fs-1",
        title: "Client & UI Architecture",
        description:
          "Semantic HTML, responsive Tailwind styling, React components, state handling, and client routing.",
        duration: "6 weeks",
        skills: ["HTML/CSS", "Tailwind CSS", "React", "TypeScript", "Client State"],
        milestones: [
          "Build a multi-page responsive web application with clean design tokens",
          "Implement interactive search and filter UI",
        ],
        order: 1,
        whyExists:
          "Users interact with the client; clean user interfaces drive product engagement.",
        realWorldUsage: "SaaS landing pages, web apps, and customer portals.",
        suggestedProjects: [
          "E-commerce Product Showcase with Cart Drawer",
          "Interactive Kanban Board",
        ],
        commonMistakes: [
          "Mixing business logic directly into UI components",
          "Ignoring mobile responsive views",
        ],
      },
      {
        id: "fs-2",
        title: "Server APIs & Business Logic",
        description:
          "Node.js/Express, REST endpoints, JSON payload validation, route controllers, and error handling.",
        duration: "5 weeks",
        skills: ["Node.js", "Express / Hono", "REST Design", "Zod Validation", "Middleware"],
        milestones: [
          "Build a structured REST API with strict request body validation using Zod",
          "Create protected API endpoints with middleware guards",
        ],
        order: 2,
        whyExists: "Client data must be validated and processed securely on the server.",
        realWorldUsage: "Authentication gateways, webhook ingestion, and transaction processing.",
        suggestedProjects: [
          "RESTful Blog & Comment API with Validation",
          "File Management Microservice",
        ],
        commonMistakes: [
          "Trusting client input without server-side validation",
          "Not centralizing error handling",
        ],
      },
      {
        id: "fs-3",
        title: "Database Modeling & Data Persistence",
        description:
          "PostgreSQL schema design, primary keys, relationships, ORMs (Prisma/Drizzle), and database migrations.",
        duration: "5 weeks",
        skills: ["PostgreSQL", "Prisma / Drizzle", "Data Modeling", "Migrations", "Transactions"],
        milestones: [
          "Design a relational schema with 1-to-many and many-to-many relationships",
          "Execute migration scripts safely",
        ],
        order: 3,
        whyExists: "Applications need persistent, normalized, and transactional data integrity.",
        realWorldUsage: "Storing user accounts, orders, analytics, and content.",
        suggestedProjects: [
          "Project Management Database Schema with Audit Logs",
          "Multi-vendor Store Database",
        ],
        commonMistakes: [
          "Storing unnormalized duplicate data without foreign keys",
          "Ignoring database transaction rollbacks on failure",
        ],
      },
      {
        id: "fs-4",
        title: "Full-Stack Integration & Auth",
        description:
          "Connecting client to backend, handling auth sessions, cookies, JWTs, and third-party integrations (Stripe).",
        duration: "6 weeks",
        skills: [
          "Next.js / Full-Stack SSR",
          "Auth (NextAuth/Supabase)",
          "Stripe Payments",
          "Webhooks",
          "TanStack Query",
        ],
        milestones: [
          "Implement a full-stack SaaS app with email authentication, database persistence, and payment checkout",
          "Handle asynchronous Stripe webhooks securely",
        ],
        order: 4,
        whyExists: "Full stack value comes from uniting authentication, data, and money flows.",
        realWorldUsage: "Shipping real monetized digital software products.",
        suggestedProjects: [
          "Subscription SaaS App with Stripe Checkout",
          "Collaborative Workspace with Real-time Sync",
        ],
        commonMistakes: [
          "Exposing secret API keys in client-side code",
          "Not handling asynchronous webhook edge cases",
        ],
      },
      {
        id: "fs-5",
        title: "Deployment, CI/CD & Portfolio Launch",
        description:
          "Cloud deployment (Vercel, Render, AWS), custom domains, database hosting, and portfolio launch.",
        duration: "4 weeks",
        skills: [
          "Vercel / Supabase",
          "Docker",
          "CI/CD Actions",
          "Lighthouse Optimization",
          "Domain & SSL",
        ],
        milestones: [
          "Deploy a full-stack app to production on a custom domain with SSL and automated DB migrations",
          "Publish portfolio with 3 deployed flagship applications",
        ],
        order: 5,
        whyExists:
          "Employers evaluate full stack engineers on live, working, production-grade applications.",
        realWorldUsage:
          "Startup feature velocity, autonomous product shipping, and technical leadership.",
        suggestedProjects: [
          "Flagship Full-Stack SaaS Portfolio Application",
          "Open Source Full-Stack Component Library",
        ],
        commonMistakes: [
          "Deploying with dummy test credentials in production",
          "Leaving dead demo links on portfolio sites",
        ],
      },
    ],
  },
  {
    id: "tech-6",
    title: "Data Scientist",
    slug: "data-scientist",
    field: "Technology",
    subfield: "Analytics & Machine Learning",
    category: "data-ai",
    description:
      "Extract actionable intelligence from complex datasets. Data scientists leverage statistical modeling, predictive algorithms, Python, and machine learning to drive strategic business decisions.",
    shortDescription: "Extract insights, build predictive models, and analyze complex datasets.",
    avgSalaryIndia: "Entry: ₹6–10 LPA | Mid: ₹12–22 LPA | Sr: ₹25–40+ LPA",
    avgSalaryGlobal: "Entry: $75K–$100K | Mid: $115K–$160K | Sr: $165K–$220K+",
    demandTrend: "high",
    tags: [
      "python",
      "machine-learning",
      "statistics",
      "sql",
      "pandas",
      "scikit-learn",
      "data-visualization",
    ],
    aliases: [
      "machine learning scientist",
      "data researcher",
      "quantitative analyst",
      "statistical modeler",
    ],
    icon: "BarChart2",
    roadmapShUrl: "https://roadmap.sh/ai-data-scientist",
    overview:
      "Data science combines statistical rigor with computational power. Practitioners clean massive data pools, formulate statistical hypotheses, uncover hidden trends, and deploy predictive ML models.",
    whatItDoes:
      "Cleans dirty data, conducts exploratory data analysis (EDA), trains classification/regression models, and communicates findings to executive teams.",
    timeToJobReady: "8–12 months",
    skillsRequired: [
      "Python",
      "SQL",
      "Pandas & NumPy",
      "Scikit-Learn",
      "Applied Statistics",
      "Tableau / PowerBI",
      "Feature Engineering",
    ],
    stages: [
      {
        id: "ds-1",
        title: "Python & Advanced SQL Analytics",
        description:
          "Master Python programming, Pandas data frames, NumPy operations, and complex SQL window functions.",
        duration: "5 weeks",
        skills: ["Python", "Pandas", "NumPy", "SQL Window Functions", "CTEs"],
        milestones: [
          "Analyze a 1-million row dataset using Pandas and generate summary statistics in seconds",
          "Write complex SQL window queries for rolling cohort retention",
        ],
        order: 1,
        whyExists:
          "Real-world data is stored across relational tables and requires rigorous extraction.",
        realWorldUsage: "Cohort analysis, churn tracking, and business metric extraction.",
        suggestedProjects: [
          "Customer Retention & Churn SQL Analysis",
          "Automated Financial Data Pipeline in Pandas",
        ],
        commonMistakes: [
          "Writing unvectorized row-by-row loops in Pandas",
          "Failing to check for NULL and missing values",
        ],
      },
      {
        id: "ds-2",
        title: "Exploratory Data Analysis (EDA) & Visualization",
        description:
          "Statistical distributions, correlation matrices, outlier detection, and data storytelling.",
        duration: "4 weeks",
        skills: ["Matplotlib", "Seaborn", "Plotly", "Hypothesis Testing", "Data Cleaning"],
        milestones: [
          "Perform end-to-end EDA on an messy real-world dataset and identify 5 strategic business anomalies",
          "Create interactive visual reports",
        ],
        order: 2,
        whyExists:
          "Stakeholders cannot read raw numbers; visual storytelling influences billion-dollar decisions.",
        realWorldUsage: "Product growth experiments, fraud detection, and executive dashboards.",
        suggestedProjects: [
          "Global Housing Market Pricing EDA",
          "Healthcare Diagnostic Data Visualizer",
        ],
        commonMistakes: [
          "Cherry-picking visualizations to fit biased preconceived narratives",
          "Ignoring distribution skewness and extreme outliers",
        ],
      },
      {
        id: "ds-3",
        title: "Applied Statistics & Probability",
        description:
          "Probability distributions, Central Limit Theorem, hypothesis testing, p-values, and A/B testing design.",
        duration: "5 weeks",
        skills: [
          "A/B Testing",
          "Hypothesis Testing",
          "Confidence Intervals",
          "Bayesian vs Frequentist",
          "Regression",
        ],
        milestones: [
          "Design and evaluate an A/B test experiment with sample size calculation and statistical significance",
          "Build a multivariate regression model",
        ],
        order: 3,
        whyExists:
          "Without statistical guardrails, random noise is mistakenly treated as real signals.",
        realWorldUsage: "Pricing elasticity, marketing conversion testing, and medical trials.",
        suggestedProjects: [
          "E-commerce Conversion Rate A/B Testing Engine",
          "Multivariate Real Estate Price Predictor",
        ],
        commonMistakes: [
          "Stopping A/B tests early the moment p < 0.05 without adequate sample size",
          "Confusing correlation with causation",
        ],
      },
      {
        id: "ds-4",
        title: "Classical Machine Learning Algorithms",
        description:
          "Supervised and unsupervised learning: Decision Trees, Random Forests, XGBoost, K-Means, and PCA.",
        duration: "6 weeks",
        skills: [
          "Scikit-Learn",
          "XGBoost",
          "Cross-Validation",
          "Feature Engineering",
          "ROC-AUC & F1 Score",
        ],
        milestones: [
          "Train a customer churn predictor with an F1 score > 0.88 using XGBoost and feature selection",
          "Perform customer clustering using K-Means and PCA",
        ],
        order: 4,
        whyExists:
          "Machine learning automates complex decision logic that static rules cannot capture.",
        realWorldUsage: "Loan default risk scoring, recommendation feeds, and dynamic pricing.",
        suggestedProjects: [
          "Credit Risk Default Prediction System",
          "E-commerce Customer Segmentation Model",
        ],
        commonMistakes: [
          "Data leakage from test sets into training sets",
          "Evaluating imbalanced datasets on simple accuracy instead of F1/AUC",
        ],
      },
      {
        id: "ds-5",
        title: "Model Deployment & Business Impact",
        description:
          "FastAPI model serving, Docker containerization, Streamlit dashboards, and portfolio showcase.",
        duration: "4 weeks",
        skills: [
          "FastAPI",
          "Streamlit",
          "Docker",
          "Model Serialization (ONNX/Joblib)",
          "Storytelling",
        ],
        milestones: [
          "Deploy a live ML model behind a FastAPI endpoint with an interactive Streamlit UI",
          "Publish 2 reproducible data science case studies on GitHub",
        ],
        order: 5,
        whyExists:
          "Models locked inside Jupyter notebooks provide zero value to real-world businesses.",
        realWorldUsage: "Real-time inference microservices embedded into customer apps.",
        suggestedProjects: [
          "Live Interactive Loan Risk Assessment Web App",
          "Reproducible Kaggle Grandmaster Style Case Study",
        ],
        commonMistakes: [
          "Sharing raw notebook dumps without clean code, explanations, or conclusions",
          "Not handling invalid input types during live inference",
        ],
      },
    ],
  },
  {
    id: "tech-7",
    title: "Cloud Engineer",
    slug: "cloud-engineer",
    field: "Technology",
    subfield: "Cloud Architecture",
    category: "cloud-devops",
    description:
      "Architect and manage enterprise cloud infrastructure across AWS, Google Cloud, and Azure. Cloud engineers ensure global availability, disaster recovery, and cloud cost optimization.",
    shortDescription:
      "Architect scalable, cost-efficient, and secure cloud environments on AWS & Azure.",
    avgSalaryIndia: "Entry: ₹5–9 LPA | Mid: ₹12–20 LPA | Sr: ₹22–38+ LPA",
    avgSalaryGlobal: "Entry: $70K–$95K | Mid: $105K–$145K | Sr: $150K–$190K+",
    demandTrend: "high",
    tags: ["aws", "cloud", "azure", "networking", "terraform", "iam", "serverless", "storage"],
    aliases: [
      "cloud architect",
      "aws solutions architect",
      "cloud solutions engineer",
      "azure cloud engineer",
    ],
    icon: "Cloud",
    roadmapShUrl: "https://roadmap.sh/devops",
    overview:
      "Cloud engineering designs the virtual backbone of the modern internet. Engineers provision virtual data centers, enforce access controls, optimize computing bills, and establish multi-region redundancy.",
    whatItDoes:
      "Configures VPC networks, provisions S3 storage buckets, architects serverless Lambda functions, implements IAM least-privilege security, and monitors cloud spending.",
    timeToJobReady: "6–9 months",
    skillsRequired: [
      "AWS (EC2, S3, RDS, Lambda, IAM, VPC)",
      "Networking & Security Groups",
      "Terraform / CloudFormation",
      "Linux Administration",
      "Cost Management",
    ],
    stages: [
      {
        id: "cl-1",
        title: "Cloud Fundamentals & AWS Core Services",
        description:
          "Virtual compute (EC2), object storage (S3), managed relational databases (RDS), and AWS management console.",
        duration: "4 weeks",
        skills: ["AWS EC2", "AWS S3", "AWS RDS", "AWS CLI", "Billing & Budget Alarms"],
        milestones: [
          "Configure a production web server on EC2 with strict security group ingress rules",
          "Set up S3 static asset hosting with CloudFront CDN",
        ],
        order: 1,
        whyExists:
          "Cloud platforms have replaced on-premise physical servers for modern organizations.",
        realWorldUsage: "Hosting websites, storing petabytes of assets, and running databases.",
        suggestedProjects: [
          "Highly Available Multi-AZ Web Server on AWS",
          "S3 Secure Static Site with CloudFront",
        ],
        commonMistakes: [
          "Leaving S3 buckets publicly readable to the internet",
          "Forgetting to set budget alarms, leading to accidental bills",
        ],
      },
      {
        id: "cl-2",
        title: "Virtual Networking & Cloud Security (VPC & IAM)",
        description:
          "VPCs, CIDR blocks, public/private subnets, NAT Gateways, Route 53 DNS, and IAM policies.",
        duration: "5 weeks",
        skills: [
          "VPC Architecture",
          "Subnets & Route Tables",
          "NAT Gateways",
          "IAM Least Privilege",
          "Route 53",
        ],
        milestones: [
          "Architect a secure dual-tier VPC with private database subnets unreachable from the internet",
          "Write fine-grained IAM JSON policies following least-privilege rules",
        ],
        order: 2,
        whyExists:
          "Network isolation and credential control are the primary defense against catastrophic cloud data breaches.",
        realWorldUsage:
          "Fintech compliance, enterprise network separation, and zero-trust architectures.",
        suggestedProjects: [
          "Enterprise Secure Multi-Tier VPC Blueprint",
          "IAM Access Analyzer Audit Matrix",
        ],
        commonMistakes: [
          "Attaching AdministratorAccess to IAM roles used by applications",
          "Placing production databases in public subnets with public IPs",
        ],
      },
      {
        id: "cl-3",
        title: "Serverless Computing & Microservices",
        description:
          "AWS Lambda, API Gateway, DynamoDB, SQS queues, and event-driven cloud architecture.",
        duration: "5 weeks",
        skills: ["AWS Lambda", "API Gateway", "DynamoDB", "EventBridge", "SQS / SNS"],
        milestones: [
          "Build a completely serverless REST API that scales to zero and costs $0 when idle",
          "Implement asynchronous event fan-out with SNS and SQS",
        ],
        order: 3,
        whyExists:
          "Serverless eliminates operating system maintenance and automatically scales with traffic spikes.",
        realWorldUsage: "Image processing pipelines, webhook handlers, and background tasks.",
        suggestedProjects: [
          "Serverless Image Resizing Pipeline with S3 and Lambda",
          "Event-Driven Order Processing System",
        ],
        commonMistakes: [
          "Suffering from Lambda cold-start latency due to heavy imports",
          "Unbounded DynamoDB scans instead of targeted query indexes",
        ],
      },
      {
        id: "cl-4",
        title: "Infrastructure as Code & Cloud Automation",
        description:
          "Terraform modules for AWS, state management, automated drift detection, and cloud cost control.",
        duration: "5 weeks",
        skills: [
          "Terraform",
          "CloudFormation",
          "Cost Optimization (AWS Cost Explorer)",
          "AWS CloudWatch",
        ],
        milestones: [
          "Provision a complete cloud application stack with one command via Terraform",
          "Audit and reduce cloud resource waste using AWS Cost Explorer",
        ],
        order: 4,
        whyExists:
          "Enterprise cloud teams maintain hundreds of environments; manual point-and-click is strictly forbidden.",
        realWorldUsage:
          "Automating cloud creation, disaster recovery rebuilds, and compliance auditing.",
        suggestedProjects: [
          "Terraform Multi-Environment AWS Blueprint",
          "Automated Cloud Idle Resource Terminator",
        ],
        commonMistakes: [
          "Hardcoding cloud region names or IDs in Terraform code",
          "Not utilizing reserved instances or savings plans for predictable workloads",
        ],
      },
      {
        id: "cl-5",
        title: "High Availability, Disaster Recovery & Certification",
        description:
          "Auto-scaling groups, application load balancers, multi-region replication, and AWS Solutions Architect preparation.",
        duration: "4 weeks",
        skills: [
          "Elastic Load Balancing (ALB)",
          "Auto Scaling Groups",
          "Route 53 Failover",
          "Backup & RPO/RTO",
          "AWS SAA Exam Readiness",
        ],
        milestones: [
          "Simulate a cloud server failure and verify zero-downtime automated failover",
          "Pass an AWS Solutions Architect Associate mock exam with 85%+",
        ],
        order: 5,
        whyExists:
          "Disasters happen; cloud architectures must absorb hardware failures without human intervention.",
        realWorldUsage: "Global enterprise platforms delivering uninterrupted 24/7 service.",
        suggestedProjects: [
          "Auto-Scaling Multi-AZ Web Architecture with ALB",
          "Cloud Disaster Recovery Plan & Simulation Report",
        ],
        commonMistakes: [
          "Never testing disaster recovery backups to verify they can actually be restored",
          "Relying on single-region infrastructure for mission-critical apps",
        ],
      },
    ],
  },
  {
    id: "tech-8",
    title: "Cybersecurity Analyst",
    slug: "cybersecurity-analyst",
    field: "Technology",
    subfield: "Information Security",
    category: "security-qa",
    description:
      "Protect systems, networks, and applications from cyber attacks, malware, and data breaches. Cybersecurity analysts monitor vulnerabilities, analyze threats, and ensure compliance.",
    shortDescription: "Defend networks, detect vulnerabilities, and secure enterprise software.",
    avgSalaryIndia: "Entry: ₹5–8 LPA | Mid: ₹10–18 LPA | Sr: ₹20–35+ LPA",
    avgSalaryGlobal: "Entry: $65K–$90K | Mid: $95K–$135K | Sr: $140K–$185K+",
    demandTrend: "rising",
    tags: [
      "security",
      "networking",
      "linux",
      "siem",
      "wireshark",
      "ethical-hacking",
      "cryptography",
    ],
    aliases: [
      "infosec analyst",
      "soc analyst",
      "security engineer",
      "vulnerability analyst",
      "incident responder",
    ],
    icon: "Shield",
    roadmapShUrl: "https://roadmap.sh/cyber-security",
    overview:
      "Cybersecurity is the digital defense system of organizations. Analysts inspect network traffic, triage security incidents, perform vulnerability assessments, and audit compliance against cyber threats.",
    whatItDoes:
      "Monitors SIEM alert logs, performs packet inspections with Wireshark, conducts vulnerability scans, investigates phishing campaigns, and hardens operating systems.",
    timeToJobReady: "7–11 months",
    skillsRequired: [
      "Network Protocols (TCP/IP, DNS, SSL/TLS)",
      "Linux Security Hardening",
      "Wireshark Packet Analysis",
      "SIEM (Splunk/Wazuh)",
      "OWASP Top 10",
      "Python Scripting for Security",
    ],
    stages: [
      {
        id: "cs-1",
        title: "Networking & System Security Foundations",
        description:
          "OSI model, packet routing, ports, protocols, firewalls, and Linux security administration.",
        duration: "5 weeks",
        skills: ["TCP/IP", "Wireshark", "Nmap", "Linux Permissions", "Firewalls (iptables/UFW)"],
        milestones: [
          "Perform a network scan with Nmap and identify exposed vulnerabilities and open ports",
          "Capture and analyze malicious network packets in Wireshark",
        ],
        order: 1,
        whyExists: "You cannot defend a network without understanding how packets move through it.",
        realWorldUsage: "Intrusion detection, network mapping, and unauthorized device discovery.",
        suggestedProjects: [
          "Home Lab Network Vulnerability Assessment",
          "Wireshark Packet Analysis Case Study",
        ],
        commonMistakes: [
          "Running unauthorized scans on public networks outside permitted labs",
          "Relying on default system firewall settings",
        ],
      },
      {
        id: "cs-2",
        title: "Application Security & OWASP Top 10",
        description:
          "Web application vulnerabilities: SQL Injection, XSS, CSRF, broken authentication, and SSRF.",
        duration: "5 weeks",
        skills: [
          "OWASP Top 10",
          "Burp Suite",
          "SQL Injection",
          "Cross-Site Scripting (XSS)",
          "Security Headers",
        ],
        milestones: [
          "Identify and exploit SQL Injection and XSS flaws in a legal sandbox (Juice Shop / DVWA)",
          "Implement strict Content Security Policy (CSP) and input sanitization",
        ],
        order: 2,
        whyExists: "Web applications are the most common entry point for external attackers.",
        realWorldUsage:
          "Secure code review, penetration testing, and software development lifecycle defense.",
        suggestedProjects: [
          "OWASP Juice Shop Complete Exploitation & Defense Report",
          "Automated Security Headers Audit Tool",
        ],
        commonMistakes: [
          "Fixing vulnerabilities with client-side filters instead of server-side parameterized queries",
          "Ignoring third-party npm package vulnerabilities",
        ],
      },
      {
        id: "cs-3",
        title: "Security Operations & SIEM Monitoring",
        description:
          "Log aggregation, Security Information and Event Management (SIEM), threat detection, and incident response.",
        duration: "6 weeks",
        skills: [
          "SIEM (Splunk / Wazuh)",
          "Log Analysis",
          "MITRE ATT&CK Framework",
          "Incident Response",
          "Snort / Suricata",
        ],
        milestones: [
          "Set up Wazuh or Splunk in a home lab and create custom detection rules for brute-force attacks",
          "Draft a complete incident response post-mortem report",
        ],
        order: 3,
        whyExists:
          "Breaches will occur; minimizing dwell time and containing attacks prevents enterprise destruction.",
        realWorldUsage: "24/7 Security Operations Center (SOC) monitoring and alert investigation.",
        suggestedProjects: [
          "Virtual SOC Lab with Wazuh and Ubuntu Agents",
          "Brute-Force Attack Detection & Alerting Rule",
        ],
        commonMistakes: [
          "Creating alert rules that flood analysts with false positives",
          "Failing to preserve log integrity during incident investigations",
        ],
      },
      {
        id: "cs-4",
        title: "Cryptography & Identity Security",
        description:
          "Symmetric/asymmetric encryption, hashing algorithms, PKI, digital certificates, and MFA implementation.",
        duration: "4 weeks",
        skills: [
          "AES / RSA",
          "SHA-256",
          "Public Key Infrastructure (PKI)",
          "TLS / SSL Handshake",
          "Zero Trust",
        ],
        milestones: [
          "Demonstrate how TLS protects data in transit through packet inspection",
          "Implement secure key storage and rotation",
        ],
        order: 4,
        whyExists:
          "Data confidentiality and integrity rely completely on cryptographic foundations.",
        realWorldUsage:
          "Securing credit card transactions, secret keys, and database encryption at rest.",
        suggestedProjects: [
          "End-to-End Encrypted Message Exchange in Python",
          "PKI Certificate Authority Lab",
        ],
        commonMistakes: [
          "Rolling your own custom encryption algorithms instead of standard libraries",
          "Using outdated algorithms like MD5 or SHA-1 for security",
        ],
      },
      {
        id: "cs-5",
        title: "Security Certifications & Portfolio",
        description:
          "CompTIA Security+, Blue Team Level 1 preparation, security audit reports, and job readiness.",
        duration: "4 weeks",
        skills: [
          "CompTIA Security+ Prep",
          "Vulnerability Reporting",
          "Cyber Risk Management",
          "Professional Ethics",
        ],
        milestones: [
          "Pass a full-length Security+ mock exam with 85%+",
          "Publish a comprehensive home lab security portfolio on GitHub with lab topology diagrams",
        ],
        order: 5,
        whyExists:
          "Cybersecurity is a high-trust profession where certified knowledge and verified labs establish credibility.",
        realWorldUsage: "Qualifying for SOC Analyst and Security Engineer interviews.",
        suggestedProjects: [
          "Cybersecurity Home Lab Topology & Walkthrough Portfolio",
          "Enterprise Vulnerability Management Audit Report",
        ],
        commonMistakes: [
          "Having theoretical knowledge without any hands-on home lab proof",
          "Neglecting to document clear remediation steps in vulnerability reports",
        ],
      },
    ],
  },
  {
    id: "tech-9",
    title: "Mobile Developer",
    slug: "mobile-developer",
    field: "Technology",
    subfield: "App Engineering",
    category: "mobile-systems",
    description:
      "Engineer native and cross-platform mobile apps for iOS and Android. Mobile developers master touch gestures, device APIs, offline databases, and app store publishing.",
    shortDescription:
      "Build iOS and Android applications with React Native, Flutter, Swift, or Kotlin.",
    avgSalaryIndia: "Entry: ₹4–7 LPA | Mid: ₹9–16 LPA | Sr: ₹18–28+ LPA",
    avgSalaryGlobal: "Entry: $55K–$80K | Mid: $85K–$125K | Sr: $135K–$170K+",
    demandTrend: "stable",
    tags: [
      "react-native",
      "flutter",
      "mobile",
      "ios",
      "android",
      "swift",
      "kotlin",
      "offline-storage",
    ],
    aliases: [
      "react native developer",
      "flutter developer",
      "ios developer",
      "android engineer",
      "app developer",
    ],
    icon: "Smartphone",
    roadmapShUrl: "https://roadmap.sh/react-native",
    overview:
      "Mobile engineering focuses on device-specific interaction patterns. Engineers design fluid touch responses, integrate camera and location sensors, manage battery drain, and guarantee offline persistence.",
    whatItDoes:
      "Builds cross-platform apps, connects native device SDKs, manages offline SQLite sync, handles push notifications, and publishes to the Apple App Store and Google Play.",
    timeToJobReady: "6–9 months",
    skillsRequired: [
      "React Native / Flutter",
      "TypeScript / Dart",
      "State Management (Zustand/Riverpod)",
      "SQLite / WatermelonDB",
      "Push Notifications",
      "App Store Guidelines",
    ],
    stages: [
      {
        id: "mob-1",
        title: "Mobile UI & Core Layouts",
        description:
          "Mobile viewport ergonomics, navigation stacks, tabs, touch gestures, and responsive screens.",
        duration: "4 weeks",
        skills: [
          "React Native or Flutter",
          "Mobile Navigation",
          "Touch Interactions",
          "Vector Icons",
        ],
        milestones: [
          "Build a multi-tab mobile UI with smooth stack transitions",
          "Implement smooth gesture swiping",
        ],
        order: 1,
        whyExists:
          "Mobile apps have unique ergonomic constraints compared to desktop web browsers.",
        realWorldUsage:
          "Creating consumer apps that feel snappy and natural on thumb interactions.",
        suggestedProjects: ["Fitness Habit Tracker Mobile UI", "Food Delivery App Screen Flow"],
        commonMistakes: [
          "Ignoring notch and safe area insets on mobile screens",
          "Hardcoding absolute dimensions that look broken on small phones",
        ],
      },
      {
        id: "mob-2",
        title: "Device APIs, Sensors & Camera",
        description:
          "Camera access, photo gallery, geolocation, accelerometer, and local filesystem access.",
        duration: "5 weeks",
        skills: ["Camera Permissions", "Location & Maps", "Local File System", "Async Storage"],
        milestones: [
          "Build an app that captures photos, records GPS tags, and displays them on a map",
          "Handle Android and iOS runtime permission rejections gracefully",
        ],
        order: 2,
        whyExists:
          "Mobile hardware features (camera, GPS, biometrics) enable capabilities websites cannot provide.",
        realWorldUsage: "Delivery routing, social photo sharing, and fitness tracking.",
        suggestedProjects: [
          "Field Reporter App with Photo Capture & GPS",
          "Audio Voice Recorder App",
        ],
        commonMistakes: [
          "Crashing when users reject hardware camera or location permissions",
          "Memory leaks caused by uncompressed high-resolution photos",
        ],
      },
      {
        id: "mob-3",
        title: "Offline Storage & State Sync",
        description:
          "Local databases (SQLite / MMKV), optimistic UI updates, and synchronization when internet reconnects.",
        duration: "5 weeks",
        skills: [
          "SQLite / MMKV",
          "Offline-first Architecture",
          "State Management",
          "Network Connectivity Listeners",
        ],
        milestones: [
          "Build an offline-first notes app that persists data locally and syncs to a server when online",
          "Implement conflict resolution logic",
        ],
        order: 3,
        whyExists:
          "Mobile connectivity is intermittent (tunnels, elevators, rural areas); apps must work offline.",
        realWorldUsage: "Field sales, travel apps, and productivity tools.",
        suggestedProjects: ["Offline-First Task Management App", "Field Data Collector with Sync"],
        commonMistakes: [
          "Blocking the main UI thread during heavy database reads",
          "Losing unsaved user data on sudden app termination",
        ],
      },
      {
        id: "mob-4",
        title: "Push Notifications & Biometrics",
        description:
          "FCM / APNs push notifications, background handlers, and FaceID/Fingerprint authentication.",
        duration: "4 weeks",
        skills: [
          "Push Notifications (FCM)",
          "Biometric Auth (FaceID)",
          "Deep Linking",
          "Background Tasks",
        ],
        milestones: [
          "Configure real push notifications triggered from a server",
          "Implement biometric login with biometric fallback",
        ],
        order: 4,
        whyExists:
          "Push notifications drive user retention; biometrics provide seamless, secure authentication.",
        realWorldUsage: "Banking apps, messaging alerts, and e-commerce re-engagement.",
        suggestedProjects: [
          "Secure Digital Wallet with FaceID Lock",
          "Real-time Messaging App with Push Alerts",
        ],
        commonMistakes: [
          "Sending spammy notifications causing users to disable app notifications",
          "Failing to handle deep link routing when the app is cold-started",
        ],
      },
      {
        id: "mob-5",
        title: "App Store Publishing & Optimization",
        description:
          "App store guidelines, signing certificates, Fastlane automation, performance profiling, and launch.",
        duration: "4 weeks",
        skills: [
          "iOS App Store Connect",
          "Google Play Console",
          "Fastlane",
          "Performance Profiling (FPS)",
          "App Bundle Size",
        ],
        milestones: [
          "Build signed APK / IPA release binaries and run performance audit at 60 FPS",
          "Publish at least one live application to an app store or TestFlight",
        ],
        order: 5,
        whyExists: "An app that is not published to an app store cannot reach paying customers.",
        realWorldUsage: "Releasing production apps and managing app store update cycles.",
        suggestedProjects: [
          "Live Published Mobile Application",
          "Automated Fastlane Deployment Script",
        ],
        commonMistakes: [
          "Violating Apple App Store review guidelines leading to app rejection",
          "Shipping bloated apps >100MB without asset compression",
        ],
      },
    ],
  },
  {
    id: "tech-10",
    title: "QA Automation Engineer",
    slug: "qa-automation-engineer",
    field: "Technology",
    subfield: "Quality & Reliability",
    category: "security-qa",
    description:
      "Write automated test suites that prevent software defects from reaching customers. QA engineers program end-to-end browser tests, API tests, and performance benchmarks.",
    shortDescription:
      "Automate web, API, and performance testing using Playwright, Cypress, and Jest.",
    avgSalaryIndia: "Entry: ₹4–7 LPA | Mid: ₹8–14 LPA | Sr: ₹16–25+ LPA",
    avgSalaryGlobal: "Entry: $55K–$75K | Mid: $80K–$115K | Sr: $125K–$155K+",
    demandTrend: "stable",
    tags: [
      "qa",
      "testing",
      "playwright",
      "cypress",
      "selenium",
      "automation",
      "api-testing",
      "jest",
    ],
    aliases: [
      "sdet",
      "software development engineer in test",
      "test automation engineer",
      "qa engineer",
    ],
    icon: "CheckCircle",
    roadmapShUrl: "https://roadmap.sh/qa",
    overview:
      "Quality assurance engineering safeguards software reliability. Automation engineers construct test frameworks that catch regressions before deployments cause revenue-destroying downtime.",
    whatItDoes:
      "Writes Playwright/Cypress end-to-end tests, automates API verification, conducts load tests with k6, and integrates test runs into GitHub Actions pipelines.",
    timeToJobReady: "5–8 months",
    skillsRequired: [
      "Playwright / Cypress",
      "TypeScript / JavaScript",
      "API Testing (Postman/Supertest)",
      "Performance Testing (k6)",
      "CI/CD Integration",
      "Test Case Design",
    ],
    stages: [
      {
        id: "qa-1",
        title: "Testing Fundamentals & Manual Case Design",
        description:
          "Test lifecycle, boundary value analysis, equivalence partitioning, bug reporting, and test plans.",
        duration: "3 weeks",
        skills: [
          "Test Case Design",
          "Bug Life Cycle",
          "Jira / Bug Tracking",
          "Boundary Value Analysis",
        ],
        milestones: [
          "Write a comprehensive test plan for an e-commerce checkout flow covering edge cases",
          "Draft actionable, reproducible bug tickets with severity ratings",
        ],
        order: 1,
        whyExists:
          "Automating bad tests only produces automated bad results; testing methodology comes first.",
        realWorldUsage: "Sprint planning, release readiness sign-offs, and compliance auditing.",
        suggestedProjects: [
          "E-Commerce Checkout Test Plan & Matrix",
          "Sample Bug Report Portfolio",
        ],
        commonMistakes: [
          "Only testing the 'happy path' while ignoring boundary errors and bad inputs",
          "Writing vague bug reports without steps to reproduce",
        ],
      },
      {
        id: "qa-2",
        title: "End-to-End Web Automation (Playwright)",
        description:
          "Playwright framework, page object model (POM), locators, assertions, auto-waiting, and headless execution.",
        duration: "5 weeks",
        skills: [
          "Playwright",
          "TypeScript",
          "Page Object Model",
          "Fixtures",
          "Cross-browser Testing",
        ],
        milestones: [
          "Build a robust automated test suite covering login, navigation, and checkout across Chromium, Firefox, and WebKit",
          "Implement the Page Object Model architecture",
        ],
        order: 2,
        whyExists: "Manual testing is too slow to keep up with daily automated code deployments.",
        realWorldUsage: "Validating critical customer purchase flows before every code release.",
        suggestedProjects: [
          "Production E-commerce Playwright Test Suite",
          "Automated Form Validation Regression Suite",
        ],
        commonMistakes: [
          "Using hardcoded sleep timers instead of Playwright's auto-waiting locators",
          "Writing flaky tests dependent on volatile CSS classes",
        ],
      },
      {
        id: "qa-3",
        title: "API Testing & Automation",
        description:
          "REST API automated testing, payload validation, status code assertions, and authentication tokens.",
        duration: "4 weeks",
        skills: [
          "API Automation",
          "Postman / Newman",
          "Supertest / Playwright API",
          "JSON Schema Validation",
        ],
        milestones: [
          "Automate end-to-end API test suite validating 20+ endpoints with positive and negative test cases",
          "Verify response JSON schemas match API contracts",
        ],
        order: 3,
        whyExists: "API tests execute in milliseconds compared to slow browser UI tests.",
        realWorldUsage: "Verifying backend microservice contracts before frontend integration.",
        suggestedProjects: [
          "Automated REST API Test Suite with Newman CI",
          "Mock Payment Gateway API Test Framework",
        ],
        commonMistakes: [
          "Only verifying 200 OK without checking response payload schemas",
          "Not testing API rate limits or invalid authentication tokens",
        ],
      },
      {
        id: "qa-4",
        title: "Performance & Load Testing (k6)",
        description:
          "Load testing, stress testing, spike testing, virtual users, and latency percentiles (p95, p99).",
        duration: "4 weeks",
        skills: [
          "k6",
          "Load Testing",
          "Latency Percentiles (p95/p99)",
          "Throughput Analysis (RPS)",
        ],
        milestones: [
          "Write a k6 script simulating 1,000 concurrent users hitting an API and analyze the p95 latency",
          "Identify database connection pool bottlenecks under stress",
        ],
        order: 4,
        whyExists:
          "Systems that work for 1 user can completely crash during Black Friday sales traffic.",
        realWorldUsage: "Capacity planning, cloud autoscaling verification, and SLA validation.",
        suggestedProjects: [
          "Black Friday Traffic Simulation & Stress Test Report",
          "API Latency Degradation Benchmark",
        ],
        commonMistakes: [
          "Measuring average latency instead of p95/p99 percentiles",
          "Running load tests against production without coordination",
        ],
      },
      {
        id: "qa-5",
        title: "CI/CD Integration & Test Reports",
        description:
          "Running automated tests in GitHub Actions, generating HTML test reports, and blocking broken releases.",
        duration: "3 weeks",
        skills: [
          "GitHub Actions",
          "Allure / Playwright HTML Reports",
          "Parallel Execution",
          "Slack Alerts",
        ],
        milestones: [
          "Configure a GitHub Action that runs Playwright tests in parallel on every pull request and uploads artifact reports",
          "Block broken code merges automatically",
        ],
        order: 5,
        whyExists:
          "Automated tests must run automatically on every code commit to prevent broken releases.",
        realWorldUsage: "Enforcing quality gates in high-velocity agile engineering teams.",
        suggestedProjects: [
          "Automated QA Pipeline with GitHub Actions and Allure Reports",
          "Comprehensive Test Automation Portfolio",
        ],
        commonMistakes: [
          "Tolerating flaky tests that pass intermittently, destroying team trust in test suites",
          "Slow sequential test execution instead of parallel sharding",
        ],
      },
    ],
  },
];

export const CATEGORY_LABELS = {
  software: "Software & Web Engineering",
  "data-ai": "AI, Machine Learning & Data",
  "cloud-devops": "Cloud, Infrastructure & DevOps",
  "security-qa": "Cybersecurity & Quality Assurance",
  "mobile-systems": "Mobile & Systems Engineering",
};
