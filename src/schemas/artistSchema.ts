// get zod
const zodA = require('zod');

// create artist schema
const ArtistSchema = zodA.object({
  id: zodA.number(),
  name: zodA.string()
});

module.exports = ArtistSchema;