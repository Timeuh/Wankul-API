export{}

// get zod
const zod = require('zod');

// create character schema
const CharacterSchema = zod.object({
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  name: zod.string()
});

module.exports = CharacterSchema;