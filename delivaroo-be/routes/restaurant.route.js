const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const validateRequest = require('../middlewares/validateRequest');
const restaurantSchema = require('../schemas/restaurantSchema');

router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.post('/', validateRequest(restaurantSchema), restaurantController.createRestaurant);

module.exports = router;
