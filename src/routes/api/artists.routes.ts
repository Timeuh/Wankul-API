export{}

const {getArtistById, getAllArtists, getArtistCards} = require("../../controllers/api/artists.controller");
const router = require('express').Router();

// route to create an artist
router.get('/:id', getArtistById);

// route to get all artists
router.get('/', getAllArtists);

// route to get all artists
router.get('/:id/cards', getArtistCards);

// export the router
module.exports = router;