export{}

const {createCard, getCard, updateCard, deleteCard} = require('../../controllers/backend/cards.controller');
const router = require('express').Router();

// route to create a card
router.post('/new', createCard);

// route to get a card
router.get('/get', getCard);

// route to update a card
router.put('/update', updateCard);

// route to delete a card
router.delete('/delete', deleteCard);

// export the router
module.exports = router;