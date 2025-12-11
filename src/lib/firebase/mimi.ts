import { getGenerativeModel } from "firebase/ai";
import { MIMIS_DELIVERY_SERVICE_SYSTEM_PROMPT } from "@/data/prompts";
import { ai } from "./firebase";

const aiModel = getGenerativeModel(ai, {
	model: "gemini-2.5-flash",
	systemInstruction: MIMIS_DELIVERY_SERVICE_SYSTEM_PROMPT,
});

export const sendPrompt = async (prompt: string): Promise<string> => {
	const result = await aiModel.generateContent(prompt);

	const response = result.response;
	const text = response.text();

	return text;
};
