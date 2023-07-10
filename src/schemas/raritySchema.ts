// get zod
const zodR = require('zod');

// create rarity schema
const RaritySchema = zodR.object({
  id: zodR.number(),
  name: zodR.string()
});

module.exports = RaritySchema;