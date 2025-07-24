import axios from 'axios';
import { CustomAxiosRequestConfig, Person, PersonSchema } from './types';


export const fetchDataFromServer = async (): Promise<Person> => {
  const config: CustomAxiosRequestConfig = { schema: PersonSchema };
  const response = await axios.get<Person>('http://localhost:4000/api/data', config);
  return response.data;
};