// get zod
const zodCh = require('zod');

// create character schema
const CharacterSchema = zodCh.object({
  id: zodCh.preprocess((id: string) => parseInt(id), zodCh.number().positive()),
  name: zodCh.string()
});

module.exports = CharacterSchema;