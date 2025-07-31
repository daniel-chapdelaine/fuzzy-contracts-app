import { CustomAxiosRequestConfig } from './types';
import { getSchemaShape } from './utils';
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export async function aiAdjust<T>(data: any, schema: CustomAxiosRequestConfig['schema']): Promise<T> {
  const schemaShape = getSchemaShape(schema!);
  const question = `Modify ${JSON.stringify(data)} to match ${schemaShape} and ensure the response is valid JSON but not in a code block.`;

  const answer = await askAI(question);  
  let parsedAnswer;
  try {
    parsedAnswer = JSON.parse(answer);
  } catch (err) {
    console.error('Failed to parse AI response as JSON', err);
    throw err;
  }
  parsedAnswer.metadata = { aiAdjusted: "Yes - data misaligned.", question, answer }; 
  return parsedAnswer
}


export async function askAI(question: string): Promise<string> {    
  const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: question,
  });
  const answer = response.text?.trim() || "";
  return answer;
}