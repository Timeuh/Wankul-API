export {};

// get router
const router = require('express').Router();
const {createUser} = require('../controllers/user.controller');

// route to create a user
router.post('/new', createUser);

// export the router
module.exports = router;