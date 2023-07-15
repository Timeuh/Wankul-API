export{}

const {createCharacter, getCharacter, updateCharacter, deleteCharacter} = require('../../controllers/backend/characters.controller');
const router = require('express').Router();

// route to create a character
router.post('/new', createCharacter);

// route to get a character
router.get('/get', getCharacter);

// route to update a character
router.put('/update', updateCharacter);

// route to delete a character
router.delete('/delete', deleteCharacter);

// export the router
module.exports = router;