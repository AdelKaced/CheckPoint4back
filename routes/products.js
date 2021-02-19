const router = require('express').Router();
const productsController = require('../controller/products');

router.get('/:id', productsController.getOne);
router.delete('/:id',productsController.handleDelete);
router.put('/:id', productsController.handleUpdate)

module.exports = router