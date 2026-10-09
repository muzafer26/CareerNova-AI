// Vercel Edge Function — Unified AI proxy (Groq)
export const config = { runtime: "edge" };

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const PRIMARY = "llama-3.3-70b-versatile";
const FALLBACK = "llama-3.1-8b-instant";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, apikey",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Msg = { role: "system" | "user" | "assistant"; content: string };
type Body = {
  mode?: "chat" | "json";
  messages: Msg[];
  schema?: Record<string, unknown>;
  schema_name?: string;
  model?: string;
  temperature?: number;
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

async function callGroq(model: string, payload: Record<string, unknown>, key: string) {
  return fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, model }),
  });
}

async function callGemini(
  systemPrompt: string,
  userPrompt: string,
  jsonMode: boolean,
  key: string,
) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
  const body: Record<string, unknown> = {
    contents: [
      {
        role: "user",
        parts: [{ text: `${systemPrompt ? `System: ${systemPrompt}\n\n` : ""}${userPrompt}` }],
      },
    ],
    generationConfig: jsonMode ? { responseMimeType: "application/json" } : {},
  };
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function getFallbackQuizRecommendations() {
  return {
    recommendations: [
      {
        title: "Frontend & Full Stack Engineer",
        match_score: 94,
        why_fit:
          "Matches your strong focus on product building, problem solving, and modern web software development.",
        salary_range: "$90k – $160k (₹18L – ₹35L)",
        demand: "Very High",
        top_skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "REST APIs"],
        roadmap: [
          "Master modern JavaScript (ES2024) & TypeScript essentials",
          "Build full-featured interactive applications with React & Next.js",
          "Design accessible, beautiful UI with Tailwind CSS & component libraries",
          "Connect SQL/NoSQL databases and deploy on Vercel or Cloud platforms",
          "Ship 3 end-to-end portfolio projects and practice technical interview problems",
        ],
      },
      {
        title: "AI & Machine Learning Engineer",
        match_score: 88,
        why_fit:
          "Fits your passion for cutting-edge technology, analytical problem solving, and building intelligent automation.",
        salary_range: "$130k – $220k (₹24L – ₹50L)",
        demand: "Very High",
        top_skills: [
          "Python",
          "PyTorch",
          "LLMs & Prompt Engineering",
          "LangChain",
          "Vector Databases",
          "FastAPI",
        ],
        roadmap: [
          "Solidify Python programming, linear algebra, and data science fundamentals",
          "Learn machine learning principles and deep learning with PyTorch",
          "Build Retrieval-Augmented Generation (RAG) systems with vector databases",
          "Deploy AI microservices using FastAPI and Docker",
          "Contribute to open-source AI projects and build autonomous agent demos",
        ],
      },
      {
        title: "Product Designer & UI/UX Specialist",
        match_score: 82,
        why_fit:
          "Blends creative design thinking, intuitive user journeys, and visual craft into high-impact digital experiences.",
        salary_range: "$85k – $150k (₹14L – ₹30L)",
        demand: "High",
        top_skills: [
          "Figma",
          "Design Systems",
          "User Research",
          "Wireframing",
          "Interaction Design",
          "Prototyping",
        ],
        roadmap: [
          "Learn visual design principles: hierarchy, typography, spacing, and color theory",
          "Master Figma components, auto-layout, and interactive prototyping",
          "Conduct user interviews and design testing to identify friction points",
          "Build and document a comprehensive design system with dark mode",
          "Publish detailed case studies showcasing real problem-to-solution outcomes",
        ],
      },
    ],
  };
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return jsonResponse({ error: "Invalid request" }, 400);
  }
  const { mode = "chat", messages, schema, model, temperature = 0.7 } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return jsonResponse({ error: "messages required" }, 400);
  }

  const GROQ_KEY = process.env.GROQ_API_KEY;
  const GEMINI_KEY = process.env.GEMINI_API_KEY;

  if (GROQ_KEY) {
    let finalMessages = messages;
    const payload: Record<string, unknown> = { messages: finalMessages, temperature };

    if (mode === "json") {
      const schemaText = schema
        ? `\n\nReturn ONLY a single valid JSON object that matches this JSON Schema:\n${JSON.stringify(schema)}`
        : "\n\nReturn ONLY a single valid JSON object. No prose, no markdown.";
      const sysIdx = messages.findIndex((m) => m.role === "system");
      if (sysIdx >= 0) {
        finalMessages = messages.map((m, i) =>
          i === sysIdx ? { ...m, content: m.content + schemaText } : m,
        );
      } else {
        finalMessages = [
          { role: "system", content: "You are a precise JSON generator." + schemaText },
          ...messages,
        ];
      }
      payload.messages = finalMessages;
      payload.response_format = { type: "json_object" };
    }

    const primary = model || PRIMARY;
    try {
      let upstream = await callGroq(primary, payload, GROQ_KEY);
      if (!upstream.ok && upstream.status >= 500 && primary !== FALLBACK) {
        upstream = await callGroq(FALLBACK, payload, GROQ_KEY);
      }
      if (upstream.ok) {
        const data = (await upstream.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        const content = data.choices?.[0]?.message?.content ?? "";
        if (mode === "json") {
          const cleaned = content.replace(/```json\s*|\s*```/g, "").trim();
          const start = cleaned.indexOf("{");
          const end = cleaned.lastIndexOf("}");
          const slice = start >= 0 && end > start ? cleaned.slice(start, end + 1) : cleaned;
          return jsonResponse({ data: JSON.parse(slice) });
        }
        return jsonResponse({ content });
      }
    } catch (e) {
      console.warn("[ai] Groq error, attempting fallback", e);
    }
  }

  if (GEMINI_KEY) {
    try {
      const sysMsg = messages.find((m) => m.role === "system")?.content || "";
      const userMsg = messages
        .filter((m) => m.role !== "system")
        .map((m) => `${m.role}: ${m.content}`)
        .join("\n\n");
      const upstream = await callGemini(sysMsg, userMsg, mode === "json", GEMINI_KEY);
      if (upstream.ok) {
        const data = (await upstream.json()) as {
          candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
        };
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
        if (mode === "json") {
          const cleaned = text.replace(/```json\s*|\s*```/g, "").trim();
          const start = cleaned.indexOf("{");
          const end = cleaned.lastIndexOf("}");
          const slice = start >= 0 && end > start ? cleaned.slice(start, end + 1) : cleaned;
          return jsonResponse({ data: JSON.parse(slice) });
        }
        return jsonResponse({ content: text });
      }
    } catch (e) {
      console.warn("[ai] Gemini error, using smart fallback", e);
    }
  }

  // Graceful fallback for demo/offline
  if (mode === "json") {
    return jsonResponse({ data: getFallbackQuizRecommendations() });
  }

  return jsonResponse({
    content:
      "Career guidance tip: Focus on building 2-3 high-quality portfolio projects that solve real problems. Pair deep fundamentals (data structures, system design, clean code) with in-demand framework skills like React, TypeScript, and modern AI integration.",
  });
}
