import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE } from "../constants";

// MOCK SERVICE: "Ronin Responder"
// Replaces the live Gemini API to ensure reliability on GitHub Pages without API keys.

export const initializeChat = () => {
  return {
    sendMessageStream: async (input: { message: string }) => {
      return {
        stream: (async function* () {
          const response = generateMockResponse(input.message);
          // Simulate typing delay
          const chunks = response.split(" ");
          for (const chunk of chunks) {
            await new Promise(resolve => setTimeout(resolve, 50));
            yield chunk + " ";
          }
        })()
      };
    }
  };
};

export const sendMessageStream = async (message: string): Promise<AsyncIterable<string>> => {
  const responseText = generateMockResponse(message);

  // Generator to simulate streaming
  async function* textGenerator() {
    const chars = responseText.split("");
    let buffer = "";
    for (let i = 0; i < chars.length; i++) {
      buffer += chars[i];
      // Yield every few characters to simulate typing speed
      if (i % 3 === 0 || i === chars.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 30));
        yield buffer;
        buffer = "";
      }
    }
  }
  return textGenerator();
};

const generateMockResponse = (input: string): string => {
  const lower = input.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Greetings, traveler. I am the Ronin Assistant. I can reveal information about Sandeep's [Projects], [Skills], [Experience], or [Contact] details. What do you seek?";
  }

  if (lower.includes("project")) {
    const topProjects = PROJECTS.slice(0, 3).map(p => p.title).join(", ");
    return `Sandeep has forged several powerful tools in the Armoury, including: ${topProjects}. Would you like to know more about a specific one?`;
  }

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
    return `His combat style relies on: Python, PyTorch, TensorFlow, and LLM Security. He is a master of MLOps and Adversarial Red-Teaming. Check the 'Combat Skills' section for the full scroll.`;
  }

  if (lower.includes("experience") || lower.includes("work") || lower.includes("job")) {
    return `He has fought many battles. Most recently at ${EXPERIENCE[0]?.company} as a ${EXPERIENCE[0]?.role}. He specializes in deploying robust AI models at scale.`;
  }

  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
    return `You may send a messenger via the contact form below, or signal him directly at ${PERSONAL_INFO.email}.`;
  }

  if (lower.includes("who are you")) {
    return "I am a digital spirit bound to this portfolio. My purpose is to guide you through Sandeep's achievements.";
  }

  return "I do not understand that command. Ask me about [Projects], [Skills], or [Contact] info.";
};
