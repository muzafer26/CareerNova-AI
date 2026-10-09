// Vercel Edge Function — AI Mentor (streaming chat via Groq, Llama 3 70B)
export const config = { runtime: "edge" };

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, apikey",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Msg = { role: "system" | "user" | "assistant"; content: string };

const SYSTEM = `You are CareerNova, an elite AI career mentor for students and early-career professionals.
You give crisp, structured, motivating advice with real specifics: tools, skills, roadmaps, projects, certifications, free YouTube channels, salary ranges, and interview prep.
Always format answers with markdown — short intro, then headings/bullets, then a one-line "Next step" call to action.
Be warm and concise. Avoid filler. Use Indian + global context where helpful.`;

function createSimulatedStream(userQuery: string): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const q = userQuery.toLowerCase();

  let reply = "";
  if (q.includes("ai") || q.includes("machine learning")) {
    reply = `### AI & Machine Learning Roadmap\n\nAI engineering is one of the highest-growth career tracks globally. Here is your actionable blueprint:\n\n**1. Core Foundations**\n- **Python & Data Structures**: NumPy, Pandas, Object-Oriented Programming\n- **Math Fundamentals**: Linear algebra, vector spaces, calculus, probability\n\n**2. Applied Machine Learning**\n- **Deep Learning**: PyTorch or TensorFlow, CNNs, Transformers\n- **Modern LLM Stack**: LangChain, LlamaIndex, OpenAI/Gemini SDKs, ChromaDB / Pinecone\n\n**3. Standout Portfolio Project**\n- Build an autonomous multi-agent research assistant that browses documentation and summarizes insights.\n\n**Salary Benchmark**: $130k – $220k (US) / ₹24L – ₹45L (India)\n\n**Next step**: Start building a small Retrieval-Augmented Generation (RAG) prototype this weekend!`;
  } else if (q.includes("frontend") || q.includes("react")) {
    reply = `### Frontend Engineer Mastery Plan\n\nFrontend is all about craft, user experience, and performance. Here is how to accelerate your career:\n\n**1. Modern Tech Stack**\n- **Language**: TypeScript (strict mode), modern JavaScript (ES2024)\n- **Frameworks**: React 19, Next.js (App Router), Tailwind CSS v4\n- **State & Data**: TanStack Query (React Query), Zustand\n\n**2. Key Milestones**\n- Build 3 production-grade applications with zero UI bugs and high accessibility.\n- Optimize Core Web Vitals (LCP < 2.5s, CLS < 0.1).\n- Contribute a small component or fix to an open-source library.\n\n**Salary Benchmark**: $100k – $160k (US) / ₹16L – ₹32L (India)\n\n**Next step**: Clone your favorite SaaS dashboard interface and add smooth Framer Motion micro-interactions.`;
  } else if (q.includes("project") || q.includes("beginner")) {
    reply = `### Top Portfolio Projects to Stand Out\n\nRecruiters ignore generic to-do apps. Build these three high-signal projects instead:\n\n1. **Full-Stack SaaS with Real Auth & Billing**: Next.js + Stripe + PostgreSQL with dashboard analytics.\n2. **AI-Powered Productivity Tool**: A real-time document summarizer or automated code reviewer using LLM APIs.\n3. **Real-Time Collaborative Tool**: A multiplayer drawing board or chat with WebSockets.\n\n**Next step**: Pick the project that excites you most and create the GitHub repository today!`;
  } else {
    reply = `### Personalized Career Guidance\n\nGreat question! Here is how to approach this systematically:\n\n**1. High-Leverage Skills to Focus On**\n- Strong problem-solving & clean architectural design\n- Hands-on experience with modern tooling & version control\n- Clear technical communication & documentation\n\n**2. Action Plan for the Next 30 Days**\n- **Week 1-2**: Deepen fundamental skills with daily deliberate practice\n- **Week 3**: Build a concrete portfolio proof-of-work\n- **Week 4**: Optimize your resume and network on LinkedIn\n\n**Next step**: Take the CareerNova quiz in the sidebar to pinpoint your top 3 career matches!`;
  }

  // Stream in small chunks to simulate streaming
  const words = reply.split(" ");
  return new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const word = words[i] + (i === words.length - 1 ? "" : " ");
        const chunk = `data: ${JSON.stringify({ choices: [{ delta: { content: word } }] })}\n\n`;
        controller.enqueue(encoder.encode(chunk));
        await new Promise((r) => setTimeout(r, 20));
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

  let body: { messages: Msg[]; context?: string };
  try {
    body = (await request.json()) as { messages: Msg[]; context?: string };
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return new Response(JSON.stringify({ error: "messages required" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const sys = body.context
    ? `${SYSTEM}\n\nUser context (personalize answers using this):\n${body.context}`
    : SYSTEM;

  const GROQ_KEY = process.env.GROQ_API_KEY;
  if (GROQ_KEY) {
    try {
      const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          stream: true,
          temperature: 0.7,
          messages: [{ role: "system", content: sys }, ...body.messages],
        }),
      });
      if (upstream.ok && upstream.body) {
        return new Response(upstream.body, {
          headers: { ...cors, "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
        });
      }
    } catch (e) {
      console.warn("[mentor] Groq error, attempting fallback", e);
    }
  }

  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (GEMINI_KEY) {
    try {
      const prompt =
        `${sys}\n\n` + body.messages.map((m) => `${m.role}: ${m.content}`).join("\n\n");
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      });
      if (resp.ok) {
        const j = (await resp.json()) as {
          candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
        };
        const text = j.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
        if (text) {
          const encoder = new TextEncoder();
          const words = text.split(" ");
          const stream = new ReadableStream({
            async start(controller) {
              for (let i = 0; i < words.length; i++) {
                const word = words[i] + (i === words.length - 1 ? "" : " ");
                const chunk = `data: ${JSON.stringify({ choices: [{ delta: { content: word } }] })}\n\n`;
                controller.enqueue(encoder.encode(chunk));
                await new Promise((r) => setTimeout(r, 15));
              }
              controller.enqueue(encoder.encode("data: [DONE]\n\n"));
              controller.close();
            },
          });
          return new Response(stream, {
            headers: { ...cors, "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
          });
        }
      }
    } catch (e) {
      console.warn("[mentor] Gemini error, using fallback", e);
    }
  }

  const lastUserMsg = body.messages.filter((m) => m.role === "user").pop()?.content || "";
  const fallbackStream = createSimulatedStream(lastUserMsg);
  return new Response(fallbackStream, {
    headers: { ...cors, "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
  });
}
