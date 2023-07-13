export {};

const {createUser, getUser, updateUser} = require('../controllers/user.controller');
const router = require('express').Router();

// route to create a user
router.post('/new', createUser);

// route to get a user from an email
router.get('/get', getUser);

// route to update a user
router.put('/update', updateUser);

// export the router
module.exports = router;