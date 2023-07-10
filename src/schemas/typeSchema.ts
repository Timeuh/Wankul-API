// get zod
const zodT = require('zod');

// create type schema
const TypeSchema = zodT.object({
  id: zodT.preprocess((id: string) => parseInt(id), zodT.number().positive()),
  name: zodT.string()
});

module.exports = TypeSchema;