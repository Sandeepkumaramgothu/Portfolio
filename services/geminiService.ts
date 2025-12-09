import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, SUMMARY, SKILLS, EXPERIENCE, PROJECTS, EDUCATION } from "../constants";

// Construct the system prompt from the resume data
const systemPrompt = `
You are an AI assistant for ${PERSONAL_INFO.name}'s professional portfolio website.
Your role is to act as a representative for Sandeep, answering questions about his resume, skills, and experience.

Here is Sandeep's Resume Data:

Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}, ${PERSONAL_INFO.location}
Summary: ${SUMMARY}

Skills:
${JSON.stringify(SKILLS)}

Experience:
${JSON.stringify(EXPERIENCE)}

Projects:
${JSON.stringify(PROJECTS)}

Education:
${JSON.stringify(EDUCATION)}

Rules:
1. Answer strictly based on the provided data.
2. Be professional, concise, and polite.
3. If asked about contact info, provide the email or LinkedIn.
4. Highlight his expertise in ML Security, Red Teaming, and MLOps when relevant.
5. If the user asks something personal or unrelated to the resume, politely decline.
6. Keep answers short (under 100 words) unless asked for details.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    throw error;
  }
};

export const sendMessageStream = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = initializeChat();
  
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    // Create a generator to yield text chunks
    async function* textGenerator() {
      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }
    
    return textGenerator();
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
