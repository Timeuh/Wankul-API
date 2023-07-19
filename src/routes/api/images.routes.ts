export{}

const {getImage} = require('../../controllers/api/images.controller');
const router = require('express').Router();

// route to get a type by id
router.get('/:imageName', getImage);

// export the router
module.exports = router;