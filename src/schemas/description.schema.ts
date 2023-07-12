export{}

// get zod
const zod = require('zod');

// create description schema
const DescriptionSchema = zod.object({
  character_id: zod.preprocess((character_id: string) => parseInt(character_id), zod.number().positive()),
  citation: zod.string(),
  effect: zod.string(),
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  looser_effect: zod.string(),
  rarity_id: zod.preprocess((rarity_id: string) => parseInt(rarity_id), zod.number().positive()),
  special: zod.string(),
  winner_effect: zod.string()
});

module.exports = DescriptionSchema;