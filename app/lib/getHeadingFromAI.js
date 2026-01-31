import { GoogleGenAI } from "@google/genai";
export const getHeadingFromAI = async (userMessage, serviceUsed) => {
    try {
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userMessage,
            config: {
                systemInstruction: `You are an expert AI assistant specialized in creating concise and engaging chat headings. 
Based on the following inputs: 

- userMessage: the message sent by the user
- userService: the service or context the user is interacting with

Generate a **single, clear, and catchy chat heading** that is **between 50 and 60 characters long**. 
The heading should summarize the message and service context effectively, 
be easy to read, and sound natural. Do not include quotes or extra explanations.
`,
            },
        });
        if (!response.text) {
            return `New Chat For ${serviceUsed}`;
        }
        return response.text.trim();
    } catch (error) {
        return `New Chat For ${serviceUsed}`;
    }
};
