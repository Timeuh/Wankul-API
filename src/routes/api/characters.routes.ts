export{}

const {getCharacterById, getAllCharacters, getCharacterCards} = require("../../controllers/api/Characters.controller");
const router = require('express').Router();

// route to create a character
router.get('/:id', getCharacterById);

// route to get all characters
router.get('/', getAllCharacters);

// route to get all characters related cards
router.get('/:id/cards', getCharacterCards);

// export the router
module.exports = router;