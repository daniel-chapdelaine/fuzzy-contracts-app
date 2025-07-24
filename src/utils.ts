import { z, ZodType } from 'zod';

export const getSchemaShape = (schema: ZodType): string => {
  if (schema instanceof z.ZodObject) {
    const shape = schema.shape;
    const entries = Object.entries(shape).map(([key, value]) => {
      return `${key}: ${getSchemaShape(value)}`;
    });
    return `{ ${entries.join(', ')} }`;
  } else if (schema instanceof z.ZodString) {
    return 'string';
  } else if (schema instanceof z.ZodNumber) {
    return 'number';
  } else if (schema instanceof z.ZodBoolean) {
    return 'boolean';
  }
  return 'unknown';
};