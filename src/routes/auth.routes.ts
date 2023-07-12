export {};

const {authenticate, verifyToken} = require('../controllers/auth.controller');
const router = require('express').Router();

// route to connect a user
router.post('/authenticate', authenticate);

// route to verify a token
router.get('/verify', verifyToken);

// export the router
module.exports = router;