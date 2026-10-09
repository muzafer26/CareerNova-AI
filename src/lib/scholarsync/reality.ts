import type { CareerRealityInfo } from "./types";

export const TECH_REALITY_DATA: Record<string, CareerRealityInfo> = {
  "frontend-developer": {
    dailyReality: [
      "Monday: Designer changed layout tokens. Alignment on 6 mobile breakpoints broke; debugging media queries.",
      "Tuesday: Safari iOS renders layout differently from Chrome due to flexbox sub-pixel rounding.",
      "Wednesday: Backend API response payload structure changed without notice; UI throws TypeError: undefined.",
      "Thursday: Automated accessibility audit failed on color contrast and keyboard navigation loops.",
      "Friday: Refactoring legacy component into React 19 hooks and verifying bundle size didn't regress.",
    ],
    beginnersUnderestimate: [
      "The true complexity of crafting accessible, performance-audited responsive layouts.",
      "Web accessibility benchmarks (WCAG 2.1 AA) required for enterprise production software.",
      "Deep vanilla JavaScript mechanics (event loop, closures, memory leaks) required before touching frameworks.",
    ],
    whoShouldAvoid: [
      "Engineers who dislike visual layout details and CSS alignment adjustments.",
      "People who get easily frustrated by cross-browser rendering inconsistencies.",
      "Developers wanting pure back-end algorithmic data pipelines.",
    ],
    transitionPaths: [
      "Full Stack Developer (by learning PostgreSQL and server runtimes)",
      "Product Engineer (by focusing on shipping user-centered features)",
      "Mobile App Developer (by utilizing React Native / Flutter)",
      "UI/UX Design Technologist (by combining styling mastery with Figma)",
    ],
  },
  "backend-developer": {
    dailyReality: [
      "Monday: Payment gateway webhook latency spiked to 4.2s; investigating connection pool exhaustion.",
      "Tuesday: Relational database query on user orders takes 8 seconds; running EXPLAIN ANALYZE to add composite indexes.",
      "Wednesday: Authentication edge case: token refresh rotation race condition invalidates active user sessions.",
      "Thursday: Investigating Node.js heap memory leak caused by unclosed event listeners.",
      "Friday: Reviewing database migration scripts to ensure zero-downtime deployment during evening traffic.",
    ],
    beginnersUnderestimate: [
      "The difficulty of designing database structures that can scale to millions of rows without locking tables.",
      "Networking protocols, CORS policies, status codes, socket timeouts, and server connection pools.",
      "Designing robust error-handling pipelines that fail gracefully without terminating the process.",
    ],
    whoShouldAvoid: [
      "People who need instant visual feedback on screen to stay motivated.",
      "People who dislike thinking about serialization formats, concurrency, or transactions.",
      "People who prefer front-facing interface aesthetics.",
    ],
    transitionPaths: [
      "Full Stack Developer (by mastering modern frontend frameworks)",
      "DevOps / Platform Engineer (by mastering Docker and Kubernetes)",
      "Database Architect (by specializing in query optimization and sharding)",
      "System Architect (by designing large-scale distributed architectures)",
    ],
  },
  "ai-engineer": {
    dailyReality: [
      "Monday: Frontier model version update changed output format; JSON parsing logic breaks in production.",
      "Tuesday: RAG semantic search retrieved irrelevant documents; tuning chunk overlap and testing rerankers.",
      "Wednesday: Prompt injection vulnerability discovered in customer-facing chat prompt; adding defensive guardrails.",
      "Thursday: Token bill analysis shows $1,400 spent on unnecessary redundant system prompt tokens; implementing Redis semantic cache.",
      "Friday: Benchmarking open-source fine-tuned model against Gemini 1.5 to reduce inference latency.",
    ],
    beginnersUnderestimate: [
      "The stochastic (unpredictable) nature of LLMs and how hard it is to write reliable deterministic software on top of them.",
      "Vector chunking math and why cosine similarity alone fails without hybrid keyword search and reranking.",
      "How fast AI API libraries and model weights change, requiring continuous refactoring.",
    ],
    whoShouldAvoid: [
      "Developers who demand 100% deterministic test pass/fail results every single run.",
      "People who dislike constantly reading fresh research papers and SDK updates.",
      "Engineers who prefer stable, slow-moving legacy technology stacks.",
    ],
    transitionPaths: [
      "Machine Learning Scientist (by diving deeper into model training math)",
      "AI Product Manager (by translating model capabilities into user products)",
      "Full Stack AI Engineer (by building rich web frontends around models)",
      "MLOps Engineer (by focusing on inference server clustering and quantization)",
    ],
  },
  "devops-engineer": {
    dailyReality: [
      "Monday: PagerDuty alert at 3:15 AM: Kubernetes cluster memory usage crossed 92%; autoscaler pod failed to spin up.",
      "Tuesday: Docker image vulnerability scanner blocked CI pipeline; upgrading base Alpine image to patch CVE.",
      "Wednesday: Terraform plan shows destructive resource replacement on production database subnet; rewriting state module.",
      "Thursday: SSL certificate auto-renewal failed on legacy internal microservice; fixing cert-manager configuration.",
      "Friday: Setting up Prometheus alerts and Grafana dashboards for new microservice rollout.",
    ],
    beginnersUnderestimate: [
      "The emotional pressure of managing production infrastructure where one bad command causes company-wide downtime.",
      "The breadth of knowledge required: Linux, TCP/IP, DNS, cloud IAM, containers, and scripting.",
      "The necessity of documenting rollback procedures before touching any live cluster.",
    ],
    whoShouldAvoid: [
      "People who experience extreme anxiety from on-call incident alerts.",
      "Developers who dislike terminal command lines or system configuration files.",
      "Engineers who want to spend all their time building user-facing features.",
    ],
    transitionPaths: [
      "Site Reliability Engineer (SRE) (by specializing in high-scale telemetry)",
      "Cloud Solutions Architect (by designing multi-cloud enterprise footprints)",
      "Security / DevSecOps Engineer (by integrating security into CI/CD)",
      "Platform Engineering Lead (by building internal developer platforms)",
    ],
  },
  "full-stack-developer": {
    dailyReality: [
      "Monday: Architecting the data model in PostgreSQL and drafting the React UI wireframe for a new team feature.",
      "Tuesday: Writing backend REST endpoints with Zod schema validation and unit tests.",
      "Wednesday: Building the responsive React client components with Tailwind and connecting TanStack Query.",
      "Thursday: Debugging an auth session race condition where cookies weren't forwarded across CORS boundaries.",
      "Friday: Deploying the feature to staging, running E2E tests, and pushing the production release.",
    ],
    beginnersUnderestimate: [
      "The cognitive load of context-switching between UI styling and server database transactions.",
      "Keeping up with two rapidly evolving ecosystems simultaneously (frontend and backend).",
      "Knowing when to push computation to the client vs keeping it securely on the server.",
    ],
    whoShouldAvoid: [
      "People who get overwhelmed when juggling multiple layers of the tech stack.",
      "Engineers who want to be deep world-class specialists in one single narrow domain.",
    ],
    transitionPaths: [
      "Technical Lead / Engineering Manager",
      "Startup CTO / Founding Engineer",
      "Solutions Architect",
      "Independent Indie Hacker / SaaS Founder",
    ],
  },
  "data-scientist": {
    dailyReality: [
      "Monday: Product manager wants to know why user retention dipped 4%; writing complex SQL queries to isolate cohorts.",
      "Tuesday: 35% of customer demographic data in the CRM is missing or corrupted; spending all day cleaning strings.",
      "Wednesday: Training XGBoost customer churn model; cross-validation score shows signs of target leakage.",
      "Thursday: Designing an A/B test sample size calculation for a checkout experiment with marketing leads.",
      "Friday: Presenting a 10-slide visual executive deck explaining the findings to VP of Product.",
    ],
    beginnersUnderestimate: [
      "That 75% of data science time is spent wrangling, cleaning, and validating dirty data, not training models.",
      "The critical importance of executive presentation skills and translating math into business ROI.",
      "The statistical rigor needed to avoid false positive experiment conclusions.",
    ],
    whoShouldAvoid: [
      "People who dislike statistics, probability theory, or mathematical notation.",
      "Engineers who want to write production software code all day rather than analyzing datasets.",
      "People who get frustrated explaining technical findings to non-technical business stakeholders.",
    ],
    transitionPaths: [
      "Machine Learning Engineer (by focusing on model deployment and code quality)",
      "Data Analytics Lead (by driving business intelligence and analytics strategy)",
      "Quantitative Researcher / Strategist",
      "Product Manager (by leveraging deep data-driven product insights)",
    ],
  },
  "cloud-engineer": {
    dailyReality: [
      "Monday: Monthly AWS bill exceeded forecast by 28%; auditing unattached EBS volumes and NAT gateway bandwidth.",
      "Tuesday: Designing a multi-region disaster recovery VPC blueprint using Terraform.",
      "Wednesday: IAM security review: replacing hardcoded AWS access keys with temporary role-based STS tokens.",
      "Thursday: Load testing Application Load Balancer failover with simulated server node termination.",
      "Friday: Provisioning serverless Lambda functions and API Gateway endpoints for a new partner integration.",
    ],
    beginnersUnderestimate: [
      "How complex cloud networking (subnets, route tables, peering, NAT gateways, security groups) truly is.",
      "The critical importance of cloud cost optimization—unmanaged cloud spend can bankrupt startups.",
      "How dangerous misconfigured IAM policies can be for enterprise security.",
    ],
    whoShouldAvoid: [
      "People who dislike configuring cloud consoles, JSON policies, or network routing.",
      "Engineers looking to write pure user application logic without worrying about infrastructure.",
    ],
    transitionPaths: [
      "Cloud Solutions Architect (by designing large-scale enterprise cloud strategies)",
      "DevOps / Platform Engineer (by deepening CI/CD and Kubernetes expertise)",
      "DevSecOps / Cloud Security Specialist",
      "FinOps Specialist (by optimizing multi-million dollar cloud infrastructure budgets)",
    ],
  },
  "cybersecurity-analyst": {
    dailyReality: [
      "Monday: SIEM alerts trigger 45 suspicious login attempts from unknown IP ranges; triaging credentials.",
      "Tuesday: Critical Zero-Day CVE announced for an open-source library used across company servers; assessing exposure.",
      "Wednesday: Simulating phishing campaigns across internal departments and analyzing failure rates.",
      "Thursday: Performing network packet inspection in Wireshark to investigate an unauthorized outbound connection.",
      "Friday: Conducting a vulnerability scan across staging environments and preparing remediation tickets for engineers.",
    ],
    beginnersUnderestimate: [
      "The high volume of false positive alerts that must be triaged every single day in a SOC.",
      "The deep operating system and networking knowledge needed to differentiate normal traffic from attacks.",
      "The necessity of staying calm during live security incidents.",
    ],
    whoShouldAvoid: [
      "People who find repetitive monitoring or compliance documentation boring.",
      "Developers who want to build creative consumer products.",
    ],
    transitionPaths: [
      "Penetration Tester / Ethical Hacker (Red Team)",
      "Security Engineer / Architect (Blue Team)",
      "Incident Response Specialist",
      "Chief Information Security Officer (CISO) track",
    ],
  },
  "mobile-developer": {
    dailyReality: [
      "Monday: Apple rejected the iOS app submission due to a missing privacy policy manifest; updating configurations.",
      "Tuesday: Frame rate drops from 60 FPS to 24 FPS when scrolling a long feed; profiling memory with Flipper.",
      "Wednesday: Android 14 background battery optimization kills push notification sync; rewriting worker service.",
      "Thursday: Implementing local SQLite database caching for offline access during poor cellular signal.",
      "Friday: Testing release build on 6 physical test devices (varying screen sizes, notches, and Android OS versions).",
    ],
    beginnersUnderestimate: [
      "Device fragmentation—apps must work flawlessly across hundreds of screen sizes and hardware specs.",
      "Memory and battery constraints—mobile operating systems aggressively terminate bloated apps.",
      "The delays and strict policies of Apple App Store and Google Play review processes.",
    ],
    whoShouldAvoid: [
      "People who get impatient with app store review turnarounds or hardware emulators.",
      "Developers who dislike mobile ergonomics and touch gesture physics.",
    ],
    transitionPaths: [
      "Full Stack Engineer (by expanding into backend server APIs)",
      "Mobile Tech Lead / Principal Mobile Architect",
      "Product Engineer",
      "Cross-Platform Specialist (React Native / Flutter)",
    ],
  },
  "qa-automation-engineer": {
    dailyReality: [
      "Monday: 4 automated Playwright tests failed in the nightly CI run; debugging whether it's a real bug or a test timing issue.",
      "Tuesday: Writing automated end-to-end tests for the new checkout and promo-code redemption user flow.",
      "Wednesday: Meeting with frontend engineers to standardize data-testid attributes for reliable element selection.",
      "Thursday: Running a distributed k6 load test simulating 5,000 concurrent users to verify server autoscaling.",
      "Friday: Reviewing bug reports from the QA team, verifying severity, and demoing release sign-offs.",
    ],
    beginnersUnderestimate: [
      "How difficult it is to write deterministic, non-flaky test automation that passes 100% of the time in CI.",
      "That QA automation requires strong programming skills (TypeScript/Python), not just manual clicking.",
      "The diplomatic communication skills needed to report critical bugs to developers under tight deadlines.",
    ],
    whoShouldAvoid: [
      "Developers who get bored writing tests or only want to write customer-facing feature code.",
      "People who dislike thinking about weird edge cases, corrupted inputs, or boundary values.",
    ],
    transitionPaths: [
      "Software Development Engineer in Test (SDET)",
      "Backend Developer (by expanding API test knowledge into API creation)",
      "DevOps Engineer (by deepening CI/CD pipeline automation skills)",
      "Release / QA Engineering Manager",
    ],
  },
};
