// app/api/chat/route.ts

import { generateGeminiReply } from "@/services/gemini";

export async function POST(request: Request) {
  const { messages } = await request.json();

  try {
    const reply = await generateGeminiReply(messages);
    return Response.json({ reply });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
