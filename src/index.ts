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

// call routes to treat cards related requests
app.use('/artists', require('./routes/artists.routes'));

// call routes to treat user related requests
app.use('/users', require('./routes/users.routes'));

// run server with provided port
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});