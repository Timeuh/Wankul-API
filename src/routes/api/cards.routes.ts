export{}

const {getCardById, getAllCards} = require("../../controllers/api/cards.controller");
const router = require('express').Router();

// route to get a card by id
router.get('/:id', getCardById);

// route to get all cards
router.get('/', getAllCards);

// export the router
module.exports = router;