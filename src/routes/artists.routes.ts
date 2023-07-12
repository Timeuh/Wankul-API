const {createArtist} = require("../controllers/artists.controller");
const router = require('express').Router();

// route to create an artist
router.post('/new', createArtist);

// export the router
module.exports = router;