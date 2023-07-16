export{}

const {createDescription, getDescription, updateDescription, deleteDescription} = require('../../controllers/backend/descriptions.controller');
const router = require('express').Router();

// route to create a description
router.post('/new', createDescription);

// route to get a description
router.get('/get', getDescription);

// route to update a description
router.put('/update', updateDescription);

// route to delete a description
router.delete('/delete', deleteDescription);

// export the router
module.exports = router;