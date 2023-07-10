// get zod
const zodCh = require('zod');

// create character schema
const CharacterSchema = zodCh.object({
  id: zodCh.number(),
  name: zodCh.string()
});

module.exports = CharacterSchema;