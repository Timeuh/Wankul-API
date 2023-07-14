export{}

const {createRarity, getRarity, updateRarity, deleteRarity} = require('../../controllers/backend/rarities.controller');
const router = require('express').Router();

// route to create a rarity
router.post('/new', createRarity);

// route to get a rarity
router.get('/get', getRarity);

// route to update a rarity
router.put('/update', updateRarity);

// route to delete a rarity
router.delete('/delete', deleteRarity);

// export the router
module.exports = router;