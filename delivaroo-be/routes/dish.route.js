const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.get('/',  dishController.getAllDishes);
router.get('/:id', dishController.getDishById);
router.post('/',  dishController.createDish);

module.exports = router;