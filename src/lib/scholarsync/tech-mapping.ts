export const TECH_TO_CAREER: Record<
  string,
  {
    careers: string[];
    explanation: string;
  }
> = {
  react: {
    careers: ["frontend-developer", "full-stack-developer", "mobile-developer"],
    explanation:
      "React is the standard UI library for modern web applications and mobile apps via React Native.",
  },
  nextjs: {
    careers: ["frontend-developer", "full-stack-developer"],
    explanation:
      "Next.js combines server-side rendering, routing, and full-stack API capabilities in one framework.",
  },
  docker: {
    careers: ["devops-engineer", "backend-developer", "cloud-engineer"],
    explanation:
      "Docker provides containerization, ensuring software runs reliably across local environments and cloud servers.",
  },
  kubernetes: {
    careers: ["devops-engineer", "cloud-engineer"],
    explanation:
      "Kubernetes orchestrates container clusters at scale, automating self-healing and load distribution.",
  },
  python: {
    careers: ["ai-engineer", "data-scientist", "backend-developer", "cybersecurity-analyst"],
    explanation:
      "Python is the undisputed language of AI, data science, automation, and backend API engineering.",
  },
  gemini: {
    careers: ["ai-engineer", "full-stack-developer"],
    explanation:
      "Gemini APIs power multimodal understanding, function calling, and structured generative AI workflows.",
  },
  rag: {
    careers: ["ai-engineer", "data-scientist"],
    explanation:
      "Retrieval-Augmented Generation grounds foundation models in private enterprise vector data.",
  },
  postgresql: {
    careers: ["backend-developer", "full-stack-developer", "data-scientist"],
    explanation:
      "PostgreSQL is the world's most advanced open-source relational database with robust ACID transactions and pgvector.",
  },
  aws: {
    careers: ["cloud-engineer", "devops-engineer", "backend-developer"],
    explanation:
      "Amazon Web Services is the leading cloud provider powering computing, storage, and serverless architectures.",
  },
  playwright: {
    careers: ["qa-automation-engineer", "frontend-developer"],
    explanation:
      "Playwright provides resilient, cross-browser end-to-end automation testing with auto-waiting locators.",
  },
  wireshark: {
    careers: ["cybersecurity-analyst"],
    explanation:
      "Wireshark is the standard packet analysis tool for network troubleshooting and cyber incident response.",
  },
  flutter: {
    careers: ["mobile-developer"],
    explanation:
      "Flutter builds natively compiled, high-performance mobile applications for iOS and Android from a single codebase.",
  },
  terraform: {
    careers: ["devops-engineer", "cloud-engineer"],
    explanation:
      "Terraform codifies cloud infrastructure into declarative, version-controlled, reproducible modules.",
  },
};
