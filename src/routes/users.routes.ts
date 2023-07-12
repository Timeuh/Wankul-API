export {};

const {createUser} = require('../controllers/user.controller');
const router = require('express').Router();

// route to create a user
router.post('/new', createUser);

// export the router
module.exports = router;