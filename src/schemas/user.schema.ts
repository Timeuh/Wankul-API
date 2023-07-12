export{}

// get zod
const zod = require('zod');

// create user schema
const UserSchema = zod.object({
  email: zod.string(),
  lastname: zod.string(),
  name: zod.string(),
  password: zod.string()
});

module.exports = UserSchema;