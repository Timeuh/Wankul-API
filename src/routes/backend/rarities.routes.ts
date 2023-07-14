export{}

const {createRarity} = require('../../controllers/backend/rarities.controller');
const router = require('express').Router();

// route to create a rarity
router.post('/new', createRarity);

// export the router
module.exports = router;