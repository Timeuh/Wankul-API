import {ZodSchema} from 'zod';

// validate an object from provided schema
module.exports.validate = (schema: ZodSchema, data: any) => {
  // parse data to check if it is a valid object
  const parseResult = schema.safeParse(data);

  // if it is not, throw an error
  if (!parseResult.success){
    throw new Error(parseResult.error.issues[0].message);
  }

  // return validation object
  return parseResult.data;
}