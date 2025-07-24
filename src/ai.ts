import axios from 'axios';
import { CustomAxiosRequestConfig } from './types';
import { getSchemaShape } from './utils';

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export async function aiAdjust<T>(data: any, schema: CustomAxiosRequestConfig['schema']): Promise<T> {
  const schemaShape = getSchemaShape(schema!);
  console.log('schemaShape', schemaShape);
  const question = `Modify ${JSON.stringify(data)} to match ${schemaShape} and ensure the response is valid JSON.`;

  const answer = await askAI(question);  
  let parsedAnswer;
  try {
    parsedAnswer = JSON.parse(answer);
  } catch (err) {
    console.error('Failed to parse AI response as JSON', err);
    throw err;
  }
  parsedAnswer.metadata = { aiAdjusted: true, question, answer }; 
  return parsedAnswer
}

export async function askAI(question: string): Promise<string> {  
  // const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  // TODO: Implement the actual API call to Gemini

  // For PersonSchema, the AI will return a response like:
  return '{"name":"Jeff Godblum","facts":{"birth_date":"October 22, 1952"}}'
  // For NewPersonSchema, the AI will return a response like:
  // return '{"name":"Jeff Godblum","favorite_date":"October 22, 1952"}'
}