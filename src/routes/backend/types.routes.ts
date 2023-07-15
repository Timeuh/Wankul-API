export{}

const {createType, getType, updateType, deleteType} = require('../../controllers/backend/types.controller');
const router = require('express').Router();

// route to create a type
router.post('/new', createType);

// route to get a type
router.get('/get', getType);

// route to update a type
router.put('/update', updateType);

// route to delete a type
router.delete('/delete', deleteType);

// export the router
module.exports = router;