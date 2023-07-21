export{}

const {getReadme} = require('../controllers/home.controller');
const router = require('express').Router();

// route to get a type by id
router.get('', getReadme);

// export the router
module.exports = router;