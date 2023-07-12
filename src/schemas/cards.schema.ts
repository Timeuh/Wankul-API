export{}

// get zod
const zod = require('zod');

// create card schema
const CardSchema = zod.object({
  artist_id: zod.preprocess((artist_id: string) => parseInt(artist_id), zod.number().positive()),
  collection: zod.string(),
  description_id: zod.preprocess((description_id: string) => parseInt(description_id), zod.number().positive()),
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  image: zod.string(),
  name: zod.string(),
  type_id: zod.preprocess((type_id: string) => parseInt(type_id), zod.number().positive()),
});

module.exports = CardSchema;