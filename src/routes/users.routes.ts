export {};

const {createUser, getUser, updateUser, deleteUser} = require('../controllers/user.controller');
const router = require('express').Router();

// route to create a user
router.post('/new', createUser);

// route to get a user from an email
router.get('/get', getUser);

// route to update a user
router.put('/update', updateUser);

// route to delete a user
router.delete('/delete', deleteUser);

// export the router
module.exports = router;