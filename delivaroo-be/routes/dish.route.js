const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');
const validateRequest = require('../middlewares/validateRequest');
const dishSchema = require('../schemas/dishSchema');

router.get('/',  dishController.getAllDishes);
router.get('/:id', dishController.getDishById);
router.post('/',validateRequest(dishSchema),  dishController.createDish);

module.exports = router;