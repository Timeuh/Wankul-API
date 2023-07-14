const {createArtist, getArtist, updateArtist} = require("../controllers/artists.controller");
const router = require('express').Router();

// route to create an artist
router.post('/new', createArtist);

// route to get an artist
router.get('/get', getArtist);

// route to update an artist
router.put('/update', updateArtist);

// export the router
module.exports = router;