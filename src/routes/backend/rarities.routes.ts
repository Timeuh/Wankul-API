export{}

const {createRarity, getRarity} = require('../../controllers/backend/rarities.controller');
const router = require('express').Router();

// route to create a rarity
router.post('/new', createRarity);

// route to get a rarity
router.get('/get', getRarity);

// export the router
module.exports = router;