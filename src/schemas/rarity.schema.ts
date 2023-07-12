export{}

// get zod
const zod = require('zod');

// create rarity schema
const RaritySchema = zod.object({
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  name: zod.string()
});

module.exports = RaritySchema;