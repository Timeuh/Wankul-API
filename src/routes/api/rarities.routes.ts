export{}

const {getRarityById, getAllRarities, getRarityCards} = require("../../controllers/api/rarities.controller");
const router = require('express').Router();

// route to create a rarity
router.get('/:id', getRarityById);

// route to get all rarities
router.get('/', getAllRarities);

// route to get all rarities related cards
router.get('/:id/cards', getRarityCards);

// export the router
module.exports = router;