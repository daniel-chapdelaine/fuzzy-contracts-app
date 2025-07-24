import axios from 'axios';
import { aiAdjust } from './ai';
import { CustomAxiosRequestConfig } from './types';

axios.interceptors.response.use(
  (response) => {
    const schema = (response.config as CustomAxiosRequestConfig).schema;
    if (!schema) {
      return response; // No schema, return response as is
    }
    const { success } = schema.safeParse(response.data);
    if (success) {
      response.data.metadata = { aiAdjusted: false }; 
    }
    // success means the data matches the schema
    // if it does not match, we can ask OpenAI to adjust it    
    return success ? response : tryAiAdjust(response, schema);
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
  return success ? { ...response, data: adjustedData } : response;
}