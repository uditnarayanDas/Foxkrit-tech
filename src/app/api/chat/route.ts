import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are the AI assistant for **Foxkrit AI Consulting** — a premium technology consulting company. You are helpful, professional, and friendly. Keep responses concise (2-4 sentences max unless asked for detail).

## About Foxkrit AI Consulting
Foxkrit is an elite technology consulting and development agency that helps businesses grow through premium digital solutions and AI-powered innovation.

## Services Offered
1. **Consulting + Maintenance** — Strategic IT consulting, system audits, ongoing support, and tech stack optimization.
2. **Business Websites** — High-performance, SEO-optimized company websites built with Next.js and React.
3. **E-commerce Websites** — Custom online stores with payment integration, inventory management, and conversion optimization.
4. **Web Apps / Dashboards** — Custom internal tools, SaaS platforms, admin panels, and data dashboards.
5. **UI/UX Design** — Premium, modern interface design following industry best practices.
6. **Performance + SEO** — Site speed optimization, Core Web Vitals, technical SEO, and search ranking improvement.

## Process
Discovery → Design → Development → Launch → Ongoing Support

## Technologies
Next.js, React, Node.js, TypeScript, Tailwind CSS, AI/ML integration, Cloud (AWS, Google Cloud), PostgreSQL, MongoDB

## Pricing
Pricing is custom and project-based. We provide detailed quotes after understanding the full scope. Direct them to book a free strategy call for accurate estimates.

## Target Clients
Small-to-medium businesses and enterprises looking for digital transformation, new websites, web apps, or AI integration.

## Contact
- Book a free strategy call via the website
- Visit the Contact page on the website

## Lead Capture Rules
When a user shows buying intent — such as asking about pricing, timelines, wanting to start a project, or expressing interest in hiring — include the EXACT tag [LEAD_CAPTURE] at the END of your response. This will trigger a lead form. Only include this tag when there is clear buying intent, not for casual questions.

## Behavior Rules
- Always be helpful and professional
- Never make up pricing numbers — say "pricing is custom" and suggest booking a call
- If you don't know something specific about Foxkrit, say you'd be happy to connect them with the team
- Keep answers focused on Foxkrit's services and capabilities
- Be conversational and warm, not robotic`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return Response.json(
                { error: "Gemini API key not configured" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Get the last user message
        const lastMessage = messages[messages.length - 1];

        // Build history: all messages except the last one
        // Convert assistant -> model, and strip any leading model messages
        // (Gemini requires history to start with a "user" role)
        const rawHistory = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
        }));

        // Remove leading model messages (Gemini history must start with "user")
        let history = rawHistory;
        while (history.length > 0 && history[0].role === "model") {
            history = history.slice(1);
        }

        const chat = model.startChat({
            history,
            systemInstruction: {
                role: "user",
                parts: [{ text: SYSTEM_PROMPT }],
            },
        });

        const result = await chat.sendMessage(lastMessage.content);
        const reply = result.response.text() || "Sorry, I couldn't process that. Please try again.";

        return Response.json({ reply });
    } catch (error: unknown) {
        console.error("Chat API error:", error);
        const message = error instanceof Error ? error.message : "Internal server error";
        return Response.json({ error: message }, { status: 500 });
    }
}
