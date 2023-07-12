// get zod
const zod = require('zod');

// create artist schema
const ArtistSchema = zod.object({
  id: zod.preprocess((id: string) => parseInt(id), zod.number().positive()),
  name: zod.string()
});

module.exports = ArtistSchema;