import axios from 'axios';
import { aiAdjust } from './ai';
import { CustomAxiosRequestConfig } from './types';

axios.interceptors.response.use(
  (response) => {
    const config = response.config as CustomAxiosRequestConfig;
    // schema is the intended shape that this client expects
    const schema = config.schema;
    if (!config.shouldAdjust || !schema) {
      response.data.metadata = { aiAdjusted: "Nope - feature is off." }; 
      return response; // No adjustment needed, return response as is
    }
    const { success } = schema.safeParse(response.data);
    // success means the data matches the schema
    // if it does not match, we can ask OpenAI to adjust it    
    return success ? unAdjustedResponse(response) : tryAiAdjust(response, schema);
  },
  (error) => {
    // Handle response error
    console.error('Intercepted error:', error);
    return Promise.reject(error);
  }
);

const tryAiAdjust = async (response: any, schema: CustomAxiosRequestConfig['schema']) => {
  const adjustedData = await aiAdjust(response.data, schema);
  const { success } = schema!.safeParse(adjustedData)
  // success means that the ai was able to match the schema
  // if it does not match, send the og response
  return success ? { ...response, data: adjustedData } : unAdjustedResponse(response);
}

const unAdjustedResponse = (response: any) => {
  response.data.metadata = { aiAdjusted: "Nope - data looked good." }; 
  return response;
}