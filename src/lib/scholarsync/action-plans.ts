import type { CareerActionPlan } from "./types";

export const TECH_ACTION_PLANS: Record<string, CareerActionPlan> = {
  "frontend-developer": {
    title: "Frontend Developer",
    days: [
      {
        day: "Day 1",
        task: "Semantic HTML Architecture",
        description:
          "Audit an existing webpage and rebuild its skeleton using semantic tags (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) and ARIA attributes.",
      },
      {
        day: "Day 2",
        task: "Responsive Flexbox & Grid Drills",
        description:
          "Implement a 3-column responsive dashboard grid with fluid cards without using any media queries (using minmax() and auto-fit).",
      },
      {
        day: "Day 3",
        task: "JavaScript Async & DOM Mastery",
        description:
          "Build a currency converter that fetches live rates from a free API, handles loading/error states, and debounces user inputs.",
      },
      {
        day: "Day 4",
        task: "React 19 Component Decomposition",
        description:
          "Port your day 3 app into React with typed TypeScript interfaces, custom hooks, and optimistic UI state.",
      },
      {
        day: "Day 5",
        task: "Design System & Tailwind Tokens",
        description:
          "Create a reusable component kit (Button with variants, Card with hard borders, Modal with keyboard esc listeners).",
      },
      {
        day: "Day 6",
        task: "Performance Audit & Lighthouse",
        description:
          "Run Google Lighthouse. Optimize images to WebP, eliminate render-blocking CSS, and score 95+ in Performance & Accessibility.",
      },
      {
        day: "Day 7",
        task: "Vercel Deployment & Showcase",
        description:
          "Push your code to GitHub with a clean architectural README. Deploy live on Vercel with automated branch previews.",
      },
    ],
  },
  "backend-developer": {
    title: "Backend Developer",
    days: [
      {
        day: "Day 1",
        task: "HTTP Protocol & Server Mechanics",
        description:
          "Write a raw HTTP server without frameworks. Inspect request headers, status codes (200, 201, 400, 401, 404, 500), and parse JSON streams.",
      },
      {
        day: "Day 2",
        task: "REST API Design with Express/FastAPI",
        description:
          "Build a structured CRUD API for a task management service with route controllers, centralized error handling, and Zod input validation.",
      },
      {
        day: "Day 3",
        task: "PostgreSQL Database Schema",
        description:
          "Install PostgreSQL locally. Design normalized tables with foreign key cascades, unique constraints, and write raw SQL queries with joins.",
      },
      {
        day: "Day 4",
        task: "Authentication & Password Hashing",
        description:
          "Implement secure user signup and login using bcrypt/Argon2 password hashing and HTTP-only signed JWT cookie tokens.",
      },
      {
        day: "Day 5",
        task: "Redis Caching Layer",
        description:
          "Connect Redis. Implement a cache-aside pattern on high-traffic GET endpoints with 60-second TTL invalidation upon mutation.",
      },
      {
        day: "Day 6",
        task: "Dockerization & Environment Parity",
        description:
          "Write a multi-stage Dockerfile and a docker-compose.yml running the application, PostgreSQL, and Redis with persistent volume mounts.",
      },
      {
        day: "Day 7",
        task: "Deploy to Render & Smoke Tests",
        description:
          "Deploy your containerized service live to Render or Railway. Automate database migrations and test API endpoints using curl.",
      },
    ],
  },
  "ai-engineer": {
    title: "AI Engineer",
    days: [
      {
        day: "Day 1",
        task: "API Foundations & Structured Outputs",
        description:
          "Write a script calling Google Gemini / OpenAI with strict JSON Schema output mode to reliably extract entity data from messy text.",
      },
      {
        day: "Day 2",
        task: "Embeddings & Vector Distance Math",
        description:
          "Generate vector embeddings for 50 text chunks. Write a pure Python cosine similarity function to find the top-3 most relevant passages.",
      },
      {
        day: "Day 3",
        task: "pgvector & Vector Database Setup",
        description:
          "Spin up a PostgreSQL database with pgvector enabled. Create an HNSW index, insert embeddings, and run sub-10ms similarity queries.",
      },
      {
        day: "Day 4",
        task: "Document Chunking & Production RAG",
        description:
          "Build an ingestion pipeline that parses a 50-page PDF manual, chunks it with overlap, and generates grounded answers with exact source citations.",
      },
      {
        day: "Day 5",
        task: "Tool Calling & Autonomous Agent",
        description:
          "Implement a function-calling agent that can search Google, calculate math expressions, and summarize answers autonomously.",
      },
      {
        day: "Day 6",
        task: "Guardrails & Evaluation Suite",
        description:
          "Create an automated test suite with 20 ground-truth QA pairs. Measure hallucination rate and answer faithfulness using automated scoring.",
      },
      {
        day: "Day 7",
        task: "Full-Stack AI Interface & Deploy",
        description:
          "Wrap your agent in a FastAPI backend with streaming SSE tokens. Connect a React frontend and deploy live to production.",
      },
    ],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    days: [
      {
        day: "Day 1",
        task: "Linux CLI & Server Hardening",
        description:
          "Provision an Ubuntu virtual machine. Configure non-root user privileges, SSH key authentication, UFW firewall rules, and disable root password logins.",
      },
      {
        day: "Day 2",
        task: "Bash Automation Scripting",
        description:
          "Write a bash automation script that monitors disk usage, rotates application log files, and sends a Slack webhook alert when storage exceeds 80%.",
      },
      {
        day: "Day 3",
        task: "Production Docker Multi-Stage Builds",
        description:
          "Containerize a sample web application. Use alpine/distroless base images, prune dev dependencies, and achieve an image size under 75MB.",
      },
      {
        day: "Day 4",
        task: "GitHub Actions CI/CD Pipeline",
        description:
          "Write a .github/workflows/ci.yml that lints code, runs unit tests, builds the Docker image, and runs vulnerability scans on every pull request.",
      },
      {
        day: "Day 5",
        task: "Infrastructure as Code with Terraform",
        description:
          "Write Terraform configuration files to provision a virtual cloud server, security groups, and an S3 bucket with remote state locking.",
      },
      {
        day: "Day 6",
        task: "Kubernetes Local Cluster (Kind/Minikube)",
        description:
          "Deploy an application deployment and service on a local Kubernetes cluster. Scale replicas up to 5 and observe load balancing in action.",
      },
      {
        day: "Day 7",
        task: "Prometheus & Grafana Observability",
        description:
          "Deploy Prometheus and Grafana. Configure node-exporter to track CPU/memory utilization and create a custom visual dashboard.",
      },
    ],
  },
  "full-stack-developer": {
    title: "Full Stack Developer",
    days: [
      {
        day: "Day 1",
        task: "Data Model & Schema Design",
        description:
          "Draft the architectural database schema for a SaaS workspace (Users, Workspaces, Projects, Tasks) in PostgreSQL.",
      },
      {
        day: "Day 2",
        task: "Backend REST API & Auth",
        description:
          "Build the server API endpoints with authentication guards, password hashing, and Zod input validation.",
      },
      {
        day: "Day 3",
        task: "Responsive React UI Client",
        description:
          "Create the responsive user interface using React, Tailwind CSS, and TanStack Router with clean Bauhaus layout blocks.",
      },
      {
        day: "Day 4",
        task: "Client-Server State Sync",
        description:
          "Connect client to server using TanStack Query. Implement optimistic mutations, caching, and loading state skeletons.",
      },
      {
        day: "Day 5",
        task: "Stripe Billing & Webhooks",
        description:
          "Integrate Stripe checkout for subscription payments. Handle asynchronous webhook events to update user access permissions.",
      },
      {
        day: "Day 6",
        task: "Testing & Hardening",
        description:
          "Write integration tests verifying the full flow from user signup to checkout and task creation. Audit performance and security.",
      },
      {
        day: "Day 7",
        task: "Production Cloud Deployment",
        description:
          "Deploy the frontend to Vercel and backend to Render with connected managed PostgreSQL. Add custom domain and SSL.",
      },
    ],
  },
};
