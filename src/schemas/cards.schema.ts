// get zod
const zodC = require('zod');

// create card schema
const CardSchema = zodC.object({
  artist_id: zodC.preprocess((artist_id: string) => parseInt(artist_id), zodC.number().positive()),
  collection: zodC.string(),
  description_id: zodC.preprocess((description_id: string) => parseInt(description_id), zodC.number().positive()),
  id: zodC.preprocess((id: string) => parseInt(id), zodC.number().positive()),
  image: zodC.string(),
  name: zodC.string(),
  type_id: zodC.preprocess((type_id: string) => parseInt(type_id), zodC.number().positive()),
});

module.exports = CardSchema;