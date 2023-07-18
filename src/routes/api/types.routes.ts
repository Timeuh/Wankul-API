export{}

const {getTypeById, getAllTypes, getTypeCards} = require("../../controllers/api/types.controller");
const router = require('express').Router();

// route to create a type
router.get('/:id', getTypeById);

// route to get all types
router.get('/', getAllTypes);

// route to get all types related cards
router.get('/:id/cards', getTypeCards);

// export the router
module.exports = router;