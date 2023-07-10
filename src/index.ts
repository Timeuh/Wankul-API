// get express
const express = require('express');
// specify port for server
const port = 5000;
// init app
const app = express();

// middleware to treat request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// run server with provided port
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});