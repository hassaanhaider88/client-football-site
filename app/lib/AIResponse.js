import HereGetBestSystemPromptBaseOnService from "./systemPrompts";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function ChatWithAI(getSystemPromp, Message) {
  if (!Message || !getSystemPromp) {
    return null;
  }
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: Message,
    config: {
      systemInstruction: getSystemPromp,
      ttemperature: 0,
      top_p: 1,
      response_format: { type: "json_object" }

    },
  });
  console.log(response)
  if (!response) {
    return null;
  }
  return response.text;
}

// await main();

export const AIResponse = async (Message, SerivceUserd) => {
  try {
    const getSystemPromp = HereGetBestSystemPromptBaseOnService[SerivceUserd];
    const Responce = await ChatWithAI(getSystemPromp, Message);

    return Responce;
  } catch (error) {
    console.log("something wents wrong.", error);
    return null;
  }
};
