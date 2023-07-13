export {};

const {createUser, getUser} = require('../controllers/user.controller');
const router = require('express').Router();

// route to create a user
router.post('/new', createUser);

// route to get a user from an email
router.get('/get', getUser);

// export the router
module.exports = router;