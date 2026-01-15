
import { GoogleGenAI, Type } from "@google/genai";

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image.split(',')[1],
              mimeType: 'image/png',
            },
          },
          {
            text: `Act as a professional food photographer. ${prompt}. Please provide the high-quality edited image.`,
          },
        ],
      },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Edit Error:", error);
    throw error;
  }
};

export const getMenuSuggestions = async (dishName: string): Promise<{ sides: string[], drinks: string[] } | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest 3 high-margin sides and 2 drink pairings for the following dish to increase average order value: "${dishName}". Be creative and South African focused where appropriate. Return valid JSON only.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sides: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            drinks: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["sides", "drinks"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Menu Suggestion Error:", error);
    return null;
  }
};
