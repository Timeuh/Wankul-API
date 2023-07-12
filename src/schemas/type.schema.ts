export{}

// get zod
const zod = require('zod');

// create type schema
const TypeSchema = zod.object({
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  name: zod.string()
});

module.exports = TypeSchema;