const router = require('express').Router();
const plantsController = require('../controller/plants');

router.get('/:id', plantsController.getOne);

module.exports = router;
