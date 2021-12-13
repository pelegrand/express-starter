const router = require('express').Router();
const firstRouteController = require('../controllers/firstController');

router.post('/', firstRouteController.handlePostOne);
router.get('/', firstRouteController.handleGetAll);
router.get('/:id', firstRouteController.handleGetOne);
router.put('/:id', firstRouteController.handlePutOne);
router.delete('/:id', firstRouteController.handleDeleteOne);

module.exports = router;
