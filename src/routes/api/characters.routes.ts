export{}

const {getCharacterById, getAllCharacters, getCharacterCards} = require("../../controllers/api/Characters.controller");
const router = require('express').Router();

// route to create a Character
router.get('/:id', getCharacterById);

// route to get all Characters
router.get('/', getAllCharacters);

// route to get all Characters
router.get('/:id/cards', getCharacterCards);

// export the router
module.exports = router;