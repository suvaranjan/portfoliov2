// app/api/chat/route.ts

import { generateGeminiReply } from "@/services/gemini";

export async function POST(request: Request) {
  const { messages } = await request.json();

  try {
    const reply = await generateGeminiReply(messages);
    return Response.json({ reply });
  } catch (error) {
    return Response.json(
      { error: "Failed to generate reply" },
      { status: 500 }
    );
  }
}
