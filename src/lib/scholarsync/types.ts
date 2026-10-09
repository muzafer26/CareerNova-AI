export type Provider =
  | "Coursera"
  | "Google"
  | "Microsoft"
  | "IBM"
  | "edX"
  | "Harvard"
  | "MIT"
  | "YouTube"
  | "freeCodeCamp"
  | "Stanford"
  | "The Linux Foundation"
  | "Meta"
  | "Amazon Web Services"
  | "DeepLearning.AI"
  | "MDN Web Docs";

export interface RoadmapStage {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources?: string[];
  milestones: string[];
  order: number;
  whyExists?: string;
  whyThisStep?: string;
  whyNow?: string;
  whyBeforeNext?: string;
  realWorldUsage?: string;
  sources?: string[];
  suggestedProjects?: string[];
  expectedOutcome?: string;
  commonMistakes?: string[];
  readyToMoveOn?: string[];
}

export interface TechCareer {
  id: string;
  title: string;
  slug: string;
  field: "Technology";
  subfield: string;
  category: "software" | "data-ai" | "cloud-devops" | "security-qa" | "mobile-systems";
  description: string;
  shortDescription: string;
  avgSalaryIndia: string;
  avgSalaryGlobal: string;
  demandTrend: "rising" | "stable" | "high";
  tags: string[];
  aliases: string[];
  icon: string;
  roadmapShUrl?: string;
  overview: string;
  whatItDoes: string;
  timeToJobReady: string;
  skillsRequired: string[];
  stages: RoadmapStage[];
}

export interface CareerCompareInfo {
  firstJobDifficulty: string;
  learningCurve: string;
  freelancePotential: string;
  remoteOpportunities: string;
  aiImpact: string;
  bestFor: string;
  whoThrives: string;
  whoStruggles: string;
  portfolioImportance: "Critical" | "High" | "Moderate";
}

export interface CareerGrowthNode {
  slug: string;
  careerTitle: string;
  nextSteps: string[];
  transitions: {
    typical: string[];
    common: string[];
    advanced: string[];
  };
  timeframe: string;
  upskillNeeded: string[];
}

export interface CareerRealityInfo {
  dailyReality: string[];
  beginnersUnderestimate: string[];
  whoShouldAvoid: string[];
  transitionPaths: string[];
}

export interface ProofLevel {
  title: string;
  description: string;
  deliverables: string[];
  evaluationCriteria: string[];
}

export interface PortfolioProof {
  skillName: string;
  beginner: ProofLevel;
  intermediate: ProofLevel;
  advanced: ProofLevel;
}

export interface SkillNode {
  name: string;
  prerequisites: string[];
  unlocks: string[];
  usedInCareers: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeEstimate: string;
  commonMistakes: string[];
  relatedTechnologies: string[];
}

export interface CareerActionPlan {
  title: string;
  days: { day: string; task: string; description: string }[];
}
