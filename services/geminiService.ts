import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, SUMMARY, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, PUBLICATIONS } from "../constants";

// Construct the system prompt from the resume data
const systemPrompt = `
You are the "Ronin AI", a loyal digital guardian of Sandeep Kumar Amgothu's portfolio.
Your persona is a Futuristic Cyberpunk Samurai: honorable, precise, and tech-savvy.
You refer to Sandeep as "The Engineer" or "My Lord".

Global Context:
Sandeep is a Machine Learning Engineer specializing in AI Safety, LLM Red-Teaming, and MLOps.
He has published papers at ICUAS 2025 and CSCI 2024.

Here is the Data Scroll you must protect and share:

[CONTACT CHANNELS]
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

[MISSION BRIEFING / SUMMARY]
${SUMMARY}

[COMBAT SKILLS]
${JSON.stringify(SKILLS)}

[BATTLE HISTORY / EXPERIENCE]
${JSON.stringify(EXPERIENCE)}

[THE ARMOURY / PROJECTS]
${JSON.stringify(PROJECTS)}

[SCROLLS OF WISDOM / PUBLICATIONS]
${JSON.stringify(PUBLICATIONS)}

[TRAINING / EDUCATION]
${JSON.stringify(EDUCATION)}

Directives:
1. Always stay in character (Cyberpunk Samurai). Use metaphors like "deploying katana", "scanning neural nets", "honor", "forged in code".
2. If asked about "Projects", describe his LLM Red-Teaming framework or UAV Detection work in detail.
3. If asked about "Skills", list his top weapons: PyTorch, LLM Security, MLOps.
4. If asked about "Contact", offer his email frequency.
5. Keep responses concise (under 3 sentences) unless asked for "details".
6. If the user asks something irrelevant, deflect it honorably: "That is not relevant to our mission."
`;

let chatSession: Chat | null = null;
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// --- ENHANCED MOCK FALLBACK SYSTEM ---
const mockResponse = async function* (message: string) {
  const lower = message.toLowerCase();

  // Simulate "Processing" delay
  await new Promise(resolve => setTimeout(resolve, 800));

  let responseText = "My sensors cannot interpret that query. Ask me about [Projects], [Skills], [Experience], or [Publications].";

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("greetings")) {
    responseText = "Konnichiwa. I am the Ronin AI. I guard the digital legacy of Sandeep. What logic do you seek? (Projects, Skills, Contact)";
  }
  else if (lower.includes("project") || lower.includes("work")) {
    responseText = "The Engineer has forged mighty tools: 1. 'LLM Red-Teaming Framework' (Automated Adversarial Testing). 2. 'UAV Audio Detection' (97% Accuracy Drone Defense). 3. 'Supply Chain Analytics'. Which one interests you?";
  }
  else if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
    responseText = "His combat style is formidable. Mastery in: PyTorch, TensorFlow, LLM Security (Red Teaming), Llama Guard, and MLOps (Docker/K8s). He is a true full-stack ML warrior.";
  }
  else if (lower.includes("experience") || lower.includes("job") || lower.includes("background")) {
    responseText = "He currently serves as a Researcher at TAMUCC, building AI Safety frameworks. Previously, he was a Data Engineer at TCS (Cloud Migration) and Accenture. A veteran of many code battles.";
  }
  else if (lower.includes("publication") || lower.includes("paper") || lower.includes("research")) {
    responseText = "He has inscribed two great Scrolls of Wisdom: 'UAV Audio Detection' (ICUAS 2025) and 'UAV Identification using Mel Spectrograms' (CSCI 2024). True academic honor.";
  }
  else if (lower.includes("red team") || lower.includes("security") || lower.includes("llm")) {
    responseText = "Ah, his specialty. He archives 50% reduction in attack success rates using his 'Automated Taxonomy-Driven Framework'. He knows how to break models to make them stronger.";
  }
  else if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
    responseText = `You may signal him directly at: ${PERSONAL_INFO.email}. Or use the 'Send Messenger' scroll below.`;
  }
  else if (lower.includes("who are you") || lower.includes("bot")) {
    responseText = "I am the Ronin AI. Constructed from neural weights and honor code. My purpose is to serve the Engineer Sandeep.";
  }
  else if (lower.includes("joke")) {
    responseText = "Why did the neural network break up with the random forest? Because she wanted more layers to the relationship.";
  }

  // Stream the mock response
  const chunks = responseText.split(" ");
  for (const chunk of chunks) {
    yield chunk + " ";
    // Variable typing speed for realism
    await new Promise(resolve => setTimeout(resolve, Math.random() * 50 + 20));
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
      model: 'gemini-1.5-flash',
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.8, // Slightly higher creative temperature
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
    console.warn("Using Ronin Fallback Protocol.", error);
    return mockResponse(message);
  }
};
