import type { PortfolioProof } from "./types";

export const TECH_PORTFOLIO_PROOFS: Record<string, PortfolioProof> = {
  "HTML & CSS": {
    skillName: "HTML & CSS",
    beginner: {
      title: "Semantic Accessible Product Landing Blueprint",
      description:
        "Structure a fully accessible, semantic product landing layout adhering to WCAG 2.1 AA benchmarks.",
      deliverables: [
        "Zero non-semantic <div> tags for structural layout",
        "WAI-ARIA landmark tags and proper heading hierarchy",
        "100% keyboard navigable with visible focus states",
      ],
      evaluationCriteria: [
        "Lighthouse Accessibility score = 100",
        "No keyboard focus traps",
        "Clean document outline",
      ],
    },
    intermediate: {
      title: "Responsive Multi-Breakout Bauhaus Dashboard",
      description:
        "Build an asymmetric dashboard layout with CSS Grid, Flexbox, custom properties, and sub-grid alignment.",
      deliverables: [
        "Zero horizontal scrollbar at any viewport width (320px to 2560px)",
        "CSS tokens for color, spacing, and typography",
        "Fluid container queries",
      ],
      evaluationCriteria: [
        "Zero layout shift (CLS < 0.05)",
        "Fluid responsiveness without media-query soup",
        "High visual fidelity",
      ],
    },
    advanced: {
      title: "Design System Component Tokens & CSS Engine",
      description:
        "Architect a scalable multi-theme design system with binary token variants and high-contrast support.",
      deliverables: [
        "WCAG AAA color contrast compliance across light/dark themes",
        "Zero style leakage across scoped elements",
        "Fluid typography scale using clamp()",
      ],
      evaluationCriteria: [
        "Modular token architecture",
        "Cross-browser visual rendering parity",
        "Comprehensive documentation",
      ],
    },
  },
  "JavaScript & React": {
    skillName: "JavaScript & React",
    beginner: {
      title: "Stateful Interactive Filter & Search Engine",
      description:
        "Construct a responsive SPA search engine with URL synchronization, debounce handling, and zero lag.",
      deliverables: [
        "Synchronized search state via query params",
        "Debounced search input handlers (300ms)",
        "Loading skeletons and zero-state handling",
      ],
      evaluationCriteria: [
        "No unnecessary re-renders on keystroke",
        "Predictable state transitions",
        "Clean component separation",
      ],
    },
    intermediate: {
      title: "Real-Time Collaborative Kanban Board",
      description:
        "Build a drag-and-drop task workflow with optimistic UI updates, local storage cache, and offline sync.",
      deliverables: [
        "Fluid drag-and-drop mechanics with accessibility fallback",
        "Optimistic mutation updates with auto-rollback on error",
        "Zustand state store with persistence middleware",
      ],
      evaluationCriteria: [
        "Smooth 60 FPS drag interactions",
        "Resilient state reconciliation on network interruption",
        "Zero data loss",
      ],
    },
    advanced: {
      title: "High-Performance Virtualized Data Grid (100k Rows)",
      description:
        "Architect a custom windowed data grid capable of rendering 100,000 rows at 60 FPS without DOM bloat.",
      deliverables: [
        "Dynamic row virtualization engine",
        "Column sorting, multi-column filtering, and cell editing",
        "Memory footprint < 25MB under heavy scroll",
      ],
      evaluationCriteria: [
        "Zero frame drops under aggressive scrolling",
        "Clean TypeScript generic interfaces",
        "Unit test coverage > 90%",
      ],
    },
  },
  "Node.js & Databases": {
    skillName: "Node.js & Databases",
    beginner: {
      title: "RESTful E-Commerce Inventory Microservice",
      description:
        "Build a secure REST API with PostgreSQL, Prisma ORM, JWT authentication, and pagination.",
      deliverables: [
        "Normalized relational database schema with foreign keys",
        "Strict request schema validation using Zod",
        "Structured JSON error middleware",
      ],
      evaluationCriteria: [
        "Zero uncaught exceptions",
        "All database queries parameterized against SQL injection",
        "Correct HTTP status codes",
      ],
    },
    intermediate: {
      title: "Distributed Rate-Limited Gateway & Redis Cache",
      description:
        "Architect a Redis cache-aside microservice with token bucket rate limiting and background worker queues.",
      deliverables: [
        "Sliding-window rate limiter per API key",
        "Cache-aside caching pattern with TTL invalidation",
        "BullMQ asynchronous background job processor with retry backoff",
      ],
      evaluationCriteria: [
        "Graceful handling of Redis disconnections",
        "Zero cache stampede conditions",
        "Sub-15ms p95 latency on cached routes",
      ],
    },
    advanced: {
      title: "Real-Time Event Sourcing & CQRS Transaction Engine",
      description:
        "Design an event-sourced ledger architecture with immutable append-only logs and projection builders.",
      deliverables: [
        "PostgreSQL ACID transaction locking for concurrent ledger balances",
        "WebSockets real-time balance push",
        "Automated database migration and rollback test pipeline",
      ],
      evaluationCriteria: [
        "Zero balance drift under concurrent race conditions",
        "Comprehensive integration test suite",
        "Full idempotency key support",
      ],
    },
  },
  "Docker & DevOps": {
    skillName: "Docker & DevOps",
    beginner: {
      title: "Hardened Production Multi-Stage Dockerfile",
      description:
        "Package a Node.js/Python microservice into an immutable, minimal, rootless container image.",
      deliverables: [
        "Multi-stage build reducing image size from >1GB to <80MB",
        "Non-root user execution",
        "Zero high-severity CVEs in container vulnerability scans",
      ],
      evaluationCriteria: [
        "Smallest possible attack surface",
        "Reproducible builds across arm64 and amd64",
        "Fast layer caching",
      ],
    },
    intermediate: {
      title: "Automated GitOps CI/CD Delivery Pipeline",
      description:
        "Build a complete GitHub Actions workflow with matrix testing, linting, Docker build, and cloud deploy.",
      deliverables: [
        "Automated semantic release versioning and changelog generator",
        "Parallel test suite execution with test sharding",
        "Automated preview environment provisioning per PR",
      ],
      evaluationCriteria: [
        "Total pipeline execution time < 4 minutes",
        "Automatic rollback on staging health check failure",
        "Secure secret injection via OIDC",
      ],
    },
    advanced: {
      title: "Multi-Node Kubernetes Cluster with Observability",
      description:
        "Deploy an autoscaling microservice on Kubernetes with Helm, ingress controller, Prometheus, and Grafana.",
      deliverables: [
        "Horizontal Pod Autoscaler (HPA) configured on CPU and request rate",
        "Liveness and readiness probes with graceful shutdown hooks",
        "Custom Grafana dashboard alerting on p99 latency breaches",
      ],
      evaluationCriteria: [
        "Zero downtime during rolling updates",
        "Self-healing pod recovery on simulated node kill",
        "Clean modular Helm chart",
      ],
    },
  },
  "AI & Machine Learning": {
    skillName: "AI & Machine Learning",
    beginner: {
      title: "Structured Schema Extraction & RAG Search Engine",
      description:
        "Build a document analysis pipeline that extracts validated Pydantic/Zod JSON schemas from unstructured PDFs.",
      deliverables: [
        "Deterministic JSON output validation with schema retry loop",
        "Chunking engine respecting document headers",
        "Vector search using pgvector or Pinecone",
      ],
      evaluationCriteria: [
        "Zero schema validation crashes on messy real-world files",
        "Low hallucination rates on ground-truth queries",
        "Fast sub-1.2s retrieval latency",
      ],
    },
    intermediate: {
      title: "Production RAG Pipeline with Hybrid Search & Reranking",
      description:
        "Architect an enterprise search assistant combining vector dense retrieval, BM25 sparse search, and Cohere reranker.",
      deliverables: [
        "Reciprocal Rank Fusion (RRF) combining dense and sparse search",
        "Cross-encoder reranking layer",
        "Automated RAGAS test suite measuring faithfulness and answer relevance",
      ],
      evaluationCriteria: [
        "Faithfulness score > 0.92 on benchmark dataset",
        "Citation grounding linking every claim to source text",
        "Semantic cache saving > 40% on repeated queries",
      ],
    },
    advanced: {
      title: "Autonomous Multi-Agent Task Orchestrator",
      description:
        "Build an autonomous multi-step reasoning agent with LangGraph, tool calling, persistent state, and human-in-the-loop review.",
      deliverables: [
        "Multi-agent state graph with cyclic error recovery loops",
        "Sandboxed Python code execution tool",
        "Session memory persisting context across days",
      ],
      evaluationCriteria: [
        "Zero infinite recursion loops",
        "Safe execution bounds preventing unauthorized system access",
        "Quantified task completion benchmark > 85%",
      ],
    },
  },
};
