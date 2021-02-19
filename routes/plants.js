const router = require('express').Router();
const plantsController = require('../controller/plants');
const productsController = require('../controller/products');

router.get('/:id', plantsController.getOne);
router.delete('/:id', plantsController.handleDelete);
router.put('/:id', plantsController.handleUpdate);

router.get('/:id/products',productsController.getAll);
router.post('/:id/products', productsController.handlePost);


module.exports = router;
