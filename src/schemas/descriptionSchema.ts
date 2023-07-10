// get zod
const zodD = require('zod');

// create description schema
const DescriptionSchema = zodD.object({
  character_id: zodD.preprocess((character_id: string) => parseInt(character_id), zodD.number().positive()),
  citation: zodD.string(),
  effect: zodD.string(),
  id: zodD.preprocess((id: string) => parseInt(id), zodD.number().positive()),
  looser_effect: zodD.string(),
  rarity_id: zodD.preprocess((rarity_id: string) => parseInt(rarity_id), zodD.number().positive()),
  special: zodD.string(),
  winner_effect: zodD.string()
});

module.exports = DescriptionSchema;