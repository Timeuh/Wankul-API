export{}

const {getArtistById} = require("../../controllers/api/artists.controller");
const router = require('express').Router();

// route to create an artist
router.get('/:id', getArtistById);

// export the router
module.exports = router;