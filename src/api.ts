import axios from 'axios';
import { CustomAxiosRequestConfig, NewPerson, NewPersonSchema, Person, PersonSchema } from './types';


export const fetchDataFromServer = async (shouldAdjust: boolean): Promise<Person> => {
  const config: CustomAxiosRequestConfig = { schema: PersonSchema, shouldAdjust };
  const response = await axios.get<Person>('http://localhost:4000/api/data', config);
  return response.data;
};


// export const fetchDataFromServer = async (shouldAdjust: boolean): Promise<NewPerson> => {
//   const config: CustomAxiosRequestConfig = { schema: NewPersonSchema, shouldAdjust };
//   const response = await axios.get<NewPerson>('http://localhost:4000/api/data', config);
//   return response.data;
// };