export{}

const {createRarity, getRarity, updateRarity} = require('../../controllers/backend/rarities.controller');
const router = require('express').Router();

// route to create a rarity
router.post('/new', createRarity);

// route to get a rarity
router.get('/get', getRarity);

// route to update a rarity
router.put('/update', updateRarity);

// export the router
module.exports = router;