export{}

// get zod
const zod = require('zod');

// create description schema
const DescriptionSchema = zod.object({
  character_id: zod.preprocess((character_id: string) => parseInt(character_id), zod.number()),
  citation: zod.string().optional(),
  effect: zod.string().optional(),
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  looser_effect: zod.string().optional(),
  rarity_id: zod.preprocess((rarity_id: string) => parseInt(rarity_id), zod.number().positive()),
  special: zod.string().optional(),
  winner_effect: zod.string().optional()
});

module.exports = DescriptionSchema;