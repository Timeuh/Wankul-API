// get zod
const zodC = require('zod');

// create card schema
const CardSchema = zodC.object({
  artist_id: zodC.number(),
  collection: zodC.string(),
  id: zodC.number(),
  image: zodC.string(),
  name: zodC.string(),
  type_id: zodC.number(),
});

module.exports = CardSchema;