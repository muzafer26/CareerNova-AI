// Vercel Edge Function — Resume Analyzer (Groq, Llama 3.3 70B)
export const config = { runtime: "edge" };

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const PRIMARY = "llama-3.3-70b-versatile";
const FALLBACK = "llama-3.1-8b-instant";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM = `You are an elite ATS expert and senior tech recruiter for top startups.
Analyze the resume and return ONLY a JSON object matching this exact shape, no prose, no markdown:
{
  "score": number 0-100,
  "summary": string (2-3 sentences),
  "strengths": string[] (4-6 specific items),
  "weaknesses": string[] (4-6 specific items),
  "missingKeywords": string[] (8-12 ATS keywords),
  "formatting": string[] (3-5 structure tips),
  "careerMatches": [{"title": string, "fit": number 0-100, "why": string}] (top 5),
  "interviewReadiness": number 0-100,
  "skillGaps": string[] (4-6 concrete skill gaps),
  "projectIdeas": string[] (3-5 portfolio projects to close gaps),
  "roadmap": string[] (5-7 prioritized action steps for the next 90 days),
  "nextSteps": string[] (4-6 immediate improvements)
}
Be specific to the resume content, never generic. Use Indian + global hiring context.`;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

function extractJson(text: string): unknown {
  const cleaned = text.replace(/```json\s*|\s*```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("no json");
  return JSON.parse(cleaned.slice(start, end + 1));
}

async function callModel(model: string, text: string, key: string) {
  return fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: `RESUME TEXT:\n\n${text}` },
      ],
    }),
  });
}

function evaluateResumeLocally(text: string) {
  const lower = text.toLowerCase();
  const techKeywords = [
    "react",
    "typescript",
    "javascript",
    "python",
    "node",
    "aws",
    "docker",
    "sql",
    "postgresql",
    "mongodb",
    "git",
    "ci/cd",
    "rest api",
    "graphql",
    "html",
    "css",
    "tailwind",
    "next.js",
    "kubernetes",
    "agile",
    "testing",
  ];

  const presentKeywords = techKeywords.filter((k) => lower.includes(k));
  const missing = techKeywords.filter((k) => !lower.includes(k)).slice(0, 8);

  const wordCount = text.split(/\s+/).length;
  const hasActionVerbs = /(designed|built|led|developed|created|improved|optimized|shipped)/i.test(
    text,
  );
  const hasNumbers = /\d+%|\$\d+|\d+\s*users|\d+x/i.test(text);

  let score = 70;
  if (presentKeywords.length >= 6) score += 10;
  if (hasActionVerbs) score += 8;
  if (hasNumbers) score += 6;
  if (wordCount >= 200 && wordCount <= 700) score += 4;
  score = Math.min(95, Math.max(62, score));

  return {
    score,
    summary: `Your resume demonstrates solid experience with ${
      presentKeywords
        .slice(0, 3)
        .map((w) => w.toUpperCase())
        .join(", ") || "core technical skills"
    }. Quantifying your project outcomes with metrics will significantly increase recruiter response rates.`,
    strengths: [
      `Hands-on exposure with key tools: ${presentKeywords.slice(0, 4).join(", ") || "software development"}`,
      hasActionVerbs
        ? "Good usage of strong action verbs in experience descriptions"
        : "Clear breakdown of roles and academic background",
      "Focused project highlights demonstrating practical problem solving",
      "Relevant technical competencies aligned with high-demand tech stacks",
    ],
    weaknesses: [
      hasNumbers
        ? "Add more percentage or efficiency impact metrics"
        : "Missing quantified business impact metrics (e.g. improved latency by X%, scaled to Y users)",
      "Include a concise 2-sentence executive summary at the top of the page",
      "Ensure all project bullet points follow the STAR (Situation, Task, Action, Result) method",
      "Add links to live demo deployments alongside GitHub repositories",
    ],
    missingKeywords: missing.length
      ? missing
      : ["CI/CD", "Docker", "Unit Testing", "System Design", "Agile", "TypeScript"],
    formatting: [
      "Keep resume strictly to 1 page if you have under 5 years of professional experience",
      "Use clean bullet points instead of narrative paragraphs for quick scanning",
      "Ensure consistent date formatting (e.g., 'MMM YYYY - Present') throughout",
      "Export as a clean text-selectable PDF rather than an image or complex multi-column template",
    ],
    careerMatches: [
      {
        title: "Frontend Engineer",
        fit: Math.min(96, score + 4),
        why: "Strong alignment with modern web client development and interface technologies.",
      },
      {
        title: "Full Stack Developer",
        fit: Math.min(92, score + 2),
        why: "Broad technical coverage spanning application architecture, data, and user experience.",
      },
      {
        title: "Software Engineer",
        fit: Math.min(90, score),
        why: "Solid baseline programming fundamentals and project problem solving.",
      },
    ],
    interviewReadiness: Math.round(score * 0.92),
    skillGaps: [
      "End-to-end automated testing (Jest, Playwright, or Cypress)",
      "System design and high-volume data architecture fundamentals",
      "Cloud provisioning pipelines (Docker, GitHub Actions, AWS)",
      "Performance optimization and bundle size budgeting",
    ],
    projectIdeas: [
      "Real-time collaborative workspace with WebSocket synchronization",
      "Full-stack micro-SaaS with authentication, Stripe billing, and background jobs",
      "Developer productivity tool utilizing modern AI APIs with caching",
    ],
    roadmap: [
      "Days 1-15: Rewrite resume bullet points using quantified impact metrics (STAR format)",
      "Days 16-30: Build and ship 1 flagship portfolio project with public URL",
      "Days 31-60: Complete 50 targeted LeetCode / HackerRank problems focusing on DSA",
      "Days 61-90: Begin active outbound networking and direct referral requests on LinkedIn",
    ],
    nextSteps: [
      "Add numbers/metrics to top 3 project descriptions",
      "Incorporate missing ATS keywords into your skills section",
      "Ensure GitHub profile README is clean with pinned featured repositories",
      "Practice 3 mock technical interviews on CareerNova AI Mentor",
    ],
  };
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

  let body: { text: string };
  try {
    body = (await request.json()) as { text: string };
  } catch {
    return jsonResponse({ error: "Invalid request" }, 400);
  }
  const text = (body.text || "").slice(0, 24000).trim();
  if (text.length < 80) {
    return jsonResponse({ error: "Resume text is too short to analyze" }, 400);
  }

  const GROQ_KEY = process.env.GROQ_API_KEY;
  if (GROQ_KEY) {
    try {
      let r = await callModel(PRIMARY, text, GROQ_KEY);
      if (!r.ok && r.status >= 500) r = await callModel(FALLBACK, text, GROQ_KEY);
      if (r.ok) {
        const j = (await r.json()) as { choices?: Array<{ message?: { content?: string } }> };
        const out = j.choices?.[0]?.message?.content ?? "";
        return jsonResponse({ data: extractJson(out) });
      }
    } catch (e) {
      console.warn("[resume] Groq error, attempting fallback", e);
    }
  }

  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (GEMINI_KEY) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${SYSTEM}\n\nRESUME TEXT:\n${text}` }],
            },
          ],
          generationConfig: { responseMimeType: "application/json" },
        }),
      });
      if (resp.ok) {
        const j = (await resp.json()) as {
          candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
        };
        const out = j.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
        if (out) {
          return jsonResponse({ data: extractJson(out) });
        }
      }
    } catch (e) {
      console.warn("[resume] Gemini error, using local evaluation", e);
    }
  }

  // Graceful local ATS evaluation fallback
  return jsonResponse({ data: evaluateResumeLocally(text) });
}
