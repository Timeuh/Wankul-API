const {createArtist, getArtist} = require("../controllers/artists.controller");
const router = require('express').Router();

// route to create an artist
router.post('/new', createArtist);

// route to get an artist
router.get('/get', getArtist);

// export the router
module.exports = router;