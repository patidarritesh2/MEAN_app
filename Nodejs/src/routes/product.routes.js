const router = require('express').Router();
const controller = require('../controllers/product.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.create);
router.get('/', controller.getAll);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router;