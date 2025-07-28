import { AxiosRequestConfig } from 'axios';
import { z, ZodType } from 'zod';
export interface Error {
  message: string;
}

export interface RouteOptions {
  route: string;
  back: string;
  next: string;
  monster: string;
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  schema?: ZodType;
  shouldAdjust?: boolean; // Optional flag to indicate if AI adjustment is needed
}

export interface Base {
  metadata: {
    aiAdjusted?: string;
    question?: string;
    answer?: string;
  };
}


export const PersonSchema = z.object({
  name: z.string(),
  facts: z.object({
    birth_date: z.string(),
  })
});
 

export type Person = Base & z.infer<typeof PersonSchema>;


export const NewPersonSchema = z.object({
  name: z.string(),
  favorite_date: z.string(),
});

export type NewPerson = Base & z.infer<typeof NewPersonSchema>;

