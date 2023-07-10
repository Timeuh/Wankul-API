// get zod
const zodT = require('zod');

// create type schema
const TypeSchema = zodT.object({
  id: zodT.number(),
  name: zodT.string()
});

module.exports = TypeSchema;