import type { CareerCompareInfo } from "./types";

export const TECH_COMPARE_DATA: Record<string, CareerCompareInfo> = {
  "frontend-developer": {
    firstJobDifficulty: "Medium",
    learningCurve: "Moderate",
    freelancePotential: "High",
    remoteOpportunities: "Very High",
    aiImpact: "Moderate",
    bestFor: "Visual builders who care about user experience and responsive interfaces",
    whoThrives:
      "Visual thinkers who enjoy seeing instant feedback on screen, care about design details, accessibility, and clean component architecture.",
    whoStruggles:
      "Developers who dislike dealing with browser quirks, CSS layout adjustments, or rapidly shifting frontend tool ecosystems.",
    portfolioImportance: "Critical",
  },
  "backend-developer": {
    firstJobDifficulty: "Medium-High",
    learningCurve: "Steeper",
    freelancePotential: "Medium",
    remoteOpportunities: "High",
    aiImpact: "Low",
    bestFor: "Logical problem solvers who enjoy data modeling and distributed systems",
    whoThrives:
      "Engineers who enjoy designing database schemas, query optimization, security, and building scalable API pipelines.",
    whoStruggles:
      "Builders who need instant visual validation to stay motivated and get frustrated by abstract data pipelines or terminal logs.",
    portfolioImportance: "High",
  },
  "ai-engineer": {
    firstJobDifficulty: "Very High",
    learningCurve: "Extreme",
    freelancePotential: "High",
    remoteOpportunities: "Very High",
    aiImpact: "Beneficiary (Core Driver)",
    bestFor: "Builders who want to engineer modern intelligent systems and autonomous agents",
    whoThrives:
      "Engineers comfortable reading research papers, benchmarking probabilistic outputs, optimizing token latency, and building vector RAG pipelines.",
    whoStruggles:
      "Developers who expect 100% deterministic code and struggle with model hallucination, stochastic outputs, or fast-changing APIs.",
    portfolioImportance: "Critical",
  },
  "devops-engineer": {
    firstJobDifficulty: "High",
    learningCurve: "Steep",
    freelancePotential: "Low",
    remoteOpportunities: "High",
    aiImpact: "Low",
    bestFor: "System automation builders who love Linux, pipelines, and cloud reliability",
    whoThrives:
      "Engineers who enjoy scripting, configuring infrastructure pipelines, optimizing server uptime, and debugging production network traces.",
    whoStruggles:
      "Developers who dislike terminal commands, network configurations, or being on-call for production incidents.",
    portfolioImportance: "Moderate",
  },
  "full-stack-developer": {
    firstJobDifficulty: "Medium",
    learningCurve: "Broad",
    freelancePotential: "Very High",
    remoteOpportunities: "High",
    aiImpact: "Moderate",
    bestFor: "Product generalists and startup builders who want to ship end-to-end features",
    whoThrives:
      "Autonomous generalists who love understanding the entire product lifecycle from UI wireframe to database deployment.",
    whoStruggles:
      "People overwhelmed by having to master both UI quirks and server-side infrastructure simultaneously.",
    portfolioImportance: "Critical",
  },
  "data-scientist": {
    firstJobDifficulty: "High",
    learningCurve: "Steep",
    freelancePotential: "Medium",
    remoteOpportunities: "High",
    aiImpact: "Moderate",
    bestFor: "Analytical thinkers who love statistics, probability, and exploratory data mining",
    whoThrives:
      "Curious problem solvers who enjoy statistical hypothesis testing, finding patterns in messy data, and communicating insights to executives.",
    whoStruggles:
      "People who dislike mathematical theory, statistical distributions, or spending 70% of their time cleaning dirty spreadsheets.",
    portfolioImportance: "High",
  },
  "cloud-engineer": {
    firstJobDifficulty: "Medium-High",
    learningCurve: "Steep",
    freelancePotential: "Medium",
    remoteOpportunities: "Very High",
    aiImpact: "Low",
    bestFor: "Infrastructure scalers who enjoy designing multi-region cloud systems",
    whoThrives:
      "Architects who care about high availability, cost optimization, identity boundaries (IAM), and virtual networking topologies.",
    whoStruggles:
      "Developers who want to write pure application business logic and get annoyed configuring cloud provider portals and CLI credentials.",
    portfolioImportance: "High",
  },
  "cybersecurity-analyst": {
    firstJobDifficulty: "High",
    learningCurve: "Steep",
    freelancePotential: "Moderate",
    remoteOpportunities: "Moderate",
    aiImpact: "Low-to-Medium",
    bestFor: "Defensive thinkers who love threat investigation and system hardening",
    whoThrives:
      "Detail-oriented investigators who enjoy dissecting network packets, auditing vulnerabilities, and staying ahead of cyber threats.",
    whoStruggles:
      "Developers who want to build creative visual features rather than dissecting logs and analyzing security risks.",
    portfolioImportance: "Moderate",
  },
  "mobile-developer": {
    firstJobDifficulty: "Medium",
    learningCurve: "Moderate",
    freelancePotential: "High",
    remoteOpportunities: "High",
    aiImpact: "Moderate",
    bestFor:
      "App creators passionate about touch interactions, smartphone cameras, and offline apps",
    whoThrives:
      "Engineers who obsess over 60 FPS mobile animations, native device sensors (GPS, camera), and app store releases.",
    whoStruggles:
      "Developers who get frustrated by Apple/Google app store review delays, device fragmentation, or multi-platform native builds.",
    portfolioImportance: "Critical",
  },
  "qa-automation-engineer": {
    firstJobDifficulty: "Low-to-Medium",
    learningCurve: "Moderate",
    freelancePotential: "Medium",
    remoteOpportunities: "High",
    aiImpact: "Moderate",
    bestFor: "Quality advocates who enjoy breaking code, writing test suites, and load testing",
    whoThrives:
      "Methodical builders who love thinking through edge cases, automating browser flows with Playwright, and stopping bugs before production.",
    whoStruggles:
      "Impatient developers who find writing test cases repetitive or only want to build greenfield features.",
    portfolioImportance: "High",
  },
};
