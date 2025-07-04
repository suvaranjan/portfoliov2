"use server";

import { profilePrompt } from "@/data/profilePrompt";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

type Message = {
  sender: "user" | "model";
  text: string;
};

export const generateGeminiReply = async (messages: Message[]) => {
  const contents = [
    {
      role: "user",
      parts: [{ text: profilePrompt }],
    },
    ...messages.map((msg) => ({
      role: msg.sender,
      parts: [{ text: msg.text }],
    })),
  ];

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
    // generationConfig: {
    //   maxOutputTokens: 600,
    //   temperature: 0.7,
    // },
  });

  return result.text;
};
