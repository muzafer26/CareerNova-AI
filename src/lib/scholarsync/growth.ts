import type { CareerGrowthNode } from "./types";

export const TECH_GROWTH_DATA: Record<string, CareerGrowthNode> = {
  "frontend-developer": {
    slug: "frontend-developer",
    careerTitle: "Frontend Developer",
    nextSteps: [
      "Senior Frontend Engineer",
      "Full Stack Developer",
      "UX Engineer",
      "Product Engineer",
      "Staff Frontend Architect",
    ],
    transitions: {
      typical: ["Senior Frontend Engineer", "Full Stack Developer"],
      common: ["UX Engineer", "Mobile Developer (React Native)"],
      advanced: ["Staff Frontend Architect", "Engineering Manager"],
    },
    timeframe: "2–5 Years to Senior",
    upskillNeeded: [
      "System Design & Micro-frontends",
      "Performance profiling & bundle budget optimization",
      "TypeScript architecture & advanced design systems",
    ],
  },
  "backend-developer": {
    slug: "backend-developer",
    careerTitle: "Backend Developer",
    nextSteps: [
      "Senior Backend Engineer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Distributed Systems Architect",
      "Technical Lead",
    ],
    transitions: {
      typical: ["Senior Backend Engineer", "Full Stack Developer"],
      common: ["DevOps / Platform Engineer", "Database Architect"],
      advanced: ["Distributed Systems Architect", "VP of Engineering"],
    },
    timeframe: "2–5 Years to Senior",
    upskillNeeded: [
      "Distributed systems & consensus protocols",
      "Advanced database indexing, sharding & replication",
      "Asynchronous messaging (Kafka/RabbitMQ) and telemetry",
    ],
  },
  "ai-engineer": {
    slug: "ai-engineer",
    careerTitle: "AI Engineer",
    nextSteps: [
      "Senior AI Systems Engineer",
      "MLOps Lead",
      "Staff AI Architect",
      "AI Research Scientist",
      "Head of AI Product",
    ],
    transitions: {
      typical: ["Senior AI Systems Engineer", "MLOps Lead"],
      common: ["Full Stack AI Engineer", "Data Scientist"],
      advanced: ["Staff AI Architect", "Chief AI Officer / Founder"],
    },
    timeframe: "2–4 Years to Senior",
    upskillNeeded: [
      "Quantization, vLLM & low-latency inference serving",
      "Agentic orchestration (LangGraph, autonomous loops)",
      "Custom model fine-tuning & synthetic data curation",
    ],
  },
  "devops-engineer": {
    slug: "devops-engineer",
    careerTitle: "DevOps Engineer",
    nextSteps: [
      "Senior DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "Cloud Architect",
      "Head of Platform",
      "Security / DevSecOps Lead",
    ],
    transitions: {
      typical: ["Senior DevOps Engineer", "Site Reliability Engineer (SRE)"],
      common: ["Cloud Infrastructure Architect", "DevSecOps Specialist"],
      advanced: ["Head of Platform Engineering", "Infrastructure Director"],
    },
    timeframe: "3–5 Years to Senior",
    upskillNeeded: [
      "Large-scale Kubernetes multi-cluster management",
      "GitOps (ArgoCD) and automated canary releases",
      "Cloud cost governance and chaos engineering (Gremlin)",
    ],
  },
  "full-stack-developer": {
    slug: "full-stack-developer",
    careerTitle: "Full Stack Developer",
    nextSteps: [
      "Senior Full Stack Engineer",
      "Solutions Architect",
      "Technical Lead",
      "Startup CTO / Founder",
      "Principal Product Engineer",
    ],
    transitions: {
      typical: ["Senior Full Stack Engineer", "Technical Lead"],
      common: ["Solutions Architect", "Product Manager"],
      advanced: ["Startup CTO / Founder", "Principal Architect"],
    },
    timeframe: "3–6 Years to Senior",
    upskillNeeded: [
      "End-to-end cloud infrastructure provisioning",
      "Product analytics and monetization architecture",
      "Cross-team architectural communication & mentorship",
    ],
  },
  "data-scientist": {
    slug: "data-scientist",
    careerTitle: "Data Scientist",
    nextSteps: [
      "Senior Data Scientist",
      "Machine Learning Engineer",
      "Lead Quantitative Researcher",
      "Head of Data Science",
      "Chief Data Officer",
    ],
    transitions: {
      typical: ["Senior Data Scientist", "Machine Learning Engineer"],
      common: ["Data Analytics Manager", "Product Growth Lead"],
      advanced: ["Chief Data Officer (CDO)", "Principal AI Researcher"],
    },
    timeframe: "3–5 Years to Senior",
    upskillNeeded: [
      "Production ML deployment pipelines (MLflow/Kubeflow)",
      "Advanced causal inference & econometric modeling",
      "Executive communication & business strategy",
    ],
  },
  "cloud-engineer": {
    slug: "cloud-engineer",
    careerTitle: "Cloud Engineer",
    nextSteps: [
      "Senior Cloud Solutions Architect",
      "Principal Cloud Engineer",
      "Enterprise Infrastructure Director",
      "Cloud Security Architect",
    ],
    transitions: {
      typical: ["Senior Cloud Architect", "DevOps / SRE Lead"],
      common: ["Cloud Security Architect", "FinOps Director"],
      advanced: ["Enterprise Infrastructure Director", "CTO"],
    },
    timeframe: "3–5 Years to Senior",
    upskillNeeded: [
      "Multi-cloud architecture (AWS + GCP + Azure)",
      "Zero Trust enterprise identity federation",
      "FinOps automation and multi-region disaster recovery",
    ],
  },
  "cybersecurity-analyst": {
    slug: "cybersecurity-analyst",
    careerTitle: "Cybersecurity Analyst",
    nextSteps: [
      "Senior SOC Lead",
      "Penetration Tester / Red Team Lead",
      "Security Architect",
      "Incident Response Director",
      "CISO",
    ],
    transitions: {
      typical: ["Senior Security Analyst", "Security Engineer"],
      common: ["Penetration Tester / Ethical Hacker", "Compliance Officer"],
      advanced: ["Chief Information Security Officer (CISO)", "Security Consultant"],
    },
    timeframe: "3–6 Years to Senior",
    upskillNeeded: [
      "Advanced malware reverse engineering",
      "Cloud security posture management (CSPM)",
      "Enterprise risk management and executive crisis leadership",
    ],
  },
  "mobile-developer": {
    slug: "mobile-developer",
    careerTitle: "Mobile Developer",
    nextSteps: [
      "Senior Mobile Engineer",
      "Staff Mobile Architect",
      "Cross-Platform Lead",
      "Engineering Manager",
      "Head of Mobile",
    ],
    transitions: {
      typical: ["Senior Mobile Engineer", "Full Stack Developer"],
      common: ["Mobile SDK Architect", "Product Engineer"],
      advanced: ["Head of Mobile", "Startup Technical Founder"],
    },
    timeframe: "3–5 Years to Senior",
    upskillNeeded: [
      "Native bridge architecture (JSI, Swift/Kotlin)",
      "App startup time optimization & thread profiling",
      "Offline distributed data synchronization algorithms",
    ],
  },
  "qa-automation-engineer": {
    slug: "qa-automation-engineer",
    careerTitle: "QA Automation Engineer",
    nextSteps: [
      "Senior SDET",
      "Test Architect",
      "QA Engineering Manager",
      "DevOps Engineer",
      "Backend Developer",
    ],
    transitions: {
      typical: ["Senior SDET", "Test Architect"],
      common: ["DevOps Engineer", "Backend Developer"],
      advanced: ["Director of Quality Engineering", "VP of Engineering"],
    },
    timeframe: "2–5 Years to Senior",
    upskillNeeded: [
      "Building custom test runner infrastructure from scratch",
      "Performance profiling and distributed load generation",
      "Test containerization and ephemeral environment orchestration",
    ],
  },
};
