const router = require('express').Router();
const categoriesController = require('../controller/categories');
const plantsController = require('../controller/plants');

router.get('/', categoriesController.getAll);
router.get('/:id', categoriesController.getOne);
router.post('/', categoriesController.handlePost);
router.put('/:id', categoriesController.handleUpdate);
router.delete('/:id', categoriesController.handleDelete);

router.get('/:id/plantes', plantsController.getAll);
router.post('/:id/plantes', plantsController.handlePost);

module.exports = router;
