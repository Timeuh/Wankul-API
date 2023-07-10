// get zod
const zodD = require('zod');

// create description schema
const DescriptionSchema = zodD.object({
  character_id: zodD.number(),
  citation: zodD.string(),
  effect: zodD.string(),
  id: zodD.number(),
  looser_effect: zodD.string(),
  rarity_id: zodD.number(),
  special: zodD.string(),
  winner_effect: zodD.string()
});

module.exports = DescriptionSchema;