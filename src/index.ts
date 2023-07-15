const express = require('express');
const dotenv = require('dotenv');

// init dotenv config
dotenv.config();
// init app
const app = express();
// specify port for server
const port = 5000;

// middleware to treat request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// call routes to treat auth related requests
app.use('/auth', require('./routes/backend/auth.routes'));

// call routes to treat cards related requests
app.use('/artists', require('./routes/backend/artists.routes'));

// call routes to treat user related requests
app.use('/users', require('./routes/backend/users.routes'));

// call routes to treat rarity related requests
app.use('/rarities', require('./routes/backend/rarities.routes'));

// call routes to treat character related requests
app.use('/characters', require('./routes/backend/characters.routes'));

// run server with provided port
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});