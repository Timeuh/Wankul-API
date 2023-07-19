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

// call routes to treat type related requests
app.use('/types', require('./routes/backend/types.routes'));

// call routes to treat description related requests
app.use('/descriptions', require('./routes/backend/descriptions.routes'));

// call routes to treat card related requests
app.use('/cards', require('./routes/backend/cards.routes'));

// call api routes to treat artist related requests
app.use('/api/artist', require('./routes/api/artists.routes'));

// call api routes to treat character related requests
app.use('/api/character', require('./routes/api/characters.routes'));

// call api routes to treat rarity related requests
app.use('/api/rarity', require('./routes/api/rarities.routes'));

// call api routes to treat type related requests
app.use('/api/type', require('./routes/api/types.routes'));

// call api routes to treat card related requests
app.use('/api/card', require('./routes/api/cards.routes'));

// run server with provided port
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});