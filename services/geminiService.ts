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
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// --- MOCK FALLBACK SYSTEM ---
const mockResponse = async function* (message: string) {
  const lower = message.toLowerCase();

  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 600));

  let responseText = "I apologize, but I am having trouble connecting to the Neural Net. However, I can tell you that Sandeep is a Machine Learning Engineer specializing in AI Safety, MLOps, and LLMs.";

  if (lower.includes("hello") || lower.includes("hi")) {
    responseText = "Greetings. I am the Ronin Assistant. I can reveal information about Sandeep's [Projects], [Skills], or [Experience].";
  } else if (lower.includes("project")) {
    responseText = "Sandeep has built systems for UAV Audio Detection, LLM Red-Teaming, and Supply Chain Analytics. Check the 'Armoury' section below.";
  } else if (lower.includes("skill")) {
    responseText = "He is proficient in PyTorch, TensorFlow, LLM Security (Red Teaming), and MLOps pipelines. See the 'Combat Skills' section.";
  } else if (lower.includes("experience") || lower.includes("work")) {
    responseText = "He is currently a Graduate Researcher at TAMUCC and previously worked as a Data Engineer at TCS and Accenture.";
  } else if (lower.includes("contact") || lower.includes("email")) {
    responseText = `You can reach him at ${PERSONAL_INFO.email}.`;
  }

  // Stream the mock response
  const chunks = responseText.split(" ");
  for (const chunk of chunks) {
    yield chunk + " ";
    await new Promise(resolve => setTimeout(resolve, 50));
  }
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  if (!API_KEY) {
    console.warn("Gemini API Key missing. Falling back to Ronin Mock Responder.");
    // We throw specifically to trigger the persistent fallback in sendMessageStream
    throw new Error("MISSING_KEY");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-1.5-flash', // Switched to stable 1.5-flash
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
  try {
    const chat = initializeChat();
    const resultStream = await chat.sendMessageStream({ message });

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
    console.warn("API Error or Missing Key. Using Fallback.", error);
    // Silent Fallback to Mock
    return mockResponse(message);
  }
};
