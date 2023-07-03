const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const validateRequest = require('../middlewares/validateRequest');
const menuSchema = require('../schemas/menuSchema');

router.get('/', menuController.getAllMenus);
router.get('/:id', menuController.getMenuById);
router.post('/',validateRequest(menuSchema), menuController.createMenu);

module.exports = router;