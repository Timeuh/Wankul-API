// get zod
const zodA = require('zod');

// create artist schema
const ArtistSchema = zodA.object({
  id: zodA.preprocess((id: string) => parseInt(id), zodA.number().positive()),
  name: zodA.string()
});

module.exports = ArtistSchema;