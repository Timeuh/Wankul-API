// get zod
const zodR = require('zod');

// create rarity schema
const RaritySchema = zodR.object({
  id: zodR.preprocess((id: string) => parseInt(id), zodR.number().positive()),
  name: zodR.string()
});

module.exports = RaritySchema;