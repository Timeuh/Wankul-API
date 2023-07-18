export{}

const {getArtistById, getAllArtists, getArtistCards} = require("../../controllers/api/artists.controller");
const router = require('express').Router();

// route to get an artist by id
router.get('/:id', getArtistById);

// route to get all artists
router.get('/', getAllArtists);

// route to get all artists related cards
router.get('/:id/cards', getArtistCards);

// export the router
module.exports = router;