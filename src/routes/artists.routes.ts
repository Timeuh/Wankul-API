// get artist controller operations
const {createArtist} = require("../controllers/artists.controller");
// get router
const router = require('express').Router();

// route to create an artist
router.post('/new', createArtist);

// export the router
module.exports = router;