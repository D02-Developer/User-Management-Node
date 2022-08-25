const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_all);
router.get('/add-user', userController.user_add);
router.post('/add-user', userController.user_save);
router.get('/edit-user/:id', userController.user_edit);
router.post('/edit-user/:id', userController.user_update);
router.post('/:id', userController.user_delete);

module.exports = router;